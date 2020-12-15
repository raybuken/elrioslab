import React from 'react'
import {useHistory} from 'react-router-dom'
import stats from '../Tools/stats.jpg'
import adaptation from '../Tools/adap.png'
import reforge from '../Tools/reforge.png'
import './styles.css'

export default function Section() {
    const history = useHistory()
    

    return (
        <div className="row">
            <div className="col-md-4">
                <figure className="figure" onClick={() => history.push('/calc/stats')}>
                    <h2 className='text-center pointer'>stats</h2>
                    <hr className='border-black bg-dark w-25'/>
                    <img src={stats} alt='Stats' className='figure-img img-fluid rounded img-tool' />
                </figure>
            </div>
            <div className="col-md-4">
                <figure className="figure" onClick={() => history.push('/calc/adaptation')}> 
                    <h2 className='text-center pointer'>Adaptation</h2>
                    <hr className=' border-black bg-dark w-25'/>
                    <img src={adaptation} alt='adaptation' className='figure-img img-fluid rounded img-tool'/>
                </figure>
            </div>
            <div className="col-md-4">
                <figure className="figure" onClick={() => history.push('/calc/reforge')}>
                    <h2 className='text-center pointer'>Reforge</h2>
                    <hr className=' border-black bg-dark w-25'/>
                    <img src={reforge} alt='Reforge' className='figure-img img-fluid rounded img-tool' />
                </figure>
            </div>
        </div>
    )
}