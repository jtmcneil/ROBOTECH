module.exports = [

    // BME
    {
        name: "Repairing Mecha",
        description: "Enables the character to build, repair, custom modify, and maintain all types of mecha. This includes restoring M.D.C. armor, replacing damaged limbs, repairing weapons and parts, and adapting energy cells. Repair penalties apply depending on the complexity: -30% without Mecha Electronics, -10% without Electrical Engineer skill, -25% for limb replacement, -10% for sensory equipment, -5% for aircraft construction, -20% for V.T.O.L. systems, -25% for propulsion systems, -20% for weapon systems, -5% for electrical wiring, -5% for adapting energy cells, -15% for protoculture energy systems, -20% for M.D.C. armor replacement, -10% for original design modifications, -20% for rush jobs, -10% for every 20 hours without sleep, -10% for improper tools. Time requirements vary: simple maintenance 10-20 minutes, adapting energy cells 1-2 hours, equipment repairs 1-8 hours, major engine work 8-48 hours, weapon system repairs 2-16 hours, M.D.C. armor replacement 2 hours per 10 M.D.C., limb replacement 10-12 hours under ideal conditions, longer in the field.",
        category: "BME",
        basePercent: 55,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Recognize Mecha Quality",
        description: "The character is adept at evaluating the quality, condition, and capabilities of mecha, veritech, or battloid units through visual inspection. A first-hand examination provides a base skill of 50% + 5% per level of experience. Observing from a distance provides a base skill of 20% + 5% per level of experience. This skill allows the character to estimate the vehicle's M.D.C., speed, maneuverability, weaponry, and other capabilities.",
        category: "BME",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: []
    },

    // COMMUNICATIONS
    {
        name: "Cryptography",
        description: "Skill in recognizing, designing, and cracking secret codes and messages. After ten minutes of studying a code, the character can attempt to decipher it with a -10% chance. Otherwise, two hours of study are required before each additional attempt.",
        category: "COMMUNICATIONS",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Laser",
        description: "Provides the character with in-depth knowledge of laser communication systems.",
        category: "COMMUNICATIONS",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Optic Systems",
        description: "Covers a wide variety of optic systems, including video and optical enhancement devices, as well as laser optics. Includes understanding optical readings, recording, transmission, and use of special equipment like thermo-imagers, passive light intensifiers, infrared, ultraviolet, etc.",
        category: "COMMUNICATIONS",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Radio: Basic",
        description: "Knowledge of operation and maintenance of field radios, walkie-talkies, wire laying, installation, radio procedure, communication security, visual signs/communications, and Morse code.",
        category: "COMMUNICATIONS",
        subCategory: "Radio",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Radio: Scramblers",
        description: "Training in the use of electronic masking, scrambling (and unscrambling) equipment, and codes for increased security.",
        category: "COMMUNICATIONS",
        subCategory: "Radio",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Radio: Satellite Relay",
        description: "Understanding of methods and operation of satellite transmissions.",
        category: "COMMUNICATIONS",
        subCategory: "Radio",
        basePercentage: 25,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Surveillance Systems",
        description: "Study and understanding of the operation, methods, and techniques involved in the use of surveillance systems. Includes motion detectors, simple/complex alarm systems, video/camera equipment, amplified sound systems, miniature listening devices (bugs, telephone tapping), recording methods, and some optical enhancement systems (specifically as they relate to camera lenses). Requires: Basic electronics or electrical engineering. Photography skills, prowl, and investigative skills may also be useful, but not required. Base Skill: 40% + 5% per level of experience.\n\nTailing, or following someone without their knowledge, is another form of surveillance. This also includes stake-out procedures. A failed surveillance roll indicates that the tail was spotted and the subject is aware of being observed/followed. A failed roll in the use of equipment indicates a ruined or garbled recording/film (not usable) or malfunction. Bugging equipment can be easily located or noticed during the course of casual activity if a character fails his surveillance roll while planting it.",
        category: "COMMUNICATIONS",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: ["Basic Electronics", "Electrical Engineering"] //TODO: This is an OR, not an AND
    },
    {
        name: "T.V./Video",
        description: "Understanding of the techniques involved in video and audio, filming, editing, special effects transmissions and equipment. Base Skill: 40% + 5% per level of experience. Spending two skills on this one skill area makes the character of professional film quality/abilities. A one-time bonus of 10% applies in this case.",
        category: "COMMUNICATIONS",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },


    // DOMESTIC
    {
        name: "Cook",
        description: "Skill in selecting, planning, and preparing meals. A cooking roll failure means that the cooked food is either inedible (burnt!) or distasteful. Base Skill: 50% + 8% per level of experience. Spending two skill selections on this one skill area makes the character of professional quality. One-time bonus of 10% applies in this case only.",
        category: "DOMESTIC",
        basePercentage: 50,
        levelBonus: 8,
        requiredSkills: []
    },
    {
        name: "Dance",
        description: "A practiced skill in the art of dancing. Base Skill: 40% + 6% per level of experience. Spending two skills will produce professional quality dancing skill. One-time bonus of 15% if this is the case.",
        category: "DOMESTIC",
        basePercentage: 40,
        levelBonus: 6,
        requiredSkills: []
    },
    {
        name: "Fish",
        description: "Fundamental methods and enjoyment of the relaxing sport of fishing. Includes knowledge of using lures, baits, poles, line, and cleaning/preparation of fish for eating. Base Skill: 60% + 5% per level of experience.",
        category: "DOMESTIC",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Sew",
        description: "Practiced skill with needle and thread, for mending, layout, cutting, sewing simple patterns, and minor alterations. Not a tailoring ability unless two skills are spent. Base Skill: 40% + 5% per level of experience.",
        category: "DOMESTIC",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Sing",
        description: "Simple ability to read music and carry a pleasant tune. Base Skill: 40% + 5% per level of experience. The character's singing ability is nice but not of professional quality unless two skills are spent. Add a 20% bonus if this is done.",
        category: "DOMESTIC",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },


    //ELECTRICAL
    {
        name: "Basic Electronics",
        description: "Rudimentary understanding of the principles of electricity, simple circuits, wiring, and basic repair of appliances. Can read schematics.",
        category: "ELECTRICAL",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Electrical Engineer",
        description: "Knowledge of electricity, including diagnosing and locating electrical problems. Can assemble electrical equipment. Can attempt to bypass security systems and burglar alarms at a -25% penalty; +10% bonus if Surveillance Systems is also taken. Note: Requires Basic and Advanced Mathematics.",
        category: "ELECTRICAL",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: ["Basic Mathematics", "Advanced Mathematics"] // TODO OR not AND
    },
    {
        name: "Mecha Electronics",
        description: "First-hand knowledge of electrical systems in RDF and REF mecha. Understands their interaction with protoculture and the intricacies of Robotechnology. Skills in other electrical systems do not apply to mecha.",
        category: "ELECTRICAL",
        basePercentage: 35,
        levelBonus: 5,
        requiredSkills: []
    },

    // ESPIONAGE/MILITARY
    {
        name: "Detect Ambushes",
        description: "Enables the character to spot locations and terrain suitable for ambushes, and recognize guerrilla tactics used by enemies. Base Skill: 50% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Detect Concealment",
        description: "Allows the character to identify camouflage, concealed huts, buildings, vehicles, and construct unobtrusive shelters. Base Skill: 40% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Disguise",
        description: "Skill in altering appearances using makeup, wigs, and special effects. Base Skill: 40% + 3% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 40,
        levelBonus: 3,
        requiredSkills: []
    },
    {
        name: "Escape Artist",
        description: "Enables the character to escape restraints and conceal small objects. Base Skill: 30% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Forgery",
        description: "Skill in creating false copies of official documents, signatures, and IDs. Base Skill: 30% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Intelligence",
        description: "Training in reconnaissance, analyzing enemy information, and handling prisoners and documents. Base Skill: 45% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Impersonation",
        description: "Ability to convincingly impersonate a type of soldier or specific individual using disguise and language. Base Skill: 40% for general impersonation, 20% for specific individuals + 4% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 40,
        levelBonus: 4,
        requiredSkills: []
    },
    {
        name: "Interrogation",
        description: "Skill in questioning prisoners, captives, and informers effectively. Base Skill: 40% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Land Navigation",
        description: "Ability to navigate over land by recognizing landmarks, estimating distance, and other techniques. Base Skill: 45% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Pick Locks",
        description: "Skill in picking and opening basic tumbler type locks. Base Skill: 35% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 35,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Pick Pockets",
        description: "Skill in removing items from a person without their knowledge. Base Skill: 30% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Sniper",
        description: "Special training in long-range rifle firing and marksmanship. Requires proficiency in semi-automatic or bolt-action rifles. Base Skill: Add +2 to strike for sniper shots.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 0,
        levelBonus: 0,
        requiredSkills: ["W.P. Rifle", "W.P. Semi & Fully Automatic Rifle"] // TODO OR nor AND
    },
    {
        name: "Tracking",
        description: "Skill in identifying and following tracks left by humans, animals, or vehicles. Base Skill: 35% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 35,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Wilderness Survival",
        description: "Techniques for obtaining water, food, shelter, and assistance in wilderness environments. Base Skill: 40% + 5% per level of experience.",
        category: "ESPIONAGE/MILITARY",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },

    // FIELD SCIENTIST

    {
      name: "Recognizing Alien Artifacts",
      category: "FIELD SCIENTIST",
      description: "Enables the scientist to recognize an item not of Earth/human origin and surmise its probable purpose/use. Can recognize Robotech Master, Zentraedi, and Invid technology/items.",
      baseSkill: "50%",
      perLevelIncrease: "4%",
      requiredSkills: []
    },
    
    {
      name: "Use Alien Technology",
      category: "FIELD SCIENTIST",
      description: "Allows the scientist to analyze and attempt to use devices of alien design. May involve integrating it into human-made devices, modifying it, or using it as is (e.g., alien weapons, vehicles).",
      baseSkill: "22%",
      perLevelIncrease: "5%",
      requiredSkills: []
    },

    // MECHANICAL
    {
        name: "Automotive Mechanics",
        description: "Ability to repair, rebuild, modify, and redesign conventional vehicles with internal combustion engines. Includes body work, turbine engines, and diesel truck engines. Base Skill: 50% + 5% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Aircraft Mechanics",
        description: "Understanding and ability to repair, rebuild, modify, and redesign conventional aircraft, excluding Veritech Fighters. Includes single and twin-engine airplanes, jets, helicopters, and shuttle craft. Base Skill: 45% + 5% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Armorer",
        description: "Military weapons maintenance, repair, modification, and installation, from assault rifles to missile systems. Base Skill: 35% + 5% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 35,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Basic Mechanics",
        description: "Understanding of basic machinery operations and maintenance for motorcycles, automobiles, and similar vehicles. Base Skill: 30% + 4% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 30,
        levelBonus: 4,
        requiredSkills: []
    },
    {
        name: "Computer Repair",
        description: "Knowledge of repairing internal electronics of computers and related devices. Base Skill: 40% + 5% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Locksmith",
        description: "Study of lock designs, ability to repair, build, modify, and pick locks. Base Skill: 25% + 5% per level of experience. +5% bonus if Electronics Skill is also taken.",
        category: "MECHANICAL",
        basePercentage: 25,
        levelBonus: 5,
        requiredSkills: ["Electronics"]
    },
    {
        name: "Mecha Mechanics",
        description: "Comprehensive knowledge to repair, build, and modify Mecha, including various models like Logan, AJACS, and Battloids. Base Skill: 40% + 5% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Mechanical Engineer",
        description: "Training in machinery design, operation, maintenance, and modification. Base Skill: 45% + 5% per level of experience. +5% bonus to Locksmith and Surveillance Systems skills.",
        category: "MECHANICAL",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Veritech Mechanics",
        description: "Specialized skill in repairing, building, and maintaining transformable mecha, including Veritech Fighters and similar models. Base Skill: 30% + 5% per level of experience.",
        category: "MECHANICAL",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: []
    },

    //MEDICAL
    {
        name: "Criminal Sciences/Forensics",
        description: "Basic knowledge of police skills, including criminal law, fingerprinting, ballistics, and forensic medicine for determining time and cause of death. Requires Biology, Chemistry, Chemistry: Analytical, and Mathematics. Base Skill: 35% + 5% per level of experience.",
        category: "MEDICAL",
        basePercentage: 35,
        levelBonus: 5,
        requiredSkills: ["Biology", "Chemistry", "Chemistry: Analytical", "Mathematics"] //TODO AND not OR
    },
    {
        name: "First Aid",
        description: "Rudimentary medical treatment including bandaging wounds, stopping bleeding, CPR/artificial respiration, and basic drug administration. Base Skill: 50% + 6% per level of experience.",
        category: "MEDICAL",
        basePercentage: 50,
        levelBonus: 6,
        requiredSkills: []
    },
    {
        name: "Medical Doctor",
        description: "Ph.D. with M.S. in medical practice. Includes clinical skills, ethics, pathology, pharmacology, and surgical procedures. Base Skill: 70/60% + 5% per level of experience.",
        category: "MEDICAL",
        basePercentage: 70,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Paramedic",
        description: "Advanced emergency medical treatment including all aspects of First Aid, setting broken bones, suturing wounds, use of oxygen and emergency equipment, and advanced drug use. Base Skill: 50% + 6% per level of experience.",
        category: "MEDICAL",
        basePercentage: 50,
        levelBonus: 6,
        requiredSkills: []
    },
    {
        name: "Pathology",
        description: "Deals with diseases, causes, symptoms, tissue injury, and repair. Requires Chemistry. Base Skill: 45% + 5% per level of experience.",
        category: "MEDICAL",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: ["Chemistry"]
    },

    //PHYSICAL TODO: Some of these skills give bonuses to attributes and SDC
    {
        name: "Hand to Hand Combat: Basic",
        description: "Basic military or self-defense fighting techniques taught in basic training or self-defense classes. Students learn elementary methods of attack and self-defense. Counts as one skill. See the combat section for listing of specific abilities.",
        category: "PHYSICAL",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: []
    },
    {
        name: "Hand to Hand Combat: Expert",
        description: "An advanced form of self-defense and unarmed combat usually taught to commandos. Counts as two skills. See the combat section for listing of specific abilities.",
        category: "PHYSICAL",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: []
    },
    {
        name: "Hand to Hand Combat: Martial Arts",
        description: "An advanced form of oriental fighting skill (karate, kung-fu, etc.) that teaches advanced hand to hand combat techniques. Counts as three skills (except for the Military Specialist and special conditions for upgrading Hand to Hand Combat). See the combat section for listing of specific abilities.",
        category: "PHYSICAL",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: []
    },
    {
        name: "Body Building & Weight Lifting",
        description: "By working out with weights and body building machines, the character increases body strength and muscle. +2 to Physical Strength (P.S.), +10 on Structural Damage Capacity (S.D.C.).",
        category: "PHYSICAL",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: []
    },
    {
        name: "Boxing",
        description: "The classic art of fighting with fists. Training helps build the body and develop reflexes. Skilled boxers will Automatically Knock-out opponents on a natural twenty for 1D6 melees rounds. Unlike normal Knockout/Stun, this does NOT have to be declared before the strike roll. Provides +1 to Parry/Dodge, +1 to Roll with Punch/Fall, +2 to Physical Strength (P.S.) and +3D6 on Structural Damage Capacity (S.D.C.).",
        category: "PHYSICAL",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: []
    },
    {
        name: "Climbing",
        description: "Knowledge of the tools and techniques for climbing up sheer surfaces. Players should roll once for every 20 feet of a vertical climb. Every skilled climber gets a second roll to recover his/her hold. Base Skill: 50% + 8% per level of experience.",
        category: "PHYSICAL",
        basePercentage: 50,
        levelBonus: 8,
        requiredSkills: []
    },
    {
        name: "Rappelling",
        description: "Specialized rope climbing skill used in descending from helicopters, scaling walls, and cliff facings. For game purposes, rappelling will include ascending and descending climbs. Minimum base effectiveness is 30% + 5% per level of experience. A failed roll means a slip or fumble; roll again to regain hold or fall.",
        category: "PHYSICAL",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Fencing",
        description: "The ancient arts of Hand to Hand Weapons are learned from fencing teachers. This includes not only Olympic-style fencing with foil, epee or saber, but also Kendo (use of the Samurai sword) and other weapons. Adds a bonus of +1 to strike and parry when combined with W.P. Sword. Note: Paired Weapons is a separate skill. See the W.P. Tables in the Combat Section for details.",
        category: "PHYSICAL",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Gymnastics",
        description: "Learning to do falls, rolls, tumbles, cartwheels, and to work on rings and parallel bars. Characters with Gymnastics can leap 4 feet up or 4 feet across, with an additional 2 feet per level. Provides the following abilities: 60% + 5% per level Sense of Balance, 70% + 4% per level Climb Rope, 20% + 6% per level Climbing (or adds a bonus of +10% to a climb skill), 70% + 8% per level Back Flip, 30% + 5% per level Prowl. +1 to Roll with Punch/Fall, +1 to Physical Strength (P.S.), +1 to Physical Prowess (P.P.).",
        category: "PHYSICAL",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Prowl",
        description: "This skill helps the character to move with stealth; quietly, slowly and carefully. Techniques include balance and footing, short steps and pacing, rifle positioning, prone positions for low visibility, and crawling. A failed Prowl roll means that the character has been seen or heard. If the Prowl is successful, then the character is not seen and may make a Sneak Attack. Base Skill: 40% + 5% per level of experience.",
        category: "PHYSICAL",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Swimming",
        description: "The rudimentary skill of keeping afloat, diving, lifesaving, and swimming techniques. Base Skill: 50% + 8% per level of experience. The percentile number indicates the overall quality of form as skill of execution. A special bonus of +1 to parry and dodge while in water applies. Note: A character can swim a distance equal to 3 times his Physical Strength (P.S.) in yards/meters per melee. This pace can be maintained for a length of time equal to his Physical Endurance (P.E.) in melees.",
        category: "PHYSICAL",
        basePercentage: 50,
        levelBonus: 8,
        requiredSkills: []
    },
    {
        name: "S.C.U.B.A",
        description: "The letters S.C.U.B.A. stand for Self-Contained Underwater Breathing Apparatus. Characters learn the methods of skin diving, and underwater swimming; and the use of oxygen tanks/apparatus, mask and flippers. Base Skill: 50% + 5% per level of experience and reflects the degree of skill and expertise at S.C.U.B.A. Note: A character can swim a distance equal to 2 times his Physical Strength (P.S.) in yards/meters per melee. This pace can be maintained for a length of time equal to the character's Physical Endurance (P.E.) in melees.",
        category: "PHYSICAL",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: []
    },
    {
        name: "Wrestling",
        description: "As taught in High Schools and Colleges, wrestling is more of a sport than a combat skill, but it does provide useful combat training. Provides Pin/Incapacitate on a roll of 18, 19 or 20, Crush/Squeeze does 1D4 damage, Body Block/Tackle does 1D4 damage and opponent must Dodge or Parry to avoid being knocked down. +1 to Roll with Punch/Fall, +1 to Physical Strength (P.S.), +1 to Physical Endurance (P.E.), +4D6 on Structural Damage Capacity (S.D.C.).",
        category: "PHYSICAL",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: []
    },
    
    //PILOT 
    {
        name: "Automobile",
        description: "Manual & Automatic transmission, includes dune buggies and jeeps. Base Skill: 80% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: 80,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Mecha: Battloid",
        description: "Fundamentals of maneuvering giant Battloids, focusing on piloting. Can operate any Southern Cross battloid. Base Skill: 60% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Mecha: E.B.S.I.S.",
        description: "Identical to battloid piloting but applies to Soviet Battloids only. Base Skill: 55% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: 55,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Mecha: Cyclone",
        description: "Piloting and transformation skills for the man-sized Cyclone mecha unit. Base Skill: 50% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Mecha: Destroid",
        description: "Fundamentals of piloting Destroids; one specific model/type per skill selection. Base Skill: 50% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Mecha: Veritech",
        description: "Piloting skills for transformable Veritech mecha, focusing on transformation and mode operation. Base Skill: REF Veritechs: 50%+5% per level of experience. RDF Veritechs(VF): 40% +5% per level of experience. Southern Cross Veritechs: 35% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: [ "Jet" ],
      },
      {
        name: "Mecha: Zentraedi Style Battle Pods",
        description: "Piloting skill for REF Battle Pods, simpler but different from Earth mecha. Base Skill: 50% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Mecha Combat Basic: Alpha",
        description: "Basic combat training for the Alpha mecha type. enables the character to use the mecha well, but not quite at peak efficiency.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [ "Mecha: Veritech" ],
      },
      {
        name: "Mecha Combat Basic: Beta",
        description: "Basic combat training for the Beta mecha type. enables the character to use the mecha well, but not quite at peak efficiency.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [ "Mecha: Veritech" ],
      },
      {
        name: "Mecha Combat Basic: Cyclone",
        description: "Basic combat training for the Cyclone mecha type. enables the character to use the mecha well, but not quite at peak efficiency.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "Mecha Combat Basic: Vindicator",
        description: "Basic combat training for the Vindiactor mecha type. enables the character to use the mecha well, but not quite at peak efficiency.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [ "Mecha: Veritech" ],
      },
      {
        name: "Mecha Combat: Alpha",
        description: "Specific combat training for the Alpha mecha type, essential for peak combat effectiveness.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [ "Mecha: Veritech" ],
      },
      {
        name: "Mecha Combat: Beta",
        description: "Specific combat training for the Beta mecha type, essential for peak combat effectiveness.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [ "Mecha: Veritech" ],
      },
      {
        name: "Mecha Combat: Cyclone",
        description: "Specific combat training for the Cyclone mecha type, essential for peak combat effectiveness.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "Mecha Combat: Vindicator",
        description: "Specific combat training for the Vindicator mecha type, essential for peak combat effectiveness.",
        category: "PILOT",
        subCategory: "Mecha",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [ "Mecha: Veritech" ],
      },
      {
        name: "Military Hover Cycle",
        description: "Skill of riding the Southern Cross hover cycle, known for speed and agility. Base Skill: 50% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: 50,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Military Hover Vehicle",
        description: "Skill includes a variety of trucks and armored vehicles once used by the Southern Cross. Base Skill: 54% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: 54,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Jet Pack and Space Booster Pack",
        description: "Specialized uncommon skill requiring Southern Cross body armor. Base Skill: 45% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 45,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Motorcycle",
        description: "Skill of riding motorcycles, including control and maneuverability. Base Skill: 60% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: 60,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Truck: Small",
        description: "Manual or automatic transmission; includes pickup trucks, small cargo trucks, vans, and trailers. Base Skill: 60% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: 60,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Truck: Large",
        description: "Piloting large, manual transmission transport trucks with high weight capacity. Base Skill: 42% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: 42,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Tank",
        description: "Piloting armored assault vehicles and heavy construction vehicles.",
        category: "PILOT",
        subCategory: "Ground",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "Titan Transport",
        description: "Piloting the all-terrain mecha assault unit, known as GMU. Base Skill: 40% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Airplane",
        description: "Piloting old propeller, single and twin engine airplanes. Base Skill: 70% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 70,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Helicopter",
        description: "Skill of piloting various types of helicopters, from observation to assault. Base Skill: 60% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 60,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Jet",
        description: "Piloting fan-jet, commercial jet, and jet fighter aircraft. Base Skill: 60% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 60,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Lancer Space Fighter",
        description: "Skill of piloting the Lancer space fighter used in space combat. Base Skill: 60% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 60,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Space Shuttle",
        description: "Piloting large spacecraft like the Garfish and Ikazuchi carriers, including space shuttle operations. Base Skill: 60% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 60,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Spacecraft",
        description: "Piloting skill applicable to large Earth spacecraft, with a 5% bonus to Navigation: Space skill. Base Skill: 50% +5% per level of experience.",
        category: "PILOT",
        subCategory: "Air",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: ["Navigation: Space"],
      },
      {
        name: "Boats: Sail Type",
        description: "Skill of piloting sailboats, including handling and maneuvering. Base Skill: 80% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Water",
        basePercentage: 80,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Boats: Motor Type",
        description: "Skill of piloting motorized boats, both large and small, excluding ships. Base Skill: 70% +4% per level of experience.",
        category: "PILOT",
        subCategory: "Water",
        basePercentage: 70,
        levelBonus: 4,
        requiredSkills: [],
      },

      //PILOT RELATED
      {
        name: "Navigation",
        description: "Skills in map reading, star charts, course computation, following landmarks, and use of navigational equipment. Includes air, land and water navigation, as well as piloting by instruments alone. Base Skill: 60% +5% per level of experience. A failed roll means the pilot is off course. Roll 2D6 x 10 for aircraft, 4D6 x 10 for Veritech Fighters, and 1D6 x 10 for land vehicles to determine how many miles/kilometers they are off course by. Roll for every hour that one is off course.",
        category: "PILOT RELATED",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: ["Basic Mathematics", "Read Sensory Instruments"],
      },
      {
        name: "Navigation: Space",
        description: "Skills in map reading, course computation, following landmarks, and use of navigational equipment, but focusing on space travel using stars and sensory equipment. Base Skill: 60% +5% per level of experience.",
        category: "PILOT RELATED",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: ["Basic Mathematics", "Read Sensory Instruments"],
      },
      {
        name: "Read Sensory Instruments",
        description: "Understanding, operating, and interpreting sensory data from conventional sensor devices like radar, sonar, motion detectors, and surveillance equipment. Base Skill: 40% +5% per level of experience. Characters without this skill cannot operate air vehicles, radar, or surveillance equipment effectively.",
        category: "PILOT RELATED",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Weapon Systems",
        description: "Complete understanding of weapon systems in vehicles and Mecha, including a variety of weapons like lasers, particle beams, auto cannons, and missile launchers. Special Bonus: +2 to strike. Base Skill: 70% +5% per level of experience. Characters without this skill can operate weapons only if skilled in piloting that vehicle, without strike bonuses or initiative.",
        category: "PILOT RELATED",
        basePercentage: 70,
        levelBonus: 5,
        requiredSkills: []
      },

      //ROGUE
      {
        name: "Concealment",
        description: "Practiced ability to hide something on one's body or in hand, usually by continually moving it around unnoticed. Objects must be no larger than 14 inches in height and length, 6 inches in width, and weigh 10 lbs or less. Larger items incur a -5% penalty. Base Skill: 20% +5% per level of experience.",
        category: "ROGUE",
        basePercentage: 20,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Palming",
        description: "Ability to make small objects like coins, keys, or knives disappear by concealing them in one's hand. Adds a +5% bonus to Pick Pockets skill. Base Skill: 25% +5% per level of experience.",
        category: "ROGUE",
        basePercentage: 25,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Pick Locks",
        description: "Knowledge of methods, techniques, and tools for picking/opening key and basic tumbler locks. Takes 1D6 melee rounds per attempt. Base Skill: 35% +5% per level of experience.",
        category: "ROGUE",
        basePercentage: 35,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Pick Pockets",
        description: "Skill to remove items from a person without their awareness. Failure means the item remains, with a 67% chance of detection. Base Skill: 30% +5% per level of experience.",
        category: "ROGUE",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Safe-Cracking",
        description: "Knowledge of safes, lock boxes, and security rooms, with methods for illegal entry. Can crack tumbler and combination locks, requiring skill rolls. Base Skill: 50% +2% per level of experience.",
        category: "ROGUE",
        basePercentage: 50,
        levelBonus: 2,
        requiredSkills: [],
      },
      {
        name: "Prowl",
        description: "Ability to move quietly and stealthily, avoiding detection. Base Skill: 40% +5% per level of experience.",
        category: "ROGUE",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Streetwise",
        description: "Understanding of urban street culture, recognizing gang members, understanding gang rituals and ethics, and knowing criminal hangouts. Base Skill: 30% +5% per level of experience.",
        category: "ROGUE",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: [],
      },

      //SCIENCE
      {
        name: "Astrophysics",
        description: "Knowledge of stellar astronomy and its connections to nuclear physics, quantum mechanics, relativity, and the origins of deep space phenomena like quasars and black holes. Requires basic and advanced Mathematics. Base Skill: 30% + 5% per level of experience.",
        category: "SCIENCE",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: ["Mathematics: Basic", "Mathematics: Advanced"], //TODO AND
      },
      {
        name: "Biology",
        description: "Basic understanding of cells, anatomy, physiology, evolution, and genetics. Includes the use of microscopes, cultivating bacteria, and classifying organisms. Base Skill: 40% + 5% per level of experience.",
        category: "SCIENCE",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Botany",
        description: "Study of plants, their classifications, and functions. Knowledge includes cross-fertilization, germination, and experimental plant growth. Base Skill: 40% + 5% per level of experience.",
        category: "SCIENCE",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Chemistry",
        description: "Understanding of chemical principles and laboratory procedures for analyzing and synthesizing compounds. Competence in chemical laboratory work. Base Skill: 60% + 5% per level of experience.",
        category: "SCIENCE",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Chemistry: Analytical",
        description: "Theory and practice of chemical engineering for analysis and practical application of compounds. High proficiency in laboratory equipment use and chemical synthesis. Requires basic and advanced Mathematics. Base Skill: 50% + 5% per level of experience.",
        category: "SCIENCE",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: ["Mathematics: Basic", "Mathematics: Advanced"], //TODO AND
      },
      {
        name: "Mathematics: Basic",
        description: "Fundamental mathematics including addition, subtraction, multiplication, division, fractions, and algebra. Base Skill: 80% + 4% per level of experience.",
        category: "SCIENCE",
        basePercentage: 80,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Mathematics: Advanced",
        description: "Advanced mathematics encompassing geometry, trigonometry, calculus, and techniques for higher mathematics. Base Skill: 64% + 4% per level of experience.",
        category: "SCIENCE",
        basePercentage: 64,
        levelBonus: 4,
        requiredSkills: [],
      },

      //TECHNICAL
      {
        name: "Computer Operation",
        description: "Knowledge of computer hardware and peripherals, including keyboards, printers, and modems. Ability to follow computer directions, enter and retrieve information, and perform basic operations. Does not include programming. Base Skill: 60% + 5% per level of experience.",
        category: "TECHNICAL",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Computer Programming",
        description: "Designing, programming, debugging, and testing computer programs and software. Requires proficiency in Computer Operation. Base Skill: 40% + 5% per level of experience.",
        category: "TECHNICAL",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: ["Computer Operation"],
      },
      {
        name: "Demolitions",
        description: "Advanced knowledge of explosives and detonation devices for demolition purposes. Includes expertise with mines, dynamite, plastics, nitro, and blasting caps, as well as strategic mine and booby trap placement. Base Skill: 60% + 5% per level of experience. A failed roll results in a dud; no explosion.",
        category: "TECHNICAL",
        subCategory: "Demolition",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Demolitions: Disposal",
        description: "Skill in safely defusing unexploded mines, bombs, explosive booby traps, dud artillery rounds, and other explosive devices. Base Skill: 60% + 5% per level of experience. A failed roll means the item explodes without warning.",
        category: "TECHNICAL",
        subCategory: "Demolition",
        basePercentage: 60,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Photography",
        description: "Taking black and white or color still photographs. Knowledge includes loading, developing, and enlarging film. Base Skill: 50% + 5% per level of experience.",
        category: "TECHNICAL",
        basePercentage: 50,
        levelBonus: 5,
        requiredSkills: [],
      },

      //WEAPON PROFICIENCIES
      {
        name: "W.P. Blunt",
        description: "Skill with blunt weapons like maces, hammers, cudgels, pipes, staffs, and clubs. Provides +1 to strike and parry at level one, an additional +1 to strike and parry at level four, and +1 to parry at level eight.",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Chain",
        description: "Skill with chain weapons including lengths of chain, mace and chain, flail, nunchaku, etc. Provides +1 to strike at level one, an additional +1 to strike and parry at level four, and +1 to parry at level eight.",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Knife",
        description: "Combat skill with all types of knives. Provides +1 to strike when thrown at level one, +1 to strike and parry at level two, +1 to parry at level five, +1 to strike at level six, and +1 to strike again at level nine.",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Sword",
        description: "Combat skill with large and small swords. Provides +1 to strike and parry at level one, an additional +1 to strike and parry at level four, and again at level eight.",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Revolver",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with revolvers of various types. Provides bonuses to strike and aimed shots with revolvers. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Automatic Pistol",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with automatic pistols. Provides bonuses to quick draw, aimed shots, and rapid fire with automatic pistols. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Semi & Fully Automatic Rifle",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with semi-automatic and fully automatic rifles. Provides bonuses to aimed shots, bursts, and handling of these firearms. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Rifle",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with rifles of various types. Provides bonuses to aimed shots, long range shots, and handling of rifles. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Sub-Machinegun",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with sub-machineguns (SMGs). Provides bonuses to burst fire, close quarters combat, and handling SMGs. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Heavy",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Includes the use of grenade launchers, rocket launchers, the RL-6 rocket cannon, and other bazooka-like weapons. Provides bonuses to accuracy and handling heavy weaponry. Bonuses: +1 to strike. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Energy Pistol",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with energy pistols. Provides bonuses to energy blasts, quick draw, and aimed shots with energy pistols. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Energy Rifle",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Skill with energy rifles. Provides bonuses to energy blasts, aimed shots, and handling of energy rifles. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Gallant H-90",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. This skill covers the unique multi-configurations and damage capabilities of the Gallant H-90 weapon system. Bonuses: Varies by configuration, typically includes bonuses to strike and damage. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },
      {
        name: "W.P. Cyclone Weapon Systems",
        description: "MODERN WEAPON BONUS: Aimed: +3 to strike. Burst: +1 to strike. Wild: No bonus or penalty. Exclusive to cyclone riders, this skill enhances accuracy with standard cyclone weapons: CADS-1 Saber system, EP-37 60mm beam cannon, EP-40 rocket cannon, RL-6 rocket cannon, GR-97 forearm missile launcher, GR-103 mini-missile launcher, and missile launcher sidecar. Bonuses: +1 to strike with cyclone weapons. ",
        category: "WEAPON PROFICIENCIES",
        basePercentage: null,
        levelBonus: null,
        requiredSkills: [],
      },

      //WILDERNESS
      {
        name: "Archery",
        description: "The practiced use of bow and arrow and crossbow. Bonus to strike with bow and arrow/crossbow: +1 at level one, +1 to strike for every additional two levels of experience. Rate of Fire: Two shots at level one, and one additional shot for every two levels of experience. Short Bow: Range 420ft, 1D6 damage. Longbow: Range 700ft, 1D8 damage. Compound Bow: Range 800ft, 2D6 damage. Crossbow: Range 700ft, 1D8 damage. The skill also includes the ability to select the proper wood and make a quality bow. Base Skill to make a bow: 40% + 5% per level of experience. A failed roll results in a poorly crafted bow, -1 to strike, and a 50% chance of cracking when fired.",
        category: "WILDERNESS SKILLS",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Boat Building",
        description: "Enables the character to build rafts, rowboats, canoes, and large flatbed boats. Crafting times vary: small raft 1D6+1 hours, large raft 4D6 hours, canoe 2D6 days, rowboats 4D4 days, large flatbed boat 1D4 x 10 days. Time is doubled or tripled if trees must be cut down and wood prepared. Base Skill: 25% + 5% per level of experience. A failed roll results in leaks; repairable with a +10% bonus after 4D4 hours of patching.",
        category: "WILDERNESS",
        basePercentage: 25,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Carpentry",
        description: "Fundamental knowledge of working with wood, including building furniture and repairing wooden items. Base Skill: 30% + 5% per level of experience.",
        category: "WILDERNESS",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Identify Plants/Fruits",
        description: "Skill to recognize various plants and fruits, useful for gathering herbs and edible items. Base Skill: 25% + 5% per level of experience.",
        category: "WILDERNESS",
        basePercentage: 25,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Horsemanship",
        description: "Skill in riding, caring for, and recognizing horses. Includes riding/care/feeding, recognize quality/breed, jump, charge attack, horse attack, and raise/breeding horses. Base Skill: 40% + 4% per level of experience. Failure may result in falling off the horse during difficult maneuvers.",
        category: "WILDERNESS",
        basePercentage: 40,
        levelBonus: 4,
        requiredSkills: [],
      },
      {
        name: "Hunting",
        description: "Practiced skill in hunting, killing, and preparing animals for food or sport. Includes bonuses for W.P. Rifle, +2% to prowl, +5% to track animals, +5% to skin animals, and +5% to cook the catch.",
        category: "WILDERNESS",
        basePercentage: null,
        levelBonus: null, // No specific base skill increase mentioned
        requiredSkills: [],
      },
      {
        name: "Skin and Prepare Animal Hides",
        description: "Skill to skin animals and prepare/preserve/tan their hides for leather or fur. Adds +5% bonus to the sewing skill. Base Skill: 40% + 5% per level of experience.",
        category: "WILDERNESS",
        basePercentage: 40,
        levelBonus: 5,
        requiredSkills: [],
      },
      {
        name: "Track Animals",
        description: "Skill to identify and follow animal tracks, scent, spore, and habitat. Can estimate track age and direction. -20% penalty when tracking humans. Base Skill: 30% + 5% per level of experience.",
        category: "WILDERNESS",
        basePercentage: 30,
        levelBonus: 5,
        requiredSkills: [],
      },
]

