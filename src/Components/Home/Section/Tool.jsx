import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Tool(props) {
    const history = useHistory()
    return (
        <div className="col-md-3">
            <figure className="figure" onClick={() => history.push(props.link)}>
                <h2 className='text-center pointer'>{props.name}</h2>
                <hr className='border-black bg-dark w-25' />
                <img src={props.src} alt={props.alt} className='figure-img img-fluid rounded img-tool' />
            </figure>
        </div>
    )
}
