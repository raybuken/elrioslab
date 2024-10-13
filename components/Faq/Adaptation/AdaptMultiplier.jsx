import { useTranslations } from 'next-intl'
import {getMultiplier} from './MultiplierData'

export default function AdaptMultiplier() {
    const t = useTranslations("adaptation")

    return(
        <table className='table table-bordered table-striped responsive-table'>
            <thead className='thead-dark'>
                <tr className='text-center'>
                    <th>{t('q2.debuff')}</th>
                    <th>{t('q2.multiplier')}</th>
                </tr>
            </thead>
            <tbody className='text-center'> 
                {
                    getMultiplier.map((data,i) => (
                        <tr  key={i}>
                            <td>{data.debuff}</td>
                            <td>{data.multiplier}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}