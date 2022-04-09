
import React from 'react'
import { useRouter } from 'next/router'
import { english, spanish } from '../../translations/translations'
import Image from 'next/image'
import Section from './Section/Section'
import SocialMedia from '../SocialMedia/SocialMedia'
import Layout from '../Layout/Layout'

export default function Home() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.home : spanish.home
    return (
        <div>
            <Layout>
                <div className="jumbotron mt-3">
                    <div className="container">
                        <SocialMedia />
                        <div className="row justify-content-center">
                            <Image src={'/v1616513160/files/logo.png'} width='300' height='300' layout='fixed' alt="ElCalc" />
                        </div>
                        <div className=' text-center'>
                            <h1>{t.welcome}</h1>
                            <p className='lead'>{t.description}</p>
                        </div>
                        <hr className="my-4" />
                        <Section />
                    </div>
                </div>
            </Layout>
        </div>
    )
}