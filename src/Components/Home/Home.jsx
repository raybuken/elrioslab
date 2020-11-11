
import React from 'react'
import Navbar from '../Navbar/Navbar'
import {useHistory} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from './logo.png'

export default function Home() {
    const history = useHistory()
    const [t] = useTranslation('home')
    return(
        <div>
            <Navbar/>
            <br/>
            <div className="container">
                <div className="jumbotron">
                    <img src={logo} alt="ElCalc" className=' img-fluid w-50 mx-auto d-block'/>
                    <div className=' text-center'>
                        <h1 className='display-4'>{t('welcome')}</h1>
                        <p className='lead'>{t('description')}</p>
                    </div>
                    <hr className="my-4"/>  
                    <button className='btn btn-primary btn-lg' onClick={()=>history.push('/calc/stats')}>{t('stat-calculator')}</button>
                    
                </div>
            </div>
        </div>
    )
}