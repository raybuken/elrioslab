import React, { useContext } from 'react'
import CharacterSlot from './CharacterSlot'
import ESPCContext from '../../Context/ESPCContext'
import Image from 'next/image'

const CollectionList = ({ collection, collectionData, removeFilters, filterEffectSelected }) => {
  const { dispatch } = useContext(ESPCContext)  

  return (
    <div className="collection-grid">
      <div className="d-flex">
        <div className="col-10">
          <h2 className='collection-title'>Collection Character List</h2>
        </div>
        {
            collection.length !== collectionData.length && 
              <div className='collection-filter me-2' onClick={() => removeFilters()}>
                <Image className='collection-filter-icon' src={encodeURI("v1673159305/files/tools/synergy/Effect/" + filterEffectSelected)} width={24} height={24} title={filterEffectSelected} alt={filterEffectSelected} />
                <span className='collection-remove-button pointer'>X</span>
              </div>
        }
      </div>
      
      <div className="row p-2">
          {
              collection.map(character => (
                  <div className='col-4 col-sm-3 col-md-2 col-lg-1' key={character.alias} onClick={() => dispatch({type: "click-collection", character: character})}>
                      <CharacterSlot character={character}/>
                  </div>
              ))
          }
      </div>
    </div>
  )
}

export default CollectionList