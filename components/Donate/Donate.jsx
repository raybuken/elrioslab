
export default function Donate() {  

    return (
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="hosted_button_id" value="FGFDDWP2RL4PS" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_DO/i/scr/pixel.gif" width="1" height="1" />
        </form>
    )
}