import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { getDefBase, getDefPercentage, getRemainDefense, getDamageGained } from '../../components/Tools/IgnoreDefense/calcDefense'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { english, spanish } from '../../translations/translations'
import Head from 'next/head'
export default function IgnoreDefense() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english['ignore-defense'] : spanish['ignore-defense']
    const [defBase, setDefBase] = useState(0)
    const [defPercentage, setDefPercentage] = useState(0)
    const [ignoreDef, setIgnoreDef] = useState([0])
    const [remainDefense, setRemainDefense] = useState(0)
    const [damageGained, setDamageGained] = useState(0)

    //Defense percentage effect
    useEffect(() => {
        setRemainDefense(getRemainDefense(defBase, ignoreDef, 99))
        setDamageGained(getDamageGained(defPercentage, ignoreDef))
    }, [defPercentage, defBase, ignoreDef])

    const currentValue = (e) => {
        const { value } = e.target
        return value
    }

    const onChangeDefBase = (e) => {
        setDefBase(currentValue(e))
        setDefPercentage(getDefPercentage(currentValue(e), 99))
    }

    const onChangeDefPercentage = (e) => {
        setDefPercentage(currentValue(e))
        setDefBase(getDefBase(currentValue(e), 99))
    }

    const onChangeIgnoreDef = (e, position) => {
        const newValue = [...ignoreDef]
        newValue[position] = parseFloat(currentValue(e)) || ''
        setIgnoreDef(newValue)
    }

    const createIgnoreDefenseField = () => {
        setIgnoreDef(ignoreDef.concat(0))
    }
    const removeIgnoreDefenseField = () => {
        if (ignoreDef.length > 1) {
            setIgnoreDef(ignoreDef.slice(0, ignoreDef.length - 1) || 0)
        }
    }

    const resetIgnoreDefenseField = () => {
        setIgnoreDef([0])
    }

    return (
        <div>
            <Head>
                <title>Elrios Lab</title>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <div className="container my-5">
                <div className="jumbotron">
                    <h1 className="text-center display-4">Ignore Defense</h1>
                    <hr className="my-3" />
                    <form>
                        <div className="row">
                            <div className="col-3">
                                <label>{t['defense-base']}</label>
                                <input type="number" value={defBase} className=' form-control border-black' onChange={onChangeDefBase} />
                            </div>
                            <div className="col-3">
                                <label>{t['defense-percentage']}</label>
                                <input type="number" value={defPercentage} className='form-control border-black' min='0' max='100' onChange={onChangeDefPercentage} />
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    {ignoreDef.map((value, i) => (
                                        <div className='col-4' key={i}>
                                            <label>Ignore Defense {i + 1}</label>
                                            <input type="number" value={value} className='form-control border-black' min='0' max='100' onChange={e => onChangeIgnoreDef(e, i)} />
                                        </div>
                                    ))}
                                    <div className=" col-12 mt-2">
                                        <button type='button' className='btn btn-success mr-1' value="Add" onClick={createIgnoreDefenseField}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        <button type='button' className='btn btn-danger mr-1' value="Delete" onClick={removeIgnoreDefenseField}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <button type='button' className='btn btn-info' value="Reset" onClick={resetIgnoreDefenseField}>
                                            <FontAwesomeIcon icon={faRedoAlt} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col align-self-center">
                                <p className='display-4'>{t['remain-defense']}: {remainDefense}%</p>
                                <p className='display-4'>{t['damage-gained']}: {damageGained}%</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}