
export default function HyperAdaptationField(props) {
    return (
        <div>
            <label htmlFor="hyperAdaptation">{props.title}</label>
            <input type="number" className='form-control adaptation-field border-black w-75' placeholder='0' min='0' value={props.value === 0 ? '' : props.value} onChange={props.hyperAdaptation} />
        </div>
    )
}