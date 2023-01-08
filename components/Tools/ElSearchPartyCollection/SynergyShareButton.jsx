
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from "@fortawesome/free-solid-svg-icons"
import { Button } from 'react-bootstrap'
import AlertContext from '../../Context/AlertContext'

function SynergyShareButton({url}) {
    const  { showAlert } = useContext(AlertContext)

    const shareSynergy = () => {
        navigator.clipboard.writeText(url)
        
        showAlert("The link has been copied to the clipboard!")
    }



  return (
    <div className='synergy-share-button'>
        <Button variant='success' onClick={shareSynergy}>Copy Synergy to clipboard <FontAwesomeIcon icon={faShare} size="1x" color='white' /></Button>
    </div>
  )
}

export default SynergyShareButton