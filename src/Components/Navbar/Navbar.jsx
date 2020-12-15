
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from './logo.png'

export default function Navbar() {
    const [t, i18n] = useTranslation('navbar')
    const history = useHistory()

    const selectLanguage = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
        history.go(0)
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand'><img src={logo} alt='ElCalc' width='50' height='50' />Elrios Lab</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse' id='collapse'>
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">{t('home')}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="tools" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Herramientas
                            </span>
                            <div className="dropdown-menu" aria-labelledby="tools">
                                <Link className="dropdown-item" to="/calc/stats">Stats</Link>
                                <Link className="dropdown-item" to='/calc/adaptation'>Adaptation</Link>
                                <Link className="dropdown-item" to="/calc/reforge">Reforge</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">{t('about')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/faq' className='nav-link'>{t('faq')}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">{t('languages')}</a>
                            <div className="dropdown-menu">
                                <span className="btn dropdown-item" href="#" onClick={() => selectLanguage('es')}>{t('spanish')}</span>
                                <span className="btn dropdown-item" href="#" onClick={() => selectLanguage('en')}>{t('english')}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}