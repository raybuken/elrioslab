const collection = [
    //Elsword
    {
        character: 'Elsword',
        class: 'Knigth Emperor',
        alias: 'KE',
        effect: 'Tenacity Skill Damage',
        stages: [0.5,1.0,1.5],
        synergies: ['1st Path', 'Instinctual Movement', 'Bringer of Justice']
    },
    {
        character: 'Elsword',
        class: 'Rune Master',
        alias: 'RM',
        effect: 'Strength Skill Damage',
        stages: [0.5,1.0,1.5],
        synergies: ['2nd Path', 'Attribute Master', 'Magical Specialist']
    },
    {
        character: 'Elsword',
        class: 'Inmortal',
        alias: 'IM',
        effect: 'Bravery Skill Damage',
        stages: [0.5,1.0,1.5],
        synergies: ['3rd Path', 'Agile', 'Titan Slayer']
    },
    {
        character: 'Elsword',
        class: 'Genesis',
        alias: 'GN',
        effect: 'Hyper Active Skill Damage',
        stages: [3,4,5],
        synergies: []
    },

    //Aisha

    {
        character: 'Aisha',
        class: 'Aether Sage',
        alias: 'AeS',
        effect: 'Magical Attack Power',
        stages: [100,150,200],
        synergies: ['1st Path', 'Researcher', 'Attribute Master']
    },
    {
        character: 'Aisha',
        class: 'Oz Sorcerer',
        alias: 'OZ',
        effect: 'Physical/Magical Attack Power',
        stages: [50,75,100],
        synergies: ['2nd Path', 'Blessing of Mana', 'One Who Yearns']
    },
    {
        character: 'Aisha',
        class: 'Metamorphy',
        alias: 'MtM',
        effect: 'Physical Attack Power',
        stages: [100, 150, 200],
        synergies: ['3rd Path', 'Physical Specialist', 'Time and Space']
    },
    {
        character: 'Aisha',
        class: 'Lord Azoth',
        alias: 'LA',
        effect: 'Consumable Cooldown Decrease (Max 30%)',
        stages: [6,8,10],
        synergies: []
    },

    //Rena

    {
        character: 'Rena',
        class: 'Anemos',
        alias: 'AN',
        effect: 'Movement Speed',
        stages: [5, 6, 8],
        synergies: ['1st Path', 'Blessing of Spirit', 'Agile']
    },
    {
        character: 'Rena',
        class: 'Daybreaker',
        alias: 'DaB',
        effect: 'Jump Speed',
        stages: [5, 6, 8],
        synergies: ['2nd Path', 'Blessing of Spirit', 'Sharp']
    },
    {
        character: 'Rena',
        class: 'Twilight',
        alias: 'TW',
        effect: 'Action Speed',
        stages: [2, 3, 5],
        synergies: ['3rd Path', 'Blessing of Spirit', 'Physical Specialist']
    },
    {
        character: 'Rena',
        class: 'Prophetess',
        alias: 'PR',
        effect: 'All skill damage',
        stages: [0.5,0.75,1],
        synergies: []
    },


    //Raven

    {
        character: 'Raven',
        class: 'Furious Blade',
        alias: 'FB',
        effect: 'Active Skill',
        stages: [0.5, 1, 1.5],
        synergies: ['1st Path', 'Instinctual Movement', 'Agile']
    },
    {
        character: 'Raven',
        class: 'Rage Hearts',
        alias: 'RH',
        effect: 'Command Attack Damage',
        stages: [1, 1.5, 2],
        synergies: ['2nd Path', 'Magical Specialist', 'Fist Fight']
    },
    {
        character: 'Raven',
        class: 'Nova Imperator',
        alias: 'NI',
        effect: 'Damage increase in proportion to HP lost',
        stages: [2, 3, 4],
        synergies: ['3rd Path', "It's Fine Cuz It Hurts", 'Titan Slayer']
    },
    {
        character: 'Raven',
        class: 'Revenant',
        alias: 'RV',
        effect: 'Additional Damage',
        stages: [2,3,5],
        synergies: []
    },

    //Eve

    {
        character: 'Eve',
        class: 'Code: Ultimate',
        alias: 'CU',
        effect: 'Magical Attack Power %',
        stages: [0.5, 1, 1.5],
        synergies: ['1st Path', 'Nasod Research', 'Sharp']
    },
    {
        character: 'Eve',
        class: 'Code: Esencia',
        alias: 'CE',
        effect: 'Physical Attack Power %',
        stages: [0.5, 1, 1.5],
        synergies: ['2nd Path', 'Nasod Research', 'Researcher']
    },
    {
        character: 'Eve',
        class: 'Code: Sariel',
        alias: 'CS',
        effect: 'Physical/Magical Attack Power %',
        stages: [0.25, 0.5, 0.75],
        synergies: ['3rd Path', 'Nasod Research', 'Angel of the Battlefield']
    },
    {
        character: 'Eve',
        class: 'Code: Antithese',
        alias: 'CA',
        effect: 'Polarize (Max 45%)',
        stages: [0.4,0.8,1.2],
        synergies: []
    },

    //Chung

    {
        character: 'Chung',
        class: 'Comet Crusader',
        alias: 'CC',
        effect: 'Awakening Charge Speed',
        stages: [5, 6, 8],
        synergies: ['1st Path', 'Bringer of Justice', 'Attribute Master']
    },
    {
        character: 'Chung',
        class: 'Fatal Phantom',
        alias: 'FP',
        effect: 'Awakening Duration',
        stages: [5, 6, 8],
        synergies: ['2nd Path', 'Agile', 'Magical Specialist']
    },
    {
        character: 'Chung',
        class: 'Centurion',
        alias: 'CeT',
        effect: 'Damage dealt by Boss Monster',
        stages: [2, 3, 5],
        synergies: ['3rd Path', 'Researcher', 'Titan Slayer']
    },
    {
        character: 'Chung',
        class: 'Dius Aer',
        alias: 'DA',
        effect: 'Action speed',
        stages: [2,3,5],
        synergies: []
    },

    //Ara

    {
        character: 'Ara',
        class: 'Apsara',
        alias: 'Aps',
        effect: 'Physical Defense',
        stages: [200, 300, 500],
        synergies: ['1st Path', 'Bringer of Justice', 'Accomplished Steps']
    },
    {
        character: 'Ara',
        class: 'Devi',
        alias: 'DV',
        effect: 'Magical Defense',
        stages: [200, 300, 500],
        synergies: ['2nd Path', 'One Who Yearns', 'Abundant Steps']
    },
    {
        character: 'Ara',
        class: 'Shakti',
        alias: 'SK',
        effect: 'All Resistances',
        stages: [10, 20, 30],
        synergies: ['3rd Path', 'Blessing of Mana', 'Adept Steps']
    },
    {
        character: 'Ara',
        class: 'Surya',
        alias: 'SR',
        effect: 'EXP Gain',
        stages: [1, 2, 3],
        synergies: []
    },

    //Elesis

    {
        character: 'Elesis',
        class: 'Empire Sword',
        alias: 'ES',
        effect: 'Command Attack Damage',
        stages: [1, 1.5, 2],
        synergies: ['1st Path', 'Instinctual Movement', 'Bringer of Justice']
    },
    {
        character: 'Elesis',
        class: 'Flame Lord',
        alias: 'FL',
        effect: 'All Weapon Attributes Activacion Chance',
        stages: [0.5, 1, 2],
        synergies: ['2nd Path', 'Attribute Master', 'Sharp']
    },
    {
        character: 'Elesis',
        class: 'Bloody Queen',
        alias: 'BQ',
        effect: 'Damage increase in proportion to HP lost',
        stages: [2, 3, 4],
        synergies: ['3rd Path', "It's Fine Cuz It Hurts", 'One Who Yearns']
    },
    {
        character: 'Elesis',
        class: 'Adrestia',
        alias: 'AD',
        effect: 'Awakening Duration increase',
        stages: [5,6,8],
        synergies: []
    },

    //Add

    {
        character: 'Add',
        class: 'Doom Bringer',
        alias: 'DB',
        effect: 'Tenacity Skill Cooldown',
        stages: [1, 1.5, 2],
        synergies: ['1st Path', 'Magical Specialist', 'Fist Fight']
    },
    {
        character: 'Add',
        class: 'Dominator',
        alias: 'DoM',
        effect: 'Strength Skill Cooldown',
        stages: [1, 1.5, 2],
        synergies: ['2nd Path', 'Researcher', 'Nasod Research']
    },
    {
        character: 'Add',
        class: 'Mad Paradox',
        alias: 'MP',
        effect: 'Bravery Skill Cooldown',
        stages: [1, 1.5, 2],
        synergies: ['3rd Path', "Time and Space", 'One Who Yearns']
    },
    {
        character: 'Add',
        class: 'Overmind',
        alias: 'OM',
        effect: 'Master skill cooldown decrease',
        stages: [0.5,1,2],
        synergies: []
    },

    //Luciel

    {
        character: 'Luciel',
        class: 'Catastrophe',
        alias: 'CaT',
        effect: 'Critical',
        stages: [2, 3, 5],
        synergies: ['1st Path', 'Demon', 'Physical Specialist']
    },
    {
        character: 'Luciel',
        class: 'Innocent',
        alias: 'IN',
        effect: 'Maximize',
        stages: [2, 3, 5],
        synergies: ['2nd Path', 'Demon', 'Sharp']
    },
    {
        character: 'Luciel',
        class: 'Diangelion',
        alias: 'DiA',
        effect: 'Damage Reduction',
        stages: [2, 3, 5],
        synergies: ['3rd Path', 'Demon', 'One Who Yearns']
    },
    {
        character: 'Luciel',
        class: 'Demersio',
        alias: 'DeM',
        effect: 'Adaptation',
        stages: [0.5, 0.75, 5],
        synergies: []
    },

    //Rose

    {
        character: 'Rose',
        class: 'Tempest Buster',
        alias: 'TB',
        effect: 'Active Skill Damage',
        stages: [0.5, 1, 1.5],
        synergies: ['1st Path', 'Sharp', 'Titan Slayer']
    },
    {
        character: 'Rose',
        class: 'Black Massacre',
        alias: 'BM',
        effect: 'Tenacity Skill Damage',
        stages: [0.5, 1, 1.5],
        synergies: ['2nd Path', 'Physical Specialist', 'One Who Yearns']
    },
    {
        character: 'Rose',
        class: 'Minerva',
        alias: 'MN',
        effect: 'Strength Skill Damage',
        stages: [0.5, 1, 1.5],
        synergies: ['3rd Path', 'Agile', 'Angel of the Battlefield']
    },
    {
        character: 'Rose',
        class: 'Prime Operator',
        alias: 'PO',
        effect: 'Bravery Skill Damage',
        stages: [0.5, 1, 1.5],
        synergies: ['Mechanical Engineering', 'Researcher', 'Nasod Research']
    },

    //Ain

    {
        character: 'Ain',
        class: 'Richter',
        alias: 'RT',
        effect: 'Awakening Charge Speed',
        stages: [5, 6, 8],
        synergies: ['1st Path', 'Bringer of Justice', 'Titan Slayer']
    },
    {
        character: 'Ain',
        class: 'Bluhen',
        alias: 'BL',
        effect: 'Recovery Item Effect',
        stages: [2, 4, 6],
        synergies: ['2nd Path', 'Magical Specialist', "It's Fine Cuz It Hurts"]
    },
    {
        character: 'Ain',
        class: 'Herrscher',
        alias: 'HR',
        effect: 'Damage dealt to Boss Monsters',
        stages: [2, 3, 5],
        synergies: ['3rd Path', 'Time and Space', 'One Who Yearns']
    },

    //Laby

    {
        character: 'Laby',
        class: 'Eternity Winner',
        alias: 'EW',
        effect: 'Double Attack Chance',
        stages: [0.5, 1, 2],
        synergies: ['1st Path', 'Fist Fight', 'Sharp']
    },
    {
        character: 'Laby',
        class: 'Radiant Soul',
        alias: 'RaS',
        effect: 'Magical Attack Power %',
        stages: [0.5, 1, 1.5],
        synergies: ['2nd Path', 'Blessing of Mana', "It's Fine Cuz It Hurts"]
    },
    {
        character: 'Laby',
        class: 'Nisha Labyrinth',
        alias: 'NL',
        effect: 'Physical Attack Power %',
        stages: [0.5, 1, 1.5],
        synergies: ['3rd Path', 'Physical Specialist', "Laby's Friend"]
    },
    {
        character: 'Laby',
        class: 'Twins Picaro',
        alias: 'TP',
        effect: 'Mp Cost',
        stages: [1, 1.5, 2],
        synergies: []
    },

    //Noah

    {
        character: 'Noah',
        class: 'Liberator',
        alias: 'LB',
        effect: 'Critical Damage',
        stages: [0.5, 1, 2],
        synergies: ['1st Path', 'Agile', 'Physical Specialist']
    },
    {
        character: 'Noah',
        class: 'Celestia',
        alias: 'CL',
        effect: 'Ignore Magical Defense',
        stages: [0.4, 0.8, 1.2],
        synergies: ['2nd Path', 'Researcher', 'Titan Slayer']
    },
    {
        character: 'Noah',
        class: 'Nyx Pieta',
        alias: 'NP',
        effect: 'Ignore Physical Defense',
        stages: [0.4, 0.8, 1.2],
        synergies: ['3rd Path', "It's Fine Cuz It Hurts", 'Sharp']
    },
]

export { collection }