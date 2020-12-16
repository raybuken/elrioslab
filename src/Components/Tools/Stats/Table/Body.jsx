import React,{ useRef, useEffect, useState } from 'react'
import { getActualStat, getTotalStat, getEfficiency, getMultiplicativeStat } from '../calc/calc'
import { getStatsName } from '../statsList'
import Images from './Images'

export default function Body() {

    const [efficiency, setEfficiency] = useState([])
    const [finalStat, setFinalStat] = useState([])

    const statLength = getStatsName.length
    const totalStats = useRef([new Array(statLength)])
    const actualStats = useRef([new Array(statLength)])
    const mStatCheckBox = useRef([new Array(statLength)])
    const mStat = useRef([new Array(statLength)])

    useEffect(() => {
        setEfficiency(new Array(statLength).fill(100))
        setFinalStat(new Array(statLength).fill(0))
    }, [statLength])

    const onTotalStatChange = (e, i) => {
        const { name } = totalStats.current[i]
        const efc = [...efficiency]

        //assing conversion to actual
        actualStats.current[i].value = getActualStat(name, totalStats.current[i].value) || 0
        efc[i] = getEfficiency(name, actualStats.current[i].value)
        setEfficiency(efc)

        const mStatValue = mStat.current[i].value
        let finalStatValue = finalStat
        finalStatValue[i] = getMultiplicativeStat(name, actualStats.current[i].value, mStatValue)
        setFinalStat({ ...finalStatValue })
    }

    const onActualStatChange = (e, i) => {
        const { name } = actualStats.current[i]
        const efc = [...efficiency]
        //assign conversion to total
        totalStats.current[i].value = getTotalStat(name, actualStats.current[i].value) || 0
        efc[i] = getEfficiency(name, actualStats.current[i].value)
        setEfficiency(efc)

        const mStatValue = mStat.current[i].value
        let finalStatValue = finalStat
        finalStatValue[i] = getMultiplicativeStat(name, actualStats.current[i].value, mStatValue)
        setFinalStat({ ...finalStatValue })
    }

    const onMStatTextChange = (e, i) => {
        const actualValue = actualStats.current[i].value
        const mStatValue = mStat.current[i].value
        const name = actualStats.current[i].name
        let finalStatValue = finalStat

        finalStatValue[i] = getMultiplicativeStat(name, actualValue, mStatValue)
        setFinalStat({ ...finalStatValue })
    }

    const mStatCheckBoxChange = (e, i) => {
        const { checked } = e.target
        mStat.current[i].disabled = !checked
    }
    
    return (
        <tbody className='font-family-fantasy'>
            {getStatsName.map((stat, i) => (
                <tr key={i} className='text-center table-info'>
                    <td>
                        <img src={Images[i]} alt={stat} className='w-75' />
                    </td>
                    <td>
                        <label className='pt-2 text-capitalize'>{stat}</label>
                    </td>
                    <td name={stat}>
                        <label className='pt-2'>{efficiency[i]}%</label>
                    </td>
                    <td>
                        <input type="text" name={stat} ref={el => totalStats.current[i] = el} className='form-control p-1 ' value={totalStats.current.value} placeholder={0} onChange={e => onTotalStatChange(e, i)} />
                    </td>
                    <td>
                        <input type="text" name={stat} ref={el => actualStats.current[i] = el} className='form-control p-1 ' value={actualStats.current.value} placeholder={0} onChange={e => onActualStatChange(e, i)} />
                    </td>
                    <td className=' text-center'>
                        <div className='input-group'>
                            <div className="input-group-prepend ">
                                <div className="input-group-text bg-light border-0">
                                    <input type="checkbox" ref={el => mStatCheckBox.current[i] = el} onChange={(e) => mStatCheckBoxChange(e, i)} />
                                </div>
                            </div>
                            <input type="text" ref={el => mStat.current[i] = el} disabled className='form-control p-1 ' onChange={e => onMStatTextChange(e, i)} min={0} max={99} />
                            <div className="input-group-append">
                                <label className=' input-group-text bg-warning'>= {finalStat[i]}%</label>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}