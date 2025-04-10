/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Circuit, CircuitTypes, EXASCALE_CIRCUIT_EFFECTS} from '../data/exascale'
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
        setSelectedCircuit(prev => ({...prev, type, spot: 1}))
    }

    const onChangeSpot = (e) => {
        const spot = e.target.value
        setSelectedCircuit(prev => ({...prev, spot: Number(spot) as typeof prev.spot}))
    }

    const onChangeEffect = (effectName, effectValue) => {
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

