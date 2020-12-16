import {getMultiplier} from './MultiplierData'

export default function AdaptMultiplier(props) {
    const {translate} = props
    return(
        <table className='table table-bordered table-striped responsive-table'>
            <thead className='thead-dark'>
                <tr className='text-center'>
                    <th>{translate('adaptation.q2.debuff')}</th>
                    <th>{translate('adaptation.q2.multiplier')}</th>
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