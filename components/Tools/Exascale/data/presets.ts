
//Top piece

import { Circuit, CircuitBoard, CircuitParts, CircuitTypes, effectNames, EXASCALE_ARMORS, EXASCALE_CIRCUIT_EFFECTS, EXASCALE_COLORS } from "./exascale";

export const DEFAULT_CIRCUIT_EFFECT_TOP = EXASCALE_CIRCUIT_EFFECTS.top[effectNames.ContinuousDmg]
export const DEFAULT_CIRCUIT_EFFECT_BOTTOM = EXASCALE_CIRCUIT_EFFECTS.bottom[effectNames.Polarize]
export const DEFAULT_CIRCUIT_EFFECT_GLOVES = EXASCALE_CIRCUIT_EFFECTS.gloves[effectNames.Bravery]
export const DEFAULT_CIRCUIT_EFFECT_SHOES = EXASCALE_CIRCUIT_EFFECTS.shoes[effectNames.BossDamage]

//👕
const CIRCUIT_I1_TOP: Circuit = {
    type: CircuitTypes.I,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_I2_TOP: Circuit = {
    type: CircuitTypes.I,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L1_TOP: Circuit = {
    type: CircuitTypes.L,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L2_TOP: Circuit = {
    type: CircuitTypes.L,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L3_TOP: Circuit = {
    type: CircuitTypes.L,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_L4_TOP: Circuit = {
    type: CircuitTypes.L,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_TOP.values.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T1_TOP: Circuit = {
    type: CircuitTypes.T,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T2_TOP: Circuit = {
    type: CircuitTypes.T,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T3_TOP: Circuit = {
    type: CircuitTypes.T,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

const CIRCUIT_T4_TOP: Circuit = {
    type: CircuitTypes.T,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_TOP.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.tValues[DEFAULT_CIRCUIT_EFFECT_TOP.tValues.length - 1]
    },
    part: CircuitParts.TOP
}

//🩳
const CIRCUIT_I1_BOTTOM: Circuit = {
    type: CircuitTypes.I,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_I2_BOTTOM: Circuit = {
    type: CircuitTypes.I,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_L1_BOTTOM: Circuit = {
    type: CircuitTypes.L,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_L2_BOTTOM: Circuit = {
    type: CircuitTypes.L,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_L3_BOTTOM: Circuit = {
    type: CircuitTypes.L,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_L4_BOTTOM: Circuit = {
    type: CircuitTypes.L,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_T1_BOTTOM: Circuit = {
    type: CircuitTypes.T,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_T2_BOTTOM: Circuit = {
    type: CircuitTypes.T,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_T3_BOTTOM: Circuit = {
    type: CircuitTypes.T,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

const CIRCUIT_T4_BOTTOM: Circuit = {
    type: CircuitTypes.T,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_BOTTOM.name,
        value: DEFAULT_CIRCUIT_EFFECT_TOP.values[DEFAULT_CIRCUIT_EFFECT_BOTTOM.values.length - 1]
    },
    part: CircuitParts.BOTTOM
}

//🧤
const CIRCUIT_I1_GLOVES: Circuit = {
    type: CircuitTypes.I,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_I2_GLOVES: Circuit = {
    type: CircuitTypes.I,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_L1_GLOVES: Circuit = {
    type: CircuitTypes.L,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_L2_GLOVES: Circuit = {
    type: CircuitTypes.L,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_L3_GLOVES: Circuit = {
    type: CircuitTypes.L,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_L4_GLOVES: Circuit = {
    type: CircuitTypes.L,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_T1_GLOVES: Circuit = {
    type: CircuitTypes.T,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_T2_GLOVES: Circuit = {
    type: CircuitTypes.T,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_T3_GLOVES: Circuit = {
    type: CircuitTypes.T,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

const CIRCUIT_T4_GLOVES: Circuit = {
    type: CircuitTypes.T,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_GLOVES.name,
        value: DEFAULT_CIRCUIT_EFFECT_GLOVES.values[DEFAULT_CIRCUIT_EFFECT_GLOVES.values.length - 1]
    },
    part: CircuitParts.GLOVES
}

//👟
const CIRCUIT_I1_SHOES: Circuit = {
    type: CircuitTypes.I,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_I2_SHOES: Circuit = {
    type: CircuitTypes.I,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_L1_SHOES: Circuit = {
    type: CircuitTypes.L,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_L2_SHOES: Circuit = {
    type: CircuitTypes.L,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_L3_SHOES: Circuit = {
    type: CircuitTypes.L,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_L4_SHOES: Circuit = {
    type: CircuitTypes.L,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_T1_SHOES: Circuit = {
    type: CircuitTypes.T,
    spot: 1,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_T2_SHOES: Circuit = {
    type: CircuitTypes.T,
    spot: 2,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_T3_SHOES: Circuit = {
    type: CircuitTypes.T,
    spot: 3,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}

const CIRCUIT_T4_SHOES: Circuit = {
    type: CircuitTypes.T,
    spot: 4,
    color: EXASCALE_COLORS.RED,
    effect: {
        name: DEFAULT_CIRCUIT_EFFECT_SHOES.name,
        value: DEFAULT_CIRCUIT_EFFECT_SHOES.values[DEFAULT_CIRCUIT_EFFECT_SHOES.values.length - 1]
    },
    part: CircuitParts.SHOES
}


//👕 Top piece presets

//Horizontal H
export const CIRCUIT_BOARD_TOP_PRESET_1: CircuitBoard = [
    [CIRCUIT_L2_TOP, CIRCUIT_I2_TOP, CIRCUIT_I2_TOP, CIRCUIT_L3_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_L3_TOP, CIRCUIT_L2_TOP, CIRCUIT_L4_TOP],
    [CIRCUIT_L2_TOP, CIRCUIT_L4_TOP, CIRCUIT_L1_TOP, CIRCUIT_L3_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_I2_TOP, CIRCUIT_I2_TOP, EXASCALE_ARMORS.top]
]

//Vertical H
export const CIRCUIT_BOARD_TOP_PRESET_2: CircuitBoard = [
    [CIRCUIT_L2_TOP, CIRCUIT_L3_TOP, CIRCUIT_L2_TOP, CIRCUIT_L3_TOP],
    [CIRCUIT_I1_TOP, CIRCUIT_L1_TOP, CIRCUIT_L4_TOP, CIRCUIT_I1_TOP],
    [CIRCUIT_I1_TOP, CIRCUIT_L2_TOP, CIRCUIT_L3_TOP, CIRCUIT_I1_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_L4_TOP, CIRCUIT_L1_TOP, EXASCALE_ARMORS.top]
]

//Horizontal C
export const CIRCUIT_BOARD_TOP_PRESET_3: CircuitBoard = [
    [CIRCUIT_L2_TOP, CIRCUIT_I2_TOP, CIRCUIT_I2_TOP, CIRCUIT_L3_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_I2_TOP, CIRCUIT_L3_TOP, CIRCUIT_I1_TOP],
    [CIRCUIT_L2_TOP, CIRCUIT_I2_TOP, CIRCUIT_L4_TOP, CIRCUIT_I1_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_I2_TOP, CIRCUIT_I2_TOP, EXASCALE_ARMORS.top]
]

//Vertical C
export const CIRCUIT_BOARD_TOP_PRESET_4: CircuitBoard = [
    [CIRCUIT_L2_TOP, CIRCUIT_L3_TOP, CIRCUIT_L2_TOP, CIRCUIT_L3_TOP],
    [CIRCUIT_I1_TOP, CIRCUIT_I1_TOP, CIRCUIT_I1_TOP, CIRCUIT_I1_TOP],
    [CIRCUIT_I1_TOP, CIRCUIT_L1_TOP, CIRCUIT_L4_TOP, CIRCUIT_I1_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_I2_TOP, CIRCUIT_I2_TOP, EXASCALE_ARMORS.top]
]

//T 
export const CIRCUIT_BOARD_TOP_PRESET_5: CircuitBoard = [
    [CIRCUIT_L2_TOP, CIRCUIT_T1_TOP, CIRCUIT_T1_TOP, CIRCUIT_L3_TOP],
    [CIRCUIT_T4_TOP, CIRCUIT_T2_TOP, CIRCUIT_T4_TOP, CIRCUIT_T2_TOP],
    [CIRCUIT_T4_TOP, CIRCUIT_T2_TOP, CIRCUIT_T4_TOP, CIRCUIT_T2_TOP],
    [CIRCUIT_L1_TOP, CIRCUIT_T3_TOP, CIRCUIT_T3_TOP, EXASCALE_ARMORS.top]
]

//🩳 Bottom Piece presets

//Horizontal H
export const CIRCUIT_BOARD_BOTTOM_PRESET_1: CircuitBoard = [
    [CIRCUIT_L2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L3_BOTTOM],
    [CIRCUIT_L1_BOTTOM, CIRCUIT_L3_BOTTOM, CIRCUIT_L2_BOTTOM, CIRCUIT_L4_BOTTOM],
    [CIRCUIT_L2_BOTTOM, CIRCUIT_L4_BOTTOM, CIRCUIT_L1_BOTTOM, CIRCUIT_L3_BOTTOM],
    [EXASCALE_ARMORS.bottom, CIRCUIT_I2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L4_BOTTOM]
]

//Vertical H
export const CIRCUIT_BOARD_BOTTOM_PRESET_2: CircuitBoard = [
    [CIRCUIT_L2_BOTTOM, CIRCUIT_L3_BOTTOM, CIRCUIT_L2_BOTTOM, CIRCUIT_L3_BOTTOM],
    [CIRCUIT_I1_BOTTOM, CIRCUIT_L1_BOTTOM, CIRCUIT_L4_BOTTOM, CIRCUIT_I1_BOTTOM],
    [CIRCUIT_I1_BOTTOM, CIRCUIT_L2_BOTTOM, CIRCUIT_L3_BOTTOM, CIRCUIT_I1_BOTTOM],
    [EXASCALE_ARMORS.bottom, CIRCUIT_L4_BOTTOM, CIRCUIT_L1_BOTTOM, CIRCUIT_L4_BOTTOM]
]

//Horizontal C
export const CIRCUIT_BOARD_BOTTOM_PRESET_3: CircuitBoard = [
    [CIRCUIT_L2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L3_BOTTOM],
    [CIRCUIT_I1_BOTTOM, CIRCUIT_L2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L4_BOTTOM],
    [CIRCUIT_I1_BOTTOM, CIRCUIT_L1_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L3_BOTTOM],
    [EXASCALE_ARMORS.bottom, CIRCUIT_I2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L4_BOTTOM]
]

//Vertical C
export const CIRCUIT_BOARD_BOTTOM_PRESET_4: CircuitBoard = [
    [CIRCUIT_L2_BOTTOM, CIRCUIT_L3_BOTTOM, CIRCUIT_L2_BOTTOM, CIRCUIT_L3_BOTTOM],
    [CIRCUIT_I1_BOTTOM, CIRCUIT_I1_BOTTOM, CIRCUIT_I1_BOTTOM, CIRCUIT_I1_BOTTOM],
    [CIRCUIT_I1_BOTTOM, CIRCUIT_L1_BOTTOM, CIRCUIT_L4_BOTTOM, CIRCUIT_I1_BOTTOM],
    [EXASCALE_ARMORS.bottom, CIRCUIT_I2_BOTTOM, CIRCUIT_I2_BOTTOM, CIRCUIT_L4_BOTTOM]
]

//T 
export const CIRCUIT_BOARD_BOTTOM_PRESET_5: CircuitBoard = [
    [CIRCUIT_L2_BOTTOM, CIRCUIT_T1_BOTTOM, CIRCUIT_T1_BOTTOM, CIRCUIT_L3_BOTTOM],
    [CIRCUIT_T4_BOTTOM, CIRCUIT_T2_BOTTOM, CIRCUIT_T4_BOTTOM, CIRCUIT_T2_BOTTOM],
    [CIRCUIT_T4_BOTTOM, CIRCUIT_T2_BOTTOM, CIRCUIT_T4_BOTTOM, CIRCUIT_T2_BOTTOM],
    [EXASCALE_ARMORS.bottom, CIRCUIT_T3_BOTTOM, CIRCUIT_T3_BOTTOM, CIRCUIT_L4_BOTTOM]
]

//🧤 Glove Piece presets

//Horizontal H
export const CIRCUIT_BOARD_GLOVES_PRESET_1: CircuitBoard = [
    [CIRCUIT_L2_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_I2_GLOVES, EXASCALE_ARMORS.gloves],
    [CIRCUIT_L1_GLOVES, CIRCUIT_L3_GLOVES, CIRCUIT_L2_GLOVES, CIRCUIT_L4_GLOVES],
    [CIRCUIT_L2_GLOVES, CIRCUIT_L4_GLOVES, CIRCUIT_L1_GLOVES, CIRCUIT_L3_GLOVES],
    [CIRCUIT_L1_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_L4_GLOVES]
]

//Vertical H
export const CIRCUIT_BOARD_GLOVES_PRESET_2: CircuitBoard = [
    [CIRCUIT_L2_GLOVES, CIRCUIT_L3_GLOVES, CIRCUIT_L2_GLOVES, EXASCALE_ARMORS.gloves],
    [CIRCUIT_I1_GLOVES, CIRCUIT_L1_GLOVES, CIRCUIT_L4_GLOVES, CIRCUIT_I1_GLOVES],
    [CIRCUIT_I1_GLOVES, CIRCUIT_L2_GLOVES, CIRCUIT_L3_GLOVES, CIRCUIT_I1_GLOVES],
    [CIRCUIT_L1_GLOVES, CIRCUIT_L4_GLOVES, CIRCUIT_L1_GLOVES, CIRCUIT_L4_GLOVES]
]

//Horizontal C
export const CIRCUIT_BOARD_GLOVES_PRESET_3: CircuitBoard = [
    [CIRCUIT_L2_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_I2_GLOVES, EXASCALE_ARMORS.gloves],
    [CIRCUIT_L1_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_L3_GLOVES, CIRCUIT_I1_GLOVES],
    [CIRCUIT_L2_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_L4_GLOVES, CIRCUIT_I1_GLOVES],
    [CIRCUIT_L1_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_L4_GLOVES]
]

//Vertical C
export const CIRCUIT_BOARD_GLOVES_PRESET_4: CircuitBoard = [
    [CIRCUIT_L2_GLOVES, CIRCUIT_L3_GLOVES, CIRCUIT_L2_GLOVES, EXASCALE_ARMORS.gloves],
    [CIRCUIT_I1_GLOVES, CIRCUIT_I1_GLOVES, CIRCUIT_I1_GLOVES, CIRCUIT_I1_GLOVES],
    [CIRCUIT_I1_GLOVES, CIRCUIT_L1_GLOVES, CIRCUIT_L4_GLOVES, CIRCUIT_I1_GLOVES],
    [CIRCUIT_L1_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_I2_GLOVES, CIRCUIT_L4_GLOVES]
]

//T 
export const CIRCUIT_BOARD_GLOVES_PRESET_5: CircuitBoard = [
    [CIRCUIT_L2_GLOVES, CIRCUIT_T1_GLOVES, CIRCUIT_T1_GLOVES, EXASCALE_ARMORS.gloves],
    [CIRCUIT_T4_GLOVES, CIRCUIT_T2_GLOVES, CIRCUIT_T4_GLOVES, CIRCUIT_T2_GLOVES],
    [CIRCUIT_T4_GLOVES, CIRCUIT_T2_GLOVES, CIRCUIT_T4_GLOVES, CIRCUIT_T2_GLOVES],
    [CIRCUIT_L1_GLOVES, CIRCUIT_T3_GLOVES, CIRCUIT_T3_GLOVES, CIRCUIT_L4_GLOVES]
]

//👟 Shoes Piece presets

//Horizontal H
export const CIRCUIT_BOARD_SHOES_PRESET_1: CircuitBoard = [
    [EXASCALE_ARMORS.shoes, CIRCUIT_I2_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L3_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_L3_SHOES, CIRCUIT_L2_SHOES, CIRCUIT_L4_SHOES],
    [CIRCUIT_L2_SHOES, CIRCUIT_L4_SHOES, CIRCUIT_L1_SHOES, CIRCUIT_L3_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L4_SHOES]
]

//Vertical H
export const CIRCUIT_BOARD_SHOES_PRESET_2: CircuitBoard = [
    [EXASCALE_ARMORS.shoes, CIRCUIT_L3_SHOES, CIRCUIT_L2_SHOES, CIRCUIT_L3_SHOES],
    [CIRCUIT_I1_SHOES, CIRCUIT_L1_SHOES, CIRCUIT_L4_SHOES, CIRCUIT_I1_SHOES],
    [CIRCUIT_I1_SHOES, CIRCUIT_L2_SHOES, CIRCUIT_L3_SHOES, CIRCUIT_I1_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_L4_SHOES, CIRCUIT_L1_SHOES, CIRCUIT_L4_SHOES]
]

//Horizontal C
export const CIRCUIT_BOARD_SHOES_PRESET_3: CircuitBoard = [
    [EXASCALE_ARMORS.shoes, CIRCUIT_I2_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L3_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L3_SHOES, CIRCUIT_I1_SHOES],
    [CIRCUIT_L2_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L4_SHOES, CIRCUIT_I1_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L4_SHOES]
]

//Vertical C
export const CIRCUIT_BOARD_SHOES_PRESET_4: CircuitBoard = [
    [EXASCALE_ARMORS.shoes, CIRCUIT_L3_SHOES, CIRCUIT_L2_SHOES, CIRCUIT_L3_SHOES],
    [CIRCUIT_I1_SHOES, CIRCUIT_I1_SHOES, CIRCUIT_I1_SHOES, CIRCUIT_I1_SHOES],
    [CIRCUIT_I1_SHOES, CIRCUIT_L1_SHOES, CIRCUIT_L4_SHOES, CIRCUIT_I1_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_I2_SHOES, CIRCUIT_L4_SHOES]
]

//T 
export const CIRCUIT_BOARD_SHOES_PRESET_5: CircuitBoard = [
    [EXASCALE_ARMORS.shoes, CIRCUIT_T1_SHOES, CIRCUIT_T1_SHOES, CIRCUIT_L3_SHOES],
    [CIRCUIT_T4_SHOES, CIRCUIT_T2_SHOES, CIRCUIT_T4_SHOES, CIRCUIT_T2_SHOES],
    [CIRCUIT_T4_SHOES, CIRCUIT_T2_SHOES, CIRCUIT_T4_SHOES, CIRCUIT_T2_SHOES],
    [CIRCUIT_L1_SHOES, CIRCUIT_T3_SHOES, CIRCUIT_T3_SHOES, CIRCUIT_L4_SHOES]
]


export const EXASCALE_TOP_PRESETS = [
    CIRCUIT_BOARD_TOP_PRESET_1,
    CIRCUIT_BOARD_TOP_PRESET_2,
    CIRCUIT_BOARD_TOP_PRESET_3,
    CIRCUIT_BOARD_TOP_PRESET_4,
    CIRCUIT_BOARD_TOP_PRESET_5
]

export const EXASCALE_BOTTOM_PRESETS = [
    CIRCUIT_BOARD_BOTTOM_PRESET_1,
    CIRCUIT_BOARD_BOTTOM_PRESET_2,
    CIRCUIT_BOARD_BOTTOM_PRESET_3,
    CIRCUIT_BOARD_BOTTOM_PRESET_4,
    CIRCUIT_BOARD_BOTTOM_PRESET_5
]

export const EXASCALE_GLOVES_PRESETS = [
    CIRCUIT_BOARD_GLOVES_PRESET_1,
    CIRCUIT_BOARD_GLOVES_PRESET_2,
    CIRCUIT_BOARD_GLOVES_PRESET_3,
    CIRCUIT_BOARD_GLOVES_PRESET_4,
    CIRCUIT_BOARD_GLOVES_PRESET_5
]

export const EXASCALE_SHOES_PRESETS = [
    CIRCUIT_BOARD_SHOES_PRESET_1,
    CIRCUIT_BOARD_SHOES_PRESET_2,
    CIRCUIT_BOARD_SHOES_PRESET_3,
    CIRCUIT_BOARD_SHOES_PRESET_4,
    CIRCUIT_BOARD_SHOES_PRESET_5
]
