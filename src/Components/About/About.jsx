import React from 'react'
import Navbar from '../Navbar/Navbar'
import {useTranslation} from 'react-i18next'

export default function About() {
    const [t]  = useTranslation('about')
    return(
        <div>
            <Navbar />
            <div className='container jumbotron my-4'>
                <h1 className='display-2'>{t('about')}</h1>
                <hr/>
                <div className=''>
                    <p >{t('p1')}</p>
                    <p><span className=' font-weight-bold'>{t('credits')}</span> - IGN: Gunsship (NA) </p>
                </div>
            </div>
        </div>
    )
}