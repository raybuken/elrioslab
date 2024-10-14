import { useTranslations } from 'next-intl'
import React from 'react'

function FinalExperienceResult({total}) {
    const t = useTranslations()

    return (
        <div className="final-multipliers">
            <div className="row py-3">
                <div className="col-12">
                    <span className='fs-3'>{t('total')} = <b className='fw-bold'>{total}</b></span>
                    <p className='mt-3 alert alert-warning'>
                        <span className='fw-bold'>{t('warning')} </span>
                        {t('experience-aproximation-warning')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FinalExperienceResult