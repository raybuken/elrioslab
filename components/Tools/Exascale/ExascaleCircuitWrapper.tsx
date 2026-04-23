/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react"
import { DEFAULT_TOP_CIRCUIT_BOARD, Circuit, EXASCALE_COLORS, CircuitParts, CircuitTypes, EXASCALE_CIRCUIT_EFFECTS, DEFAULT_BOTTOM_CIRCUIT_BOARD, DEFAULT_GLOVES_CIRCUIT_BOARD, DEFAULT_SHOES_CIRCUIT_BOARD } from "./data/exascale"
import styles from './exascale.module.css';
import CircuitTools from "./CircuitTools/CircuitTools";
import { getCircuitBonifications } from "./utils/exascale";
import DragAndDropContext from "../../Context/DragAndDropContext";
import EffectList from "./CircuitTools/EffectList/EffectList";
import SelectedCircuit from "./CircuitTools/SelectedCircuit/SelectedCircuit";
import ExascaleCircuitBoard from "./ExascaleCircuitBoard";
import ExascalePresets from "./Presets/ExascalePresets";

function ExascaleCircuitWrapper({ piece }: { piece: CircuitParts }) {
    const defaultCircuitsBoard = {
        [CircuitParts.TOP]: DEFAULT_TOP_CIRCUIT_BOARD,
        [CircuitParts.BOTTOM]: DEFAULT_BOTTOM_CIRCUIT_BOARD,
        [CircuitParts.GLOVES]: DEFAULT_GLOVES_CIRCUIT_BOARD,
        [CircuitParts.SHOES]: DEFAULT_SHOES_CIRCUIT_BOARD
    }

    const [circuitBonifications, setCircuitBonifications] = useState<{ name: string; total: number }[]>([])
    const [circuitBoard, setCircuitBoard] = useState(defaultCircuitsBoard[piece] || DEFAULT_TOP_CIRCUIT_BOARD)
    const [selectedCircuit, setSelectedCircuit] = useState<Circuit>({
        type: CircuitTypes.I,
        color: EXASCALE_COLORS.RED,
        part: piece,
        spot: 1,
        effect: {
            name: EXASCALE_CIRCUIT_EFFECTS[piece][Object.keys(EXASCALE_CIRCUIT_EFFECTS[piece])[0]].name,
            value: EXASCALE_CIRCUIT_EFFECTS[piece][Object.keys(EXASCALE_CIRCUIT_EFFECTS[piece])[0]].values[0]
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
            <div className={styles['exascale-circuit-wrapper']}>
                <CircuitTools selectedCircuit={selectedCircuit} setSelectedCircuit={setSelectedCircuit}  />
                <div className="d-flex align-items-center flex-column gap-2">
                    <SelectedCircuit 
                        selectedCircuit={selectedCircuit} 
                        onClickSelectCircuit={onClickSelectCircuit} 
                        isButtonSelectCircuitClicked={isButtonSelectCircuitClicked} 
                        onDragSelectedCircuit={onDragSelectedCircuit}
                    />

                    <ExascaleCircuitBoard
                        circuitBoard={circuitBoard} 
                        onClickCellConfirmation={onClickCellConfirmation} 
                        handleOnDragCircuitLeave={handleOnDragCircuitLeave}
                    />
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

            <ExascalePresets piece={piece} handleUpdateBoard={setCircuitBoard} />
        </div>
    )
}

export default ExascaleCircuitWrapper