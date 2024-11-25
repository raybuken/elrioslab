import { COLLECTION, SYNERGY } from '@/constants/constants';

const collection = [
    //Elsword
    {
        character: 'Elsword',
        class: 'Knigth Emperor',
        alias: 'KE',
        effect: COLLECTION.TENACITY_DAMAGE,
        stages: [0.5,1.0,1.5],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.INSTINCTUAL_MOVEMENT, SYNERGY.BRINGER_OF_JUSTICE]
    },
    {
        character: 'Elsword',
        class: 'Rune Master',
        alias: 'RM',
        effect: COLLECTION.STRENGTH_DAMAGE,
        stages: [0.5,1.0,1.5],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.ATTRIBUTE_MASTER, SYNERGY.MAGICAL_SPECIALIST]
    },
    {
        character: 'Elsword',
        class: 'Inmortal',
        alias: 'IM',
        effect: COLLECTION.BRAVERY_DAMAGE,
        stages: [0.5,1.0,1.5],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.AGILE, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Elsword',
        class: 'Genesis',
        alias: 'GN',
        effect: COLLECTION.HA_DAMAGE,
        stages: [3,4,5],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.SHARP, SYNERGY.BRINGER_OF_JUSTICE]
    },

    //Aisha

    {
        character: 'Aisha',
        class: 'Aether Sage',
        alias: 'AeS',
        effect: COLLECTION.MAGICAL_ATTACK_PLAIN,
        stages: [100,150,200],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.RESEARCHER, SYNERGY.ATTRIBUTE_MASTER]
    },
    {
        character: 'Aisha',
        class: 'Oz Sorcerer',
        alias: 'OZ',
        effect: COLLECTION.MIXED_ATTACK_PLAIN,
        stages: [50,75,100],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.BLESSING_OF_MANA, SYNERGY.ONE_WHO_YEARNS]
    },
    {
        character: 'Aisha',
        class: 'Metamorphy',
        alias: 'MtM',
        effect: COLLECTION.PHYSICAL_ATTACK_PLAIN,
        stages: [100, 150, 200],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.PHYSICAL_SPECIALIST, SYNERGY.TIME_AND_SPACE]
    },
    {
        character: 'Aisha',
        class: 'Lord Azoth',
        alias: 'LA',
        effect: COLLECTION.CONSUMABLE_COOLDOWN,
        stages: [6,8,10],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.RESEARCHER, SYNERGY.ONE_WHO_YEARNS]
    },

    //Rena

    {
        character: 'Rena',
        class: 'Anemos',
        alias: 'AN',
        effect: COLLECTION.MOVEMENT_SPEED,
        stages: [5, 6, 8],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.BLESSING_OF_SPIRIT, SYNERGY.AGILE]
    },
    {
        character: 'Rena',
        class: 'Daybreaker',
        alias: 'DaB',
        effect: COLLECTION.JUMP_SPEED,
        stages: [5, 6, 8],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.BLESSING_OF_SPIRIT, SYNERGY.SHARP]
    },
    {
        character: 'Rena',
        class: 'Twilight',
        alias: 'TW',
        effect: COLLECTION.ACTION_SPEED,
        stages: [2, 3, 5],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.BLESSING_OF_SPIRIT, SYNERGY.PHYSICAL_SPECIALIST]
    },
    {
        character: 'Rena',
        class: 'Prophetess',
        alias: 'PR',
        effect: COLLECTION.ALL_SKILL_DAMAGE,
        stages: [0.5,0.75,1],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.BLESSING_OF_SPIRIT, SYNERGY.MAGICAL_SPECIALIST]
    },


    //Raven

    {
        character: 'Raven',
        class: 'Furious Blade',
        alias: 'FB',
        effect: COLLECTION.ACTIVE_DAMAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.FIRST_PATH, 'Instinctual Movement', SYNERGY.AGILE]
    },
    {
        character: 'Raven',
        class: 'Rage Hearts',
        alias: 'RH',
        effect: COLLECTION.COMMAND_DAMAGE,
        stages: [1, 1.5, 2],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.MAGICAL_SPECIALIST, SYNERGY.FIST_FIGHT]
    },
    {
        character: 'Raven',
        class: 'Nova Imperator',
        alias: 'NI',
        effect: COLLECTION.DAMAGE_BY_HP_LOST,
        stages: [2, 3, 4],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.ITS_FINE_CUZ_IT_HURTS, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Raven',
        class: 'Revenant',
        alias: 'RV',
        effect: COLLECTION.ADDITIONAL_DAMAGE,
        stages: [2,3,5],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.ONE_WHO_YEARNS, SYNERGY.PHYSICAL_SPECIALIST]
    },

    //Eve

    {
        character: 'Eve',
        class: 'Code: Ultimate',
        alias: 'CU',
        effect: COLLECTION.MAGICAL_ATTACK_PERCENTAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.NASOD_RESEARCH, SYNERGY.SHARP]
    },
    {
        character: 'Eve',
        class: 'Code: Esencia',
        alias: 'CE',
        effect: COLLECTION.PHYSICAL_ATTACK_PERCENTAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.NASOD_RESEARCH, SYNERGY.RESEARCHER]
    },
    {
        character: 'Eve',
        class: 'Code: Sariel',
        alias: 'CS',
        effect: COLLECTION.MIXED_ATTACK_PERCENTAGE,
        stages: [0.25, 0.5, 0.75],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.NASOD_RESEARCH, SYNERGY.ANGEL_OF_BATTLEFIELD]
    },
    {
        character: 'Eve',
        class: 'Code: Antithese',
        alias: 'CA',
        effect: COLLECTION.POLARIZE,
        stages: [0.4,0.8,1.2],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.SHARP, SYNERGY.DISTORTED_GAZE]
    },

    //Chung

    {
        character: 'Chung',
        class: 'Comet Crusader',
        alias: 'CC',
        effect: COLLECTION.AWAKENING_CHARGE_SPEED,
        stages: [5, 6, 8],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.BRINGER_OF_JUSTICE, SYNERGY.ATTRIBUTE_MASTER]
    },
    {
        character: 'Chung',
        class: 'Fatal Phantom',
        alias: 'FP',
        effect: COLLECTION.AWAKENING_DURATION,
        stages: [5, 6, 8],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.AGILE, SYNERGY.MAGICAL_SPECIALIST]
    },
    {
        character: 'Chung',
        class: 'Centurion',
        alias: 'CeT',
        effect: COLLECTION.DAMAGE_DEALT_BY_BOSS_MONSTER,
        stages: [2, 3, 5],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.RESEARCHER, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Chung',
        class: 'Dius Aer',
        alias: 'DA',
        effect: COLLECTION.ACTION_SPEED,
        stages: [2,3,5],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.ITS_FINE_CUZ_IT_HURTS, SYNERGY.ANGEL_OF_BATTLEFIELD]
    },

    //Ara

    {
        character: 'Ara',
        class: 'Apsara',
        alias: 'Aps',
        effect: COLLECTION.PHYSICAL_DEFENSE,
        stages: [200, 300, 500],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.BRINGER_OF_JUSTICE, SYNERGY.ACCOMPLISHED_STEPS]
    },
    {
        character: 'Ara',
        class: 'Devi',
        alias: 'DV',
        effect: COLLECTION.MAGICAL_DEFENSE,
        stages: [200, 300, 500],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.ONE_WHO_YEARNS, SYNERGY.ABUNDANT_STEPS]
    },
    {
        character: 'Ara',
        class: 'Shakti',
        alias: 'SK',
        effect: COLLECTION.ALL_RESISTANCES,
        stages: [10, 20, 30],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.BLESSING_OF_MANA, SYNERGY.ADEPT_STEPS]
    },
    {
        character: 'Ara',
        class: 'Surya',
        alias: 'SR',
        effect: COLLECTION.EXP_GAIN,
        stages: [1, 2, 3],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.ITS_FINE_CUZ_IT_HURTS, SYNERGY.STEP_OF_COMUNION]
    },

    //Elesis

    {
        character: 'Elesis',
        class: 'Empire Sword',
        alias: 'ES',
        effect: COLLECTION.COMMAND_DAMAGE,
        stages: [1, 1.5, 2],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.INSTINCTUAL_MOVEMENT, SYNERGY.BRINGER_OF_JUSTICE]
    },
    {
        character: 'Elesis',
        class: 'Flame Lord',
        alias: 'FL',
        effect: COLLECTION.WEAPON_ATTRIBUTE_ACTIVATION,
        stages: [0.5, 1, 2],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.ATTRIBUTE_MASTER, SYNERGY.SHARP]
    },
    {
        character: 'Elesis',
        class: 'Bloody Queen',
        alias: 'BQ',
        effect: COLLECTION.DAMAGE_BY_HP_LOST,
        stages: [2, 3, 4],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.ITS_FINE_CUZ_IT_HURTS, SYNERGY.ONE_WHO_YEARNS]
    },
    {
        character: 'Elesis',
        class: 'Adrestia',
        alias: 'AD',
        effect: COLLECTION.AWAKENING_DURATION,
        stages: [5,6,8],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.AGILE, SYNERGY.SHARP]
    },

    //Add

    {
        character: 'Add',
        class: 'Doom Bringer',
        alias: 'DB',
        effect: COLLECTION.TENACITY_COOLDOWN,
        stages: [1, 1.5, 2],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.MAGICAL_SPECIALIST, SYNERGY.FIST_FIGHT]
    },
    {
        character: 'Add',
        class: 'Dominator',
        alias: 'DoM',
        effect: COLLECTION.STRENGTH_COOLDOWN,
        stages: [1, 1.5, 2],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.RESEARCHER, SYNERGY.NASOD_RESEARCH]
    },
    {
        character: 'Add',
        class: 'Mad Paradox',
        alias: 'MP',
        effect: COLLECTION.BRAVERY_COOLDOWN,
        stages: [1, 1.5, 2],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.TIME_AND_SPACE, SYNERGY.ONE_WHO_YEARNS]
    },
    {
        character: 'Add',
        class: 'Overmind',
        alias: 'OM',
        effect: COLLECTION.MASTER_SKILL_COOLDOWN,
        stages: [0.5,1,2],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.RESEARCHER, SYNERGY.PHYSICAL_SPECIALIST]
    },

    //Luciel

    {
        character: 'Luciel',
        class: 'Catastrophe',
        alias: 'CaT',
        effect: COLLECTION.CRITICAL,
        stages: [2, 3, 5],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.DEMON, SYNERGY.PHYSICAL_SPECIALIST]
    },
    {
        character: 'Luciel',
        class: 'Innocent',
        alias: 'IN',
        effect: COLLECTION.MAXIMIZE,
        stages: [2, 3, 5],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.DEMON, SYNERGY.SHARP]
    },
    {
        character: 'Luciel',
        class: 'Diangelion',
        alias: 'DiA',
        effect: COLLECTION.DAMAGE_REDUCTION,
        stages: [2, 3, 5],  
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.DEMON, SYNERGY.ONE_WHO_YEARNS]
    },
    {
        character: 'Luciel',
        class: 'Demersio',
        alias: 'DeM',
        effect: COLLECTION.ADAPTATION,
        stages: [0.5, 0.75, 5],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.DEMON, SYNERGY.ITS_FINE_CUZ_IT_HURTS]
    },

    //Rose

    {
        character: 'Rose',
        class: 'Tempest Buster',
        alias: 'TB',
        effect: COLLECTION.ACTIVE_DAMAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.SHARP, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Rose',
        class: 'Black Massacre',
        alias: 'BM',
        effect: COLLECTION.TENACITY_DAMAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.PHYSICAL_SPECIALIST, SYNERGY.ONE_WHO_YEARNS]
    },
    {
        character: 'Rose',
        class: 'Minerva',
        alias: 'MN',
        effect: COLLECTION.STRENGTH_DAMAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.AGILE, SYNERGY.ANGEL_OF_BATTLEFIELD]
    },
    {
        character: 'Rose',
        class: 'Prime Operator',
        alias: 'PO',
        effect: COLLECTION.BRAVERY_DAMAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.MECHANICAL_ENGINEERING, SYNERGY.RESEARCHER]
    },

    //Ain

    {
        character: 'Ain',
        class: 'Richter',
        alias: 'RT',
        effect: COLLECTION.AWAKENING_CHARGE_SPEED,
        stages: [5, 6, 8],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.BRINGER_OF_JUSTICE, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Ain',
        class: 'Bluhen',
        alias: 'BL',
        effect: COLLECTION.RECOVERY_ITEM_EFFECT,
        stages: [2, 4, 6],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.MAGICAL_SPECIALIST, SYNERGY.ITS_FINE_CUZ_IT_HURTS]
    },
    {
        character: 'Ain',
        class: 'Herrscher',
        alias: 'HR',
        effect: COLLECTION.DAMAGE_DEALT_TO_BOSS_MONSTERS,
        stages: [2, 3, 5],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.TIME_AND_SPACE, SYNERGY.ONE_WHO_YEARNS]
    },
    {
        character: 'Ain',
        class: 'Opferung',
        alias: 'OP',
        effect: COLLECTION.DAMAGE_DEALT_BY_BOSS_MONSTER,
        stages: [2, 3, 5],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.ONE_WHO_YEARNS, SYNERGY.DISTORTED_GAZE]
    },

    //Laby

    {
        character: 'Laby',
        class: 'Eternity Winner',
        alias: 'EW',
        effect: COLLECTION.DOUBLE_ATTACK,
        stages: [0.5, 1, 2],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.FIST_FIGHT, SYNERGY.SHARP]
    },
    {
        character: 'Laby',
        class: 'Radiant Soul',
        alias: 'RaS',
        effect: COLLECTION.MAGICAL_ATTACK_PERCENTAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.BLESSING_OF_MANA, SYNERGY.ITS_FINE_CUZ_IT_HURTS]
    },
    {
        character: 'Laby',
        class: 'Nisha Labyrinth',
        alias: 'NL',
        effect: COLLECTION.PHYSICAL_ATTACK_PERCENTAGE,
        stages: [0.5, 1, 1.5],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.PHYSICAL_SPECIALIST, SYNERGY.LABY_FRIEND]
    },
    {
        character: 'Laby',
        class: 'Twins Picaro',
        alias: 'TP',
        effect: COLLECTION.MP_COST,
        stages: [1, 1.5, 2],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.MAGICAL_SPECIALIST, SYNERGY.KING_OF_PRANKS]
    },

    //Noah

    {
        character: 'Noah',
        class: 'Liberator',
        alias: 'LB',
        effect: COLLECTION.CRITICAL_DAMAGE,
        stages: [0.5, 1, 2],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.AGILE, SYNERGY.PHYSICAL_SPECIALIST]
    },
    {
        character: 'Noah',
        class: 'Celestia',
        alias: 'CL',
        effect: COLLECTION.IGNORE_MAGICAL_DEFENSE,
        stages: [0.4, 0.8, 1.2],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.RESEARCHER, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Noah',
        class: 'Nyx Pieta',
        alias: 'NP',
        effect: COLLECTION.IGNORE_PHYSICAL_DEFENSE,
        stages: [0.4, 0.8, 1.2],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.ITS_FINE_CUZ_IT_HURTS, SYNERGY.SHARP]
    },
    {
        character: 'Noah',
        class: 'Morpheus',
        alias: 'MO',
        effect: COLLECTION.MIXED_ATTACK_PLAIN,
        stages: [50,75,100],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.TITAN_SLAYER, SYNERGY.DISTORTED_GAZE]
    },
    //Lithia
    {
        character: 'Lithia',
        class: 'Gembliss',
        alias: 'GB',
        effect: COLLECTION.DROP_RATE,
        stages: [0.5, 1, 2],
        synergies: [SYNERGY.FIRST_PATH, SYNERGY.NASOD_RESEARCH, SYNERGY.TITAN_SLAYER]
    },
    {
        character: 'Lithia',
        class: 'Avarice',
        alias: 'AV',
        effect: COLLECTION.ED_GAIN,
        stages: [0.4, 0.8, 1.2],
        synergies: [SYNERGY.SECOND_PATH, SYNERGY.PHYSICAL_SPECIALIST, SYNERGY.ITS_FINE_CUZ_IT_HURTS]
    },
    {
        character: 'Lithia',
        class: 'Achlys',
        alias: 'AL',
        effect: COLLECTION.HA_DAMAGE,
        stages: [0.4, 0.8, 1.2],
        synergies: [SYNERGY.THIRD_PATH, SYNERGY.MAGICAL_SPECIALIST, SYNERGY.SHARP]
    },
    {
        character: 'Lithia',
        class: 'Mischief',
        alias: 'MC',
        effect: 'Physical/Magical Attack Power',
        stages: [50,75,100],
        synergies: [SYNERGY.FOURTH_PATH, SYNERGY.ONE_WHO_YEARNS, SYNERGY.DISTORTED_GAZE]
    },
]

export { collection }