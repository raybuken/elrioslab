
import React,{useRef,useEffect} from 'react'
import {getStatsName} from './statsList'
import Head from './Table/Head'
import {CalcStat} from './calc'

export default function StatCalculator() {    
    const actualStats = useRef([new Array(getStatsName.length)])
    const totalStats = useRef([new Array(getStatsName.length)])

    useEffect(() => {
        console.log(actualStats)
    })

    const onActualStatChange = (e,i) => {
        const {name} = actualStats.current[i]
        let newActualStat = actualStats
        newActualStat.current[i].value = e.target.value
        let newTotalStat = totalStats.current[i].value
        CalcStat(name,newActualStat,newTotalStat)
    }

    /*const onTotalStatChange = (e,i) => {
        const {name} = totalStats.current[i]
        let newTotalStat = totalStats
        newTotalStat.current[i].value = e.target.value
        let newActualStat = ActualStats.current[i].value
        CalcStat(name,newActualStat,newTotalStat)
    }*/

    return(
        <div className='container'>
            <br/>
            <div className="row">
                <div className="col-md-10 offset-1" >
                    <table className='table table-hover table-bordered'>
                        <Head />
                        <tbody>
                            {getStatsName.map((stat, index) => (
                                <tr key={index}>
                                    <th>{stat}</th>
                                    <th name={stat}>100%</th>
                                    <th><input type="text" name={stat} ref={el => actualStats.current[index] = el} className='form-control' value={actualStats.current.value} placeholder={0} onChange={e => onActualStatChange(e,index)}/></th>
                                        <th><input type="text" name={stat} ref={el => totalStats.current[index] = el} className='form-control'  value={totalStats.current.value} placeholder={0} onChange={e => onActualStatChange(e,index)}/></th>
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
    )
}