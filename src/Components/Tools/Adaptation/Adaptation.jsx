
import React, { useState, useEffect } from 'react'
import Navbar from "../../Navbar/Navbar"
import SocialMedia from '../../SocialMedia/SocialMedia'
import DebuffField from './DebuffField'
import AdaptationField from './AdaptationField'
import { useTranslation } from 'react-i18next'
import { getAtkGain } from './getAtkGain'
import './styles.css'

export default function AdaptationCalculator() {
    const [t] = useTranslation('adaptation')
    const [debuff, setDebuff] = useState(10)
    const [adaptation, setAdaptation] = useState(0)
    const [currentStatGained, setCurrentDebuff] = useState(0)

    useEffect(() => {
        const getAdaptResult = () => setCurrentDebuff(getAtkGain(debuff, adaptation))
        getAdaptResult()
    }, [debuff, adaptation])

    const onDebuffChange = (e) => {
        const { value } = e.target
        setDebuff(value)
    }

    const onAdaptationChange = (e) => {
        const { value } = e.target
        let char = value.split('').reverse()
        char = char.toString()
        if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || !value) {
            value > 45 ? setAdaptation(45) : setAdaptation(value)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="jumbotron ">
                <div className="container">
                    <SocialMedia />
                    <h1 className='display-4 text-center'>{t('title')}</h1>
                    <form className='my-4'>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                                <DebuffField title={t('debuff')} debuff={onDebuffChange} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                                <AdaptationField title={t('adaptation')} value={adaptation} adaptation={onAdaptationChange} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">

                                <p htmlFor="currentEffectiveness">{t('stat-gained')}</p>
                                <span className='display-4 font-weight-bold'>= {currentStatGained}%</span>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}