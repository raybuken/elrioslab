import React,{useEffect} from 'react'
import $ from 'jquery'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from 'react-i18next'
import magicStone from './images/magic_stone.png'

export default function Head() {
    const [t] = useTranslation('stat-calculator')

    useEffect(() => {
        $('#totalStat').tooltip({placement: 'top'})
        $('#actualStat').tooltip()
        $('#mstat').tooltip();
        
    })

    return (
        <thead className='font-family-sans-serif'>
            <tr className='text-center table-success'>
                <th className='p-1 '><img src={magicStone} alt={'Magic Stone'} className='w-50'/></th>
                <th>Stat</th>
                <th>Eficiencia</th>
                <th>Total %</th>
                <th>Actual %</th>
                <th>Efecto multiplicativo</th>
            </tr>
        </thead>
    )
}