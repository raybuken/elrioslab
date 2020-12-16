import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import English from './translations/en/global.json'
import Spanish from './translations/es/global.json'

const language = localStorage.getItem('language')

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        react: { 
            useSuspense: false  
        },
        fallbackLng: 'en',
        lng: language ,
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: English,
            es: Spanish
        }
    })


export default i18n