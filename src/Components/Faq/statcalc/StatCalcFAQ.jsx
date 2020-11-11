import React from 'react'
import {useTranslation} from 'react-i18next'
import './styles.css'
import StatTable from './StatTable/StatTable'

export default function StatCalcFAQ() {
    const [t] = useTranslation('faq')
    const question1 = 'stat-calculator.q1'
    const question2 = 'stat-calculator.q2'
    const question3 = 'stat-calculator.q3'
    const question4 = 'stat-calculator.q4'
    return (
        <div className="arccodion">
            <div >
                <h2>{t(`${question1}.question`)}</h2>
                <p>{t(`${question1}.answer`)}</p>
                <div className='row align-content-center'>
                    <StatTable />
                </div>
            </div>
            <div>
                <h2>{t(`${question2}.question`)}</h2>
                <p>{t(`${question2}.answer.p1`)}</p>
                <ul>
                    <li><span className='font-weight-bold'>maximize:</span> 85~90%</li>
                    <li><span className='font-weight-bold'>critical:</span> 95~100%</li>
                    <li><span className='font-weight-bold'>action speed:</span> 120%</li>
                </ul>
                <p><span className='font-weight-bold text-danger'>{ t(`${question2}.answer.p2.note`)}</span>{t('stat-calculator.q2.answer.p2.text')}</p>
            </div>
            <div>
                <h2>{t(question3+'.question')}</h2>
                <p>{t(question3+'.answer.p1')}</p>
                <ul>
                        <li><span className="font-weight-bold">{t(question3+'.answer.p2.title')}</span> {t(question3+'.answer.p2.text')}</li>
                    <li><span className='font-weight-bold'>{t(question3+'.answer.p3.title')} </span>{t(question3+'.answer.p3.text')} </li>
                    <li><span className="font-weight-bold">{t(question3+'.answer.p4.title')}</span> {t(question3+'.answer.p4.text')}</li>
                </ul>
            </div>
            <div>
                <h2>{t(question4+'.question')}</h2>
                <p>{t(question4+'.answer.p1')}</p>
                <p className='text-center font-weight-bold font-italic formula'>
                    <span className='text-success'> {t(question4+'.answer.p2.fv')} </span>= 
                    <span className='text-info'> {t(question4+'.answer.p2.cv')} </span>+  ( 
                    <span className='text-info'>{t(question4+'.answer.p2.cv')} </span> * 
                    <span className='text-danger'>{t(question4+'.answer.p2.mv')}</span> / 100 )
                </p>
            </div>
        </div>
    )
}