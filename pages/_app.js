
import '../styles/styles.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';
config.autoAddCss = false

export default function App ({Component, pageProps}){
    const router = useRouter()

    return(
        <NextIntlClientProvider locale={router.locale} messages={pageProps.messages} onError={err => console.log(err)} timeZone='Etc/GMT-4'>
            <Component {...pageProps}/>
        </NextIntlClientProvider>
    )
}