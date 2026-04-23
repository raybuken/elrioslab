import styles from './exascale.module.css';
import ExascaleCell from './ExascaleCell';

function ExascaleCircuitBoard({circuitBoard, onClickCellConfirmation, handleOnDragCircuitLeave}) {
  return (
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
  )
}

export default ExascaleCircuitBoard