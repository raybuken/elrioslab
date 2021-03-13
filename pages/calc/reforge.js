
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
                <title>Elrios Lab</title>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <div className='container my-3'>
                <div className="jumbotron">
                    <SocialMedia />
                    <h1 className="display-4 text-center">Reforge</h1>
                    <div className="my-4">
                        <div className="row justify-content-end">
                            <div className="form-group">
                                <label>Servidor</label>
                                <select className="form-control" onChange={onChangeServer}>
                                    <option value="NA, INT, EU, TW, JP, ETC">NA, INT, EU, TW, JP, ETC</option>
                                    <option value="KR">KR</option>
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
                    <hr className=' my-4' />
                    <div className='row justify-content-center'>
                        <ReforgeTable isKR={isKR} />
                    </div>
                </div>
            </div>
        </div>
    )
}