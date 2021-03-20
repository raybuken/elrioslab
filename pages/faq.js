
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import StatCalcFAQ from '../components/Faq/StatCalculator/StatCalcFAQ'
import ReforgeFAQ from '../components/Faq/Reforge/ReforgeFAQ'
import AdaptationFAQ from '../components/Faq/Adaptation/AdaptationFAQ'
import IgnoreDefenseFAQ from '../components/Faq/IgnoreDefense/IgnoreDefenseFAQ'
import { useRouter } from 'next/router'
import { english, spanish } from '../translations/translations'
import Head from 'next/head'
export default function Faq() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.faq : spanish.faq
    return (
        <div>
            <Head>
                <title>Elrios Lab - {t.title}</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword Calculators'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword Calculator'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Navbar />
            <div className="py-4">
                <div className='jumbotron'>
                    <SocialMedia />
                    <h1 className="my-3">{t.title}</h1>
                    <hr className="my-3" />
                    <ul className=" accordion p-1">
                        <div className="card">
                            <StatCalcFAQ />
                            <ReforgeFAQ />
                            <AdaptationFAQ />
                            <IgnoreDefenseFAQ />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}