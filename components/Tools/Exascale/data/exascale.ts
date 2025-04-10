export enum CircuitTypes {
    I = "I",
    L = "L",
    T = "T",
}
export enum EXASCALE_COLORS {
    BLUE = "Cycle",
    RED = "Compute",
    GREEN = "Restore",
}

export const EXASCALE_ARMORS = {
    //TODO update urls
    top: {
        name: 'top',
        url: '/images/exascale_top.webp',
    },
    bottom: {
        name: 'bottom',
        url: '/images/exascale_bottom.webp',
    },
    gloves: {
        name: 'gloves',
        url: '/images/exascale_gloves.webp',
    },
    shoes: {
        name: 'shoes',
        url: '/images/exascale_shoes.webp',
    }
}

export const CIRCUIT_PATHS = {
    [CircuitTypes.L]: [
        [[0, -1],[1, 0]], // └
        [[1, 0], [0, 1]], // ┌
        [[-1, 0], [0, 1]], // ┐
        [[0, -1], [-1, 0]]  // ┘
    ],
    [CircuitTypes.I]: [
        [[0, 1], [0, -1]], // │
        [[1, 0], [-1, 0]] // ─
    ],
    [CircuitTypes.T]: [
        [[-1, 0], [1, 0], [0, 1]], // ┬
        [[-1, 0], [0, 1], [0, -1]], // ┤
        [[-1, 0], [0, -1], [1, 0]], // ┴
        [[0, 1], [1, 0], [0, -1]] // ├
    ],
    [EXASCALE_ARMORS.top.name]: [
        [[-1, 0],[0, -1]]
    ],
    [EXASCALE_ARMORS.bottom.name]: [
        [[0, 1], [-1, 0]]
    ],
    [EXASCALE_ARMORS.gloves.name]: [
        [[-1, 0], [0, 1]]
    ],
    [EXASCALE_ARMORS.shoes.name]: [
        [[1, 0], [0, 1]]
    ]
}

export const EXASCALE_SET_EFFECTS = {
    [EXASCALE_COLORS.BLUE]: 
    `Adaptation +2%
    Buff - Nearby Party's Critical Damage Increase 10% (Does not stack)
    Obtain 'Logic' Effect for 30 sec. every time Active and Special Active Skill is used. (Max 20 stacks).
    When 'Logic' reaches 20 stacks, obtain 'Generate' effect.

    Logic: Physical/Magical Attack Power 1% increase per stack
    Generate: Pressing the [Item Special Function] key removes all stacks of 'Logic' and replaces them with 'Reset' effect that lasts for 5 sec.
    Reset: Master Skill/Hyperactive Skill Damage increases by 500% and Received Potion Recovery Effect decreases by 50%. Logic Effect cannot be obtained.
    `,
    [EXASCALE_COLORS.RED]: 
    `Adaptation +2%
    Buff - Nearby Party's Critical Damage Increase 10% (Does not stack)
    Obtain 'Flow' Effect after starting dungeon.
    Change to 'Resist' effect if the Armor's Skill Cooldown Reset Effect activates while holding the 'Flow' Effect.
    Change to 'Flow' Effect if the Armor's Skill Cooldown Reset Effect activates while holding the 'Resist' Effect.

    Flow: Skill Cooldown Reset chance +8%, Special Active Skill Cooldown Speed 1.2x.
    Resist: Skill Cooldown Reset chance +8%, All Skill Damage 16%.
    `,
    [EXASCALE_COLORS.GREEN]: `Adaptation +2%
    Buff - Nearby Party's Physical Attack Power Increase 10% (Does not stack)
    Buff - Nearby Party's Magical Attack Power Increase 10% (Does not stack)
    Upon starting the dungeon, obtain 'Repair' Effect for 60 sec.
    Once 'Repair' effect ends, change to 'Bridge' effect.

    If [Item Special Function] is pressed while 'Bridge' effect is active, change to 'Complete' effect for 10 sec.
    Once 'Complete' effect ends, change to 'Repair' Effect for 60 sec.
    Repair: Damage Received 12% Decrease.

    Bridge: Upon obtaining the effect, grants a 1 time shield equal to 30% of Max HP to nearby party members. (Shield Duration 10 sec.)
    Complete: For 10 sec., Action Speed increases by 15%, cooldown for the skill registered in Transcendence Skill Slot will become 0.5 sec. for all nearby party members.
    Using the skill 5 times will end the effect. (Complete buff will not be reapplied for 60 sec.)
    `,
}

export enum CircuitParts {
    TOP = "top",
    BOTTOM = "bottom",
    GLOVES = "gloves",
    SHOES = "shoes",
}

export enum effectNames {
    ASD = "All Skill Damage",
    CriticalDamage = "Critical Damage",
    ContinuousDmg = "Continuous damage equal to x% of damage inflicted",
    Reset = "Reset Cooldown of skill used",
    Critical = "Critical",
    Maximize = "Maximize",
    BossDamage = "Increased Damage to Bosses",
    AwakeningDuration = "Awakening Duration",
    AllResistance = "All Attribute Resistance",
    MovSpeed = "Movement Speed",
    JumpSpeed = "Jump Speed",
    PhyDefense = "Physical Defense",
    MagDefense = "Magical Defense",
    RedDmgBoss = "Reduced Damage from Bosses",
    RedDamage = "Damage Reduction",
    HP = "HP",
    RecoveryItem = "Recovery Item Effect",
    Polarize = "Polarization",
    DamageOver50HP = "Damage when hitting enemy with more than 50% HP",
    DamageBelow50HP = "Damage when hitting enemy with less than 50% HP",
    Command = "Increased Command Attack Damage",
    Active = "Increased Active Skill Damage",
    Tenacity = "Increased Tenacity Skill Damage",
    Strength = "Increased Strength Skill Damage",
    Bravery = "Increased Bravery Skill Damage",
    Hyper = "Increased Hyper Active Skill Damage",
    MasterDamage = "Increased Master Skill Damage",
    PartyASD = "Buff - All Skill Damage of Surrounding Party Members",
    Consumable = "Reduced reuse time of Consumables",
    MasterCooldown = "Reduced Cooldown of Master Skills",
    MPCost = "Reduced MP Consumption",
    PartyMovSpeed = "Buff - Movement Speed of Surrounding Party Members",
    PartyJumpSpeed = "Buff - Jump Speed of Surrounding Party Members",
    PartyAS = "Buff - Action Speed of Surrounding Party Members"
};
  
const EXASCALE_COMMON_CIRCUIT_EFFECTS = {
    [effectNames.Critical]: {
        name: effectNames.Critical, 
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.Maximize]: {
        name: effectNames.Maximize,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.BossDamage]: {
        name: effectNames.BossDamage,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.AwakeningDuration]: {
        name: effectNames.AwakeningDuration,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.AllResistance]: {
        name: effectNames.AllResistance,
        values: [1, 2, 3, 4, 5, 6],
        tValues: [3, 4, 5, 6]
    },
    [effectNames.MovSpeed]: {
        name: effectNames.MovSpeed,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.JumpSpeed]: {
        name: effectNames.JumpSpeed,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.PhyDefense]: {
        name: effectNames.PhyDefense,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.MagDefense]: {
        name: effectNames.MagDefense,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
    [effectNames.RedDmgBoss]: {
        name: effectNames.RedDmgBoss,
        values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
        tValues: [0.7, 0.8, 0.9, 1]
    },
}
  
export const EXASCALE_CIRCUIT_EFFECTS = {
    top: {
        ...EXASCALE_COMMON_CIRCUIT_EFFECTS,
        [effectNames.ASD]: {
            name: effectNames.ASD,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.CriticalDamage]: {
            name: effectNames.CriticalDamage,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.Reset]: {
            name: effectNames.Reset,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.ContinuousDmg]: {
            name: effectNames.ContinuousDmg,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        }
    },
    bottom: {
        ...EXASCALE_COMMON_CIRCUIT_EFFECTS,
        [effectNames.RedDamage]: { 
            name: effectNames.RedDamage, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.HP]: { 
            name: effectNames.HP, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.RecoveryItem]: { 
            name: effectNames.RecoveryItem, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.Polarize]: { 
            name: effectNames.Polarize, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.DamageOver50HP]: { 
            name: effectNames.DamageOver50HP, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.DamageBelow50HP]: { 
            name: effectNames.DamageBelow50HP, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        }
    },
    gloves: {
        ...EXASCALE_COMMON_CIRCUIT_EFFECTS,
        [effectNames.Command]: { 
            name: effectNames.Command, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.Active]: { 
            name: effectNames.Active, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.Tenacity]: {
            name: effectNames.Tenacity,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.Strength]: {
            name: effectNames.Strength,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.Bravery]: {
            name: effectNames.Bravery,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.Hyper]: {
            name: effectNames.Hyper,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.MasterDamage]: {
            name: effectNames.MasterDamage,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.PartyASD]: {
            name: effectNames.PartyASD,
            values: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
            tValues: [0.5, 0.6, 0.7, 0.8]
        }
    },
    shoes: {
        ...EXASCALE_COMMON_CIRCUIT_EFFECTS,
        [effectNames.Consumable]: { 
            name: effectNames.Consumable, 
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1] 
        },
        [effectNames.MPCost]: {
            name: effectNames.MPCost,
            values: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
            tValues: [0.7, 0.8, 0.9, 1]
        },
        [effectNames.PartyMovSpeed]: {
            name: effectNames.PartyMovSpeed,
            values: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
            tValues: [0.5, 0.6, 0.7, 0.8]
        },
        [effectNames.PartyJumpSpeed]: {
            name: effectNames.PartyJumpSpeed,
            values: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
            tValues: [0.5, 0.6, 0.7, 0.8]
        },
        [effectNames.PartyAS]: {
            name: effectNames.PartyAS,
            values: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
            tValues: [0.5, 0.6, 0.7, 0.8]
        }
    }
};
  
export type Circuit = {
    type: CircuitTypes;
    spot: Circuit['type'] extends CircuitTypes.I ? 1 | 2 : 1 | 2 | 3 | 4;
    color: EXASCALE_COLORS;
    part: CircuitParts;
    effect: CircuitEffect;
}

export type CircuitEffect = {
    name: effectNames;
    value: number;
}


export const EMPTY_SLOT_CIRCUIT = {
    url: '/images/empty_circuit.png'
}

export type ExascaleArmor = 
    typeof EXASCALE_ARMORS.top | 
    typeof EXASCALE_ARMORS.bottom | 
    typeof EXASCALE_ARMORS.gloves | 
    typeof EXASCALE_ARMORS.shoes; 

export type CircuitBoard = Array<Array<Circuit | null | ExascaleArmor>>;

export const DEFAULT_TOP_CIRCUIT_BOARD: CircuitBoard = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, EXASCALE_ARMORS.top]
];

export const DEFAULT_BOTTOM_CIRCUIT_BOARD: CircuitBoard = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [EXASCALE_ARMORS.bottom, null, null, null]
]

export const DEFAULT_GLOVES_CIRCUIT_BOARD: CircuitBoard = [
    [null, null, null, EXASCALE_ARMORS.gloves],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
]

export const DEFAULT_SHOES_CIRCUIT_BOARD: CircuitBoard = [
    [EXASCALE_ARMORS.shoes, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
]

export type Bonification = {
    name: string,
    total: number
}