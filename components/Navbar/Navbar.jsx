import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { english, spanish } from '../../translations/translations'

export default function Navbar() {
    const router = useRouter()
    const { locale, pathname } = router
    const t = locale === 'en' ? english.navbar : spanish.navbar
    const selectLanguage = (lang) => {
        router.push(pathname, pathname, { locale: lang })
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a href='/' className='navbar-brand'>
                    <Image src='/v1616513124/files/logo.png' alt='ElriosLab' width='50' height='50' />
                        Elrios Lab
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse' id='collapse'>
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link href='/'><span className='nav-link pointer'>{t.home}</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="tools" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Herramientas
                            </span>
                            <div className="dropdown-menu" aria-labelledby="tools">
                                <div className="dropdown-item">
                                    <Link className="dropdown-item" href="/calc/stats">Stats</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link className="dropdown-item" href='/calc/adaptation'>Adaptation</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link className="dropdown-item" href="/calc/reforge">Reforge</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link className="dropdown-item" href="/calc/ignore-defense">Ignore Defense</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href='/about'><span className='nav-link pointer'>{t.about}</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/faq'><span className='nav-link pointer'>{t.faq}</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/" role="button" className='nav-link dropdown-toggle pointer' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {t.languages}</a>
                            <div className="dropdown-menu" >
                                <span className="btn dropdown-item" href="#" onClick={() => selectLanguage('es')}>{t.spanish}</span>
                                <span className="btn dropdown-item" href="#" onClick={() => selectLanguage('en')}>{t.english}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}