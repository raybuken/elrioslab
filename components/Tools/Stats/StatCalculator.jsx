
import React from 'react'
import SocialMedia from '../../SocialMedia/SocialMedia'
import Body from './Table/Body'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'
export default function StatCalculator() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english['stat-calculator'] : spanish['stat-calculator']
    return (
        <div className="container my-4">
            <div className='jumbotron'>
                <h1 className='text-center'>{t.title}</h1>
                <hr className='my-3'/>
                <SocialMedia />
                <div className="p-1">
                    <Body/>
                </div>
            </div>
        </div>
    )
}