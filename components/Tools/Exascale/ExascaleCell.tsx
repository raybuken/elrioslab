/* eslint-disable @next/next/no-img-element */
import React, { useId, useRef, useState } from 'react'
import { Circuit, CircuitTypes, ExascaleArmor } from './data/exascale'
import styles from './exascale.module.css';
import { getCircuitUrl } from './utils/exascale';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

type ExascaleCellComponentType = {
    cell: Circuit | ExascaleArmor | null, 
    onClickCellConfirmation: (e: any) => void 
    handleOnDragCircuitLeave: (e: any) => void
}

function ExascaleCell({ cell, onClickCellConfirmation, handleOnDragCircuitLeave }: ExascaleCellComponentType) {
    const [showTooltip, setShowTooltip] = useState(false)
    const [isOnDragOver, setIsOnDragOver] = useState(false)
    const cellRef = useRef(null)
    const cellId = useId()

    const onDrop = (e) => {
        handleOnDragCircuitLeave(e)
        onDragEnd(e)
    }

    const onDragOver = (e) => {
        e.preventDefault()
        setIsOnDragOver(true)
    }

    const onDragEnd = (e) => {
        e.preventDefault()
        setIsOnDragOver(false)
    }
    

    if (cell === null) {
        return (
            <div id={cellId} className={`${styles['circuit-cell']} ${styles['circuit-empty']}`} 
                onClick={onClickCellConfirmation}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragEnd}
                onDragEnd={onDragEnd}
            >
                <img src="/images/empty_circuit.png" alt="empty" />
            </div>
        )
    }

    return (
        <>
            {'type' in cell && cell.type ? 
                <div 
                    id={cellId} 
                    ref={cellRef} 
                    className={`${styles['circuit-cell']} ${'type' in cell && !cell.type ? styles.armor : ''} ${isOnDragOver ? styles.dragOver : ''}`} 
                    onClick={onClickCellConfirmation}
                    onMouseEnter={() => setShowTooltip(true)} 
                    onMouseLeave={() => setShowTooltip(false)}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onDragLeave={onDragEnd}
                    onDragEnd={onDragEnd}
                >
                    <img src={getCircuitUrl(cell)} alt="armor" />
                </div>
            
                :
                <div 
                    id={cellId} 
                    ref={cellRef} 
                    className={`${styles['circuit-cell']} ${styles.armor} `} 
                >
                    <img src={'url' in cell ? cell.url : ''} alt="armor" />
                </div>
            }

            {'effect' in cell && cell.effect &&
                <Overlay target={cellRef.current} show={showTooltip} placement="top">
                    {(props) => (
                        <Tooltip id={`tooltip-${cellId}`} {...props}>
                            <span>
                                {cell.type === CircuitTypes.REPLICATED ? 
                                    cell.effect.name  :
                                    `${cell.effect.name} +${cell.effect.value}%`
                                }
                            </span>
                        </Tooltip>
                    )}
                </Overlay>
            }
        </>
    )
}

export default ExascaleCell