import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import ElSearchPartyCollection from '../../components/Tools/ElSearchPartyCollection/ElSearchPartyCollection'
import ESPCContext from '../../components/Context/ESPCContext'
import { useEffect, useReducer, useState } from 'react'
import {reducer, initialValue} from '../../scripts/reducers/espcReducer'
import { getLastSessionSynergyData, parseClassesSelectedListToParam } from '../../components/Tools/ElSearchPartyCollection/utils/util'
import AlertContext from '../../components/Context/AlertContext'

export default function ESPC() {
    const [classesSelected, dispatch] = useReducer(reducer, initialValue)
    const [shareURL, setShareURL] = useState('')
    
    const [alert, setAlert] = useState({
        show: false,
        value: ''
    })

    useEffect(() => {
        const queryParams = new URLSearchParams(document.location.search)
        const synergyParam = queryParams.get("synergy")

        getLastSessionSynergyData(dispatch, synergyParam)
        
    }, [])

    useEffect(() => {
        const { origin, pathname } = document.location

        const shareURL = origin + pathname + parseClassesSelectedListToParam(classesSelected)
        setShareURL(shareURL)
    }, [classesSelected])

    const showAlert = (value) => {
        setAlert({
            show: true,
            value
        })

        setTimeout(() => {
            setAlert({
                show: false,
                value: ''
            })
        }, 3000)
    }

    return(
        <div>
             <Head>
                <title>El Search Party Collection</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword El Search Party Collection And Synergy'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword El Search Party Collection'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Layout>
                <AlertContext.Provider value={{alert, showAlert}}>
                    <ESPCContext.Provider value={{classesSelected, dispatch, shareURL}}>
                        <ElSearchPartyCollection/>
                    </ESPCContext.Provider>
                </AlertContext.Provider>
            </Layout>
        </div>
    )
}