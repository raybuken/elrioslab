
const getDefBase = (defP,level) => {
    //Def_multiplier * Def_percent / (1 - Def_percent)
    defP = Number(defP/100)
    if(defP >= 1){
        defP = 0.99
    }
    const defMultiplier = parseFloat(258.6436 + Number(level) * 39.3526)
    return defMultiplier * defP / parseFloat(1 - defP)
}

const getDefPercentage = (defB,level) => {
    //(Def_base / Def_multiplier) / (1 + Def_base / Def_multiplier)
    defB = Number(defB)
    const defMultiplier = parseFloat(258.6436 + Number(level) * 39.3526)
    return (defB/defMultiplier) / (1 + defB / defMultiplier)*100
}

const getRemainDefense = (defB,ignoreDef,level) => {
    const remainDef = defB*(1- ignoreDef/100)
    return parseFloat(getDefPercentage(remainDef,level).toFixed(2))
}

const getDamageGained = (defP,ignoreDef) => {
    // 1/ (1 -defP * (1-(1- Def_ignore_1)) * (1 - Def_ignore_2) )
    ignoreDef /= 100
    defP /= 100
    return parseFloat(((1 / (1 - defP *(1-(1 - ignoreDef)) )) *100 -100).toFixed(2))
}


export {getDefBase,getDefPercentage,getRemainDefense,getDamageGained}