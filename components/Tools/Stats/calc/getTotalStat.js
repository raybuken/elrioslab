import {statList} from '../statsList'


const calcTotalStat = (name,actual) => {
    const stat = statList[name]
    const {normalize,efficiency} = stat
    let value = Number(actual)

    //value without normalize effect
    if(!value ){
        return value
    }
    if(value && value <= normalize[1]) {
        return value
    }
    
    //value under normalize effect
    
    return NormalizingTotalStat(value, efficiency, normalize)
}

const NormalizingTotalStat = (value, efficiency, normalize) => { 
    let acum = normalize[1] //initial Total Stat

    if (value > normalize[4]) return ''
    let newValue = value
    for(let i =1;i<normalize.length;i++){
        let interval1 = normalize[i]
        let interval2 = normalize[i+1]
        let currentEfficiency = efficiency[i] / 100 //eficiencia luego de normalizar
        let normalizing = interval2 - interval1
        newValue = value - normalize[i] //valor para agregar acumulado segun el valor que vaya iterando    
        
        if(newValue > normalizing){
            let numModule = value - interval2
            acum += ((newValue - numModule) /  currentEfficiency)
        }else{
            acum+= (newValue/currentEfficiency)
            break;
        }
    }
    return parseFloat(acum.toFixed(2))
}

export {calcTotalStat}