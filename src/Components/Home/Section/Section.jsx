import React from 'react'
import Tool from './Tool'
import stats from '../../Tools/stats.jpg'
import adaptation from '../../Tools/adap.png'
import reforge from '../../Tools/reforge.png'
import ignoreDefense from '../../Tools/ignore.png'
import './styles.css'

export default function Section() {
    return (
        <div className="row justify-content-center">
            <Tool link='/calc/stats' name='Stats' src={stats} alt='Stats'/>
            <Tool link='/calc/adaptation' name='Adaptation' src={adaptation} alt='Adaptation'/>
            <Tool link='/calc/reforge' name='Reforge' src={reforge} alt='Reforge'/>
            <Tool link='/calc/ignore-defense' name='Ignore Defense' src={ignoreDefense} alt='Ignore Defense'/>
        </div>
    )
}