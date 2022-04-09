import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import ElSearchPartyCollection from '../../components/Tools/ElSearchPartyCollection/ElSearchPartyCollection'

export default function ESPC() {
    return(
        <div>
             <Head>
                <title>El Search Party Collection</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword El Search Party Collection And Sinergy'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword El Search Party Collection'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Layout>
                <ElSearchPartyCollection/>
            </Layout>
        </div>
    )
}