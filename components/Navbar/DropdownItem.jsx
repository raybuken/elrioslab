
import Link from 'next/link'

const DropdownItem = props => (
    <Link href={props.href} className="dropdown-item">
        {props.name}
    </Link>
    )

export default DropdownItem
