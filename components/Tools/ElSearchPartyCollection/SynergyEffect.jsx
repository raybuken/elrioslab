import React, { useRef, useState } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import Image from 'next/image'

function SynergyEffect({effect, removeFilters, filterByEffect, filterEffectSelected}) {
    const [show, setShow] = useState(false)

    const effectRef = useRef()

    const maxSlots = Math.max(...effect.characters)
    const currentCount = effect.count > maxSlots ? maxSlots : effect.count                
    const currentStage = effect.characters.reduce((prev, current) => currentCount >= current ? prev + 1 : prev, 0)

    return (
        <li 
         className={`synergy-effect ${currentStage ? 'fw-bold' : 'fw-muted'}${filterEffectSelected === effect.name ? ' synergy-effect-selected' : ''}`} 
         onClick={() => filterEffectSelected === effect.name ? removeFilters() : filterByEffect(effect.name)}
         ref={effectRef}
         onMouseEnter={() => setShow(true)}
         onMouseLeave={() => setShow(false)}
        >
            <div className='d-flex align-items-center'>
                <Image 
                    src={encodeURI("https://res.cloudinary.com/elrioslab/image/upload/v1673159305/files/tools/synergy/Effect/" + effect.name)} 
                    width={16} 
                    height={16}
                    alt={effect.name} 
                />
                <span className='ps-2'> {effect.name}</span>
            </div>
            
            <span className='synergy-count'>{`${currentCount }/${maxSlots}`}</span>
            <Overlay target={effectRef.current} show={show} placement="left">
                {(props) => (
                    <Tooltip id={`tooltip-synergy-effect-${effect.name}`} {...props}>
                        <>
                            <div className="d-flex justify-content-center align-items-center">
                                <Image src={encodeURI("https://res.cloudinary.com/elrioslab/image/upload/v1673159305/files/tools/synergy/Effect/" + effect.name)} alt={effect.name} title={effect.name} width={16} height={16} />
                                <span className='ms-2'>{effect.name}</span>
                            </div>
                            
                            <ul className='espc-tooltip'>
                                {effect.effect.map((eff, index) => (
                                    <li key={eff} className={`text-left mt-2 ${currentStage >= index + 1 ? "fw-bold text-blue" : 'text-muted'}`}>
                                        <p>{effect.characters[index]}</p>
                                        {eff.map(el => (
                                            <p key={el} className='display-block'>{el}</p>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </>
                    </Tooltip>
                 )
                }

            </Overlay>
        </li>
    )
}

export default SynergyEffect