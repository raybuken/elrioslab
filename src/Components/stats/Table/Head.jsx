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
                <th>{t('efficiency')}</th>
                <th >
                    <span>Total % </span>
                    <sup id='totalStat' data-toggle='tooltip' data-placement='top' data-original-title={t('tooltip-total')} >
                        <FontAwesomeIcon className=' mb-2' color={'royalblue'} icon={faQuestionCircle} size='2x'/>
                    </sup>
                </th>
                <th >
                    <span>Actual %</span>  
                    <sup id='actualStat' data-toggle='tooltip' data-placement='top' data-original-title={t('tooltip-actual')}>
                        <FontAwesomeIcon className=' mb-2' color={'royalblue'} icon={faQuestionCircle} size='2x'/>
                    </sup>
                </th>
                <th>{t('mstat')}
                <sup id='mstat' data-toggle='tooltip' data-placement='top' data-original-title={t('tooltip-mstat')}>
                    <FontAwesomeIcon className='mb-2' color={'royalblue'} icon={faQuestionCircle} size='2x'/></sup>
                </th>
            </tr>
        </thead>
    )
}