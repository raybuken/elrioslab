import { useContext } from "react";
import ESPCContext from "../../Context/ESPCContext";
import CharacterSlot from "./CharacterSlot";
import SynergyShareButton from "./SynergyShareButton"

export default function SynergyPool(){
    const {classesSelected, dispatch, shareURL} = useContext(ESPCContext)

    return (
        <div className="synergy-grid">
            <div className="row p-1 mb-3">
                {
                    classesSelected.map((character, index) => (
                        character ? 
                        (
                            <div className='col-4 col-md-2 synergy-slot-container' key={character.alias} onClick={() => dispatch({type: "remove-class-synergy", character})}>
                                <CharacterSlot character={character} />
                            </div> 
                        ) :
                        (
                            <div className="col-4 col-md-2 synergy-slot-container" key={index}>
                                <div className="synergy-empty-slot">
                                    <span>Place a character.</span>
                                </div>
                            </div>
                        )
                    ))
                }
            </div>
            <SynergyShareButton url={shareURL}/>
        </div>
    )
}