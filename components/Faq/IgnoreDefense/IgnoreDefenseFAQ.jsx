import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
export default function IgnoreDefenseFAQ() {
    const t = useTranslations('ignore-defense')

    return (
        <div>
            <div className="accordion-header" >
                <h2 className="mb-0 ">
                    <button className="btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ignoreDefense" aria-expanded="true" aria-controls="ignoreDefense">
                        Ignore Defense
                        <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='ignoreDefense'>
                <div className='p-4'>
                    <div>
                        <h2>1. {t('q1.title')}</h2>
                        <p>{t('q1.answer.p1')}</p>
                        <p>{t('q1.answer.p2')}</p>
                        <p className=' font-italic text-center formula'>(<span className='text-success'>Def_Base</span> / <span className='text-info'>Def_const</span>) / (1 + (<span className='text-success'>Def_Base </span> / <span className='text-info'>Def_const</span>))</p>
                        <p>{t('q1.answer.p3')}:</p>
                        <p className=' font-italic text-center formula'><span className='text-info'>Def_const</span> * <span className='text-danger'>Def_percent</span> / (1 - <span className='text-danger'>Def_percent</span>)</p>
                        <p>{t('q1.answer.p4')} </p>
                        <ul>
                            <li><span className='text-info'>Def_const</span> = {t('q1.answer.def-const')}: 258.6436 + Level * 39.3526.</li>
                            <li><span className='text-success'>Def_Base</span> = {t('q1.answer.def-base')}</li>
                            <li><span className='text-danger'>Def_percent</span> = {t('q1.answer.def-percent')}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>2. {t('q2.title')}</h2>
                        <p>{t('q2.answer.p1')}</p>
                        <p className='formula text-center'><span className='text-success'>Def_Base</span> * (1- <span className='text-info'>Ignore_Defense</span>/100)</p>
                        <p>{t('q2.answer.p2')}</p>
                        <p className='formula text-center'>(1 / (1 - <span className='text-danger'>Def_percent</span> * <span className='text-info'>Ignore_Defense</span>)) *100</p>
                        <p>{t('q2.answer.p3')}</p>
                        <p className='formula text-center'>1 / (1 - <span className='text-danger'>def_percent</span> *(1 - (1 - <span className='text-info'>defense_ignore_1</span>)*(1 - <span className=" text-warning">defense_ignore_2</span>)* ... ) *100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}