import {statList} from '../statsList'

const calcMultiplicativeStat = (name,actual,mStat) => {
    if(actual > statList[name].normalize[4]){
        actual = Number( statList[name].normalize[4] )
    }
    const statName = statList[name].name
    const result = calcMultiplier(actual, mStat)
    
    if( (statName === 'maximize' || statName === 'critical' ) && result > 100){
        return 100
    }else if(statName === 'action speed' || statName === 'movement speed' || statName === 'jump speed'){
        if(result > 30) {
            return 130
        }
        else return 100 + Number(result)
    }
    return parseFloat(result)
}  

const calcMultiplier = (actual,mStat) => {
    mStat = mStat.map( el => 1 + (el/100))
    let result = Number(mStat.reduce((prev,acum) =>  prev * acum ))
    
    result *= Number(actual)
    console.log(result)
    return parseFloat(result).toFixed(2)
    
}

export{calcMultiplicativeStat}