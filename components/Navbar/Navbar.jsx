import React from 'react'
import { useRouter } from 'next/router'
import NavItem from './NavItem'
import DropdownItem from './DropdownItem'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()
    const { pathname } = router
    const t = useTranslations("navbar")

    const selectLanguage = (lang) => {
        router.push(pathname, pathname, { locale: lang })
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <Link href={'/'} className='navbar-brand'>
                        Elrios Lab
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='navbar-collapse collapse' id='collapse'>
                        <ul className="navbar-nav ms-auto">
                            <NavItem href='/' name={t('home')} />
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="tools" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('tools')}
                                </span>
                                <div className="dropdown-menu" data-bs-popper="none" aria-labelledby="tools">
                                    <DropdownItem href='/tools/stats' name='Stats' />
                                    <DropdownItem href='/tools/adaptation' name='Adaptation' />
                                    <DropdownItem href='/tools/reforge' name='Reforge' />
                                    <DropdownItem href='/tools/ignore-defense' name='Ignore Defense' />
                                    <DropdownItem href='/tools/el-search-party-collection' name='El Search Party Collection' />
                                    <DropdownItem href='/tools/experience' name='Experience' />
                                </div>
                            </li>
                            <NavItem href='/about' name={t('about')} />
                            <NavItem href='/faq' name={t('faq')} />
                            <li className="nav-item dropdown">
                                <Link href={'/'} role='button' className='nav-link dropdown-toggle pointer' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('languages')}
                                </Link>

                                <div className="dropdown-menu" >
                                    <span className="btn dropdown-item" href="#" onClick={() => selectLanguage('es')}>{t('spanish')}</span>
                                    <span className="btn dropdown-item" href="#" onClick={() => selectLanguage('en')}>{t('english')}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}