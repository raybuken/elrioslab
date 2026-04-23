import {getAtkGain} from '../../Tools/Adaptation/getAtkGain'

const debuffs = [10,20,30,50,60,70,80, 90, 95]

const getMultiplier = debuffs.map(debuff => {
    const result = {debuff: debuff+'%',multiplier:`${getAtkGain(debuff,debuff).atkGain}%`}
    return result
})


export {getMultiplier}