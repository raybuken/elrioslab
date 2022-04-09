
import Link from 'next/link'

const DropdownItem = props => (
    <Link href={props.href}>
        <a className="dropdown-item">{props.name}</a>
    </Link>
    )

export default DropdownItem
