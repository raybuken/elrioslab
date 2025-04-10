/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Circuit, CircuitTypes } from '../../data/exascale';
import styles from './spot-field.module.css';
import { getCircuitUrl } from '../../utils/exascale';

function SpotField({ selectedCircuit, onChangeSpot }: { selectedCircuit: Circuit, onChangeSpot: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    const spots = selectedCircuit.type === CircuitTypes.I ? [1, 2] : [1, 2, 3, 4];

    return (
        <div className={styles.spotField}>
            {spots.map((spot, index) =>
                <div className={styles.spotContainer} key={index} >
                    <img src={getCircuitUrl({
                        ...selectedCircuit,
                        spot: spot as typeof selectedCircuit.spot,
                    })} alt="spot" className={styles.circuitImg} />
                    <input
                        className={styles.spot}
                        type="radio"
                        name="spot"
                        id={spot.toString()}
                        defaultValue={spot.toString()}
                        defaultChecked={index === 0}
                        onChange={onChangeSpot}
                    />
                </div>
            )}
        </div>
    )
}

export default SpotField