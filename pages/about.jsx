import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {english,spanish} from '../translations/translations'
export default function About() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english.about : spanish.about
    return(
        <div>
            <Head>
                <title>Elrios Lab</title>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <div className='container jumbotron my-4'>
                <SocialMedia />
                <h1 className='display-2 my-4'>{t.about}</h1>
                <hr className='my-3'/>
                <div>
                    <p className='display-6'>{t.p1}</p>
                    <p className='display-6'>{t.p2}</p>
                    <p>{t.channel}: <a className='text-info' href="https://youtube.com/Raybuken">Raybuken</a></p>
                    <Image src={'/about/perfil.png'} width='1000' height='700' alt="Raybuken" className='img-fluid'/>
                    <div className='text-center'>
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
        </div>
    )
}