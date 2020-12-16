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
                <th className='p-1 '><img src={magicStone} alt={'Magic Stone'} className='w-75'/></th>
                <th>Stat</th>
                <th>{t('efficiency')}</th>
                <th>Total % <FontAwesomeIcon id='totalStat' data-toggle="tooltip" data-placement="top" data-original-title={t('tooltip-total')} className=' text-info mb-3' icon={faQuestionCircle} size='2x'/></th>
                <th>Actual % <FontAwesomeIcon id='actualStat' data-toggle="tooltip" data-placement="top" data-original-title={t('tooltip-actual')} className=' text-info mb-3' icon={faQuestionCircle} size='2x'/></th>
                <th>{t('mstat')}<FontAwesomeIcon id='mstat' data-toggle="tooltip" data-placement="top" data-original-title={t('tooltip-mstat')} className=' text-info mb-3' icon={faQuestionCircle} size='2x'/></th>
            </tr>
        </thead>
    )
}