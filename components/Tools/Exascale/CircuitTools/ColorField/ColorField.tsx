import React from 'react'
import { EXASCALE_COLORS } from '../../data/exascale'
import styles from './color-field.module.css'

function ColorField({onChangeColor}: {onChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    const EXA_COLORS = {   
        [EXASCALE_COLORS.RED]: '#AF153E',
        [EXASCALE_COLORS.GREEN]: '#21A76F',
        [EXASCALE_COLORS.BLUE]: '#068CCA',
    }

    const colors = [EXASCALE_COLORS.RED, EXASCALE_COLORS.GREEN, EXASCALE_COLORS.BLUE]
    

    return (
        <div className={styles.colorField}>
            {colors.map((color, index) =>
                <input
                    className={styles.color}
                    key={index}
                    type="radio"
                    name="color"
                    id={color}
                    style={{ backgroundColor: EXA_COLORS[color] }}
                    defaultValue={color}
                    defaultChecked={index === 0}
                    onChange={onChangeColor}
                />
            )}
        </div>
    )
}

export default ColorField