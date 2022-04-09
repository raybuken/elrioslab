import {statList} from '../statsList'

const calcMultiplicativeStat = (name,actual,mStat) => {

    const normalizeSize = statList[name].normalize.length -1
    const cap = statList[name].normalize[normalizeSize]

    const statName = statList[name].name

    if(statName === 'action speed' || statName === 'movement speed' || statName === 'jump speed'){
        actual = parseFloat(actual) + 100
    }
    const result = calcMultiplier(actual, mStat)
    
    if( !statList[statName].overcapWithMultiplicativeStat && result > cap){
        return cap
    }else if(statList[statName].overcapWithMultiplicativeStat){
        return  Number(result)
    }
    return parseFloat(result)
}  

const calcMultiplier = (actual,mStat) => {
    mStat = mStat.map( el => 1 + (el/100))
    let result = Number(mStat.reduce((prev,acum) =>  prev * acum ))
    
    result *= Number(actual)

    return parseFloat(result).toFixed(2)
}

export{calcMultiplicativeStat}