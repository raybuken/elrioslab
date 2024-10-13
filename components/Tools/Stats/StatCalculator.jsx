
import React from 'react'
import SocialMedia from '../../SocialMedia/SocialMedia'
import Body from './Table/Body'
import { useTranslations } from 'next-intl'
export default function StatCalculator() {
    const t = useTranslations()

    return (
        <div className="container my-4">
            <div className='jumbotron'>
                <h1 className='text-center'>{t('title')}</h1>
                <hr className='my-3'/>
                <SocialMedia />
                <div className="p-1">
                    <Body/>
                </div>
            </div>
        </div>
    )
}