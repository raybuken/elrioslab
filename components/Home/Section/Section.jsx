import React from 'react'
import Tool from './Tool'

export default function Section() {
    return (
        <div className="row justify-content-center text-center">
            <Tool link='/tools/stats' name='Stats' src={'//v1616513205/files/stats_flpgzu.jpg'} alt='Stats'/>
            <Tool link='/tools/adaptation' name='Adaptation' src={'/v1616513204/files/adap_iokcvp.png'} alt='Adaptation'/>
            <Tool link='/tools/reforge' name='Reforge' src={'/v1616513205/files/reforge_gba2fa.png'} alt='Reforge'/>
            <Tool link='/tools/ignore-defense' name='Ignore Defense' src={'/v1616513205/files/ignore_y0cssw.png'} alt='Ignore Defense'/>
            <Tool link='/tools/el-search-party-collection' name='Collection and synergy' src={'/v1649022227/files/el-search-party-collection.png'} alt='El search party collection'/>
        </div>
    )
}