
import {useTranslation} from 'react-i18next'
import './styles.css'

export default function PercentagesField (props) {
    const {percentages,setPercentage, percentage} = props
    const [t] = useTranslation('reforge')
    return(
        <div>
            <label>{t('current-percentage')}</label>
            <select className='form-control reforge-field' onChange={setPercentage} value={percentage}>
                {percentages.map((percentage,i) => (
                    <option key={i} value={percentage} >{percentage}%</option>
                ))}
            </select>
        </div>
    )
}