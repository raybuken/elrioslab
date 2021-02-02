
import React,{useState,useRef,useEffect} from 'react'
import Navbar from '../../Navbar/Navbar'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { stages } from './reforgeStages'
import {calcReforge} from './CalcReforge'
import ReforgeCounts from './ReforgeCounts'
import ReforgeTable from './ReforgingTable/ReforgeTable'
import {CalcPercentages} from './CalcPercentages'
import PercentagesField from './PercentagesField'
import {useTranslation} from 'react-i18next'
import './styles.css'


export default function Reforge() {
    const [t] = useTranslation('reforge')

    const fromStageSelect = useRef(null)
    const [fromStage,setFromStage] = useState(0)
    const toStageSelect = useRef(null)
    const [toStage,setToStage] = useState(stages.map(el => el))
    const [attemptPercentage,setAttemptPercentage] = useState(0)
    const [count,setCount] = useState({})


    useEffect(() => {
        setCount(calcReforge(fromStageSelect.current.value,toStageSelect.current.value,attemptPercentage))
    },[toStage,attemptPercentage])
    
    const onFromStageChange = (e) => {
        const {value} = e.target
        let filterToStage = stages.filter(el => {
            return el.stage > value
        })
        setFromStage(Number(fromStageSelect.current.value))
        setToStage(filterToStage)
        setAttemptPercentage(0)
    }

    const setPercentage = (e) => {
        const {value} = e.target
        setAttemptPercentage(Number(value))
    }
    const getCounts = () => {
        setCount(calcReforge(fromStageSelect.current.value,toStageSelect.current.value,attemptPercentage))
    }
   
    return (
        <div>
            <Navbar />
            <div className='container my-3'>
                <div className="jumbotron">
                    <SocialMedia />
                    <h1 className="display-4 text-center">Reforge</h1>
                    <div className="my-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <label>{t('from')}</label>
                                <select className='form-control reforge-field' onChange={onFromStageChange} ref={fromStageSelect}>
                                    {stages.map((el, i) => <option key={i} value={el.stage - 1}>{el.stage - 1}</option>)}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label>{t('to')}</label>
                                <select className='form-control reforge-field' ref={toStageSelect} onChange={getCounts}>
                                    {toStage.map((el, i) => <option key={i} value={el.stage}>{el.stage}</option>)}
                                </select>
                            </div>
                            <div className="col-md-4"> 
                                <PercentagesField percentages={ CalcPercentages(fromStage+1) } percentage={attemptPercentage} setPercentage={setPercentage}/>
                            </div>
                        </div>
                        <div>
                            <ReforgeCounts result={count}/>
                        </div>
                        <p className='font-italic'>{t('note')}</p>
                    </div>
                    <hr className=' my-4'/>
                    <div className='row justify-content-center'>
                        <ReforgeTable />
                    </div>
                </div>
            </div>
        </div>
    )
}