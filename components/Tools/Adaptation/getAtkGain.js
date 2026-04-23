

const getAtkGain = (debuff, adaptation, hyperAdaptation) => {
    debuff = Number(debuff)
    adaptation = Number(adaptation)
    hyperAdaptation = Number(hyperAdaptation) || 0

    if(adaptation === 0 || !adaptation){
        return {
            atkGain: 0,
            remainAdaptationDebuff: debuff
        }
    }

    const totalAdaptation = adaptation + hyperAdaptation

    const remainAdaptationDebuff = totalAdaptation > debuff ? 0 :  debuff - totalAdaptation
    const atkGain = totalAdaptation > debuff ? calcAtkGain(debuff,debuff) : calcAtkGain(debuff, totalAdaptation)
    
    return {
        atkGain: atkGain,
        remainAdaptationDebuff: remainAdaptationDebuff
    }
}

const calcAtkGain = (debuff,adaptation) =>  {
    const result = (1 - debuff/100 + adaptation/100) / (1- debuff/100) * 100 - 100
    return convertNumber(result)
}

const convertNumber = (number) => parseFloat(number.toFixed(2))

export {getAtkGain}