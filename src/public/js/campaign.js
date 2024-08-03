// Function for turning percentage into a color from green to red
percToColor = (perc) => {
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
  };

setAttribute = (attr, value) => {

    const perc = value / 24;
    const color = percToColor(perc * 100);
    const circleOffset = 290 - 290 * perc;
    const circle = attr.querySelector("svg.front");
    circle.style.strokeDashoffset = circleOffset;
    circle.style.stroke = color;
    attr.querySelector(".attr-number").innerHTML = value;
    attr.querySelector(".attr-number").style.color = color;

}

setPlayer = (player) => {

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
}

// Function to 
displayPlayerDetails = async (playerId) => {

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
handlePlayerIconClick = async (event) => {
    // Prevent default action of the a tag
    event.preventDefault();

    // Remove active class from all divs
    const playerIcons = document.querySelectorAll('.player-icon');
    playerIcons.forEach(div => div.classList.remove('selected'));

    // Add selected class to the clicked div
    const clickedDiv = event.currentTarget;
    clickedDiv.classList.add('selected');
    
    // Get the object's ID from the a tag's href
    const playerId = clickedDiv.querySelector('a').getAttribute('href').substring(1);
    
    // Display the data for the selected object
    await displayPlayerDetails(playerId);

    const detailPane = document.querySelector('#player-detail-pane');
    detailPane.classList.add('expanded');

}

collapsePlayerFolders = () => {
    const playerFolders = document.querySelectorAll('.player-folder');
    playerFolders.forEach(folder => folder.classList.remove('expanded'));
}

handleImgContainerClick = (event) => {

    // Expand img
    event.preventDefault();
    event.currentTarget.classList.add('expanded');
    
    // Collapse player-file
    collapsePlayerFolders();
    const playerFile = document.getElementById('player-file');
    playerFile.classList.remove('expanded');
}

handlePlayerFolderClick = (event) => {

    // Prevent Default
    event.preventDefault();

    // Expand only selected folder
    collapsePlayerFolders();
    event.currentTarget.classList.add('expanded');

    // Collapse image
    const imgContainer = document.getElementById('img-container');
    imgContainer.classList.remove('expanded')

    // Expand player file
    const playerFile = document.getElementById('player-file');
    playerFile.classList.add('expanded')
}


// LOCAL MEMORY ALLOCATION

let loadedPlayers = new Map();

//EVENT LISTENERS

const playerIcons = document.querySelectorAll('.player-icon');
playerIcons.forEach(icon => {
    icon.addEventListener('click', handlePlayerIconClick);
});

const imgContainer = document.getElementById('img-container');
imgContainer.addEventListener('click', handleImgContainerClick);

const playerFolders = document.querySelectorAll('.player-folder');
playerFolders.forEach(folder => {
    folder.addEventListener('click', handlePlayerFolderClick);
})


