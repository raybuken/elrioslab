
import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import ExascaleCircuitWrapper from '../../components/Tools/Exascale/ExascaleCircuitWrapper';
import { getTranslationMessages } from '../../helpers/messageTranslationsHelpers'
import DragAndDropProvider from '../../components/Provider/DragAndDropProvider'

export async function getStaticProps(context) {
    
    return {
        props: {
            messages: await getTranslationMessages(context, 'experience')
        }
    }
}

function exascaleCircuits() {
  return (
    <div>
        <Head>
            <title>Elsword Exascale Circuit simulator</title>
            <meta name='description' content='Elsword Exascale Circuit simulator'/>
            <meta name='keywords' content='Elsword Exascale Circuit simulator'/>
        </Head>
        <Layout>
            <div className='jumbotron mb-0' style={{minHeight: '90vh'}}>
                <div className='container '>
                    <SocialMedia />
                    <DragAndDropProvider>
                        <ExascaleCircuitWrapper />
                    </DragAndDropProvider>
                </div>
            </div>
        </Layout>
    </div>
  );
}

export default exascaleCircuits