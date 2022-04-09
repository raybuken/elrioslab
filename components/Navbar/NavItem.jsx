import Link from 'next/link'

export default function NavItem(props){
    const {href, name} = props

    return(
        <li className="nav-item">
            <Link href={href}><span className='nav-link pointer'>{name}</span></Link>
        </li>
    )
}