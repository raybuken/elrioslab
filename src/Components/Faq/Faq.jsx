
import React from 'react'
import Navbar from '../Navbar/Navbar'
import StatCalcFAQ from './statcalc/StatCalcFAQ'
import {useTranslation} from 'react-i18next'

export default function Faq() {
    const [t] = useTranslation('faq')
    return (
        <div>
            <Navbar />
            <div className="container p-4">
                <div className='jumbotron'>
                    <h1 className="display-4">{t('title')}</h1>
                    <hr className="my-4" />
                    <StatCalcFAQ />
                </div>
            </div>
        </div>
    )
}