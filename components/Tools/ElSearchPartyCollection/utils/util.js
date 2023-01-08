import { collection } from '../data/collection'

export const getLastSessionSynergyData = (dispatch, synergyParam) => {

    if(synergyParam){
        const classesSelected = parseClassesSelectedParamToList(synergyParam)
        localStorage.setItem("synergy", JSON.stringify(classesSelected))
    }

    const synergyData = localStorage.getItem("synergy")

    if(synergyData){
        try{
            dispatch({type: 'get-synergy-data', data: synergyData})
            
        }
        catch(err){
            console.log(err.message)
        }
    }
}

export const parseClassesSelectedParamToList = synergyParam => {
    const parsedSynergyParam = synergyParam.split(" ")
    const classesSelected = parsedSynergyParam.map(character => collection.find(el => el.alias === character || null))

    return classesSelected
}

export const parseClassesSelectedListToParam = classesSelected => {
    const param = classesSelected.filter(el => el).map(el => el.alias).join("+")
    return param ? "?synergy=" + param : ''
}