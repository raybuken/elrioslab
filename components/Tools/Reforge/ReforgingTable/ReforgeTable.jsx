import { ARMOR, REFORGE_STAGES, SERVERS } from '../../../../constants/constants'

export default function ReforgeTable (props) {
    return (
        <div className='table-responsive'>
            <table className='table table-striped table-bordered table-sm'>
                <thead className='thead-dark'>
                    <tr className='text-center'>
                        <th>Stage (to reach)</th>
                        <th>Glaciems</th>
                        <th>Amethysts</th>
                        <th>Magic Crystals</th>
                        <th>ED</th>
                        <th>Effect</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        REFORGE_STAGES[ARMOR.RIGOMOR][SERVERS.KR].map((stage,i) => (
                            <tr key={i}>
                                <td>Stage {stage.stage}</td>
                                <td>{stage.glaciem.toLocaleString()}</td>
                                <td>{stage.amethyst}</td>
                                <td>{stage.crystal.toLocaleString()}</td>
                                <td>{stage.ed.toLocaleString()}</td>
                                <td>{stage.effect}</td>
                                <td>{stage.percentage}%</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}