import Home from '../components/Home/Home'
import Head from 'next/head'

export async function getStaticProps(context) {
    const index = (await import(`../translations/${context.locale}/index.json`)).default
    const common = (await import(`../translations/${context.locale}/common.json`)).default

    return {
        props: {
            messages: {
                ...index, ...common
            }
        }
    }
}

export default function Index(){
    return(
        <div>
            <Head>
                <title>Elrios Lab</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword Calculators'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword Calculator'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Home/> 
        </div>
    )
}