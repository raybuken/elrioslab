
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import logo from './logo.png'
import Section from './Section/Section'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Home() {

    const [t] = useTranslation('home')
    return (
        <div>
            <Navbar />
            <div className="jumbotron mt-3">
                <div className="container">
                    <SocialMedia />
                    <img src={logo} alt="ElCalc" className=' img-fluid w-50 mx-auto d-block' />
                    <div className=' text-center'>
                        <h1 className='display-4'>{t('welcome')}</h1>
                        <p className='lead'>{t('description')}</p>
                    </div>
                    <hr className="my-4" />
                    <Section />
                </div>
            </div>
        </div>
    )
}