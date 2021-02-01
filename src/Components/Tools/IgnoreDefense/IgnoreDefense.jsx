import React,{useState,useEffect} from 'react'
import Navbar from '../../Navbar/Navbar'
import {getDefBase,getDefPercentage,getRemainDefense,getDamageGained} from './calcDefense'
import {useTranslation} from 'react-i18next'

export default function IgnoreDefense() {
    const [t] = useTranslation('ignore-defense')
    const [defBase,setDefBase] = useState(0)
    const [defPercentage,setDefPercentage] = useState(0)
    const [ignoreDef,setIgnoreDef] = useState(0)
    const [remainDefense,setRemainDefense] = useState(0)
    const [damageGained,setDamageGained] = useState(0)

    //Defense percentage effect
    useEffect(() => {
        setRemainDefense(getRemainDefense(defBase,ignoreDef,99))
        setDamageGained(getDamageGained(defPercentage,ignoreDef))
    },[defPercentage,defBase,ignoreDef])
 
    const currentValue = (e) => {
        const {value} = e.target
        return value
    }

    const onChangeDefBase = (e) => {
        setDefBase(currentValue(e))
        setDefPercentage(getDefPercentage(currentValue(e),99))
    }

    const onChangeDefPercentage = (e) => {
        setDefPercentage(currentValue(e))
        setDefBase(getDefBase(currentValue(e),99))
    }

    const onChangeIgnoreDef = (e) => {
        setIgnoreDef(currentValue(e))
    }

    return(
        <div>
            <Navbar />
            <div className="container my-5">
                <div className="jumbotron">
                    <h1 className="text-center display-4">Ignore Defense</h1>
                    <hr className="my-3"/>
                    <form>
                        <div className="row">
                            <div className="col-4">
                                <label>{t('defense-base')}</label>
                                <input type="number" value={defBase} className=' form-control border-black' onChange={onChangeDefBase}/>
                            </div>
                            <div className="col-4">
                                <label>{t('defense-percentage')}</label>
                                <input type="number" value={defPercentage} className='form-control border-black' min='0' max='100' onChange={onChangeDefPercentage}/>
                            </div>
                            <div className="col-4">
                                <label>Ignore Defense 1</label>
                                <input type="number" value={ignoreDef} className='form-control border-black' min='0' max='100' onChange={onChangeIgnoreDef}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col align-self-center">
                                <p className='display-4'>{t('remain-defense')}: {remainDefense}%</p>
                                <p className='display-4'>{t('damage-gained')}: {damageGained}%</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}