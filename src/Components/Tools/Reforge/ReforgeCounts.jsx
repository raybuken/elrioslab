import React from 'react'
import ED from './Images/ED.jpg'
import glaciem from './Images/glaciem.png'
import amethyst from './Images/amethyst.png'
import mithril from './Images/magical_crystal.png'
import seed from './Images/seed.png'
import {useTranslation} from 'react-i18next'

export default function ReforgeCounts(props) {
    const [t] = useTranslation('reforge')
    const { result } = props

    return (
        <div className='my-4'>
            <div className='row'>
                <div className="col-lg-4 col-md-6 my-1">
                    <img src={ED} alt={ED} className='w-25'/>
                    <label className='display-6 ml-3'> {result.ed || 0} ED</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <img src={glaciem} alt='glaciem' className='w-25'/>
                    <label className='display-6 ml-3'> x{result.glaciems || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <img src={amethyst} alt='amethyst' className='w-25'/>
                    <label className='display-6 ml-3'> x{result.amethyst || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <img src={mithril} alt='mithril crystal' className='w-25'/>
                    <label className='display-6 ml-3'> x{result.crystals || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <img src={seed} alt='Chlorite Seeds' className='w-25'/>
                    <label className='display-6 ml-3'> x{result.seeds || 0}</label>
                </div>
            </div>
            <div className="row">
                <div className="col align-self-end">
                    <p className='text-right'>{t('attempts')}: {result.attempts || 0}</p>
                </div>
            </div>
        </div>
    )
}