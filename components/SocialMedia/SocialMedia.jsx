
import { faYoutube, faFacebook, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons'
import Donate from '../Donate/Donate'
import SocialIcon from './SocialIcon'
export default function SocialMedia() {
    return (
        <div className='row justify-content-between mb-3'>
            <div className="col">
                <Donate />
            </div>
            <div className="p-1 col col-auto">
                <ul className='nav'>
                    <SocialIcon src='https://discord.gg/j8Hg4VBN7J' icon={faDiscord} color='cornflowerblue'/>
                    <SocialIcon src='https://www.youtube.com/Raybuken' icon={faYoutube} color='red'/>
                    <SocialIcon src='https://www.twitch.tv/Raybuken' icon={faTwitch} color='#a970ff'/>
                    <SocialIcon src='https://www.facebook.com/Raybuken' icon={faFacebook} color='#385898'/>
                </ul>
            </div>
        </div>
    )
}