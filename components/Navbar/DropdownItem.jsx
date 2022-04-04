
import Link from 'next/link'

export default function DropdownItem(props){
    const {href, name} = props

    return(
        <div className="dropdown-item">
            <Link className="dropdown-item" href={href}>{name}</Link>
        </div>
    )
}