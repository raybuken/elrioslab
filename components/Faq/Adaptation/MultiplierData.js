import {getAtkGain} from '../../Tools/Adaptation/getAtkGain'

const debuffs = [10,20,30,50,60,70,80]

const getMultiplier = debuffs.map(debuff => {
    const result = {debuff: debuff+'%',multiplier:`${getAtkGain(debuff,debuff)}%`}
    return result
})


export {getMultiplier}