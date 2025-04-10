/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react"
import { DEFAULT_TOP_CIRCUIT_BOARD, Circuit, EXASCALE_COLORS, CircuitParts, CircuitTypes, EXASCALE_CIRCUIT_EFFECTS } from "./data/exascale"
import styles from './exascale.module.css';
import ExascaleCell from "./ExascaleCell";
import CircuitTools from "./CircuitTools/CircuitTools";
import { getCircuitBonifications, getCircuitUrl } from "./utils/exascale";
import DragAndDropContext from "../../Context/DragAndDropContext";
import { CIRCUIT_BOARD_TOP_PRESET_1, CIRCUIT_BOARD_TOP_PRESET_5 } from "./data/presets";
import EffectList from "./CircuitTools/EffectList/EffectList";
import SelectedCircuit from "./CircuitTools/SelectedCircuit/SelectedCircuit";

function ExascaleCircuitWrapper() {
    const [circuitBonifications, setCircuitBonifications] = useState<{ name: string; total: number }[]>([])
    const [circuitBoard, setCircuitBoard] = useState(DEFAULT_TOP_CIRCUIT_BOARD)
    const [selectedCircuit, setSelectedCircuit] = useState<Circuit>({
        type: CircuitTypes.I,
        color: EXASCALE_COLORS.RED,
        part: CircuitParts.TOP,
        spot: 1,
        effect: {
            name: EXASCALE_CIRCUIT_EFFECTS.top[Object.keys(EXASCALE_CIRCUIT_EFFECTS.top)[0]].name,
            value: EXASCALE_CIRCUIT_EFFECTS.top[Object.keys(EXASCALE_CIRCUIT_EFFECTS.top)[0]].values[0]
        }
    }) 

    const [isButtonSelectCircuitClicked, setIsButtonSelectCircuitClicked] = useState(false)
    const [dragItem, dragEvents] = useContext(DragAndDropContext)

    useEffect(() => {
        const bonifications = getCircuitBonifications(circuitBoard)
        setCircuitBonifications(bonifications || [])

    }, [circuitBoard])

    const onClickSelectCircuit = () => {
        setIsButtonSelectCircuitClicked(true)
    }

    const onClickCellConfirmation = (e: any, rowIndex: number, cellIndex: number) => {
        if(!isButtonSelectCircuitClicked) {
            return;
        }

        setCircuitBoard((prev) => {
            const newCircuitBoard = [...prev]
            newCircuitBoard[rowIndex][cellIndex] = selectedCircuit
            return newCircuitBoard
        })
        setIsButtonSelectCircuitClicked(false)
    }

    const handleOnDragCircuitLeave = (e: any, rowIndex: number, cellIndex: number) => {
        e.preventDefault()
        dragEvents.onDragEnd()        
        const newBoard = [...circuitBoard]
        newBoard[rowIndex][cellIndex] = dragItem.item

        setCircuitBoard(newBoard)
    }

    const onDragSelectedCircuit = (e) => {
        dragEvents.onDragStart(e, selectedCircuit)
    }

    return (
        <div>
            <h1 className="text-center">Exascale Circuit maker simulator</h1>
            <div className={styles['exascale-circuit-wrapper']}>
                <CircuitTools selectedCircuit={selectedCircuit} setSelectedCircuit={setSelectedCircuit}  />
                <div className="d-flex align-items-center flex-column gap-2">
                    <SelectedCircuit 
                        selectedCircuit={selectedCircuit} 
                        onClickSelectCircuit={onClickSelectCircuit} 
                        isButtonSelectCircuitClicked={isButtonSelectCircuitClicked} 
                        onDragSelectedCircuit={onDragSelectedCircuit}
                    />

                    <div className={styles['circuit-board']}>
                        {
                            circuitBoard.map((row, rowIndex) => (
                                <div key={rowIndex} className={styles['circuit-row']}>
                                    {row.map((cell, cellIndex) => 
                                        <ExascaleCell 
                                            key={cellIndex} 
                                            cell={cell} 
                                            onClickCellConfirmation={(e) => onClickCellConfirmation(e, rowIndex, cellIndex)} 
                                            handleOnDragCircuitLeave={(e) => handleOnDragCircuitLeave(e, rowIndex, cellIndex)}
                                        /> 
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <EffectList bonifications={circuitBonifications} />
                </div>
            </div>
            <div>
                <h2>Instructions</h2>
                <p>Click on the &apos;Select Circuit&apos; to select the circuit, then click on the circuit board to place it</p>
                <i>For better experience you can drag the circuit and drop on the circuit board</i>
            </div>

            <div>
                presets

                <button onClick={() => setCircuitBoard(CIRCUIT_BOARD_TOP_PRESET_1)}>H</button>
                <br />
                <button onClick={() => setCircuitBoard(CIRCUIT_BOARD_TOP_PRESET_5)}>T</button>
            </div>
        </div>
    )
}

export default ExascaleCircuitWrapper