import {statList} from '../statsList'

const calcEfficiency = (name,actual) => {
    let efc = 100
    const {normalize,efficiency} = statList[name]
    for(let i=0; i<normalize.length;i++){
        if(actual >= normalize[i]) {
            (efc = efficiency[i]) 
        } 
        else break
    }
    return efc
}

export{calcEfficiency}