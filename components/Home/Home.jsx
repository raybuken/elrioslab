
import React from 'react'
import Image from 'next/image'
import Section from './Section/Section'
import SocialMedia from '../SocialMedia/SocialMedia'
import Layout from '../Layout/Layout'
import { useTranslations } from 'next-intl'

export default function Home() {
    const t = useTranslations()

    return (
        <div>
            <Layout>
                <div className="jumbotron mt-3">
                    <div className="container">
                        <SocialMedia />
                        <div className="row justify-content-center">
                            <Image 
                                src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513160/files/logo.png'} 
                                width='300' 
                                height='300' 
                                alt="Elrioslab"
                                className='img-fixed w-auto h-100' 
                            />
                        </div>
                        <div className=' text-center'>
                            <h1>{t('welcome')}</h1>
                            <p className='lead'>{t('description')}</p>
                        </div>
                        <hr className="my-4" />
                        <Section />
                    </div>
                </div>
            </Layout>
        </div>
    )
}