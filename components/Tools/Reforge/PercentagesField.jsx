
import { useTranslations } from 'next-intl'

export default function PercentagesField (props) {
    const {percentages,setPercentage, percentage} = props    
    const t = useTranslations()

    return(
        <div>
            <label>{t('current-percentage')}</label>
            <select className='form-control form-select reforge-field' onChange={setPercentage} value={percentage}>
                {percentages.map((percentage,i) => (
                    <option key={i} value={percentage} >{percentage}%</option>
                ))}
            </select>
        </div>
    )
}