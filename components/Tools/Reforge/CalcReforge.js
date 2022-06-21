import {stages, stagesKR, stagesTenebrous} from './reforgeStages'
import {FilterByPercentages} from './FilterByPercentages'

const calcReforge = (fromStage,toStage,percentage, durability, armor, server) => {
        //if tenebrous armor selected if not, Rigo server compare server
        const currentStages = armor ==='Tenebrous' ? filterStage(stagesTenebrous, fromStage, toStage) : server === 'KR' ? filterStage(stagesKR, fromStage, toStage) : filterStage(stages, fromStage, toStage)
        const filter  = FilterByPercentages(currentStages,percentage, armor, server)
       return getResults(currentStages,filter, durability)
}

const filterStage = (elems, from, to) =>{
    return elems.filter(stage => {
        return stage.stage > from && stage.stage <= to
    })
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

const seedCount = (clickCount, durability) => {
    console.log(durability)
    if(clickCount <=durability){
        return 0
    }else {
        return Math.ceil(( clickCount - durability ) / 10)
    }
}

const convertToLocale = el => el.toLocaleString()
const getResults = (cStages,reducer, durability) => {
    const {glaciem,amethyst,crystal,ed} = reducer.multipliers

    const result = { 
        glaciems: convertToLocale(glaciemCount(cStages) - glaciem),
        amethyst: convertToLocale(amethystCount(cStages) - amethyst),
        crystals: convertToLocale(crystalCount(cStages) - crystal),
        ed: convertToLocale(edCount(cStages) - ed),
        seeds: seedCount(clickCount(cStages,reducer.attempt), durability),
        attempts: convertToLocale(clickCount(cStages,reducer.attempt))
    }
    return result
}

export {calcReforge}