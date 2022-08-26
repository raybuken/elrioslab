
export default function DebuffField(props) {
    const values = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    return (
        <div className='w-75'>
            <label htmlFor="debuff"> {props.title}</label>
            <select id="debuff" className='form-control adaptation-field' onChange={props.debuff}>
                {values.map((value, i) =>
                    <option key={i} value={value}>{value}%</option>
                )}
            </select>
        </div>
    )
}