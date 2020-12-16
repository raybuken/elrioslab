

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {useTranslation} from 'react-i18next'

import ReforgeTable from '../../Tools/Reforge/ReforgingTable/ReforgeTable'

export default function ReforgeFAQ() {
    const [t] = useTranslation('faq')

    return (
        <>
            <div className="card-header bg-transparent">
                <h2 className="mb-0 ">
                    <button className="btn btn-link btn-block text-left shadow-none" type="button" data-toggle="collapse" data-target="#reforgeCalc" aria-expanded="true" aria-controls="reforgeCalc">
                        Reforge Calc
                    <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='reforgeCalc'>
                <div className='p-4'>
                    <div>
                        <h2>1. {t('reforge.q1.question')}</h2>
                        <p><span className='text-danger'>Crimson:</span> {t('reforge.q1.p1')}</p>
                        <p><span className='text-success'>Sage:</span> {t('reforge.q1.p2')}</p>
                        <p><span className='text-info'>Cerulean:</span> {t('reforge.q1.p3')} </p>
                        <p><span className="text-warning">Vermillion:</span> {t('reforge.q1.p4')}</p>
                        <p><span className="text-blue-green">Cobalt:</span> {t('reforge.q1.p5')}</p>
                        <p><span className='text-violet'>Violet:</span> {t('reforge.q1.p6')}</p>
                    </div>
                    <div>
                        <h2>2. Tabla de Reforge</h2>
                        <ReforgeTable />
                    </div>
                </div>  
            </div>
        </>
    )
}