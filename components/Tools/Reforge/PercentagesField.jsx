
import { useRouter } from 'next/router'
import {english,spanish} from '../../../translations/translations'

export default function PercentagesField (props) {
    const {percentages,setPercentage, percentage} = props
    const {locale} = useRouter()
    const t = locale === 'en' ? english.reforge : spanish.reforge
    return(
        <div>
            <label>{t['current-percentage']}</label>
            <select className='form-control reforge-field' onChange={setPercentage} value={percentage}>
                {percentages.map((percentage,i) => (
                    <option key={i} value={percentage} >{percentage}%</option>
                ))}
            </select>
        </div>
    )
}