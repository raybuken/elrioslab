/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './selected-circuit.module.css';
import { getCircuitUrl } from '../../utils/exascale';

function SelectedCircuit({selectedCircuit, onClickSelectCircuit, isButtonSelectCircuitClicked, onDragSelectedCircuit}) {
  return (
    <div>
        <div className={styles.selectedCircuit}>
            <div className={styles.imageContainer}>
                <img id="selected-circuit" src={getCircuitUrl(selectedCircuit)} alt="" draggable='true' onDrag={onDragSelectedCircuit}/>
            </div>

            <button className="btn btn-primary" onClick={onClickSelectCircuit} disabled={isButtonSelectCircuitClicked}>Insert</button>
        </div>

    </div>
  )
}

export default SelectedCircuit