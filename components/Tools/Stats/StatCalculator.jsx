
import React from 'react'
import SocialMedia from '../../SocialMedia/SocialMedia'
import Head from './Table/Head'
import Body from './Table/Body'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'
export default function StatCalculator() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english['stat-calculator'] : spanish['stat-calculator']
    return (
        <div className="container my-4">
            <div className='jumbotron py-4'>
                <h1 className='display-4 text-center'>{t.title}</h1>
                <hr className='my-3'/>
                <div className="row">
                    <div className="col-12" >
                        <SocialMedia />
                    </div>
                    <div className="col-12">
                    <table className='table table-hover table-responsive mt-3 ml-1'>
                            <Head />
                            <Body />
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}