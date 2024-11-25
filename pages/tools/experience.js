import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import SocialMedia from '@/components/SocialMedia/SocialMedia'
import ExperienceCalculatorWrapper from '@/components/Tools/Experience/ExperienceCalculatorWrapper'
import { getTranslationMessages } from '@/helpers/messageTranslationsHelpers'


export async function getStaticProps(context) {
    
    return {
        props: {
            messages: await getTranslationMessages(context, 'experience')
        }
    }
}


function experience() {
  return (
    <div>
        <Head>
            <title>Elsword Experience Calculator</title>
            <meta name='description' content='Elsword Experience calculator'/>
            <meta name='keywords' content='Elsword, Raybuken, Elsword Experience Calculator'/>
        </Head>
        <Layout>
            <div className='jumbotron mb-0' style={{minHeight: '90vh'}}>
                <div className='container '>
                    <SocialMedia />
                    <ExperienceCalculatorWrapper />
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default experience