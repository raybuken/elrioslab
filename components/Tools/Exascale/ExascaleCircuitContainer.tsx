import React from 'react'
import { CircuitParts } from './data/exascale'
import ExascaleCircuitWrapper from './ExascaleCircuitWrapper'
import ExascaleCircuitTabs from './CircuitTabs/ExascaleCircuitTabs'

function ExascaleCircuitContainer() {
    const pieces = [
        CircuitParts.TOP,
        CircuitParts.BOTTOM,
        CircuitParts.GLOVES,
        CircuitParts.SHOES
    ]

    return (
        <div className="exascale-container">
            <h1 className="text-center">Exascale Circuit maker simulator</h1>

            <ExascaleCircuitTabs pieces={pieces} />
            
            <div className="tab-content py-2" id="tabExascaleContent">
                {pieces.map((piece, index) => (
                    <div key={piece} className={`tab-pane fade${index === 0 ? ' show active' : ''}`} id={`${piece}-tab-pane`} role="tabpanel" aria-labelledby={`${piece}-tab`} tabIndex={0}>
                        <ExascaleCircuitWrapper piece={piece} />
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default ExascaleCircuitContainer