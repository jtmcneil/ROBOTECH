Occupations = {

    VeritechPilot: {
        name: "Veritech Pilot",
        description: `
            The Veritech Fighter pilot is still the very elite of the Robotech Defense Force (RDF) and the Robotech Expeditionary Force (REF). The smaller and more agile Alpha and Beta Fighters make these mecha pilots deadlier than ever.
            As Robotechnology improves the trend is to make simpler and simpler mecha so that minimal training is necessary. But do not think this makes for a less capable veritech pilot. On the contrary, these men and women are the most skilled mecha pilots in the galaxy. The simpler operation of the mecha enables the veritech pilot to add a whole complement of mecha to his list of skills. Thus, the REF veritech pilot can fly the alpha fighter, beta fighter, shadow fighter (alpha), VF-1V vindicator, the old Macross VF series veritech and the Southen Cross logan and AJACS.
            The veritech pilot of the REF is also trained in the use of the sensa- tional cyclone, the all-purpose personal combat mecha.
            The piloting of Destroids, old and new, is no longer an optional part of the veritech pilot's training. The emphasis of the veritech pilot's training is on the mastery of the many types of transformable "veritech" mecha. Destroid piloting is now a completely distinct and separate occupational character class (O.C.C.).
            The cyclone combat training is specifically limited to the VR-052 Cyclone Battler and the standard Battler weapon systems only.
            `,
        requirements: {
            attributes: {
                "IQ": 9,
                "PP": 9
            }
        },
        levelXp: [2100, 4200, 8400, 17200, 25400, 35800, 51000, 71200, 96400, 131600, 181800, 232000, 282200, 342400, 402600],
        reqOccSkills:[
            { skill: "Jet", buff: 20 },
            { skill: "Mecha: Veritech", buff: 20 },
            { skill: "Mecha Combat: Cyclone", buff: 0 },
            { skill: "Weapon Systems", buff: 20 },
            { skill: "Read Sensory Instruments", buff: 15 },
            { skill: "Navigation", buff: 15 }
        ],
        choiceOccSkills:[
            {
                count: 2,
                choices: [
                    { skill: "Mecha Combat: Alpha", buff: 0 },
                    { skill: "Mecha Combat: Beta", buff: 0 },
                    { skill: "Mecha Combat: Vindicator", buff: 0 },
                ]
            }, 
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Expert", buff: 0 },
                    { skill: "Hand to Hand Combat: Martial Arts", buff: 0 , cost: 1}
                ]
            }
        ],
        otherSkills: {
            count: 14,
            allowed: {
                categories: [
                    { category: "COMMUNICATIONS" }, 
                    { category: "DOMESTIC" },
                    { category: "DOMESTIC" },
                    { category: "PHYSICAL" },
                    { category: "PILOT", exceptions: [ "Mecha: Destroid" ], buff: { "Air": 10 } },
                    { category: "PILOT RELATED", buff: 10},
                    { category: "TECHNICAL"},
                    { category: "WEAPON PROFICIENCIES", exceptions: [ "W.P. Cyclone Weapon Systems" ] }
                ],
                specific: [
                    //ELECTRICAL
                    { skill: "Basic Electronics" },
                    //MECHANICAL
                    { skill: "Basic Mechanics", buff: 5 },
                    { skill: "Automotive Mechanics", buff: 5 },
                    { skill: "Veritech Mechanics", buff: 5 },
                    //MEDICAL
                    { skill: "First Aid" },
                    //SCIENCE
                    { skill: "Mathematics: Basic" }, 
                    { skill: "Mathematics: Advanced" },

                ]
            }
        }

    },
    

    DestroidPilot: {
        name: "Destroid Pilot",
        description: `
            The Destroid Pilot is, as always, the elite grunt of the Robotech forces. These are the characters who operate the giant non-transformable mecha into the jaws of death, fighting tooth and nail against an inhuman enemy. Whether they be the lumbering giants of the RDF or the smaller, faster REF models, Destroids represent some of the most powerful weapons of war ever created by man. Each individual destroid packs more firepower than a 20th century tank division.
            Although a few other O.C.C.s can learn to pilot one or two particular destroids, none have the range of mecha piloting skills nor experience of the destroid pilot.
            After initial training (includes "Basic" destroid combat), the character receives mecha combat training in three specific destroids (Note: Cyclones and veritechs are not considered to be destroids. Choose 3 destroids.) This specialized training instills in the pilot the maximum knowledge and combat abilities of those three specific destroids. Additional mecha combat training can be selected as "other" skills. Note that each type of destroid is different, including the old RDF models. This means combat training in a new REF Gladiator MK III does not automatically include the RDF Gladiator MK I. The pilot can operate the RDF MK I Gladiator (the destroid O.C.C. training enables the pilot to operate ALL destroids), but combat will be at the basic level (See Hand to Hand Bonuses from Destroid Basic Combat Training). Although the rudimentaries in piloting any destroid are similar, the specific operating details, movement and response time, and weapon systems do vary with each individual type and model of mecha. See Robotech the Role-Playing Game (Book One) for RDF Mecha and Combat bonuses.
            `,
        requirements: {
            attributes: {
                "IQ": 7
            }
        },
        levelXp: [2050, 4100, 8250, 16500, 24600, 34700, 49800, 69900, 95000, 130100, 180200, 230300, 280400, 340500, 400600],
        reqOccSkills:[
            { skill: "Mecha: Destroid", buff: 20 },
            // { skill: "Mecha Combat: Destroid (select 3)", buff: 0 },  // TODO add this if you ever add specific mecha
            { skill: "Weapon Systems", buff: 15 },
            { skill: "Read Sensory Instruments", buff: 10 },
            { skill: "Automobile", buff: 10 },
            { skill: "W.P. Energy Rifle", buff: 0 },
            { skill: "W.P. Energy Pistol", buff: 0 },
        ],
        choiceOccSkills:[
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Basic", buff: 0 },
                    { skill: "Hand to Hand Combat: Expert", buff: 0 , cost: 1}
                ]
            }
        ],
        otherSkills: {
            count: 16,
            allowed: {
                categories: [
                    { category: "DOMESTIC" },
                    { category: "PHYSICAL" },
                    { category: "PILOT", exceptions: [ "Mecha: Veritech" ], buff: { "Ground": 10, "Air": 5 } },
                    { category: "PILOT RELATED", buff: 10 },
                    { category: "TECHNICAL"},
                    { category: "WEAPON PROFICIENCIES", exceptions: ["W.P. Cyclone Weapon Systems"]}
                ],
                specific: [
                    //COMMUNICATION
                    { skill: "Radio: Basic" },
                    { skill: "Radio: Scramblers" },
                    { skill: "Radio: Satellite Relay" },
                    //ELECTRICAL
                    { skill: "Basic Electronics" },
                    //MECHANICAL
                    { skill: "Basic Mechanics", buff: 5 },
                    { skill: "Automotive Mechanics", buff: 5 },
                    { skill: "Aircraft Mechanics", buff: 5 },
                    { skill: "Mecha Mechanics", buff: 5 },
                    //MEDICAL
                    { skill: "First Aid" },
                    { skill: "Paramedic" , cost: 2},
                    //SCIENCE
                    { skill: "Mathematics: Basic" }, 
                    { skill: "Mathematics: Advanced" },
                ]
            }
        }

    },
    
    
    CycloneRider: {
        name: "Cyclone Rider",
        description: `
            The cyclone rider is a new breed of mecha warrior, a combination of destroid pilot and military specialist. The cyclone riders could be considered to be the elite special forces of the REF/RDF. It is the cyclone rider who is usually involved in covert operations, reconnaissance, rescue missions, demolition, and intelligence. Armed with the human-size power armor of the cyclone, its wearer becomes a pint size juggernaut, faster, stronger, capable of limited flight and armed with mini-missiles and energy weapons. The small size ensures stealth and a mobility that no other mecha enjoys.
            The cyclone rider is trained in the use of all three cyclone types and all cyclone weapon systems including the CADS-1 system of the VR-041 Saber cyclone. Each of the three cyclone models has their own unique characteristics.
            The VR-052 Battler Cyclone is the heavy-duty combat unit and is the most common.
            The VR-041 Saber Cyclone is a special unit designed for CADS-1 hand to hand combat and espionage.
            The VR-038-LT Light Combat Cyclone is often thought of as simply a lightweight model for female warriors. While it is true that the VR-038-LT was designed with women soldiers in mind, it has proven to be a superior unit for stealth and, consequently, is used for clandestine operations. The light combat cyclone has an even quicker reaction time than its heavier predecessors and enjoys several combat bonuses the others do not. As a result, the light combat cyclone can be used by men and women, and is often the mecha of choice for clandestine operations where hand to hand combat and precision timing are required.
            The cyclone rider can also learn to operate the new REF destroids (see Sentinels) and may request alpha fighter training, but must have the pilot jet skill and use the mecha combat table Hand to Hand Bonuses from Alpha Basic Training. The basic training table means the character lacks the full skills and abilities of a veritech pilot whose O.C.C. has provided in-depth and lengthy formal training.
            Destroid piloting skills are limited to the RDF and/or REF Gladiator, Excalibur, or Raidar X. Training will focus on one specific destroid model, rather than the full range of destroids. The character is also restricted to Hand to Hand Bonuses from Destroid Basic Combat Training. The basic training table illustrates the secondary nature of destroid piloting skills to this O.C.C. The skill is so limited that the character will have great difficulty piloting any other type of destroid (unlike the Destroid Pilot O.C.C.). The best he or she can hope for is to be able to start a different mecha and get it to move at half speed; no bonuses, and only one attack (total) per melee. Note: To pilot a destroid, the character must spend two "other" skill selections; one on pilot destroid (specific model) and one on basic destroid combat for that specific model. The character can elect to pilot additional specific destroids at a cost of one "other" skill each (includes additional operating knowledge and basic combat for each type/model).
            `,
        requirements: {
            attributes: {
                "IQ": 8,
                "PP": 8
            }
        },
        levelXp: [2000, 4000, 8200, 16400, 24500, 34600, 49700, 69800, 94900, 129000, 179100, 229200, 279300, 329400, 389500],
        reqOccSkills:[
            { skill: "Motorcycle", buff: 20 },
            { skill: "Mecha: Cyclone", buff: 20 },
            { skill: "Mecha Combat: Cyclone", buff: 20 },
            { skill: "Weapon Systems", buff: 15 },
            { skill: "W.P. Cyclone Weapon Systems", buff: 0 },
            { skill: "W.P. Gallant", buff: 0 },
            { skill: "W.P. Heavy", buff: 0 }
        ],
        choiceOccSkills:[
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Expert", buff: 0 },
                    { skill: "Hand to Hand Combat: Martial Arts", buff: 0 , cost: 1}
                ]
            }
        ],
        otherSkills: {
            count: 14,
            allowed: {
                categories: [
                    { category: "COMMUNICATIONS", buff: { "Radio": 5 } }, 
                    { category: "DOMESTIC" },
                    { category: "PHYSICAL" },
                    { category: "PILOT", exceptions: [
                        "Mecha Combat: Alpha", 
                        "Mecha Combat: Beta",
                        "Mecha Combat: Vindicator"
                    ], buff: { "Ground": 10, "Air": 5 } },
                    { category: "TECHNICAL", buff: { "Demoltion": 10 } },
                    { category: "ROGUE", buff: 15},
                    { category: "WEAPON PROFICIENCIES" },
                    { category: "Wilderness", levelRequirement: 2}

                ],
                specific: [
                    //ELECTRICAL
                    { skill: "Basic Electronics" },
                    //ESPIONAGE/MILITARY
                    { skill: "Detect Ambushes", buff: 5 },
                    { skill: "Detect Concealment", buff: 5 },
                    { skill: "Escape Artist", buff: 5 },
                    { skill: "Intelligence", buff: 5 },
                    { skill: "Land Navigation", buff: 5 },
                    { skill: "Wilderness Survival", buff: 5 },
                    //MECHANICAL
                    { skill: "Automotive Mechanics", buff: 10 },
                    { skill: "Basic Mechanics", buff: 10 },
                    //MEDICAL
                    { skill: "First Aid" },
                    //SCIENCE
                    { skill: "Mathematics: Basic" }, 
                    { skill: "Mathematics: Advanced" },
                    
                ]
            }
        }

    },
    
    
    ZentraidiWarrior: {
        //NOTE: AT THE MOMENT ONLY DOING ZENTRAIDI SOLDIERS, NOT OFFICERS
        name: "Zentraidi Warrior",
        description: `
            All Zentraedi have been micronized by the time the SDF-3 makes its flight to the Robotech Masters' homeworld. Among the crew and troops is the majority of the surviving Zentraedi population. At least 30% of the REF troops are comprised of "loyal" Zentraedi. Their loyalty may stem from a variety of sources. Many have grown to love their adopted planet and the micronians who would dare to embrace an enemy. Others do like the humans, but their true loyalty lies with their charismatic leader, Breetai. They will follow Breetai anywhere without question. Even micronization is acceptable now that Breetai has, himself, been micronized. Still others see this as a means to exact revenge against the Robotech Masters, or long for the thrill of battle. Whatever the reason, they represent the REF as fearless warriors willing to die to protect the Earth.
            The greatest change for the Zentraedi is being reduced ("micronized") from 50-foot giants to normal size humans. This caused an immediate problem in that the Zentraedi's psychological indoctrination by the Masters and their ignorance of simple science and technology seriously impaired their ability to adapt to the complex human mecha. The solution was to create new human-sized mecha based on the designs of the old Zentraedi battle pods. Ironically, the smaller battle pods are even tougher and more powerful than the old 50-foot pods. This has pleased the Zentraedi to no end. See the new REF Battle Pods in the Destroid section.
            Human destroid pilots can learn to operate the Zentraedi-style mecha, but the pods are generally considered to be exclusive to the Zentraedi warriors. Battle Pod mecha training counts as a separate skill choice for the destroid pilot and is not part of his/her formal training.
            `,
        requirements: {
            race: "Zentraidi"
        },
        levelXp: [1950, 3900, 8800, 17600, 25600, 35600, 50600, 70600, 95600, 125600, 175600, 225600, 275600, 325600, 375600],
        reqOccSkills:[
            { skill: "Mecha: Zentraedi Style Battle Pods", buff: 0 },
            //{ skill: "Mecha Combat: All Zentraedi style mecha", buff: 0 },  // TODO Add later
            { skill: "Weapon Systems", buff: 10 },
            { skill: "Radio: Basic", buff: 5 },
            { skill: "Navigation", buff: 10 },
            { skill: "Navigation: Space", buff: 10 },
            { skill: "W.P. Energy Rifle", buff: 0 },
            { skill: "W.P. Energy Pistol", buff: 0 },
          ],
        choiceOccSkills:[
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Expert", buff: 0 },
                    { skill: "Hand to Hand Combat: Martial Arts", buff: 0 , cost: 1}
                ]
            }
        ],
        otherSkills: {
            count: 8,
            allowed: {
                categories: [
                    { category: "DOMESTIC" },
                    { category: "PHYSICAL" },
                    { category: "PILOT RELATED", buff: 10 },
                    { category: "TECHNICAL" },
                    { category: "WEAPON PROFICIENCIES", exceptions: [ "W.P. Cyclone Weapon Systems" ] }
                ],
                specific: [
                    //COMMUNICATIONS
                    { skill: "Radio: Scramblers" },
                    { skill: "T.V./Video" },
                    //MEDICAL
                    { skill: "First Aid" },
                    //PILOT
                    { skill: "Spacecraft", buff: 10 },
                    { skill: "Space Shuttle", buff: 10 },
                    { skill: "Automobile", buff: 10 },
                    { skill: "Truck: Small", buff: 10 },
                    //SCIENCE
                    { skill: "Mathematics: Basic" }, 
                    { skill: "Mathematics: Advanced" },
                ]
            }
        }

    },
    
    
    MilitarySpecialist: {
        name: "Military Specialist",
        description: `
            The Robotech Expeditionary Force (REF) Military Specialist is a jack-of-all-trades. He or she is trained in the use of the VR-041 Saber Cyclone and is a fair Alpha pilot, but the main emphasis of training is on espionage. It is the military specialist who usually leads a group of cyclone riders on covert missions, for the REF military specialist is a master at information gathering and subterfuge.
            Cyclone combat training is specifically limited to the VR-041 Saber cyclone and the CADS-1 saber system.
            The alpha assigned to a REF military specialist will usually be the VAF-6R reconnaissance alpha.
            `,
        requirements: {
            attributes: {
                "IQ": 10,
                "MA": 10
            }
        },
        levelXp: [2120, 4240, 8480, 16960, 24960, 34960, 49960, 69960, 94960, 129960, 179960, 229960, 279960, 329960, 389961],
        reqOccSkills:[
            { skill: "Pilot Jet", buff: 10 },
            { skill: "Pilot Cyclone", buff: 10 },
            { skill: "Mecha Combat: Cyclone", buff: 0 },
            { skill: "Intelligence", buff: 20 },
            { skill: "Interrogation", buff: 15 },
            { skill: "Disguise", buff: 15 },
            { skill: "W.P. Energy Rifle", buff: 0 }, 
            { skill: "W.P. Gallant", buff: 0 },
            { skill: "Hand to Hand Combat: Martial Arts", buff: 0 } 
          ],
        choiceOccSkills:[],
        otherSkills: {
            count: 16,
            allowed: {
                categories: [
                    { category: "COMMUNICATIONS", buff: 10, required: 2},
                    { category: "DOMESTIC"},
                    { category: "ELECTRICAL"},
                    { category: "ESPIONAGE/MILITARY", buff: 15, required: 2},
                    { category: "Physical", buff: 5 },
                    { category: "PILOT", exceptions: [
                        "Mecha: Destroid",
                        "Mecha Combat: Alpha", 
                        "Mecha Combat: Beta",
                        "Mecha Combat: Vindicator"
                    ], buff: { "Air": 5 } },
                    { category: "SCIENCE" },
                    { category: "TECHNICAL", buff: 5 },
                    { category: "ROGUE"},
                    { category: "WILDERNESS", levelRequirement: 2},
                    { category: "WEAPON PROFICIENCIES", exceptions: [ "W.P. Cyclone Weapon Systems" ] }
                ],
                specific: [
                    // COMMUNICATIONS
                    { skill: "Cryptography", buff: 15},
                    // MECHANICAL
                    { skill: "Basic Mechanics", buff: 5 },
                    { skill: "Automotive Mechanics", buff: 5 },
                    { skill: "Aircraft Mechanics", buff: 5 },
                    { skill: "Computer Repair", buff: 5 },
                    { skill: "Locksmith", buff: 5 },
                    // MEDICAL
                    { skill: "Paramedic", buff: 5 },
                    //PILOT
                    { skill: "Motorcycle", buff: 5 },
                    { skill: "Mecha Combat: Alpha", buff: 5 },
                    { skill: "Mecha Combat: Beta", buff: 5 },
                    //TECHNICAL
                    { skill: "Demolitions", buff: 10 },
                    { skill: "Demolitions: Disposal", buff: 10 },
                    //ROGUE
                    { skill: "Streetwise", buff: 10}
                ]
            }
        }

    },
    
    
    BioMaintenenceEngineer: {
        name: "Bio-Maintenence Engineer",
        description: `
            A new breed of mechanic is the Bio-Maintenance Engineer, an expert in mecha and protoculture-powered devices. It is the duty of the Bio-Maintenance Engineer (BME) to service, repair, modify, and maintain mecha in perfect working order. The BME has an in-depth knowledge of protoculture and can adapt the Invid and Zentraedi energy cells for human use. He or she can also recharge energy clips for weapons, repair conventional vehicles, and may have a number of other mechanical and/or electrical skills.
            Although the character can fix and maintain mecha with astounding skill, he/she cannot pilot mecha. If he/she has the pilot motorcycle skill, he/she can pilot the cyclone only in motorcycle mode. Likewise, the alpha and beta can be piloted in jet mode if the character has the pilot jet skill. No mecha combat skills are available (not even the "basic" training category). This is not some odd oversight on the part of the military, but is intentional. It was feared that knowledge of mecha mechanics and protoculture combined with the knowledge of piloting mecha would make the Bio-Maintenance Engineer a security threat. A disgruntled BME soldier or spy could, theoretically, have easy access to mecha, steal one, and sell the mecha and his services on the black market. To help curb this, the RDF brass made the decision to prohibit a BME from learning mecha piloting and mecha combat skills.
            `,
        requirements: {
            attributes: {
                "IQ": 8,
                "PS": 10
            }
        },
        levelXp: [1925, 3850, 7450, 14900, 21000, 31000, 41600, 53000, 73000, 103500, 139000, 189000, 239000, 289000, 339000],
        reqOccSkills:[
            { skill: "Repairing Mecha", buff: 0 },
            { skill: "Recognize Mecha Quality", buff: 0 },
            { skill: "Mechanical Engineer", buff: 20 },
            { skill: "Veritech Mechanics", buff: 20 },
            { skill: "Mecha Mechanics", buff: 15 },
            { skill: "Mecha Electronics", buff: 15 },
            { skill: "Weapon Systems", buff: 10 },
            { skill: "Computer Operation", buff: 10 },
            { skill: "W.P. Energy Pistol", buff: 0 }, 
            { skill: "W.P. Energy Rifle", buff: 0 }, 
          ]
          ,
        choiceOccSkills:[
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Basic", buff: 0 },
                    { skill: "Hand to Hand Combat: Expert", buff: 0 , cost: 2}
                ]
            }
        ],
        otherSkills: {
            count: 16,
            allowed: {
                categories: [
                    { category: "COMMUNICATIONS"},
                    { category: "DOMESTIC" },
                    { category: "ELECTRONIC", buff: 5 },
                    { category: "MECHANICAL", buff: 15, required: 2},
                    { category: "PHYSICAL" },
                    { category: "PILOT", exceptions: [
                        "Mecha: Battloid",
                        "Mecha: E.B.S.I.S.",
                        "Mecha: Cyclone",
                        "Mecha: Destroid",
                        "Mecha: Veritech",
                        "Mecha: Zentraedi Style Battle Pods"
                    ], buff: { "Ground": 10, "Air": 5 } },
                    { category: "PILOT RELATED" },
                    { category: "TECHNICAL" },
                    { category: "WEAPON PROFICIENCIES", exceptions: [ "W.P. Cyclone Weapon Systems" ] }
                ],
                specific: [
                    //MEDICAL
                    { skill: "First Aid" },
                    { skill: "Paramedic", cost: 2 },
                    //SCIENCE
                    { skill: "Mathematics: Basic" }, 
                    { skill: "Mathematics: Advanced" },
                ]
            }
        }

    },
    
    
    CommunicationsEngineer: {
        name: "Communications Engineer",
        description: `
            The communications engineer is the high-tech wizard who can link an entire world with sight and sound. This character has an in-depth knowledge of state-of-the-art communication systems, including satellite relays, laser transmissions, video telecasts, and surveillance. It is his or her job to establish and maintain communications on the battlefield and into space. The character can be a vital link to survival whether he/she is a field operator, a member of a reconnaissance team, or a deck officer on the bridge of a spaceship.
            The emphasis of this O.C.C. training is on communications and related skills; however, this is war, and the character is a soldier. Consequently, the communications engineer is also taught combat skills, and it is strongly suggested that he learn to pilot some form of mecha.
            The engineer can learn to pilot any one or two of the following mecha: VAF-6R Reconnaissance Alpha, VR-038 Light Cyclone or VR-052 Battler Cyclone, and/or the RDF or REF Gladiator, Excaliber, Raidar X, or Spartan. Unfortunately, the best possible mecha combat training is BASIC. For example: If Cyclone Mecha Combat is selected, only the Hand to Hand Bonuses from Cyclone Basic Training apply.
            Each mecha type selected will cost two "other" skills; one to pilot and one for basic mecha combat of that one specific type and model of mecha. Of course, these two mecha skills may be the difference between life and death in combat.
            `,
        requirements: {
            attributes: {
                "IQ": 10
            }
        },
        levelXp: [1925, 3850, 7450, 14900, 21000, 31000, 41600, 53000, 73000, 103500, 139000, 189000, 239000, 289000, 339000],
        reqOccSkills:[
            { skill: "Laser Communications", buff: 15 },
            { skill: "Radio: Basic", buff: 30 },
            { skill: "Radio: Scrambler", buff: 15 },
            { skill: "Radio: Satellite Relay", buff: 30 },
            { skill: "Surveillance Systems", buff: 10 },
            { skill: "Read Sensory Instruments", buff: 10 },
            { skill: "Computer Operation", buff: 15 },
            { skill: "W.P. Energy Rifle", buff: 0 },  // Assuming buff is not specified for this skill
            { skill: "Hand to Hand: Basic", buff: 0 }  // Assuming buff is not specified for this skill
          ]
          ,
        choiceOccSkills:[
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Basic", buff: 0 },
                    { skill: "Hand to Hand Combat: Expert", buff: 0 , cost: 2}
                ]
            }
        ],
        otherSkills: {
            count: 0,
            allowed: {
                categories: [
                    { category: "COMMUNICATIONS", buff: 10 }, 
                    { category: "DOMESTIC" },
                    { category: "PHYSICAL"},
                    { category: "PILOT", exceptions: [
                        "Mecha: Battloid",
                        "Mecha: E.B.S.I.S.",
                        "Mecha: Cyclone",
                        "Mecha: Destroid",
                        "Mecha: Veritech",
                        "Mecha: Zentraedi Style Battle Pods"
                    ]},
                    { category: "PILOT RELATED", buff: 10},
                    { category: "TECHNICAL", buff: 5 },
                    { category: "WEAPON PROFICIENCIES", exceptions: [ "W.P. Cyclone Weapon Systems" ] }
                    
                ],
                specific: [
                    //ELECTIRCAL
                    { skill: "Basic Electronics", buff: 5 },
                    { skill: "Electrical Engineer", buff: 5, cost: 3 },
                    //MECHANICAL
                    { skill: "Automotive Mechanics" },
                    { skill: "Aircraft Mechanics" },
                    { skill: "Basic Mechanics" },
                    { skill: "Computer Repair" },
                    //MEDICAL
                    { skill: "First Aid" },
                    //SCIENCE
                    { skill: "Mathematics: Basic" }, 
                    { skill: "Mathematics: Advanced" }
                ]
            }
        }

    },
    
    
    FieldScientist: {
        name: "Field Scientist",
        description: `
            The REF field scientist is very much an extension of the RDF field scientist. The character is an intelligent, inquisitive person who craves both knowledge and adventure. A "jack-of-all-trades," the scientist uses his varied skills for analysis, investigation, identifying and cataloging alien specimens, and for developing new concepts and applications for robotechnology.
            The intergalactic Robotech expedition and encountering of alien life and cultures has made the necessity of having scientists among the REF troops critical. A field scientist will be a member of most REF outposts, expeditions, and reconnaissance patrols. As with the communications engineer, it is wise for the scientist to master at least one mecha. However, the character also suffers similar restrictions. He can only learn to pilot a VAF-6R Reconnaissance Alpha, VR-038 Light Cyclone, and/or RDF or REF Gladiator, Excaliber, or Raidar X. The best possible mecha combat training is BASIC. Each mecha type/model selected will cost two "other" skill selections; one to learn to pilot that specific mecha and one for basic mecha combat (the player must spend the two skill selections to provide the character with any proficiency with a mecha).
            `,
        requirements: {
            attributes: {
                "IQ": 12
            }
        },
        levelXp: [2140, 4280, 8560, 17520, 25520, 35520, 50520, 71000, 96100, 131200, 181300, 231400, 281500, 341600, 401700],
        reqOccSkills:[
            { skill: "Computer Operation", buff: 15 },
            { skill: "Computer Programming", buff: 10 },
            { skill: "Medical: Paramedic", buff: 10 },  // Assuming buff is not specified for this skill
            { skill: "Mathematics: Basic", buff: 10 },
            { skill: "Mathematics: Advanced", buff: 10 },
            { skill: "Pilot Automobile", buff: 5 },
            { skill: "W.P. Energy Rifle", buff: 0 },  // Assuming buff is not specified for this skill
            { skill: "Hand to Hand: Basic", buff: 0 }  // Assuming buff is not specified for this skill
          ]
          ,
        choiceOccSkills:[
            {
                count: 1,
                choices: [
                    { skill: "Medical: Paramedic", buff: 10 },
                    { skill: "Medical Doctor", buff: 10 , cost: 2}
                ]
            },
            {
                count: 1,
                choices: [
                    { skill: "Hand to Hand Combat: Basic", buff: 0 },
                    { skill: "Hand to Hand Combat: Expert", buff: 0 , cost: 1},
                    { skill: "Hand to Hand Combat: Martial Arts", buff: 0 , cost: 2},
                ]
            }
        ],
        otherSkills: {
            count: 18,
            allowed: {
                categories: [
                    { category: "COMMUNICATIONS", buff: 5 },
                    { category: "DOMESTIC" },
                    { category: "ELECTRICAL", buff: 5 },
                    { category: "MECHANICAL", buff: 5 },
                    { category: "MEDICAL", buff: 10},
                    { category: "PHYSICAL" },
                    { category: "PILOT", exceptions: [
                        "Mecha: Battloid",
                        "Mecha: E.B.S.I.S.",
                        "Mecha: Cyclone",
                        "Mecha: Destroid",
                        "Mecha: Veritech",
                        "Mecha: Zentraedi Style Battle Pods"
                    ]},
                    { category: "PILOT RELATED" },
                    { category: "ROGUE" },
                    { category: "SCIENCE", buff: 15 },
                    { category: "TECHNICAL", buff: 10 },
                    { category: "WEAPON PROFICIENCIES", exceptions: [ "W.P. Cyclone Weapon Systems" ] },
                    { category: "WILDERNESS", buff: 3}
                ],
                specific: [
                    //ESPIONAGE/MILITARY
                    { skill: "Land Navigation" },
                    { skill: "Wilderness Survival" },
                ]
            }
        }

    },
    
    
}

module.exports = [
    Occupations.VeritechPilot,
    Occupations.DestroidPilot,
    Occupations.CycloneRider,
    Occupations.ZentraidiWarrior,
    Occupations.MilitarySpecialist,
    Occupations.BioMaintenenceEngineer,
    Occupations.Communications,
    Occupations.FieldScientist
];