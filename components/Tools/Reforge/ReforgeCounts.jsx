

import Image from 'next/image'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'
import { REFORGE_MATERIAL_ASSETS } from '../../../constants/constants'
export default function ReforgeCounts(props) {
    const {result, armor} = props
    const {locale} = useRouter()
    const t = locale === 'en' ? english.reforge : spanish.reforge
    const reforgeMaterialAsset = REFORGE_MATERIAL_ASSETS[armor]

    return (
        <div className='my-4 reforge-count'>
            <div className='row'>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513276/files/tools/reforge/ED_h6saxx.jpg'} alt='ED' width='50' height='50'/>
                    <label className='reforge-material ms-3'> x{result.ed || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={reforgeMaterialAsset.glaciem.src} alt={reforgeMaterialAsset.glaciem.alt} width='50' height='50'/>
                    <label className='reforge-material ms-3'> x{result.glaciems || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={reforgeMaterialAsset.amethyst.src} alt={reforgeMaterialAsset.amethyst.alt} width='50' height='50'/>
                    <label className='reforge-material ms-3'> x{result.amethyst || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513276/files/tools/reforge/magical_crystal_vyzlmt.png'} alt='Magical Crystal' width='50' height='50'/>
                    <label className='reforge-material ms-3'> x{result.crystals || 0}</label>
                </div>
                <div className="col-lg-4 col-md-6 my-1">
                    <Image src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513276/files/tools/reforge/seed_xor1kb.png'} alt='seed' width='50' height='50'/>
                    <label className='reforge-material ms-3'> x{result.seeds || 0}</label>
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