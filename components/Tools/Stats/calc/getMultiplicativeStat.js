import {statList} from '../statsList'

const calcMultiplicativeStat = (name,actual,mStat) => {
    actual = Number(actual)
    if(actual > statList[name].normalize[4]){
        actual = Number( statList[name].normalize[4] )
    }
    const statName = statList[name].name
    const result = parseFloat(Number(actual) + Number(actual * mStat/100)).toFixed(2)
    const resultAS = parseFloat( Number(actual) + (100+actual)*mStat/100 ).toFixed(2)
    if( (statName === 'maximize' || statName === 'critical' ) && result > 100){
        return 100
    }else if(statName === 'action speed'){
        return resultAS
    }
    return parseFloat(result)
}  

export{calcMultiplicativeStat}