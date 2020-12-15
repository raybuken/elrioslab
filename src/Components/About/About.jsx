import React from 'react'
import Navbar from '../Navbar/Navbar'
import SocialMedia from '../SocialMedia/SocialMedia'
import {useTranslation} from 'react-i18next'
import perfil from './perfil.png'

export default function About() {
    const [t]  = useTranslation('about')
    return(
        <div>
            <Navbar />
            <div className='container jumbotron my-4'>
                <SocialMedia />
                <h1 className='display-2'>{t('about')}</h1>
                <hr/>
                <div>
                    <p className='display-6'>{t('p1')}</p>
                    <p className='display-6'>{t('p2')}</p>
                    <p>{t('channel')}: <a className='text-info' href="https://youtube.com/Raybuken">Raybuken</a></p>
                    <img src={perfil} alt="Raybuken" className='img-fluid'/>
                    <div className='text-center'>
                        <div>
                            <h2>{t('creator')}</h2>
                            <p> Raybuken (NA) </p>
                        </div>
                        <div>
                            <h3>{t('logo-design')}</h3>
                            <p>Yami</p>
                        </div>
                        <div>
                        <h3>{t('reference')}</h3>
                            <p><a href='https://ashal.eu'>ashal.eu</a></p>
                            <p><a href='https://elwiki.net'>elwiki.net</a></p>
                        </div>
                        <div>
                            <h3>{t('gratitude')}</h3>
                            <p>{t('guildmate')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}