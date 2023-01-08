
import React, { useContext } from 'react'
import { synergy } from './data/synergy'
import ESPCContext from '../../Context/ESPCContext'
import SynergyEffect from './SynergyEffect'

function SynergyEffectList({filterByEffect, removeFilters, filterEffectSelected}) {
    const {classesSelected} = useContext(ESPCContext)

    const getEffectList = () => {
        const characterList = classesSelected.filter(character => !!character)
        let synEffectList = []
        if(characterList){
            characterList.forEach(character => {
                character.synergies.forEach((elem) => {
                    const currentSynergy = synergy.find(syn => syn.name === elem)
    
                    const effectInListIncluded = synEffectList.find(el => el.name === currentSynergy.name)

                    if(effectInListIncluded){
                        const position = synEffectList.indexOf(effectInListIncluded)
                        const count = synEffectList[position].count
                        synEffectList[position].count = count + 1
                    }else{
                        synEffectList.push({
                            ...currentSynergy,
                            count: 1
                        })
                    }
                })
            })
            
            const synergyNotInCharacterList = synergy.filter(syn => !synEffectList.some(el => el.name === syn.name)).map(syn => ({...syn, count: 0}))
            synEffectList = [...synEffectList, ...synergyNotInCharacterList]
        }

        synEffectList.sort(a => {
            if(a.characters.some(eff => a.count >= eff)){
                return -1
            }
            return 1
        })
        return synEffectList
    }

    const effectList = getEffectList()

  return (
    <div className='synergy-effect-list'>
        <h2 className='synergy-effect-title'>Synergy Effect</h2>
        <ul className='effect-list'>
            {effectList.map(effect => {
                return (
                    <SynergyEffect 
                     effect={effect}
                     filterEffectSelected={filterEffectSelected} 
                     removeFilters={removeFilters}
                     filterByEffect={filterByEffect}
                     key={effect.name}
                    />
                )}
            )}
        </ul>
        
    </div>
  )
}

export default SynergyEffectList