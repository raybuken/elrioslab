

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AdaptMultiplier from './AdaptMultiplier'
import { useTranslations } from 'next-intl'

export default function AdaptationFAQ() {
    const t = useTranslations("adaptation")

    return (
        <>
            <div className="accordion-header">
                <h2 className="mb-0 ">
                    <button className="btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#adaptationCalc" aria-expanded="true" aria-controls="adaptationCalc">
                        Adaptation calc
                    <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='adaptationCalc'>
                <div className='p-4'>
                    <div>
                        <h2>1. {t('q1.title')}</h2>
                        <p>{t('q1.p1')}</p>
                    </div>
                    <div>
                        <h2>2. {t('q2.title')}</h2>
                        <p>{t('q2.p1')}</p>
                        <p className=' font-italic'>Multiplier = (1 - <span className='text-danger'>Enviromental_Debuff/10</span> + <span className='text-success'>Current_Adaptation/100</span>) / (1 - <span className='text-danger'>Enviromental_Debuff/10</span>) </p>
                        
                        <p>{t('q2.p2')}</p>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-sm-12">
                                <AdaptMultiplier/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}