import React from 'react'
import Head from './Head'

export default function Stats(props) {
    const {actualStatsRef} = props
    
    return (
        <div>
            <div className="row">
                <div className="col-md-10 offset-1" >
                    <table className='table table-hover table-bordered'>
                        <Head />
                        <tbody>
                            {props.stats.map((stat, index) => (
                                <tr key={index}>
                                    <th>{stat}</th>
                                    <th name={stat}>100%</th>
                                    <th><input type="text" name={stat} ref={ actualStatsRef.current[index]} className='form-control' defaultValue={0} onChange={props.onStatChange}/></th>
                                    <th><input type="text" name={stat} className='form-control'  defaultValue={0} onChange={props.onStatChange}/></th>
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