import {statList} from '../statsList'

const calcActualStat = (name,total) => {
    const stat = statList[name]
    const {normalize,efficiency} = stat
    const value = Number(total)
    //value without normalize effect
    if(!value ){
        return value
    }
    if(value && value <= normalize[1]) {
        return value
    }
        
    //value under normalize effect
    return NormalizingActualStat(value, efficiency, normalize)
}

const NormalizingActualStat = (value, efficiency, normalize) => {
    let acum = normalize[1] //initial Total Stat
    let newValue= value - normalize[1]

    for(let i =1;i<normalize.length;i++){
        let currentEfficiency = efficiency[i] / 100 
        let normalizing = (normalize[i+1] - normalize[i]) / currentEfficiency
        if(newValue > normalizing ){
            newValue -= normalizing
            acum += ((normalizing)*currentEfficiency)
        }else{   
            acum += (newValue*currentEfficiency)
            break;
        }
    }
    return parseFloat(acum.toFixed(2))
}

export{calcActualStat}