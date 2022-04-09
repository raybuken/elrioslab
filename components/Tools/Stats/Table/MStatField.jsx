import React, { useState, useEffect } from 'react'
import { getMultiplicativeStat } from '../calc/calc'
import { faPlus, faTrash, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MStatField(props) {
    const { name, actual } = props
    const [mStat, setMStat] = useState([''])
    const [finalStat, setFinalStat] = useState()

    useEffect(() => {
        setFinalStat(getMultiplicativeStat(name, actual, mStat))
    }, [mStat, actual])

    const currentValue = (e) => {
        const { value } = e.target
        return value
    }
    const onChangeMStat = (e, position) => {
        const newValue = [...mStat]
        newValue[position] = parseFloat(currentValue(e)) || ''
        setMStat(newValue)
    }
    const createMStatField = () => {
        setMStat(mStat.concat(''))
    }
    const removeMStatField = () => {
        if (mStat.length > 1) {
            setMStat(mStat.slice(0, mStat.length - 1) || 0)
        }
    }
    const resetMStatField = () => { setMStat([0]) }

    return (
        <div className="mt-2">
            <div className="row p-1 border border-info rounded">
                <div className="col-lg-6 col-sm-12 p-2">
                    <div className="row">
                        {mStat.map((value, i) => (
                            <div className='col-lg-4 col-md-4 col-sm-6' key={i}>
                                <label>M. stat {i + 1}</label>
                                <input type="number" value={value} placeholder='0' className='form-control border-black rounded' min='0' max='100' onChange={e => onChangeMStat(e, i)} />
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className='mt-2 col-sm-12 col-lg-8'>
                            <button type='button' className='btn btn-success me-1' value="Add" onClick={createMStatField}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <button type='button' className='btn btn-danger me-1' value="Delete" onClick={removeMStatField}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button type='button' className='btn btn-info' value="Reset" onClick={resetMStatField}>
                                <FontAwesomeIcon icon={faRedoAlt} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <div className="row justify-content-end align-items-center h-100 text-center p-1">
                        <div className="col-12 col-md-6">
                            <label className='h3'>Stat Final: </label>
                        </div>
                        <div className="col-12 col-md-6 bg-warning">
                            <label className='h1 text-info'>{finalStat}%</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}