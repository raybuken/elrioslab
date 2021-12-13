import {CalcPercentages} from './CalcPercentages'

const FilterByPercentages = (rStages,percentage, server) => {
    const percentagesArray = CalcPercentages(rStages[0].stage, server)
   return getResults(rStages[0],percentagesArray.indexOf(percentage))
}

const reduceValue = (el,position) => el - position
const multiplyValue = (el,position) => el * position

const getResults = (rStage,reducer) => {
    const {glaciem,amethyst,crystal,ed,attempt} = rStage
    const result = {
        multipliers:{
            glaciem: multiplyValue(glaciem,reducer),
            amethyst: multiplyValue(amethyst,reducer),
            crystal: multiplyValue(crystal,reducer),
            ed: multiplyValue(ed,reducer),
        },
        attempt: reduceValue(attempt,reducer)
   }
    return result
}


export {FilterByPercentages}