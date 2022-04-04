import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { english, spanish } from '../../translations/translations'
import NavItem from './NavItem'
import DropdownItem from './DropdownItem'

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
                    Elrios Lab
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse' id='collapse'>
                    <ul className="navbar-nav ml-auto ">
                        <NavItem href='/' name={t.home}/>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="tools" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Herramientas
                            </span>
                            <div className="dropdown-menu" aria-labelledby="tools">
                                <DropdownItem href='/tools/stats' name='Stats'/>
                                <DropdownItem href='/tools/adaptation' name='Adaptation'/>
                                <DropdownItem href='/tools/reforge' name='Reforge'/>
                                <DropdownItem href='/tools/ignore-defense' name='Ignore Defense'/>
                                <DropdownItem href='/tools/el-search-party-collection' name='El Search Party Collection'/>
                            </div>
                        </li>
                        <NavItem href='/about' name={t.about}/>
                        <NavItem href='/faq' name={t.faq}/>
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