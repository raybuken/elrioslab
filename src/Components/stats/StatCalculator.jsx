
import React, { useRef, useEffect, useState } from 'react'
import { getStatsName } from './statsList'
import Head from './Table/Head'
import { CalcActualStat, CalcTotalStat } from './calc'

export default function StatCalculator() {
    const [efficiency, setEfficiency] = useState([])
    const statLength = getStatsName.length
    const totalStats = useRef([new Array(statLength)])
    const actualStats = useRef([new Array(statLength)])

    useEffect(() =>{
        const initialValue = new Array(statLength).fill(100)
        setEfficiency(initialValue)
    },[])

    const onTotalStatChange = (e, i) => {
        const {value} = e.target
        const { name } = totalStats.current[i]
        if(value.charCodeAt(value.length-1) >= 48 && value.charCodeAt(value.length-1) <= 57){
            const efc = [...efficiency]
            const result = CalcActualStat(name, totalStats.current[i].value)
            //assing conversion to actual
            actualStats.current[i].value = result.acum || 0
            efc[i] = result.efficiency
            setEfficiency(efc)
        }else{
            totalStats.current[i].value = totalStats.current[i].value.slice(0,-1)
        }
    }

    const onActualStatChange = (e, i) => {
        const { value } = e.target
        const { name } = actualStats.current[i]
        if(value.charCodeAt(value.length-1) >= 48 && value.charCodeAt(value.length-1) <= 57){
            const efc = [...efficiency]
            const result = CalcTotalStat(name, actualStats.current[i].value)
            //assign conversion to total
            totalStats.current[i].value = result.acum || 0
            efc[i] = result.efficiency
            setEfficiency(efc)
        }else{
            actualStats.current[i].value = actualStats.current[i].value.slice(0,-1)
        }
    }

    return (
        <div className='container'>
            <br />
            <div className="row">
                <div className="col-12" >
                    <table className='table table-hover table-bordered table-responsive '>
                        <Head />
                        <tbody>
                            {getStatsName.map((stat, i) => (
                                <tr key={i}>
                                    <th>{stat}</th>
                                    <th name={stat}>{efficiency[i]}%</th>
                                    <th><input type="text" name={stat} ref={el => totalStats.current[i] = el} className='form-control' value={totalStats.current.value} placeholder={0} onChange={e => onTotalStatChange(e, i)} /></th>
                                    <th><input type="text" name={stat} ref={el => actualStats.current[i] = el} className='form-control' value={actualStats.current.value} placeholder={0} onChange={e => onActualStatChange(e, i)} /></th>
                                    <th>
                                        <div>
                                            <input type="checkbox" className='form-check-input' />
                                            <input type="text" className='w-75 form-control' disabled />
                                        </div>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}