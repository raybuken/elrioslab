import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import ReforgeTable from '../../Tools/Reforge/ReforgingTable/ReforgeTable'
import { useRouter } from 'next/router'
import { english, spanish } from '../../../translations/translations'
export default function ReforgeFAQ() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.faq['reforge'] : spanish.faq['reforge']
    return (
        <>
            <div className="accordion-header " id='reforge'>
                <h2 className="mb-0 ">
                    <button className="btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#reforgeCalc" aria-expanded="true" aria-controls="reforgeCalc">
                        Reforge Calc
                    <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='reforgeCalc'>
                <div className='p-4'>
                    <div>
                        <h2>1. {t.q1.question}</h2>
                        <p><span className='text-danger'>Crimson:</span> {t.q1.p1}</p>
                        <p><span className='text-success'>Sage:</span> {t.q1.p2}</p>
                        <p><span className='text-info'>Cerulean:</span> {t.q1.p3} </p>
                        <p><span className="text-warning">Vermillion:</span> {t.q1.p4}</p>
                        <p><span className="text-blue-green">Cobalt:</span> {t.q1.p5}</p>
                        <p><span className='text-violet'>Violet:</span> {t.q1.p6}</p>
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