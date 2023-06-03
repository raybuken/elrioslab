import {statList} from '../statsList'

const calcMultiplicativeStat = (name,actual,mStats) => {

    const normalizeSize = statList[name].normalize.length -1
    const cap = statList[name].normalize[normalizeSize]

    const statName = statList[name].name
    let result;
    if(statName === 'damage reduction'){
        actual = parseFloat(actual) || 0
        if(actual > cap){
            actual = cap
        }
        result = calcFinalDamageReduction(actual, mStats)
    }else{
        if(statList[name].isSpd){
            actual = parseFloat(actual) + 100 || 100
            if(actual > cap + 100){
                actual = cap + 100
            }
        }
        result =  calcMultiplier(actual, mStats, statName)
    }
    
    if(statName === 'damage reduction'){
        return Number(result)
    }else if(statList[statName].isSpd){
        return  Number(result)
    }
    else if(result > cap){
        return cap
    }
    return parseFloat(result)
}  

const calcFinalDamageReduction = (actual, mStats) => {
    const mStat = mStats.map(el => 1 - (el/100)).concat(1 - actual/100)
    let multiplier = getMultiplier(mStat)
    const result = (1 - multiplier)*100
    return parseFloat(result).toFixed(2)
}

const calcMultiplier = (actual,mStats, name) => {
    const mStat = mStats.map( el => 1 + (el/100))
    let multiplier = getMultiplier(mStat)
    if(name === 'action speed' && multiplier > 1.4){
        multiplier = 1.4;
    }

    const result = multiplier * Number(actual)
    return parseFloat(result).toFixed(2)
}


const getMultiplier = mStats => Number(mStats.reduce((prev,acum) =>  prev * acum ))

export{calcMultiplicativeStat}