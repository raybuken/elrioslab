

import Image from 'next/image'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'
export default function ReforgeCounts(props) {
    const {result} = props
    const {locale} = useRouter()
    const t = locale === 'en' ? english.reforge : spanish.reforge

    return (
        <div className='my-4'>
            <div className='row'>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/tools/reforge/ED.jpg'} alt='ED' width='50' height='50'/>
                    <label className='display-6 ml-3'> {result.ed || 0} ED</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/tools/reforge/glaciem.png'} alt='glaciem' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.glaciems || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/tools/reforge/amethyst.png'} alt='amethyst' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.amethyst || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/tools/reforge/magical_crystal.png'} alt='Magical Crystal' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.crystals || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/tools/reforge/seed.png'} alt='seed' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.seeds || 0}</label>
                </div>
            </div>
            <div className="row">
                <div className="col align-self-end">
                    <p className='text-right'>{t.attempts}: {result.attempts || 0}</p>
                </div>
            </div>
        </div>
    )
}