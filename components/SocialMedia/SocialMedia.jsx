
import { faYoutube, faFacebook, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons'
import Donate from '../Donate/Donate'
import SocialIcon from './SocialIcon'
export default function SocialMedia() {
    const socialIcons = [
        {
            id: 'discord',
            src: 'https://discord.gg/j8Hg4VBN7J',
            name: 'Go to Raybuken Discord Server',
            icon: faDiscord,
            color: 'cornflowerblue',
        },
        {
            id: 'youtube',
            src: 'https://www.youtube.com/Raybuken',
            name: 'Go to Raybuken Youtube Channel',
            icon: faYoutube,
            color: 'red',
        },
        {
            id: 'facebook',
            src: 'https://www.facebook.com/RaybukenGamer',
            name: 'Go to Raybuken Facebook Page',
            icon: faFacebook,
            color: '#385898',
        },
    ]

    return (
        <div className='row justify-content-between align-items-center'>
            <div className="col">
                <Donate />
            </div>
            <div className="p-1 col col-auto">
                <ul className='nav'>
                    {
                        socialIcons.map(socialIcon => 
                            <SocialIcon 
                                key={socialIcon.id} 
                                name={socialIcon.name} 
                                src={socialIcon.src} 
                                icon={socialIcon.icon} 
                                color={socialIcon.color}/>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}