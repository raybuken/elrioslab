

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'
import AdaptMultiplier from './AdaptMultiplier'
export default function AdaptationFAQ() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english.faq.adaptation : spanish.faq.adaptation
    return (
        <>
            <div className="card-header bg-transparent">
                <h2 className="mb-0 ">
                    <button className="btn btn-link btn-block text-left shadow-none" type="button" data-toggle="collapse" data-target="#adaptationCalc" aria-expanded="true" aria-controls="adaptationCalc">
                        Adaptation calc
                    <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='adaptationCalc'>
                <div className='p-4'>
                    <div>
                        <h2>1. {t.q1.title}</h2>
                        <p>{t.q1.p1}</p>
                    </div>
                    <div>
                        <h2>2. {t.q2.title}</h2>
                        <p>{t.q2.p1}</p>
                        <p className=' font-italic'>Multiplier = (1 - <span className='text-danger'>Enviromental_Debuff/10</span> + <span className='text-success'>Current_Adaptation/100</span>) / (1 - <span className='text-danger'>Enviromental_Debuff/10</span>) </p>
                        
                        <p>{t.q2.p2}</p>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-sm-12">
                                <AdaptMultiplier translate={t}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}