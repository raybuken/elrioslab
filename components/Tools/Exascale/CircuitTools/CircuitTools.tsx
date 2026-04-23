/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Circuit, CircuitTypes, effectNames, EXASCALE_CIRCUIT_EFFECTS} from '../data/exascale'
import styles from './circuit-tools.module.css'
import ColorField from './ColorField/ColorField'
import TypeField from './TypeField/TypeField'
import SpotField from './SpotField/SpotField'
import EffectField from './EffectField/EffectField'

function CircuitTools({selectedCircuit, setSelectedCircuit}: {selectedCircuit: Circuit, setSelectedCircuit: React.Dispatch<React.SetStateAction<Circuit>>}) {
    const onChangeColor = (e) => {
        const color = e.target.value
        setSelectedCircuit(prev => ({...prev, color}))
    } 

    const onChangeType = (e) => {
        const type = e.target.value

        setSelectedCircuit(prev => {
            const circuitPart = EXASCALE_CIRCUIT_EFFECTS[prev.part]
            const defaultEffect = circuitPart[effectNames.Critical]
            const effect = type === CircuitTypes.REPLICATED ? {
                name: effectNames.ReplicatedT,
                value: 0
            } : {
                name: defaultEffect.name,
                value: defaultEffect.values[0],
            }

            return ({
                ...prev, 
                type, 
                spot: 1, 
                effect
            })  
        })
    }

    const onChangeSpot = (e) => {
        const spot = e.target.value
        setSelectedCircuit(prev => ({...prev, spot: Number(spot) as typeof prev.spot}))
    }

    const onChangeEffect = (effectName, effectValue, replicated = false) => {
        if (replicated) {
            setSelectedCircuit(prev => ({...prev, effect: {name: effectName, value: effectValue}}))
            return
        }

        const selectedEffect = EXASCALE_CIRCUIT_EFFECTS[selectedCircuit.part][effectName]
        setSelectedCircuit(prev => ({
            ...prev, 
            effect: {
                name: selectedEffect.name,
                value: effectValue
            }}
        ))
    }

    return (
        <div className={styles['circuit-tools']}>
            <ColorField onChangeColor={onChangeColor} />
            <TypeField onChangeType={onChangeType} />
            <SpotField selectedCircuit={selectedCircuit} onChangeSpot={onChangeSpot} />
            <EffectField selectedCircuit={selectedCircuit} onChangeEffect={onChangeEffect} />
        </div>
    )
}

export default CircuitTools

