import React from 'react'
import Tool from './Tool'

export default function Section() {
    return (
        <div className="row justify-content-center">
            <Tool link='/calc/stats' name='Stats' src={'/index/stats.jpg'} alt='Stats'/>
            <Tool link='/calc/adaptation' name='Adaptation' src={'/index/adap.png'} alt='Adaptation'/>
            <Tool link='/calc/reforge' name='Reforge' src={'/index/reforge.png'} alt='Reforge'/>
            <Tool link='/calc/ignore-defense' name='Ignore Defense' src={'/index/ignore.png'} alt='Ignore Defense'/>
        </div>
    )
}