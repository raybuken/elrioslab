
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {english,spanish} from '../../../../translations/translations'

export default function Head() {
    const {locale} = useRouter()
    const t = locale === 'en' ? english['stat-calculator'] : spanish['stat-calculator']

    return (
        <thead className='font-family-sans-serif'>
            <tr className='text-center table-success'>
                <th className='p-1'><Image src={'/tools/stats/magic_stone.png'} alt={'Magic Stone'} width='60' height='60'/></th>
                <th>Stat</th>
                <th>{t.efficiency}</th>
                <th>Total % <FontAwesomeIcon id='totalStat' data-toggle="tooltip" data-placement="top" data-original-title={t['tooltip-total']} className=' text-info mb-3' icon={faQuestionCircle} size='2x'/></th>
                <th>Actual % <FontAwesomeIcon id='actualStat' data-toggle="tooltip" data-placement="top" data-original-title={t['tooltip-actual']} className=' text-info mb-3' icon={faQuestionCircle} size='2x'/></th>
                <th>{t.mstat}<FontAwesomeIcon id='mstat' data-toggle="tooltip" data-placement="top" data-original-title={t['tooltip-mstat']} className=' text-info mb-3' icon={faQuestionCircle} size='2x'/></th>
            </tr>
        </thead>
    )
}