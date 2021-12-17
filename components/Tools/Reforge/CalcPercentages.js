import {stages, stagesKR} from './reforgeStages'

const CalcPercentages = (stage, server) => {
    console.log(stage)
    console.log(server)
    //List of possible percentages 
    if (stage) {
        const percentage = server === 'KR' ? stagesKR[stage-1].percentage : stages[stage-1].percentage
        const result = new Array(Math.ceil(100/percentage)) // number of possible values
        let counter = 0
        let regEx = /(\d+(\.\d{1,4})*)/g // asegura que el elemento tenga maximo 4 digitos despues del punto
        for (let i=0;counter <= 100;i++){
            counter =(percentage*i).toString().match(regEx)
            counter = Number(counter[0])
            if(counter >= 100){
                result[i] = 100    
                break
            } 
            else{
                result[i] = counter    
            } 
            if( counter === 100){
                break
            }
        }
        return result
    }
    return [0]
}

export {CalcPercentages}