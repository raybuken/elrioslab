import {stages, stagesKR, stagesTenebrous, stagesTenebrousKR} from './reforgeStages'

const CalcPercentages = (stage, armor, server) => {
    //List of possible percentages 
    if (stage) {
        //if tenebrous armor selected if not, Rigo server compare server
        const setStages = armor === 'Tenebrous' ? stagesTenebrous : stages
        const setStagesKR = armor === 'Tenebrous' ? stagesTenebrousKR : stagesKR

        const percentage = server === 'KR' ? setStagesKR[stage-1].percentage : setStages[stage-1].percentage

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
        }
        return result
    }
    return [0]
}

export {CalcPercentages}