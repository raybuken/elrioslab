import React from 'react'
import Tool from './Tool'
import { useTranslations } from 'next-intl'

export default function Section() {
    const t = useTranslations();

    return (
        <div className="row justify-content-center text-center">
            <Tool link='/tools/stats' name='Stats' src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513205/files/stats_flpgzu.jpg'} alt='Stats'/>
            <Tool link='/tools/adaptation' name='Adaptation' src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513204/files/adap_iokcvp.png'} alt='Adaptation'/>
            <Tool link='/tools/reforge' name='Reforge' src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513205/files/reforge_gba2fa.png'} alt='Reforge'/>
            <Tool link='/tools/ignore-defense' name='Ignore Defense' src={'https://res.cloudinary.com/elrioslab/image/upload/v1616513205/files/ignore_y0cssw.png'} alt='Ignore Defense'/>
            <Tool link='/tools/el-search-party-collection' name='Collection and synergy' src={'https://res.cloudinary.com/elrioslab/image/upload/v1649022227/files/el-search-party-collection.png'} alt='El search party collection'/>
            <Tool link='/tools/experience' name='Experience' src={'https://res.cloudinary.com/elrioslab/image/upload/v1728355880/files/experience-banner_qgqocz.png'} alt="Experience" />
            <Tool link='/tools/exascale' name='Exascale' src={''} alt="Exascale" />
        </div>
    )
}