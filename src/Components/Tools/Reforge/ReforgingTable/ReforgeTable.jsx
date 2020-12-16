import {stages} from '../reforgeStages'

export default function ReforgeTable () {
    return (
        <div>
            <table className='table table-striped table-bordered table-responsive'>
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
                        stages.map((stage,i) => (
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