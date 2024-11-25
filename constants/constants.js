import { REFORGE_STAGES_MAPPING } from '@/components/Tools/Reforge/reforgeStages'

export const COLLECTION = {
    TENACITY_DAMAGE: "Tenacity Skill Damage",
    STRENGTH_DAMAGE: "Strength Skill Damage",
    BRAVERY_DAMAGE: "Bravery Skill Damage",
    HA_DAMAGE: "Hyper Active Skill Damage",
    MAGICAL_ATTACK_PLAIN: "Magical Attack Power",
    PHYSICAL_ATTACK_PLAIN: "Physical Attack Power",
    MIXED_ATTACK_PLAIN: "Physical/Magical Attack Power",
    CONSUMABLE_COOLDOWN: "Consumable Cooldown Decrease (Max 30%)",
    MOVEMENT_SPEED: "Movement Speed",
    JUMP_SPEED: "Jump Speed",
    ACTION_SPEED: "Action Speed",
    ALL_SKILL_DAMAGE: "All skill damage",
    ACTIVE_DAMAGE: "Active Skill",
    COMMAND_DAMAGE: "Command Attack Damage",
    DAMAGE_BY_HP_LOST: "Damage increase in proportion to HP lost",
    ADDITIONAL_DAMAGE: "Additional Damage",
    MAGICAL_ATTACK_PERCENTAGE: "Magical Attack Power %",
    PHYSICAL_ATTACK_PERCENTAGE: "Physical Attack Power %",
    MIXED_ATTACK_PERCENTAGE: "Physical/Magical Attack Power %",
    POLARIZE: "Polarize (Max 45%)",
    AWAKENING_CHARGE_SPEED: "Awakening Charge Speed",
    AWAKENING_DURATION: "Awakening Duration",
    DAMAGE_DEALT_BY_BOSS_MONSTER: "Damage dealt by Boss Monster",
    PHYSICAL_DEFENSE: "Physical Defense",
    MAGICAL_DEFENSE: "Magical Defense",
    ALL_RESISTANCES: "All Resistances",
    EXP_GAIN: "EXP Gain",
    WEAPON_ATTRIBUTE_ACTIVATION: "All Weapon Attributes Activacion Chance",
    AWAKENING_DURATION: "Awakening Duration increase",
    TENACITY_COOLDOWN: "Tenacity Skill Cooldown",
    STRENGTH_COOLDOWN: "Strength Skill Cooldown",
    BRAVERY_COOLDOWN: "Bravery Skill Cooldown",
    MASTER_SKILL_COOLDOWN: "Master skill cooldown decrease",
    CRITICAL: "Critical",
    MAXIMIZE: "Maximize",
    DAMAGE_REDUCTION: "Damage Reduction",
    ADAPTATION: "Adaptation",
    RECOVERY_ITEM_EFFECT: "Recovery Item Effect",
    DAMAGE_DEALT_TO_BOSS_MONSTERS: "Damage dealt to Boss Monsters",
    DOUBLE_ATTACK: "Double Attack Chance",
    MP_COST: "Mp Cost",
    CRITICAL_DAMAGE: "Critical Damage",
    IGNORE_MAGICAL_DEFENSE: "Ignore Magical Defense",
    IGNORE_PHYSICAL_DEFENSE: "Ignore Physical Defense",
    DROP_RATE: "Item Drop Rate Increase",
    ED_GAIN: "ED Gain Increase",
    MASTER_SKILL_DAMAGE: "Master Skill Damage Increase"
}

export const SYNERGY = {
    FIRST_PATH: "1st Path",
    SECOND_PATH: "2nd Path",
    THIRD_PATH: "3rd Path",
    FOURTH_PATH: "4th Path",
    INSTINCTUAL_MOVEMENT: "Instinctual Movement",
    BRINGER_OF_JUSTICE: "Bringer of Justice",
    ATTRIBUTE_MASTER: "Attribute Master",
    MAGICAL_SPECIALIST: "Magical Specialist",
    AGILE: "Agile",
    TITAN_SLAYER: "Titan Slayer",
    RESEARCHER: "Researcher",
    BLESSING_OF_MANA: "Blessing of Mana",
    ONE_WHO_YEARNS: "One Who Yearns",
    PHYSICAL_SPECIALIST: "Physical Specialist",
    TIME_AND_SPACE: "Time and Space",
    BLESSING_OF_SPIRIT: "Blessing of Spirit",
    FIST_FIGHT: "Fist Fight",
    ITS_FINE_CUZ_IT_HURTS: "It's Fine Cuz It Hurts",
    NASOD_RESEARCH: "Nasod Research",
    ANGEL_OF_BATTLEFIELD: "Angel of the Battlefield",
    DISTORTED_GAZE: "Distorted Gaze",
    ACCOMPLISHED_STEPS: "Accomplished Steps",
    ABUNDANT_STEPS: "Abundant Steps",
    ADEPT_STEPS: "Adept Steps",
    STEP_OF_COMUNION: "Step of Communion",
    DEMON: "Demon",
    MECHANICAL_ENGINEERING: "Mechanical Engineering",
    LABY_FRIEND: "Laby's Friend",
    KING_OF_PRANKS: "King of Pranks",
    SHARP: "Sharp"
}

export const ARMOR = {
    RIGOMOR: "Rigomor",
    TENEBROUS: "Tenebrous",
    EXASCALE: "Exascale"
}

export const SERVERS = {
    EU: 'EU',
    KR: 'KR',
    ['Other servers']: "Other servers",
}

export const REFORGE_STAGES = {
    [ARMOR.RIGOMOR]: {
        [SERVERS.KR]: REFORGE_STAGES_MAPPING.stagesKR,
        [SERVERS['Other servers']]: REFORGE_STAGES_MAPPING.stages,
        [SERVERS.EU]: REFORGE_STAGES_MAPPING.stages
    },
    [ARMOR.TENEBROUS]: {
        [SERVERS.KR]: REFORGE_STAGES_MAPPING.stagesTenebrousKR,
        [SERVERS['Other servers']]: REFORGE_STAGES_MAPPING.stagesTenebrous,
        [SERVERS.EU]: REFORGE_STAGES_MAPPING.stagesTenebrous
    },
    [ARMOR.EXASCALE]: {
        [SERVERS.KR]: REFORGE_STAGES_MAPPING.stagesExascale
    }
}

export const REFORGE_MATERIAL_ASSETS = {
    [ARMOR.RIGOMOR]: {
        glaciem: {
            src: 'https://res.cloudinary.com/elrioslab/image/upload//v1616513276/files/tools/reforge/glaciem_pg2u2l.png',
            alt: 'glaciem'
        },
        amethyst: {
            src: 'https://res.cloudinary.com/elrioslab/image/upload//v1616513276/files/tools/reforge/amethyst_aced3h.png',
            alt: 'amethyst'
        } 
    },
    [ARMOR.TENEBROUS]: {
        glaciem: {
            src: 'https://res.cloudinary.com/elrioslab/image/upload/v1640647371/files/tools/reforge/tasma_aura_jshmp8.png',
            alt: 'Tasma aura'
        },
        amethyst: {
            src: 'https://res.cloudinary.com/elrioslab/image/upload//v1640647371/files/tools/reforge/tenebrous_aura_wi9fap.png',
            alt: 'Tenebrous Aura'
        }
    },
    [ARMOR.EXASCALE]: {
        glaciem: {
            src: 'https://res.cloudinary.com/elrioslab/image/upload/v1723353703/files/tools/reforge/shwuvwkqkvjxiovixplo.png',
            alt: 'Jetrium Steel'
        },
        amethyst: {
            src: 'https://res.cloudinary.com/elrioslab/image/upload/v1723353688/files/tools/reforge/invdd2pqrksoh9wsuqqx.png',
            alt: 'Purified Exikel'
        }
    }
}