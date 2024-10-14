
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcon = ({ src, icon, color }) => (
    <li className='nav-item pe-2 m-0'>
        <a href={src} target='_blank' rel="noreferrer" className="nav-link p-0">
            <FontAwesomeIcon icon={icon} size='2x' color={color} />
        </a>
    </li>
)

export default SocialIcon