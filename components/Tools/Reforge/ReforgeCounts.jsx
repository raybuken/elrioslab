

import Image from 'next/image'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'
export default function ReforgeCounts(props) {
    const {result, armor} = props
    const {locale} = useRouter()
    const t = locale === 'en' ? english.reforge : spanish.reforge

    return (
        <div className='my-4'>
            <div className='row'>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/v1616513276/files/tools/reforge/ED_h6saxx.jpg'} alt='ED' width='50' height='50'/>
                    <label className='display-6 ml-3'> {result.ed || 0} ED</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={armor === 'Tenebrous' ? '/v1640647371/files/tools/reforge/tasma_aura_jshmp8.png' : '/v1616513276/files/tools/reforge/glaciem_pg2u2l.png'} alt='glaciem' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.glaciems || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={armor === 'Tenebrous' ? '/v1640647371/files/tools/reforge/tenebrous_aura_wi9fap.png' : '/v1616513276/files/tools/reforge/amethyst_aced3h.png'} alt='amethyst' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.amethyst || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/v1616513276/files/tools/reforge/magical_crystal_vyzlmt.png'} alt='Magical Crystal' width='50' height='50'/>
                    <label className='display-6 ml-3'> x{result.crystals || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'/v1616513276/files/tools/reforge/seed_xor1kb.png'} alt='seed' width='50' height='50'/>
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