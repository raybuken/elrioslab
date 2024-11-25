import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Tool(props) {
    const router = useRouter()

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <h2 className='text-center fs-5 pointer'>{props.name}</h2>
            <hr className='mx-auto border-black bg-dark w-25' />
            <figure className="figure img-tool" onClick={() => router.push(props.link)}>
                <Image 
                    src={props.src} 
                    fill
                    sizes='400px'
                    alt={props.alt} 
                    className='rounded img-cover img-auto' 
                    priority={true} />
            </figure>
        </div>
    )
}
