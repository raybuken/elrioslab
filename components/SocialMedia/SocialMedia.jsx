
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Donate from '../Donate/Donate'
export default function SocialMedia() {
    return (
        <div className='row justify-content-sm-between'>
            <div className="col-lg-3 col-md-6 col-sm-3 p-1">
                <Donate />
            </div>
            <div className="col-lg-3 offset-lg-6 col-md-3 offset-md-3 col-sm-3 offset-sm-0 p-1">
                <ul className='nav'>
                    {/*<li className='nav-item mr-2'>
                        <a href="https://discord.gg/KKARD4JNB2" target='_blank' rel="noreferrer" className="nav-link p-0"><FontAwesomeIcon icon={faDiscord} size='2x' color='cornflowerblue'/></a> 
                    </li>*/}
                    <li className='nav-item mr-2'>
                        <a href="https://www.youtube.com/Raybuken" target='_blank' rel="noreferrer" className="nav-link p-0"><FontAwesomeIcon icon={faYoutube} size='2x' color='red' /></a>
                    </li>
                    <li className="nav-item mr-2">
                        <a href="https://www.facebook.com/Raybuken" target='_blank' rel="noreferrer" className="nav-link p-0"><FontAwesomeIcon icon={faFacebook} size='2x' color='#385898' /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}