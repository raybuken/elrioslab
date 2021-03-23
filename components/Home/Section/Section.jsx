import React from 'react'
import Tool from './Tool'

export default function Section() {
    return (
        <div className="row justify-content-center text-center">
            <Tool link='/calc/stats' name='Stats' src={'//v1616513205/files/stats_flpgzu.jpg'} alt='Stats'/>
            <Tool link='/calc/adaptation' name='Adaptation' src={'/v1616513204/files/adap_iokcvp.png'} alt='Adaptation'/>
            <Tool link='/calc/reforge' name='Reforge' src={'/v1616513205/files/reforge_gba2fa.png'} alt='Reforge'/>
            <Tool link='/calc/ignore-defense' name='Ignore Defense' src={'/v1616513205/files/ignore_y0cssw.png'} alt='Ignore Defense'/>
        </div>
    )
}