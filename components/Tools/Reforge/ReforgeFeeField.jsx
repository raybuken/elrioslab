import { useRouter } from 'next/router'
import { spanish, english } from '../../../translations/translations'
import React from 'react'

function ReforgeFeeField({updateFeeAmount}) {
    const {locale} = useRouter()
    const t = locale === 'en' ? english.reforge : spanish.reforge
    const discounts = [0,1,2,3,4,5,6,7,8,9,10]
    return (
        
        <div className="col-12 col-md-6 col-lg-3 mt-2">
            <label>{t.fee}</label>
            <select className="reforge-field form-select form-control" onChange={updateFeeAmount}>
                {discounts.map(el => (
                    <option key={el} value={el}>
                        {el}%
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ReforgeFeeField