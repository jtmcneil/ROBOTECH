const dotenv = require('dotenv'); 
dotenv.config();

const mongoose = require('mongoose');

//Seeds
const skillSeeds = require('./seeds/skills');
const occSeeds = require('./seeds/occupations');
const playerSeeds = require('./seeds/players');
const campaignSeeds = require('./seeds/campaigns');
const userSeeds = require('./seeds/users');

//Models
const Skill = require('../src/models/skill');
const Occupation = require('../src/models/occupation');
const Player = require('../src/models/player');
const Campaign = require('../src/models/campaign');
const User = require('../src/models/user');

//mongodb://localhost:27017/robotech
//process.env.MONGO_URL
mongoose.connect('mongodb://localhost:27017/robotech', {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedSkills = async() => {

    // Erase Skills
    await Skill.deleteMany({});
    console.log('Seeding Skills');
    console.log(`${skillSeeds.length} skills in skill seeds file`);

    prerequisiteSkills = []
    skillsCount = 0;

    // Pass 1 (Skills with no prerequisites)
    for (let skillSeed of skillSeeds) {
        if (!skillSeed.requiredSkills.length) {
            const skill = new Skill(skillSeed);
            await skill.save();
            skillsCount++;
        } else {
            prerequisiteSkills.push(skillSeed);
        }
    }

    // Pass >1 (Skills with prerequisites)
    while (prerequisiteSkills.length > 0) {

        let nextRound = [];

        for (let skillSeed of prerequisiteSkills) {

            prerequisites = []

            for(let requiredSkill of skillSeed.requiredSkills) {
                const skill = await Skill.findOne({ name: requiredSkill });
                prerequisites.push(skill);
            }

            if (prerequisites.some(value => value === null)) {
                nextRound.push(skillSeed);
                continue;
            } else {
                skillSeed.requiredSkills = prerequisites.map(obj => obj._id);
                const skill = new Skill(skillSeed);
                await skill.save();
                skillsCount++;
            }
        }

        prerequisiteSkills = nextRound;

    }

    console.log(`Added ${skillsCount} skills to the DB`);

};

const seedOccupations = async () => {

        // Erase Occupations
        await Occupation.deleteMany({});
        console.log('Seeding Occupations');
        console.log(`${occSeeds.length} occupations in occupations seeds file`);

        occupationsCount = 0;

        // helper function for getting skill IDs
        populateSkillIds = async (arr) => {
            for (let skill of arr) {
                try{
                    const obj = await Skill.findOne({ name: skill.skill }).populate('requiredSkills');
                    skill.skill = obj;
                } catch {
                    console.log(`No skill found for ${skill.skill}`);
                }
            }
        };

        // Seed Occupations
        for (let occ of occSeeds) {
            
            // Replace skill names with IDs
            // Required occupational skills
            await populateSkillIds(occ.reqOccSkills);
            // Choice occupational skills
            for (let choice of occ.choiceOccSkills) {
                await populateSkillIds(choice.choices);
            }
            // Other skills (categories)
            let otherSkills = [];
            occ.otherSkillReq = [];
            
            for (let category of occ.otherSkills.categories) {

                let skills = [];

                if (category.exceptions) {
                    skills = await Skill.find({
                        name: {$nin: category.exceptions},
                        category: category.category
                    }).populate('requiredSkills');
                } else {
                    skills = await Skill.find({category: category.category}).populate('requiredSkills');
                }

                skills = skills.map(({_id, name, requiredSkills, subCategory}) => ({skill: _id, name, requiredSkills,
                    buff: "buff" in category ? (typeof category.buff === 'object' ? 
                        (Object.keys(category.buff).includes(subCategory) ? category.buff[subCategory] : 0) : category.buff) : 0, 
                    cost: "cost" in category ? category.cost : 1
                }));

                otherSkills = otherSkills.concat(skills);

                // preserve requirements
                if ("required" in category) {
                    occ.otherSkillReq = occ.otherSkillReq.concat({category: category.category, count: category.required})
                };


            };

            let otherSkillsNames = otherSkills.map(skill => skill.name);

            // Other skills (specific)
            for (let skill of occ.otherSkills.specific) {

                // specific skills overwrite skill categories
                otherSkills = otherSkills.filter(s => s.name !== skill.skill);

                const skillObj  = await Skill.findOne({name: skill.skill}).populate('requiredSkills');
                
                // shape skill
                let newSkill = {
                    skill: skillObj._id,
                    name: skillObj.name,
                    requiredSkills: skillObj.requiredSkills,
                    buff: "buff" in skill ? skill.buff : 0, 
                    cost: "cost" in skill ? skill.cost : 1
                };

                otherSkills = otherSkills.concat(newSkill);

            }

            otherSkillsNames = otherSkills.map(skill => skill.name);

            // filter out unattainable skills
            otherSkills = otherSkills.filter(skill => !skill.requiredSkills.some(skill => !otherSkillsNames.includes(skill.name)))

            // remove name and requiredSkills properties from otherSkills
            otherSkills = otherSkills.map(({skill, buff, cost}) => ({skill, buff, cost}))

            // replace otherSkills in occupation object
            occ.otherSkills = {count: occ.otherSkills.count, choices: otherSkills};

            // save to DB
            
            const occupation = new Occupation(occ);
            await occupation.save();
            occupationsCount++;

        }

        console.log(`Added ${occupationsCount} occupations to the DB`);
        
};

const seedPlayers = async () => {

    // Erase Players
    await Player.deleteMany({});
    console.log('Seeding Players');
    console.log(`${playerSeeds.length} players in player seeds file`);

    let playerCount = 0;

    for (let playerSeed of playerSeeds) {

        // replace occupation name with _id
        const occupationObj = await Occupation.findOne({ name: playerSeed.occupation });
        playerSeed.occupation = occupationObj._id;

        // replace skill names with skill _ids
        for (let skill of playerSeed.occSkills) {
            const skillObj = await Skill.findOne({ name: skill.skill });
            skill.skill = skillObj._id;
        }
        for (let skill of playerSeed.otherSkills) {
            const skillObj = await Skill.findOne({ name: skill.skill });
            skill.skill = skillObj._id;
        }

        const player = new Player(playerSeed);
        await player.save();
        playerCount++;

    }

    console.log(`Added ${playerCount} players to the DB`);

};

const seedCampaigns = async () => {

    // Erase Campaigns
    await Campaign.deleteMany({});
    console.log('Seeding Campaigns');
    console.log(`${campaignSeeds.length} campaigns in campaign seeds file`);

    let campaignCount = 0;

    for (let campaignSeed of campaignSeeds) {

        // replace player names with IDs
        for (let i = 0; i < campaignSeed.players.length; i++) {
            const playerObj = await Player.findOne({ name: campaignSeed.players[i] });
            campaignSeed.players[i] = playerObj._id;
        }

        const campaign = new Campaign(campaignSeed);
        await campaign.save();
        campaignCount++;

    }

    console.log(`Added ${campaignCount} campaigns to the DB`);

};

const seedUsers = async () => {

    // Erase Users
    await User.deleteMany({});
    console.log('Seeding Users');
    console.log(`${campaignSeeds.length} users in user seeds file`);

    let userCount = 0;
    for (let userSeed of userSeeds) {

        // replace campaign names with IDs
        for (let i = 0; i < userSeed.campaigns.length; i++) {
            const campaignObj = await Campaign.findOne({ name: userSeed.campaigns[i] });
            userSeed.campaigns[i] = campaignObj._id;
        }

        const user = new User(userSeed);
        const registeredUser = await(User.register(user, 'user')) // all user passwords are user
        userCount++;

    }

}

const seedDB = async() => {
    await seedSkills();
    console.log('----------');
    await seedOccupations();
    console.log('----------');
    await seedPlayers();
    console.log('----------');
    await seedCampaigns();
    console.log('----------');
    await seedUsers();
    console.log('----------');
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Database disconnected");
});