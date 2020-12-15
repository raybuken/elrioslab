
import React from 'react'
import SocialMedia from '../../SocialMedia/SocialMedia'
import Head from './Table/Head'
import Body from './Table/Body'
import {useTranslation} from 'react-i18next'

export default function StatCalculator() {
    const [t] = useTranslation('stat-calculator')
    return (
        <div className="jumbotron">
            <div className='container py-4'>
                <h1 className='display-4 text-center'>{t('title')}</h1>
                <div className="row">
                    <div className="col-12" >
                        <SocialMedia />
                        <table className='table table-hover table-bordered table-responsive '>
                            <Head />
                            <Body />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}