
export default function AdaptationField(props) {
    return (
        <div>
            <label htmlFor="adaptation">{props.title} (max. 55%)</label>
            <input type="number" className='form-control adaptation-field border-black w-75' placeholder='0' min='0' max='55' value={props.value === 0 ? '' : props.value} onChange={props.adaptation} />
        </div>
    )
}