import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export default function IgnoreDefenseFAQ() {
    const [t] = useTranslation('faq')
    const question1 = 'ignore-defense.q1'
    const question2 = 'ignore-defense.q2'
    return (
        <div>
            <div className="card-header bg-transparent" >
                <h2 className="mb-0 ">
                    <button className="btn btn-link btn-block text-left shadow-none" type="button" data-toggle="collapse" data-target="#ignoreDefense" aria-expanded="true" aria-controls="ignoreDefense">
                        Ignore Defense
                        <FontAwesomeIcon className='float-right' icon={faChevronDown} size='1x' />
                    </button>
                </h2>
            </div>
            <div className='collapse' id='ignoreDefense'>
                <div className='p-4'>
                    <div>
                        <h2>1. {t(`${question1}.title`)}</h2>
                        <p>{t(`${question1}.answer.p1`)}</p>
                        <p>{t(`${question1}.answer.p2`)}</p>
                        <p className=' font-italic text-center formula'>(<span className='text-success'>Def_Base</span> / <span className='text-info'>Def_const</span>) / (1 + (<span className='text-success'>Def_Base </span> / <span className='text-info'>Def_const</span>))</p>
                        <p>{t(`${question1}.answer.p3`)}:</p>
                        <p className=' font-italic text-center formula'><span className='text-info'>Def_const</span> * <span className='text-danger'>Def_percent</span> / (1 - <span className='text-danger'>Def_percent</span>)</p>
                        <p>{t(`${question1}.answer.p4`)} </p>
                        <ul>
                            <li><span className='text-info'>Def_const</span> = {t(`${question1}.answer.def-const`)}: 258.6436 + Level * 39.3526.</li>
                            <li><span className='text-success'>Def_Base</span> = {t(`${question1}.answer.def-base`)}</li>
                            <li><span className='text-danger'>Def_percent</span> = {t(`${question1}.answer.def-percent`)}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>2. {t(`${question2}.title`)}</h2>
                        <p>{t(`${question2}.answer.p1`)}</p>
                        <p className='formula text-center'><span className='text-success'>Def_Base</span> * (1- <span className='text-info'>Ignore_Defense</span>/100)</p>
                        <p>{t(`${question2}.answer.p2`)}</p>
                        <p className='formula text-center'>(1 / (1 - <span className='text-danger'>Def_percent</span> * <span className='text-info'>Ignore_Defense</span>)) *100</p>
                        <p>El Ignore defense y los debuffs de reducción de defensa se acumulan multiplicativamente. para juntarlo en la formula simplemente usamos este formato:</p>
                        <p className='formula text-center'>1 / (1 - <span className='text-danger'>def_percent</span> *(1 - (1 - <span className='text-info'>defense_ignore_1</span>)*(1 - <span className=" text-warning">defense_ignore_2</span>)* ... ) *100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}