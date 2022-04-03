import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Tool(props) {
    const router = useRouter()
    return (
        <div className="col-md-4 col-sm-12">
            <figure className="figure" onClick={() => router.push(props.link)}>
                <h2 className='text-center pointer'>{props.name}</h2>
                <hr className='border-black bg-dark w-25' />
                <Image src={props.src} width='400' height='400' alt={props.alt} className='figure-img img-fluid rounded img-tool' />
            </figure>
        </div>
    )
}
