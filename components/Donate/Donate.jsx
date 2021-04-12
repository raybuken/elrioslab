import { useRouter } from 'next/router'

export default function Donate() {
    const router = useRouter()
    const donateToPaypal = () => router.push('https://www.paypal.com/donate?token=bfPi93cnn1W0t26_ZT4Dy2CQViWJSQF9FC75BTdKY4wDyHX7XJ0HTiyXi3_f80c_qdleAyC8utxH6Kai')

    return (
        <img
            className='pointer'
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            alt="Donate with PayPal button"
            onClick={donateToPaypal}
        />

    )
}