
// Function for loading occupations into local memory
const getOccupation = async (occId) => {

    if (loadedOccupations.has(occId)) {
        return loadedOccupations.get(occId);
    };

    try {
        const response = await fetch(`/occupations/${occId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const occupation = await response.json();
        loadedOccupations.set(occId, occupation);
        return occupation;
    } catch (error) {
        console.log(error);
    }

}

// Function for getting occupational requirements
const getOccRequirements = async () => {

    try {
        const response = await fetch('/occupations/requirements')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }

}

// Function for getting a specific skill
const getSkill = async (skillId) => {

    if (loadedSkills.has(skillId)) {
        return loadedSkills.get(skillId);
    };

    try {
        const response = await fetch(`/skills/${skillId}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const skill = await response.json();
        loadedSkills.set(skillId, skill);
        return skill;
    } catch (error) {
        console.log(error);
    }

}

// Batch load skills into local memory
const loadSkills = async (skillIdList) => {

    const BATCH_SKILL_SIZE = 10

    while(skillIdList.length > 0) {

        let param;

        if (skillIdList.length > BATCH_SKILL_SIZE) {
            param = skillIdList.slice(0,BATCH_SKILL_SIZE).join(',');
            skillIdList = skillIdList.slice(BATCH_SKILL_SIZE);
        } else {
            param = skillIdList.join(',');
            skillIdList = [];
        }

        try {
            const response = await fetch(`/skills/${param}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const skills = await response.json();
            for (let skill of skills) {
                loadedSkills.set(skill._id, skill);
            }
        } catch {
            console.log(error);
        }

    }

}

// Load all skills from an occcupation
const loadOccSkills = async (occupation) => {


    let skills = []
    skills = skills.concat(occupation.reqOccSkills.map(
        skill => loadedSkills.has(skill.skill) ? "" : skill.skill));
    for (let choice of occupation.choiceOccSkills) {
        skills = skills.concat(choice.choices.map(
            skill => loadedSkills.has(skill.skill) ? "" : skill.skill
        ));
    }
    skills = skills.concat(occupation.otherSkills.choices.map(
        skill => loadedSkills.has(skill.skill) ? "" : skill.skill
    ));

    skills = skills.filter(skill => skill !== "");
    
    await loadSkills(skills);
    
}

const determineOccEligibility = async (attributes, race) => {

    const occReq = await getOccRequirements();

    if (race !== 'Zentraidi') {
        const zenId = occReq.find(occ => occ.name === 'Zentraidi Warrior')._id;
        const attrElement = document.getElementById(zenId);
        attrElement.classList.add('disabled');
        attrElement.querySelector('.img-gradient').innerText = 'MUST BE ZENTRAIDI';
    }

    let attrMap = new Map();
    for (let attr of attributes) {
        attrMap.set(attr.attribute, attr.value);
    }

    
    for (let occ of occReq) {
        for(let req of occ.requirements) {
            if (attrMap.get(req.attribute) < req.value) {
                const attrElement = document.getElementById(occ._id);
                attrElement.classList.add('disabled');
                attrElement.querySelector('.img-gradient').innerText = `INSUFFICIENT ${req.attribute.split('').join('.')}`;
            }
        }
    }

}

const classify = (str) => {
    return str.replace(" ", "_").replace("/", "_");
}

// Function for calculating ability level for a player
const calculateAbility =  (buff, skillId, level) => {

    const skill = loadedSkills.get(skillId);
    return skill.basePercentage + ( skill.levelBonus * (level - 1) ) + buff;

}


// Function for turning percentage into a color from green to red
const percToColor = (perc) => {
    let r,
      g,
      b = 0;
    if (perc < 50) {
      r = 255;
      g = Math.round(5.1 * perc);
    } else {
      g = 255;
      r = Math.round(510 - 5.1 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return "#" + ("000000" + h.toString(16)).slice(-6);
}

const rollDie = async (die) => {
    let timeout = 10;
    let roll;
  
    while (timeout < 400) {
      roll = Math.floor(Math.random() * 6) + 1;
      die.innerText = roll;
      timeout = timeout * 1.2 + Math.floor(Math.random() * 10 + 1);
      await new Promise((resolve) => setTimeout(resolve, timeout));
    }
  
    return roll;
};

const createSkillItem = (skill, ability, buff=0) => {
    const li = document.createElement('li');
    li.innerHTML = `${skill.name} <b class="ability">${ability > 0 ? ability : '' }</b>${buff > 0 ? `<p class="buff inline">BUFF: <b>+${buff}</b></p>` : '' }<div class="skill-desc">${skill.description}</div>`;
    li.addEventListener('click', (event) => {event.currentTarget.querySelector('.skill-desc').classList.toggle('expanded')});
    li.querySelector('b.ability').style.color = percToColor(ability);
    li.category = skill.category;
    li.classList.add(classify(skill.category));
    li.id = skill._id;
    return li
}

const populateSkillList = (skillList, skillItems, showLabels=true) => {
    skillList.innerHTML = '';
    skillItems = Object.groupBy(skillItems, ({category}) => category);
    for (let category of Object.keys(skillItems)) {
        if (showLabels) {
            const h5 = document.createElement('h5');
            h5.innerText = category;
            h5.category = category;
            h5.classList.add(classify(category));
            skillList.appendChild(h5);
        }
        skillItems[category].map(skillItem => skillList.appendChild(skillItem));
    }
}

// Function for creating a skill choice
const skillListToChoice = async (skillList, choiceObj, showCategories=true, costThreshold=1) => {

    // Add choice count
    skillList.classList.add('skill-choice');
    skillList.id = choiceObj._id;
    const p = document.createElement('p');
    p.innerText = `CHOOSE ${choiceObj.count}`;
    skillList.insertBefore(p, skillList.firstChild);

    // Remove category labels if ! showCategories
    if (showCategories === false) {
        const h5s = skillList.querySelectorAll('h5');
        h5s.forEach(h5 => h5.remove())
    }

    // convert lis
    for (let li of skillList.querySelectorAll('li')) {

        const skillObj = choiceObj.choices.find(skill => skill.skill === li.id);

        // create input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('skill-choice-check');
        checkbox.value = li.id;
        checkbox.id = li.id;
        checkbox.addEventListener('click', handleSkillChoiceSelect);

        // create label
        const label = document.createElement('label');
        label.for = li.id;
        label.innerHTML = li.innerHTML;

        // add buff
        if ('buff' in skillObj && skillObj.buff > 0) {
            const buff = document.createElement('p');
            buff.classList.add('buff');
            buff.innerHTML = `BUFF: <b>+${skillObj.buff}</b>`;
            label.insertBefore(buff, label.lastChild);
        }

        // add cost
        let cost = 1;
        if ('cost' in skillObj && skillObj.cost >= costThreshold) {
            cost = document.createElement('p');
            cost.classList.add('cost');
            cost.innerHTML = `COST: <b>${skillObj.cost}</b>`;
            label.insertBefore(cost, label.lastChild);
        }
        li.cost = cost;

        // poopulate li
        li.innerHTML = '';
        li.appendChild(checkbox);
        li.appendChild(label);

    }

}

// Function for turning a list of selected skills into a list of displayable skills
// Input: List of lis with inputs
// Output: {skillList: List of lis ready for population, cost: total counted cost}
const skillSelectionToItems = async (selectedSkills) => {

    const newSkillItems = []
    let totalCost = 0;

    for (let li of selectedSkills) {

        let ability = 0;
        if (li.querySelector('b.ability') != null) {
            ability = parseInt(li.querySelector('b.ability').innerText);
        }

        let buff = 0;
        if (li.querySelector('p.buff') != null) {
            buff = parseInt(li.querySelector('p.buff b').innerText.slice(1));
        }
        
        if (li.querySelector('p.cost') != null) {
            totalCost += parseInt(li.querySelector('p.cost b').innerText);
        }

        const skillObj = await getSkill(li.id);
        newSkillItems.push(createSkillItem(skillObj, ability, buff));

    }

    return {newSkillItems, totalCost};
}


const setAttribute = (attr, value) => {

    const perc = value / 24;
    const color = percToColor(perc * 100);
    const circleOffset = 290 - 290 * perc;
    const circle = attr.querySelector("svg.front");
    circle.style.strokeDashoffset = circleOffset;
    circle.style.stroke = color;
    attr.querySelector(".attr-number").innerHTML = value;
    attr.querySelector(".attr-number").style.color = color;

}

const setPlayer = (player) => {

    //BASICS
    document.querySelector("#player-detail-container img").src = player.img;
    document.querySelector("#level-info h1").textContent = player.level;
    document.querySelector("#name-occupation h1").textContent = player.name;
    document.querySelector("#name-occupation h3").textContent = player.occupation.name;

    //ATTRIBUTES
    const attributesMap = new Map(player.attributes.map(attr => [attr.attribute, attr.value]));
    setAttribute(document.querySelector("#IQ-attr"), attributesMap.get("IQ"));
    setAttribute(document.querySelector("#ME-attr"), attributesMap.get("ME"));
    setAttribute(document.querySelector("#MA-attr"), attributesMap.get("MA"));
    setAttribute(document.querySelector("#PS-attr"), attributesMap.get("PS"));
    setAttribute(document.querySelector("#PP-attr"), attributesMap.get("PP"));
    setAttribute(document.querySelector("#PE-attr"), attributesMap.get("PE"));
    setAttribute(document.querySelector("#PB-attr"), attributesMap.get("PB"));
    setAttribute(document.querySelector("#Spd-attr"), attributesMap.get("IQ"));

    //SKILLS
    const occSkillItems = player.occSkills.map(skill => createSkillItem(skill.skill, skill.ability));
    const occSkillList = document.querySelector("#occ-skills-list");
    populateSkillList(occSkillList, occSkillItems, false);
    const otherSkillItems = player.otherSkills.map(skill => createSkillItem(skill.skill, skill.ability));
    const otherSkillList = document.querySelector("#other-skills-list");
    populateSkillList(otherSkillList, otherSkillItems);
}

// Function to 
const displayPlayerDetails = async (playerId) => {

    // Perform an AJAX GET request to the server to get the player object
    if (loadedPlayers.has(playerId)) {
        setPlayer(loadedPlayers.get(playerId));
    } else {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status == 200) {
                let player = JSON.parse(xhr.responseText);
                loadedPlayers.set(playerId, player);
                setPlayer(loadedPlayers.get(playerId));
            }
        }
        xhr.open("GET", `/players/${playerId}`, true);
        xhr.send()
    }
    
}

// Function to handle player-icon click
const handlePlayerIconClick = async (event) => {
    // Prevent default action of the a tag
    event.preventDefault();

    // Remove active class from all divs
    const playerIcons = document.querySelectorAll('.player-icon');
    playerIcons.forEach(div => div.classList.remove('selected'));

    // Add selected class to the clicked div
    const clickedDiv = event.currentTarget;
    clickedDiv.classList.add('selected');

    if (clickedDiv.id == 'new-player') {

        // Show new player form
        document.getElementById('player-detail-container').style.display = 'none';
        document.getElementById('new-player-form').style.display = 'flex';

        document.getElementById('background-blur').classList.add('show');

        document.getElementById('cancel-new-player').style.left = '10px';

        if (["OCC_SKILLS", "OTHER_SKILLS"].includes(playerPhase)) {
            document.getElementById('info-container').classList.add('show');
        }

    } else {

        // Hide new player form
        document.getElementById('player-detail-container').style.display = 'flex';
        document.getElementById('new-player-form').style.display = 'none';

        // Get the object's ID from the a tag's href
        const playerId = clickedDiv.querySelector('a').getAttribute('href').substring(1);
        
        // Display the data for the selected object
        await displayPlayerDetails(playerId);

    }
    
    const detailPane = document.querySelector('#player-detail-pane');
    detailPane.classList.add('expanded');

}

const collapsePlayerFolders = () => {
    const playerFolders = document.querySelectorAll('.player-folder');
    playerFolders.forEach(folder => folder.classList.remove('expanded'));
}

const handleImgContainerClick = (event) => {

    // Expand img
    // event.preventDefault();
    event.currentTarget.classList.add('expanded');

    // Collapse player-file
    collapsePlayerFolders();
    // const playerFile = document.getElementById('player-file');
    // playerFile.classList.remove('expanded');
}

const handlePlayerImgInput = (event) => {

    const [file] = playerImageInput.files;

    if (file) {
        const imgDisplay = document.querySelector("#new-player-form .img-container img");
        imgDisplay.src = URL.createObjectURL(file);
    }

}

const handlePlayerFolderClick = (event) => {

    // Prevent Default
    event.preventDefault();


    if (event.currentTarget.classList.contains('disabled')) {
        return;
    }

    // Show / Hide info container
    if (event.currentTarget.id === 'skill-form' && ["OCC_SKILLS", "OTHER_SKILLS"].includes(playerPhase)) {
        document.getElementById('info-container').classList.add('show');
    } else {
        document.getElementById('info-container').classList.remove('show');
    }

    // Remove any highlighting
    event.currentTarget.classList.remove('highlighted');
    document.querySelectorAll('.occ-icon').forEach(icon => {
        icon.classList.remove('selected');
    })

    
    // Expand only selected folder
    collapsePlayerFolders();
    event.currentTarget.classList.add('expanded');

    // Collapse image
    const imgContainers = document.querySelectorAll('.img-container');
    imgContainers.forEach(img => img.classList.remove('expanded'));

    // Expand player file
    const playerFile = document.querySelector('.player-file');
    playerFile.classList.add('expanded')
}
  
const handleRollAttribute = async (event) => {

    const attrRoller = event.currentTarget;
    attrRoller.classList.add("rolling");

    attrRoller.removeEventListener('click', handleRollAttribute);
    attrRoller.querySelector(
      ".attr-number"
    ).innerHTML = `<div class="attr-die">0</div>
      <div class="attr-die">0</div>
      <div class="attr-die">0</div>
      <div class="attr-die">0</div>`;
    const attrDice = attrRoller.querySelectorAll(".attr-die");
    const rolls = await Promise.all([
      rollDie(attrDice[0]),
      rollDie(attrDice[2]),
      rollDie(attrDice[3])
    ]);
  
    let sum = rolls.reduce((a, b) => a + b, 0);
    if (sum >= 16) {
      const exceptional = document.createElement("h3");
      exceptional.innerText = "EXCEPTIONAL!";
      exceptional.classList.add("exceptional");
      attrRoller.appendChild(exceptional);
      exceptional.classList.add("animated");
      sum = sum + (await rollDie(attrDice[1]));
    }

    attrRoller.classList.remove("rolling");
    attrRoller.classList.add("rolled");
    newPlayer.attributes.push({attribute: attrRoller.querySelector('.attr-acronym').innerText, value: sum})
  
    const perc = sum / 24;
    const color = percToColor(perc * 100);
    const circleOffset = 290 - 290 * perc;
    const circle = attrRoller.querySelector("svg.front");
    circle.style.strokeDashoffset = circleOffset;
    circle.style.stroke = color;
    attrRoller.querySelector(".attr-number").innerHTML = sum;
    attrRoller.querySelector(".attr-number").style.color = color;

    const attrRollerList = [...document.querySelectorAll("#new-player-form .attr-roller")];

    if (attrRoller.id == 'PE-attr') {

        const baseHealth = sum;
        document.querySelector('#base-hp h1').innerText = baseHealth;

        const heartContainer = document.querySelector('#base-hp .heart-container');
        heartContainer.innerHTML = `<i class="fa fa-heart"></i>`.repeat(baseHealth);

    }

    if (attrRollerList.every(r=>r.classList.contains('rolled'))) {

        determineOccEligibility(newPlayer.attributes, newPlayer.race);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        playerPhase = "HP";
        document.getElementById('hp-form').classList.remove('disabled');
        document.getElementById('hp-form').classList.add('highlighted');

    }
};

const handleRollHp = async (event) => {

    const hpRoller = event.currentTarget;
    hpRoller.classList.add('rolled');
    hpRoller.classList.remove('highlighted');
    hpRoller.removeEventListener('click', handleRollHp);

    const roll = await rollDie(hpRoller.querySelector('h1'));
    const rolledHeartContainer = hpRoller.querySelector('.heart-container');
    for (let i = 0; i < roll; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        rolledHeartContainer.innerHTML += `<i class="fa fa-heart"></i>`;
    }

    // CINEMATIC EFFECT
    await new Promise((resolve) => setTimeout(resolve, 800));
    const baseHeartContainer = document.querySelector('#base-hp .heart-container');
    const hpContainer = document.getElementById("base-hp");
    let baseHealth = parseInt(hpContainer.querySelector('h1').innerText);
    newPlayer.hp = baseHealth + roll;

    for (let i = 0; i < roll; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        rolledHeartContainer.lastChild.remove();
        baseHeartContainer.innerHTML += `<i class="fa fa-heart"></i>`;
        hpContainer.querySelector('h1').innerText = baseHealth + i + 1;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    hpRoller.style.width = "0px";
    hpContainer.style.width = '80%';
    hpContainer.querySelector('h3').innerText = 'Hit Points';
    hpContainer.querySelector('p').innerText = 'Final HP Calculation';

    await new Promise((resolve) => setTimeout(resolve, 1000));
    hpRoller.remove();

    playerPhase = "OCCUPATION";
    document.querySelector('#occ-form').classList.remove('disabled')
    document.querySelector('#occ-form').classList.add('highlighted')

}

const handleCancelNewPlayer = (event) => {

    document.getElementById('background-blur').classList.remove('show');
    document.getElementById('cancel-new-player').style.left = '-30%';
    document.getElementById('player-detail-pane').classList.remove('expanded');
    document.getElementById('new-player').classList.remove('selected')
    document.getElementById('info-container').classList.remove('show')
    document.querySelectorAll('.occ-icon').forEach(icon => {
        icon.classList.remove('selected');
    })

}

const handleOccIconClick = async (event) => {

    document.querySelectorAll('.occ-icon').forEach(icon => {
        icon.classList.remove('selected');
    });

    const occIcon = event.currentTarget;
    const occupation = await getOccupation(occIcon.id);
    occIcon.classList.add('selected');

    const infoContainer = document.getElementById('info-container');
    infoContainer.classList.add('show');

    infoContainer.querySelector('#info-container-img').style.backgroundImage = `url(${occupation.img})`;
    infoContainer.querySelector('h3').innerText = occupation.name;
    infoContainer.querySelector('p').innerText = occupation.description;

}

const handleInfoConfirm = async (event) => {

    if (playerPhase === "OCCUPATION") {

        const infoContainer =  document.getElementById('info-container');
        infoContainer.classList.remove('show');

        const occupation = await getOccupation(document.querySelector('#occ-form .occ-icon.selected').id);
        newPlayer.occupation = occupation;
        newPlayer.otherSkillCount = occupation.otherSkills.count;

        const occForm = document.querySelector('#occ-form .player-folder-content');
        occForm.innerHTML = `
            <div id="confirmed-occ">
                <img src="${occupation.img}" alt="">
                <h3>${occupation.name}</h3>
                <p></p>
            </div>`;
        occForm.querySelector('p').innerText = occupation.description;

        await loadOccSkills(occupation);

        const occSkillItems = []
        for(let skill of occupation.reqOccSkills) {
            const skillObj = await getSkill(skill.skill);
            const ability = calculateAbility(skill.buff, skill.skill, newPlayer.level);
            newPlayer.occSkills.push({skill: skill.skill, ability: ability});
            occSkillItems.push(createSkillItem(skillObj, ability, skill.buff));
        }
        const occSkillList = document.querySelector("#skill-form #occ-skills-list");
        populateSkillList(occSkillList, occSkillItems, false);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const infoContent = document.getElementById('info-container-content');
        infoContent.innerHTML = '<div class="skill-folder"></div>';
        const skillFolder = infoContent.querySelector('.skill-folder');

        skillFolder.innerHTML = `
            <div class="skill-prompt">
                <p class="prompt">SELECT OCCUPATIONAL SKILL</p>
                <div class="legend">
                    <p class="buff"><b>BUFF:</b> Ability percentage added from your occupation</p>
                    <p class="cost"><b>COST:</b> Cost in "other" skills for selecting this skill</p>
                </div>
            </div>
        `

        for (let choice of occupation.choiceOccSkills) {

            const skillChoice = document.createElement('ul');
            skillChoice.classList.add('skill-list', 'skill-choice');
            const skillChoiceItems = []

            for(let skill of choice.choices) {
                const skillObj = await getSkill(skill.skill);
                const ability = calculateAbility(skill.buff, skill.skill, newPlayer.level);
                skillChoiceItems.push(createSkillItem(skillObj, ability, `${ ability > 0 ? `+${skill.buff} from occupation` : '' }`));
            }


            const choiceObj = newPlayer.occupation.choiceOccSkills.find(choiceObj => choiceObj._id === choice._id);
            populateSkillList(skillChoice, skillChoiceItems);
            skillListToChoice(skillChoice, choiceObj, false);

            skillFolder.appendChild(skillChoice);
        }


        await new Promise((resolve) => setTimeout(resolve, 200));

        playerPhase = "OCC_SKILLS";
        document.querySelector('#skill-form').classList.remove('disabled');
        document.querySelector('#skill-form').classList.add('highlighted');

    } else if (playerPhase === "OCC_SKILLS") {

        const infoContainer =  document.getElementById('info-container');

        //check if all elections have been made

        let allChoicesMade = true;
        for (let skillChoice of infoContainer.querySelectorAll('.skill-choice')) {

            const choice = newPlayer.occupation.choiceOccSkills.find(choice => choice._id === skillChoice.id);
            const count = choice.count;
            const numSelected = ([...skillChoice.querySelectorAll('.skill-choice-check')].filter(check => check.checked)).length;
            
            if (numSelected !== count) {
                skillChoice.classList.add('shake');
                setTimeout(()=>{skillChoice.classList.remove('shake');}, 500);
                allChoicesMade = false
            }

        }

        if (!allChoicesMade) {
            return;
        }

        // hide info container

        infoContainer.classList.remove('show');

        // move selected skills to occ skills list

        const lis = infoContainer.querySelectorAll('li');
        const selectedLis = [...lis].filter(li => (li.querySelector('.skill-choice-check')).checked);
        const {newSkillItems, totalCost} = await skillSelectionToItems(selectedLis);
        for (let li of newSkillItems) {
            let ability = 0;
            if (li.querySelector('b.ability') != null) {
                ability = parseInt(li.querySelector('b.ability').innerText);
            }
            newSkillItems.forEach(skill => newPlayer.occSkills.push({skill: li.id, ability: ability}));
        }
        const occSkillItems = newSkillItems.concat([...document.querySelectorAll("#skill-form #occ-skills-list li")]);
        const occSkillList = document.querySelector("#skill-form #occ-skills-list")
        populateSkillList(occSkillList, occSkillItems, false);
        newPlayer.otherSkillCount -= totalCost;

        await new Promise((resolve) => setTimeout(resolve, 500));

        // repopulate info container with other skills selection

        infoContainer.querySelector('.skill-prompt .prompt').innerText = "SELECT OTHER SKILLS";

        const skillFolder = infoContainer.querySelector('.skill-folder');
        for (let choice of skillFolder.querySelectorAll('.skill-choice')) {
            choice.remove();
        }

        const skillChoice = document.createElement('ul');
        skillChoice.classList.add('skill-list', 'skill-choice');
        const skillChoiceItems = []

        for(let skill of newPlayer.occupation.otherSkills.choices) {
            const skillObj = await getSkill(skill.skill);
            const ability = calculateAbility(skill.buff, skill.skill, newPlayer.level);
            skillChoiceItems.push(createSkillItem(skillObj, ability, `${ ability > 0 ? `+${skill.buff} from occupation` : '' }`));
        }

        populateSkillList(skillChoice, skillChoiceItems);
        skillListToChoice(skillChoice, newPlayer.occupation.otherSkills, true, 2);

        skillChoice.querySelector('p').innerText = `CHOOSE ${newPlayer.otherSkillCount}`;

        // add collapsability
        const allSkills = skillChoice.querySelectorAll('li');
        allSkills.forEach(skill => skill.classList.add('hidden'));
        const categororyLabels = skillChoice.querySelectorAll('h5');
        for (let label of categororyLabels) {
            label.classList.add('collapsable');
            label.addEventListener('click', (event) => {
                const skillChoice = event.currentTarget.parentElement;
                const allSkills = skillChoice.querySelectorAll('li');
                const selected = skillChoice.querySelectorAll(`.${classify(event.currentTarget.category)}`);
                allSkills.forEach(skill => skill.category === event.currentTarget.category ?
                    0 : skill.classList.add('hidden'));
                selected.forEach(skill => {skill.classList.toggle('hidden')});
            })
            const count = document.createElement('b');
            count.classList.add('count');
            label.insertAdjacentElement('beforeend', count);
        }

        const infoContent = infoContainer.querySelector('#info-container-content');
        const counter = document.createElement('p');
        counter.innerHTML = `<b class="count">0</b> / <b>${newPlayer.otherSkillCount}</b>`
        counter.classList.add('counter');
        infoContent.appendChild(counter);

        skillFolder.appendChild(skillChoice);

        playerPhase = "OTHER_SKILLS"
        infoContent.scrollTop = 0;
        infoContainer.classList.add('show');

    } else if (playerPhase === "OTHER_SKILLS") {

        const infoContainer = document.querySelector('#info-container');

        // check if enough skills have been selected

        const checkedSkills = [...infoContainer.querySelectorAll('.skill-choice-check')].filter(cb=>cb.checked);
        if (checkedSkills.length !== newPlayer.otherSkillCount) {
            infoContainer.querySelector('.skill-choice').classList.add('shake');
            infoContainer.querySelector('.counter').classList.add('flash');
            setTimeout(()=> {
                infoContainer.querySelector('.skill-choice').classList.remove('shake');
                infoContainer.querySelector('.counter').classList.remove('flash');
            }, 300)
            return;
        }

        // close info container

        infoContainer.classList.remove('show');

        // add skills to newPlayer and display them

        const selectedLis = checkedSkills.map(input => input.parentElement);
        const {newSkillItems, totalCost} = await skillSelectionToItems(selectedLis);
        for (let li of newSkillItems) {
            let ability = 0;
            if (li.querySelector('b.ability') != null) {
                ability = parseInt(li.querySelector('b.ability').innerText);
            }
            newPlayer.otherSkills.push({skill: li.id, ability: ability});
        }
        const otherSkillList = document.querySelector('#skill-form #other-skills-list');
        populateSkillList(otherSkillList, newSkillItems, true);

        // // highlight skills & money folder TODO!
        // document.getElementById('equipment-form').classList.remove('disabled');
        // document.getElementById('equipment-form').classList.add('highlighted');

        // FOR NOW show confirm button
        const button = document.createElement('button');
        button.id = 'create-character-btn';
        button.innerText = "CREATE CHARACTER";
        button.addEventListener('click', handleCreateChatacterClick);
        document.getElementById('new-player-form').appendChild(button);
        playerPhase = "COMPLETE";
    }

}

const handleSkillChoiceSelect = async (event) => {

    event.stopPropagation();

    const checkedBox = event.currentTarget;
    const skillChoice = checkedBox.parentElement.parentElement;
    const checkboxes = skillChoice.querySelectorAll('.skill-choice-check');
    const numChecked = ([...checkboxes].filter( (cb) => cb.checked == true )).length;
    const categoryClass = classify(checkedBox.parentElement.category);
    let count;

    if (playerPhase == "OCC_SKILLS") {
        count = newPlayer.occupation.choiceOccSkills.find(choice => choice._id === skillChoice.id).count;
    } else if (playerPhase == "OTHER_SKILLS") {
        count = newPlayer.otherSkillCount;
    }

    if ( count === 1 ) {
        for (let checkbox of checkboxes) {
            if (checkbox.id !== checkedBox.id) {
                checkbox.checked = false;
            }
        }
        
        return;
    }

    if ( playerPhase === "OTHER_SKILLS") {
        if(numChecked === count) {
            document.querySelector('#info-container-content .counter').classList.add('fulfilled');
        } else if (numChecked < count) {
            document.querySelector('#info-container-content .counter').classList.remove('fulfilled');
        }
    }

    
    if (numChecked > count) {

        checkedBox.checked = false;
        skillChoice.querySelector('p').classList.add('shake');
        checkedBox.classList.add('shake');
        if (playerPhase === "OTHER_SKILLS") {
            document.querySelector('#info-container-content .counter').classList.add('flash');
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
        setTimeout(() => {
            skillChoice.querySelector('p').classList.remove('shake');
            checkedBox.classList.remove('shake');
            if (playerPhase === "OTHER_SKILLS") {
                document.querySelector('#info-container-content .counter').classList.remove('flash');
            }
        }, 300)

        return
    }

    if ( playerPhase === "OTHER_SKILLS" ) {
        
        const totalCounter = document.querySelector('#info-container-content .counter .count');
        totalCounter.innerText = numChecked;

        const folderCounter = skillChoice.querySelector(`h5.${categoryClass} b.count`);
        const folderCount = [...skillChoice.querySelectorAll(`li.${categoryClass} input`)].filter(cb => cb.checked).length;
        folderCounter.innerText = folderCount > 0 ? folderCount : "";

    }

}

const handleCreateChatacterClick = async (event) => {

    event.preventDefault();


    // check that name is filled in
    const nameInput = document.getElementById('player-name');
    const confirmButton = event.currentTarget;

    if (nameInput.value === '') {
        nameInput.classList.add('flash');
        setTimeout(() => {
            nameInput.classList.remove('flash');
        }, 500)
        return;
    }

    const [img] = playerImageInput.files;

    if (img) {

        // get image upload URL;
        let imgUploadUrl;
        try {
            const response = await fetch('/players/imgUrl');
            if (!response.ok) {
                console.log('network was not ok');
            }
            const json = await response.json();
            imgUploadUrl = json.url;
        } catch (error) {
            console.log(error);
        }


        // upload image 
        try {
            const response = await fetch( imgUploadUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: playerImageInput.files[0]
            })
        } catch (error) {
            console.log(error);
        }

        newPlayer.img = imgUploadUrl.split('?')[0];

    }
    


    newPlayer.name = nameInput.value;
    newPlayer.occupation = newPlayer.occupation._id;
    delete newPlayer.otherSkillCount;
    
    try {
        const response = await fetch(`${document.URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newPlayer),
            // redirect: 'follow'
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // location.reload();
    } catch (error) {
        console.log(error);
    }

}


// LOCAL MEMORY ALLOCATION

const loadedPlayers = new Map();
const loadedOccupations = new Map();
const loadedSkills = new Map(); 
let newPlayer = {

    name: '',
    img: '',

    attributes:[],
    race: 'Human',
    hp: 0,
    experience: 0,
    level: 1,

    occSkills:[],
    otherSkills:[],
}

// let playerPhase = "ATTRIBUTES";
let playerPhase = "OCCUPATION";

//EVENT LISTENERS

const playerIcons = document.querySelectorAll('.player-icon');
playerIcons.forEach(icon => {
    icon.addEventListener('click', handlePlayerIconClick);
});

const imgContainers = document.querySelectorAll('.img-container');
imgContainers.forEach(img => {
    img.addEventListener('click', handleImgContainerClick);
});

const playerImageInput = document.getElementById('player-image-upload');
playerImageInput.addEventListener('change', handlePlayerImgInput)

const playerFolders = document.querySelectorAll('.player-folder');
playerFolders.forEach(folder => {
    folder.addEventListener('click', handlePlayerFolderClick);
})

const attrRollers = document.querySelectorAll('.attr-roller:not(.rolled)');
attrRollers.forEach((div) => div.addEventListener('click', handleRollAttribute));

const hpRoller = document.getElementById('roll-hp');
hpRoller.addEventListener('click', handleRollHp);

const cancelButton = document.getElementById('cancel-new-player');
cancelButton.addEventListener('click', handleCancelNewPlayer);

const occIcons = document.querySelectorAll('.occ-icon');
occIcons.forEach(icon => {
    icon.addEventListener('click', handleOccIconClick);
});

const infoContainerButton = document.querySelector('#info-container .skew-btn');
infoContainerButton.addEventListener('click', handleInfoConfirm);

