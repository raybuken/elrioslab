

const getAtkGain = (debuff,adaptation) => {
    debuff = Number(debuff)
    adaptation = Number(adaptation)

    if(adaptation === 0 || !adaptation){
        return 0
    }
    
    if(adaptation > debuff){
        return calcAtkGain(debuff,debuff)
    }
    
    return calcAtkGain(debuff,adaptation)
}

const calcAtkGain = (debuff,adaptation) =>  convertNumber( (1 - debuff/100 + adaptation/100) / (1- debuff/100) * 100 - 100)

const convertNumber = (number) => parseFloat(number.toFixed(2))

export {getAtkGain}