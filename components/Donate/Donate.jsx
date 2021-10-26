import { useRouter } from 'next/router'

export default function Donate() {
    const router = useRouter()
    const donateToPaypal = () => router.push('https://www.paypal.com/donate?token=Al6JUAZxzynKAj0N91CndpATxH1NYJ1BTcCW0l8_FzkFQaDz8qzgYTqJnbLoD3KXgEC3vb4QHoeq98v5')

    return (
        <img
            className='pointer'
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            alt="Donate with PayPal button"
            onClick={donateToPaypal}
        />

    )
}