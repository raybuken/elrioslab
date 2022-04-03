import React from 'react'
import StatTable from './StatTable/StatTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { english, spanish } from '../../../translations/translations'
export default function StatCalcFAQ() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.faq['stat-calculator'] : spanish.faq['stat-calculator']

    return (
        <>
            <div className="card-header bg-transparent" id='statCalc'>
                <h2 className="mb-0 ">
                    <button className="btn btn-link btn-block text-left shadow-none" type="button" data-toggle="collapse" data-target="#statCalculator" aria-expanded="true" aria-controls="statCalculator">
                        Stat Calculator
                        <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='statCalculator'>
                <div className='p-4'>
                    <h2>{t.q1.question}</h2>
                    <p>{t.q1.answer}</p>
                    <div className='row align-content-center'>
                        <StatTable />
                    </div>
                    <div>
                        <h2>{t.q2.question}</h2>
                        <p>{t.q2.answer.p1}</p>
                        <ul>
                            <li><span className='font-weight-bold'>Maximize:</span> 85~90%</li>
                            <li><span className='font-weight-bold'>Critical:</span> 95~100%</li>
                            <li><span className='font-weight-bold'>Action speed:</span> 120%</li>
                        </ul>
                        <p><span className='font-weight-bold text-danger'>{t.q2.answer.p2.note}</span>{t.q2.answer.p2.text}</p>
                    </div>
                    <div>
                        <h2>{t.q3.question}</h2>
                        <p>{t.q3.answer.p1}</p>
                        <ul>
                            <li><span className="font-weight-bold">{t.q3.answer.p2.title}</span> {t.q3.answer.p2.text}</li>
                            <li><span className="font-weight-bold">{t.q3.answer.p3.title}</span> {t.q3.answer.p3.text}</li>
                            <li><span className="font-weight-bold">{t.q3.answer.p4.title}</span> {t.q3.answer.p4.text}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>{t.q4.question}</h2>
                        <p>{t.q4.answer.p1}</p>
                        <p className='text-center font-weight-bold font-italic formula'>
                            <span className='text-success'> {t.q4.answer.p2.fv} </span>=
                            <span className='text-info'> {t.q4.answer.p2.cv} </span>+  (
                            <span className='text-info'>{t.q4.answer.p2.cv} </span> *
                            <span className='text-danger'>{t.q4.answer.p2.mv}</span> / 100 )
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}