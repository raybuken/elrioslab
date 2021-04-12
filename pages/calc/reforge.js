
import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import { stages } from '../../components/Tools/Reforge/reforgeStages'
import { calcReforge } from '../../components/Tools/Reforge/CalcReforge'
import ReforgeCounts from '../../components/Tools/Reforge/ReforgeCounts'
import ReforgeTable from '../../components/Tools/Reforge/ReforgingTable/ReforgeTable'
import { CalcPercentages } from '../../components/Tools/Reforge/CalcPercentages'
import PercentagesField from '../../components/Tools/Reforge/PercentagesField'

import { useRouter } from 'next/router'
import { english, spanish } from '../../translations/translations'

import Head from 'next/head'

export default function Reforge() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.reforge : spanish.reforge

    const fromStageSelect = useRef(null)
    const [fromStage, setFromStage] = useState(0)
    const [isKR, setIsKR] = useState(false)
    const toStageSelect = useRef(null)
    const [toStage, setToStage] = useState(stages.map(el => el))
    const [attemptPercentage, setAttemptPercentage] = useState(0)
    const [count, setCount] = useState({})

    useEffect(() => {
        setCount(calcReforge(fromStageSelect.current.value, toStageSelect.current.value, attemptPercentage, isKR))
    }, [toStage, attemptPercentage, isKR])

    const onChangeServer = (e) => {
        const { value } = e.target
        if (value === 'KR') {
            setIsKR(true)
            setAttemptPercentage(0)
        } else {
            setIsKR(false)
            setAttemptPercentage(0)
        }
    }

    const onFromStageChange = (e) => {
        const { value } = e.target
        let filterToStage = stages.filter(el => {
            return el.stage > value
        })
        setFromStage(Number(fromStageSelect.current.value))
        setToStage(filterToStage)
        setAttemptPercentage(0)
    }

    const setPercentage = (e) => {
        const { value } = e.target
        setAttemptPercentage(Number(value))
    }
    const getCounts = () => {
        setCount(calcReforge(fromStageSelect.current.value, toStageSelect.current.value, attemptPercentage, isKR))
    }


    return (
        <div>
            <Head>
                <title>Reforge</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword Reforge Calculator'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword reforge Calculator'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Navbar />
            <div className='container my-3'>
                <div className="jumbotron">
                    <SocialMedia />
                    <h1 className="text-center">Reforge</h1>
                    <hr />
                    <div className="my-4">
                        <div className="row justify-content-end">
                            <div className="col-sm-12 col-md-4 form-group">
                                <label>Servidor</label>
                                <select className="form-control" onChange={onChangeServer}>
                                    <option value="NA, INT, EU, TW, JP, ETC">EU</option>
                                    <option value="KR">Other Servers</option>
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <label>{t.from}</label>
                                <select className='form-control reforge-field' onChange={onFromStageChange} ref={fromStageSelect}>
                                    {stages.map((el, i) => <option key={i} value={el.stage - 1}>{el.stage - 1}</option>)}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label>{t.to}</label>
                                <select className='form-control reforge-field' ref={toStageSelect} onChange={getCounts}>
                                    {toStage.map((el, i) => <option key={i} value={el.stage}>{el.stage}</option>)}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <PercentagesField percentages={CalcPercentages(fromStage + 1, isKR)} percentage={attemptPercentage} setPercentage={setPercentage} />
                            </div>
                        </div>
                        <div>
                            <ReforgeCounts result={count} />
                        </div>
                        <p className='font-italic'>{t.note}</p>
                    </div>
                    {
                        /*
                        <hr className=' my-4' />
                        <div className='row justify-content-center'>
                            <div className='col-md-12 col-sm-12'>
                                <ReforgeTable isKR={isKR} />
                            </div>
                        </div>
                        */
                    }
                    
                </div>
            </div>
        </div>
    )
}