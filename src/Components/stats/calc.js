import {statList} from './statsList'

//Calc Actual Stat
const CalcActualStat = (name,total) => {
    const stat = statList[name]
    const {normalize,efficiency} = stat
    const value = Number(total)

    //value without normalize effect
    ActualStatWithoutNormalize(value,normalize,efficiency)
        
    //value under normalize effect
    let acum = normalize[1] //initial Total Stat
    let efc = 100 //initial efficiency
    return NormalizingActualStat(value, acum, efc, efficiency, normalize)
}

const ActualStatWithoutNormalize = (value,normalize,efficiency) => {
    if(value && value < normalize[1]) {
        return { acum: value, efficiency: efficiency[0] }
    } else if((value === normalize[1])){
        return { acum: value, efficiency: efficiency[1] }
    }
}

const NormalizingActualStat = (value,acum,efc,efficiency,normalize) => {
    for(let i =1;i<normalize.length;i++){
        let interval1 = normalize[i]
        let interval2 = normalize[i+1]
        let currentEfficiency = efficiency[i] / 100 
        let normalizing = (interval2 - interval1) / currentEfficiency   
        value -= normalizing
        if(value > normalizing ){
            efc = (currentEfficiency*100 === normalize[i] ? efficiency[i] : efficiency[i+1])
            acum+= interval2 - interval1
        }else{
            acum += (value*currentEfficiency)
            efc = (acum === normalize[i] || efficiency[i+1] === 0 ) ? efficiency[i] : efficiency[i+1]
            acum > normalize[4] && ( acum = normalize[4] )
            break;
        }
    }
    return {acum:acum || normalize[normalize.length-1],efficiency: efc ||0}
}

//Calc Total Stat
const CalcTotalStat = (name,actual) => {
    const stat = statList[name]
    const {normalize,efficiency} = stat
    let value = Number(actual)
}


export {CalcTotalStat,CalcActualStat}