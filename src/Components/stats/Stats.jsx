
import React from 'react'
import {statList} from './statsList'

export default function Home() {
    return(
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="row font-weight-bold">
                        <div className="col-md-2">Stat</div>
                        <div className="col-md-2">Eficiencia</div>
                        <div className="col-md-2">Actual %</div>
                        <div className="col-md-2">Total %</div>
                        <div className= 'col-md-4'>Efecto multiplicativo</div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">Critico</div>
                        <div className="col-md-2">100%</div>
                        <div className="col-md-2"><input type="text" className='w-75 form-control' name="" defaultValue={0}/></div>
                        <div className="col-md-2"><input type="text" className='w-75 form-control' name="" defaultValue={0}/></div>
                        <div className='col-md-4'>
                            <div className="row">
                                <div className="col-md-2 offset-md-3 form-check">
                                    <input type="checkbox" className='form-check-input' name="" id=""/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className='w-75 form-control' name="" id="" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}