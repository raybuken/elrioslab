import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'
import ESPCContext from '../../Context/ESPCContext'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

function CharacterSlot({character}) {
    const [show, setShow] = useState(false)
    const characterRef = useRef()

    const {classesSelected} = useContext(ESPCContext)
    const src = `/v1616513276/files/tools/synergy/${character.character}/${character.alias}`

    const isOnSynergySlot = classesSelected.some(classSelected => classSelected && classSelected.alias === character.alias)

    return (
        <>
            <div 
             ref={characterRef} 
             onMouseEnter={() => setShow(true)} 
             onMouseLeave={() => setShow(false)} 
             className={`collection-slot ${isOnSynergySlot && 'collection-slot-selected'}`} 
            >
                <Image className='collection-slot-image' src={src} alt={character.alias} title={character.class} width={300} height={300} layout={"responsive"} quality={20} />
            </div>
            <Overlay target={characterRef.current} show={show} placement="top">
                {(props) => (
                    <Tooltip id={`tooltip-${isOnSynergySlot ? 'synergy' : 'collection'}-${character.alias}`} {...props}>
                        {character.synergies.length ? 
                            <ul className='espc-tooltip'>
                                {character.synergies.map((syn, index) => (
                                <li key={syn} className='text-blue'>
                                    {`Stage ${index + 1}  ${syn}`}
                                </li>
                                ))}
                            </ul> :
                            <span>Synergy effect is not released yet</span>
                        } 
                    </Tooltip>
                 )
                }

            </Overlay>
        </>
    )
}

export default CharacterSlot