
//Top piece

import { Circuit, CircuitBoard, CircuitParts, CircuitTypes, effectNames, EXASCALE_ARMORS, EXASCALE_CIRCUIT_EFFECTS, EXASCALE_COLORS } from "./exascale";

const DEFAULT_CIRCUIT_EFFECT_TOP = EXASCALE_CIRCUIT_EFFECTS.top[effectNames.ContinuousDmg]

const CIRCUIT_I1: Circuit = {
    type: CircuitTypes.I,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_I2: Circuit = {
    type: CircuitTypes.I,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L1: Circuit = {
    type: CircuitTypes.L,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L2: Circuit = {
    type: CircuitTypes.L,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L3: Circuit = {
    type: CircuitTypes.L,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L4: Circuit = {
    type: CircuitTypes.L,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T1: Circuit = {
    type: CircuitTypes.T,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T2: Circuit = {
    type: CircuitTypes.T,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T3: Circuit = {
    type: CircuitTypes.T,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T4: Circuit = {
    type: CircuitTypes.T,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}


//Horizontal H
export const CIRCUIT_BOARD_TOP_PRESET_1: CircuitBoard = [
    [CIRCUIT_L2, CIRCUIT_I2, CIRCUIT_I2, CIRCUIT_L3],
    [CIRCUIT_L1, CIRCUIT_L3, CIRCUIT_L2, CIRCUIT_L4],
    [CIRCUIT_L2, CIRCUIT_L4, CIRCUIT_L1, CIRCUIT_L3],
    [CIRCUIT_L1, CIRCUIT_I2, CIRCUIT_I2, EXASCALE_ARMORS.top]
]

//Vertical H
export const CIRCUIT_BOARD_TOP_PRESET_2: CircuitBoard = [
    [CIRCUIT_L2, CIRCUIT_L3, CIRCUIT_L2, CIRCUIT_L3],
    [CIRCUIT_I1, CIRCUIT_L1, CIRCUIT_L4, CIRCUIT_I1],
    [CIRCUIT_I1, CIRCUIT_L2, CIRCUIT_L3, CIRCUIT_I1],
    [CIRCUIT_L1, CIRCUIT_L4, CIRCUIT_L1, EXASCALE_ARMORS.top]
]

//Horizontal C
export const CIRCUIT_BOARD_TOP_PRESET_3: CircuitBoard = [
    [CIRCUIT_L2, CIRCUIT_I2, CIRCUIT_I2, CIRCUIT_L3],
    [CIRCUIT_L1, CIRCUIT_I2, CIRCUIT_L3, CIRCUIT_I1],
    [CIRCUIT_L2, CIRCUIT_I2, CIRCUIT_L4, CIRCUIT_I1],
    [CIRCUIT_L1, CIRCUIT_I2, CIRCUIT_I2, EXASCALE_ARMORS.top]
]

//Vertical C
export const CIRCUIT_BOARD_TOP_PRESET_4: CircuitBoard = [
    [CIRCUIT_L2, CIRCUIT_L3, CIRCUIT_L2, CIRCUIT_L3],
    [CIRCUIT_I1, CIRCUIT_I1, CIRCUIT_I1, CIRCUIT_I1],
    [CIRCUIT_I1, CIRCUIT_L1, CIRCUIT_L4, CIRCUIT_I1],
    [CIRCUIT_L1, CIRCUIT_I2, CIRCUIT_I2, EXASCALE_ARMORS.top]
]

//T 
export const CIRCUIT_BOARD_TOP_PRESET_5: CircuitBoard = [
    [CIRCUIT_L2, CIRCUIT_T1, CIRCUIT_T1, CIRCUIT_L3],
    [CIRCUIT_T4, CIRCUIT_T2, CIRCUIT_T4, CIRCUIT_T2],
    [CIRCUIT_T4, CIRCUIT_T2, CIRCUIT_T4, CIRCUIT_T2],
    [CIRCUIT_L1, CIRCUIT_T3, CIRCUIT_T3, EXASCALE_ARMORS.top]
]