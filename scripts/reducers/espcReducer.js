const initialValue = [null, null, null, null, null, null]


const onClickCollection = (state, action) => {
    let classesSelected = [...state]

    const {character} = action
            const characterClassIsNotSelected = !classesSelected.some(char => char && char.alias === character.alias)
            
            if(characterClassIsNotSelected){
                for(let i = 0; i < classesSelected.length; i++){
                    if(!classesSelected[i]){
                        classesSelected[i] = character
                        break;
                    }
                }
                localStorage.setItem('synergy', JSON.stringify(classesSelected))
            }
            
            return classesSelected
}

const removeClassSynergy = (state, action) => {
    let classesSelected = [...state]
    const characterPosition = classesSelected.indexOf(action.character)

    classesSelected[characterPosition] = null
    
    localStorage.setItem('synergy', JSON.stringify(classesSelected))
    return classesSelected
}

const getSynergyData = action => {
    if(action.data){
        return JSON.parse(action.data)
    }
    return initialValue
}

function reducer(state, action) {

    switch(action.type){
        case "click-collection":
            return onClickCollection(state, action)
        case "remove-class-synergy":
            return removeClassSynergy(state, action)
        case "get-synergy-data":
            return getSynergyData(action)
        default:
            return getSynergyData(action)
    }
}

export {reducer, initialValue}