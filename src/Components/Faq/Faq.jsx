
import React from 'react'
import Navbar from '../Navbar/Navbar'
import SocialMedia from '../SocialMedia/SocialMedia'
import StatCalcFAQ from './Statcalc/StatCalcFAQ'
import ReforgeFAQ from './Reforge/ReforgeFAQ'
import AdaptationFAQ from './Adaptation/AdaptationFAQ'

import {useTranslation} from 'react-i18next'

export default function Faq() {
    const [t] = useTranslation('faq')
    return (
        <div>
            <Navbar />
            <div className="container p-4">
                <div className='jumbotron'>
                    <SocialMedia />
                    <h1 className="display-4">{t('title')}</h1>
                    <hr className="my-4" />
                    <ul className=" accordion">
                        <div className="card">
                            <StatCalcFAQ />
                            <ReforgeFAQ /> 
                            <AdaptationFAQ />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}