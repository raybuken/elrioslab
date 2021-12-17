import {stages, stagesKR} from './reforgeStages'
import {FilterByPercentages} from './FilterByPercentages'

const calcReforge = (fromStage,toStage,percentage, server) => {
        const currentStages = server === 'KR' ? filterStage(stagesKR, fromStage, toStage) : filterStage(stages, fromStage, toStage)
        const filter  = FilterByPercentages(currentStages,percentage, server)
       return getResults(currentStages,filter)
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

const seedCount = (clickCount) => {
    
    if(clickCount <=100){
        return 0
    }else {
        return Math.ceil(( clickCount - 100 ) / 10)
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
        seeds: seedCount(clickCount(cStages,reducer.attempt)),
        attempts: convertToLocale(clickCount(cStages,reducer.attempt))
    }
    return result
}

export {calcReforge}