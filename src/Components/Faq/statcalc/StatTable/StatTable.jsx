import { statList, getStatsName } from '../../../Tools/Stats/statsList'
import React, {useRef,useState } from 'react'

export default function StatTable() {
    const [name,setName] = useState('maximize')
    const selectInput = useRef(null)
    

    const getInterval = (efficiency1,efficiency2) => {
        if(!efficiency2){
            return `Greater than ${efficiency1}%`
        }
        return `${efficiency1}~${efficiency2}%`
    }
    
    const getStatTable = () => {
        const {value} = selectInput.current || 'maximize'
        setName(value)
    }
    return (
        <div className='p-3'>
            <div className='row '>
                <div className='form-group col-md-6 '>
                    <label>Stat</label>
                    <select className='form-control border-black' ref={selectInput} onChange={getStatTable}>
                        {getStatsName.map((stat,i) => (
                            <option key={i} value={stat} >{stat}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                <div className='col-md-10'>
                    <table className='table table-bordered table-info text-center font-family-sans-serif' name={name}>
                            <thead className=' table-success'>
                                <tr>
                                    <td> Unnormalized Percentage </td>
                                    <td> Normalized Percentage </td>
                                    <td> Efficiency Stage </td>
                                    <td> Efficiency Interval</td>
                                </tr>
                            </thead>
                            <tbody>
                                {statList[name].normalize.map((stat,i) => (
                                    <tr key={i}>
                                        <td>{statList[name].unnormalized[i]}%</td>
                                        <td>{statList[name].normalize[i]}%</td>
                                        <td>{statList[name].efficiency[i]}%</td>
                                        <td>{getInterval(statList[name].normalize[i],statList[name].normalize[i+1])}</td>
                                    </tr>
                                ))} 
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}