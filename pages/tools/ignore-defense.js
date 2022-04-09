import React, { useState, useEffect } from 'react'
import { getDefBase, getDefPercentage, getRemainDefense, getDamageGained } from '../../components/Tools/IgnoreDefense/calcDefense'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { english, spanish } from '../../translations/translations'
import Head from 'next/head'
import Layout from '../../components/Layout/Layout'

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
                <title>Ignore Defense</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Elsword Ignore Defense Calculator'/>
                <meta name='keywords' content='Elsword, Raybuken, Elsword Ignore Defense Calculator'/>
                <meta name='author' content='Raybuken'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'/>
            </Head>
            <Layout>
                <div className="container my-5">
                    <div className="jumbotron">
                        <h1>Ignore Defense</h1>
                        <hr className="my-3" />
                        <form>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <label>{t['defense-base']}</label>
                                    <input type="number" value={defBase} className=' form-control border-black' onChange={onChangeDefBase} />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <label>{t['defense-percentage']}</label>
                                    <input type="number" value={defPercentage} className='form-control border-black' min='0' max='100' onChange={onChangeDefPercentage} />
                                </div>
                                <div className="col-md-6 col-sm-12 ">
                                    <div className="row">
                                        {ignoreDef.map((value, i) => (
                                            <div className='col-lg-4 col-md-6 col-sm-6' key={i}>
                                                <label>Ign Def {i + 1}</label>
                                                <input type="number" value={value} className='form-control border-black' min='0' max='100' onChange={e => onChangeIgnoreDef(e, i)} />
                                            </div>
                                        ))}
                                        <div className=" col-md-12 mt-2">
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
                            <div className="row my-2">
                                <div className="col align-self-center">
                                    <h2 className='font-weight-bold'>{t['remain-defense']}: <span className='text-info'>{remainDefense}%</span></h2>
                                    <h2 className='font-weight-bold'>{t['damage-gained']}: <span className='text-info'>{damageGained}%</span></h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div >
    )
}