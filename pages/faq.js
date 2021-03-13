
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
                <title>Elrios Lab</title>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <div className="container py-4">
                <div className='jumbotron'>
                    <SocialMedia />
                    <h1 className="display-4 my-3">{t.title}</h1>
                    <hr className="my-3" />
                    <ul className=" accordion">
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