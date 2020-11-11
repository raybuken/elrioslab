
import React from 'react'

import Head from './Table/Head'
import Body from './Table/Body'

import {useTranslation} from 'react-i18next'


export default function StatCalculator() {
    const [t] = useTranslation('stat-calculator')

    return (
        <div className='jumbotron'>
        <div className=' container mt-3'>
            <h1 className='display-3'>{t('title')}</h1>
            <hr className='my-4'/>
            <div className="row">
                <div className="col-12" >
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