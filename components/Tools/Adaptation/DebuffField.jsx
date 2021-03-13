
export default function DebuffField(props) {
    return (
            <div className='w-75'>
                <label htmlFor="debuff"> {props.title}</label>
                <select id="debuff" className='form-control adaptation-field' onChange={props.debuff}>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="50">50%</option>
                    <option value="60">60%</option>
                    <option value="70">70%</option>
                    <option value="80">80%</option>
                </select>
            </div>
    )
}