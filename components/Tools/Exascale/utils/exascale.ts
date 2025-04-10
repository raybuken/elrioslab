import {Circuit, CIRCUIT_PATHS, CircuitBoard, CircuitEffect, EXASCALE_ARMORS, ExascaleArmor} from '../data/exascale'

export const getCircuitUrl = (circuit: Circuit) => {
    return `/images/circuit-${circuit.type}${circuit.spot}-${circuit.color.toLowerCase()}-${circuit.part}.webp`
}

const getExaArmorByCircuitBoard = (circuitBoard: CircuitBoard) => {
    let armor: ExascaleArmor | null = null
    let position: any[] = []

    for(let i = 0; i < circuitBoard.length; i++) {
        const row = circuitBoard[i]

        if(armor){
            break;
        }

        for(let j = 0; j < row.length; j++) {
            const cell: ExascaleArmor | Circuit | null = row[j]

            const isExaArmor = cell !== null && !Object.hasOwn(cell, 'type')
            if (isExaArmor) {
                armor = cell as ExascaleArmor
                position = [i, j]
                break;
            }
        }
    }

    return {
        armor,
        position
    }
}

const getCellByCurrentPath = (circuitBoard: CircuitBoard, circuitPath: number[], lastCellPosition: number[]) => {
    const [lastCellPositionY, lastCellPositionX] = lastCellPosition
    const [y, x] = circuitPath
    const position = [lastCellPositionY + y, lastCellPositionX + x]

    const cell = circuitBoard[position[0]]?.[position[1]]
    
    return {
        cell,
        position,
        boardPosition: [lastCellPositionX + x, lastCellPositionY + y]
    }
}

type circuitConnectionValidationStatus = {
    valid: boolean, 
    bonifications: CircuitEffect[]
}

const processCircuitConnection = (circuitBoard, circuitPaths, lastCircuitPosition, bonifications: CircuitEffect[] = [], readedPositions: number[][] = []): circuitConnectionValidationStatus => {
    const isValid = circuitPaths.every((path: number[]) => {
        const {cell: currentCell, position: currentCellPosition, boardPosition} = getCellByCurrentPath(circuitBoard, path, lastCircuitPosition)

        if(!currentCell){
            return false
        }
        
        if(!Object.hasOwn(currentCell, 'type')) {
            return true
        }

        let lastCell = circuitBoard[lastCircuitPosition[0]][lastCircuitPosition[1]]
        let isTheSameColor = 'color' in currentCell && (!Object.hasOwn(lastCell, 'type') || lastCell.color === currentCell.color);

        if(!isTheSameColor) {
            return false
        }
        
        const currentCellPaths = 'type' in currentCell && CIRCUIT_PATHS[currentCell.type]?.[currentCell.spot - 1] || []
        let isCircuitConnected = false

        const positionHasBeenReaded = readedPositions.some(pos => pos[0] === currentCellPosition[0] && pos[1] === currentCellPosition[1])
        const filteredPaths: number[][] = []
        currentCellPaths.forEach((pt: number[]) => {
            const ptCell = getCellByCurrentPath(circuitBoard, pt, boardPosition)
            const hasConnectionWithLast = ptCell.boardPosition[0] === lastCircuitPosition[0] && ptCell.boardPosition[1] === lastCircuitPosition[1]

            if(!hasConnectionWithLast && !positionHasBeenReaded) {
                filteredPaths.push([pt[1], pt[0]])
            }else {
                isCircuitConnected = true
            }
        })

        if(!isCircuitConnected) {
            return false
        }
        
        if ('effect' in currentCell && !positionHasBeenReaded) {
            bonifications.push(currentCell.effect);
        }

        readedPositions.push(currentCellPosition)

        return processCircuitConnection(circuitBoard, filteredPaths, currentCellPosition, bonifications, readedPositions).valid
    })

    return {
        valid: isValid,
        bonifications: isValid ? bonifications : []
    }
}


export const getCircuitBonifications = (circuitBoard: CircuitBoard) => {
    const { armor, position } = getExaArmorByCircuitBoard(circuitBoard)

    if(!armor) return null

    const exaPiece = (armor as ExascaleArmor).name
    const exaSpots = CIRCUIT_PATHS[EXASCALE_ARMORS[exaPiece].name]
    const paths = exaSpots[0]
    const circuitConnection = processCircuitConnection(circuitBoard, [paths[1]], position)

    //TODO pass this to Object.groupBy method when is supported by next
    const groupedEffects = circuitConnection.bonifications.reduce((acc, effect) => {
        const key = effect.name; // Adjust the grouping key as needed
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(effect);
        return acc;
    }, {} as Record<string, CircuitEffect[]>);

    const finalBonifications = Object.keys(groupedEffects).map(groupedEffect => {
        return {
            name: groupedEffect,
            total: groupedEffects[groupedEffect].reduce((acc, effect) => acc + effect.value, 0)
        } 
    })

    return finalBonifications
    
}
