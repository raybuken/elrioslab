import React from 'react'
import { CircuitTypes, EXASCALE_COLORS } from '../../data/exascale'
import styles from './type-field.module.css'

function TypeField({onChangeType}: {onChangeType: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    const types = [CircuitTypes.I, CircuitTypes.L, CircuitTypes.T]
    
    const EXA_TYPES = {
        [CircuitTypes.I]: 'Type I',
        [CircuitTypes.L]: 'Type L',
        [CircuitTypes.T]: 'Type T'
    }

    return (
        <div className={styles.typeField}>
        {types.map((type, index) => 
            <div className={styles.typeContainer} key={index} >
                <label htmlFor="type">{EXA_TYPES[type]}</label>
                <input 
                    className={styles.type} 
                    type="radio" 
                    name="type" 
                    id={type} 
                    defaultValue={type} 
                    defaultChecked={index === 0} 
                    onChange={onChangeType}
                />
            </div>
        )}
        </div>
    )
}

export default TypeField