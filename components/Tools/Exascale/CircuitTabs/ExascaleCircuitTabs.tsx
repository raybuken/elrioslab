import React from 'react'
import { CircuitParts } from '../data/exascale'
import styles from './exascale-circuit-tabs.module.css';

function ExascaleCircuitTabs({ pieces }: { pieces: CircuitParts[] }) {

  return (
    <ul className={`nav nav-tabs ${styles.exascale_tabs}`}>
        {pieces.map((piece, index) => (
            <li key={piece} className={`nav-item ${styles.nav_item}`} role='presentation'>
                <button 
                    id={`${piece}-tab`} 
                    className={`nav-link${index === 0 ? ' active' : ''} ${styles.nav_link}`} 
                    data-bs-toggle="tab"
                    data-bs-target={`#${piece}-tab-pane`}
                    type='button'
                    role='tab'
                    aria-controls={`${piece}-tab-pane`}
                    aria-selected={index === 0 ? 'true' : 'false'}
                >
                    {piece}
                </button>
            </li>
        ))}
    </ul>
  )
}

export default ExascaleCircuitTabs