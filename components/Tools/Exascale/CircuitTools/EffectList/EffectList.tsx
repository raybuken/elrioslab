import React from 'react'
import { Bonification } from '../../data/exascale'
import styles from './effectList.module.css'

function EffectList({bonifications}: {bonifications: Bonification[]}) {
  return (
    <div className={styles.effectList}>
        <h2>Effects</h2>
        <ul>
            {bonifications.map(bonification => (
                <li className="d-flex justify-content-between align-items-center" key={bonification.name.trim()}>
                    <div className="col-8">
                        <span className={styles.name}>{bonification.name}</span>
                    </div>
                    <div className="col-4">
                        <span className={styles.total}>{bonification.total}%</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EffectList