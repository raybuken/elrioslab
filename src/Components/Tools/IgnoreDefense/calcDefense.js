
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

const getIgnoreDefenseMultiplier = (ignoreDefense) => 1 -ignoreDefense/100
const parseResult = (result) => parseFloat(result).toFixed(2)

const getRemainDefense = (defB,ignoreDef,level) => {
    const ignDef = ignoreDef.map(value => getIgnoreDefenseMultiplier(value)).reduce((acum,current) => acum * current)
    const remainDef = defB*(1-(1 -ignDef))
    return parseResult(getDefPercentage(remainDef,level))
}

const getDamageGained = (defP,ignoreDef) => {
    // 1/ (1 -defP * (1-(1- Def_ignore_1)) * (1 - Def_ignore_2) )
    const ignDef = ignoreDef.map(value => getIgnoreDefenseMultiplier(value)).reduce((acum,current) => acum * current)
    defP /= 100
    let result = ((1 / (1 - defP *(1-ignDef) ) * 100 -100))
    ignoreDef /= 100
    return parseResult(result)
}

export {getDefBase,getDefPercentage,getRemainDefense,getDamageGained}