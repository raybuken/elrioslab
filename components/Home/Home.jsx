
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useRouter } from 'next/router'
import {english,spanish} from '../../translations/translations'
import Image from 'next/image'
import Section from './Section/Section'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Home() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english.home : spanish.home
    return (
        <div>
           <Navbar />
            <div className="jumbotron mt-3">
                <div className="container">
                    <SocialMedia />
                    <div className="row justify-content-center">
                    <Image src={'/logo.png'} width='300' height='300' layout='intrinsic' alt="ElCalc"/>
                    </div>
                    <div className=' text-center'>
                        <h1 className='display-4'>{t.welcome}</h1>
                        <p className='lead'>{t.description}</p>
                    </div>
                    <hr className="my-4" />
                    <Section />
                </div>
            </div>
        </div>
    )
}