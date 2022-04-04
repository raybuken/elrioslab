import Navbar from '../../components/Navbar/Navbar'
import StatCalculator from '../../components/Tools/Stats/StatCalculator'
import Head from 'next/head'

export default function Stats () {
    return(
        <div>
             <Head>
                <title>Stat Calculator</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword Stat Calculator'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword Socket Calculator'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Navbar/>
            <StatCalculator />  
        </div>
    )
}