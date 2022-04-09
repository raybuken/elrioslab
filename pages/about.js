import React from 'react'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {english,spanish} from '../translations/translations'
import Layout from '../components/Layout/Layout'
export default function About() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english.about : spanish.about
    return(
        <div>
            <Head>
                <title>Elrios Lab - {t.about}</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword Calculators'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword Calculator'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Layout>
                <div className='container jumbotron my-4'>
                    <SocialMedia />
                    <h1 className='display-4 my-4'>{t.about}</h1>
                    <hr className='my-3'/>
                    <div>
                        <p className='display-6 text-justify'>{t.p1}</p>
                        <p className='display-6 text-justify'>{t.p2}</p>
                        <p>{t.channel}: <a className='text-info' href="https://youtube.com/Raybuken">Raybuken</a></p>
                        
                        <div className='text-center'>
                            <Image src={'/v1616513205/files/perfil.png'} width='1000' height='700' alt="Raybuken" className='img-fluid'/>
                            <div>
                                <h2>{t.creator}</h2>
                                <p> Raybuken (NA) </p>
                            </div>
                            <div>
                                <h3>{t['logo-design']}</h3>
                                <p>Yami</p>
                            </div>
                            <div>
                            <h3>{t.reference}</h3>
                                <p><a href='https://ashal.eu'>ashal.eu</a></p>
                                <p><a href='https://elwiki.net'>elwiki.net</a></p>
                            </div>
                            <div>
                                <h3>{t.gratitude}</h3>
                                <p>{t.guildmate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}