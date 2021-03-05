import {stages} from './reforgeStages'
import {stages as krStages} from './reforgeStagesKR'
import {FilterByPercentages} from './FilterByPercentages'

const calcReforge = (fromStage,toStage,percentage,isKR) => {
    if(isKR){
        const currentStages = krStages.filter(stage => {
            return stage.stage > fromStage && stage.stage <= toStage
        })
        const filter  = FilterByPercentages(currentStages,percentage)
       return getResults(currentStages,filter)
    }
    else{
        const currentStages = stages.filter(stage => {
            return stage.stage > fromStage && stage.stage <= toStage
        })
        const filter  = FilterByPercentages(currentStages,percentage)
       return getResults(currentStages,filter)
    }
}

const glaciemCount = (rStages) => {
    const result = rStages.reduce(((acum,current) => acum + (current.glaciem * current.attempt)),0)
    return result
}

const amethystCount = (rStages) => {
    const result = rStages.reduce(((acum,current) => acum + (current.amethyst * current.attempt)),0)
    return result
}

const crystalCount = (rStages) => {
    const result = rStages.reduce(((acum,current) => acum + (current.crystal * current.attempt)),0)
    return result
}

const edCount = (rStages) => {
    const result = rStages.reduce(((acum,current) => acum + (current.ed * current.attempt)),0)
    return result
}

const clickCount = (rStages,reducer) => {
    reducer = rStages[0].attempt - reducer
    let result = rStages.reduce(((acum,current) => acum + current.attempt),0)
    result-= reducer
    return result
}

const seedCount = (rStages) => {
    let attempts = rStages.reduce(((acum,current) => acum + current.attempt),0)
    if(attempts <100){
        return 0
    }else {
        return Math.ceil(( attempts - 100 ) / 10)
    }
}

const convertToLocale = el => el.toLocaleString()
const getResults = (cStages,reducer) => {
    const {glaciem,amethyst,crystal,ed} = reducer.multipliers
    const result = { 
        glaciems: convertToLocale(glaciemCount(cStages) - glaciem),
        amethyst: convertToLocale(amethystCount(cStages) - amethyst),
        crystals: convertToLocale(crystalCount(cStages) - crystal),
        ed: convertToLocale(edCount(cStages) - ed),
        seeds: seedCount(cStages),
        attempts: convertToLocale(clickCount(cStages,reducer.attempt))
    }
    return result
}

export {calcReforge}