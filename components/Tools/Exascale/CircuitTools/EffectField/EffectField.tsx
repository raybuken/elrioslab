import React from 'react'
import styles from './effect-field.module.css'
import { Circuit, CircuitTypes, EXASCALE_CIRCUIT_EFFECTS } from '../../data/exascale';

function EffectField({selectedCircuit, onChangeEffect}: {selectedCircuit: Circuit, onChangeEffect: (effectName: string, effectValue: string) => void}) {
    const part = selectedCircuit.part;
    const effects = EXASCALE_CIRCUIT_EFFECTS[part];
    const isSelectedCircuitTypeT = selectedCircuit.type === CircuitTypes.T
    const effectValues = isSelectedCircuitTypeT ? effects[selectedCircuit.effect.name].tValues : effects[selectedCircuit.effect.name].values
    const [selectedEffectValue, setSelectedEffectValue] = React.useState<string>(effectValues[0])

    const onChangeEffectValue = (e) => {
        setSelectedEffectValue(e.target.value)

        onChangeEffect(selectedCircuit.effect.name, e.target.value)
    }

    return (
        <div className={styles.effectContainer}>
            <select className={styles.select} name="effect" id="effect" onChange={(e) => onChangeEffect(e.target.value, selectedEffectValue)} defaultValue={Object.keys(effects)[0]}>
                {Object.keys(effects).map((effect, index) =>
                    <option key={index} value={effect}>{effect}</option>
                )}
            </select>
            <select className={styles.select} name="effectValue" id="effectValue" defaultValue={selectedEffectValue} onChange={(e) => onChangeEffectValue(e)}>
                {Object.values(effectValues).map((value, index) =>
                    <option key={index} value={value as string}>{value as string}</option>
                )}
            </select>
        </div>
    )
}

export default EffectField