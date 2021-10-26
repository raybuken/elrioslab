
import React, { useRef, useEffect, useState } from 'react'
import { getActualStat, getTotalStat, getEfficiency } from '../calc/calc'
import { getStatsName } from '../statsList'
import MStatField from './MStatField'

export default function Body() {

    const [activeStat, setActiveStat] = useState('maximize')
    const [efficiency, setEfficiency] = useState(100)
    const [totalStats, setTotalStats] = useState('')
    const [actualStats, setActualStats] = useState('')
    const selectStat = useRef()

    const onSelectStat = () => {
        setActiveStat(selectStat.current.value)
        setTotalStats(0)
        setActualStats(0)
    }

    const onTotalStatChange = (e) => {
        const { value } = e.target
        setTotalStats(value)

        //assing conversion to actual
        setActualStats(getActualStat(activeStat, value) || 0)
        const efc = getEfficiency(activeStat, value)
        setEfficiency(efc)
    }

    const onActualStatChange = (e) => {
        const { value } = e.target
        setActualStats(value)

        //assign conversion to total
        setTotalStats(getTotalStat(activeStat, value) || 0)
        const efc = getEfficiency(activeStat, value)
        setEfficiency(efc)
    }

    return (
        <>
            <div className='form-group row'>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <label htmlFor="">Stat</label>
                    <select className='form-select form-control' ref={selectStat} onChange={onSelectStat} >
                        {
                            getStatsName.map((stat, i) => (
                                <option value={stat} name={stat} key={i}>{stat}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <hr />
            <div>
                {getStatsName.map((stat, i) => {
                    if (stat === activeStat) {
                        return (
                            <div key={i}>
                                <div className="row align-items-center justify-content-lg-between">
                                    <div className="col-md-3 col-sm-6 col-lg-3">
                                        <label>Total %</label>
                                        <input type="number" className=' form-control rounded border-black' name={stat} value={totalStats} placeholder={0} onChange={e => onTotalStatChange(e)} name={stat} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-lg-3">
                                        <label>Actual %</label>
                                        <input type="number" className=' form-control rounded border-black' name={stat} value={actualStats} placeholder={0} onChange={e => onActualStatChange(e)} name={stat} />
                                    </div>
                                    <div className="col-md-3 col-sm-12 offset-lg-2">
                                        <div className="row justify-content-center align-items-center p-2 h-100">
                                            <div className="col-lg-12 text-center">
                                                <label>Eficiencia%</label>
                                                <p className=' h1'>{efficiency}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <MStatField name={activeStat} actual={actualStats} />
                            </div>
                        )
                    }
                })
                }
            </div>
        </>
    )
}