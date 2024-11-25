import { collection as collectionData } from "./data/collection"
import { synergy } from './data/synergy'
import SynergyPool from "./SynergyPool"
import CollectionList from "./CollectionList"
import SocialMedia from "../../SocialMedia/SocialMedia"
import SynergyEffectList from "./SynergyEffectList"
import { useContext, useState } from "react"
import Alert from 'react-bootstrap/Alert'
import AlertContext from "../../Context/AlertContext"

export default function ElSearchPartyCollection() {
    const [collection, setCollection] = useState(collectionData)
    const [filterEffectSelected, setFilterEffectSelected] =  useState(null)
    const {alert} = useContext(AlertContext)

    const filterByEffect = (effectName) => {
        const filteredCollection = collectionData.filter(character => !!character.synergies.find(syn => syn === effectName))
        setCollection(filteredCollection)
        if(filteredCollection){
            setFilterEffectSelected(effectName)
        }
    }

    const removeCollectionFilters = () => {
        setCollection(collectionData)
        setFilterEffectSelected(null)
    }

    return(
        <div className="espc-container">
            {
                alert.show &&
                    <div className="espc-alert">
                        <Alert variant={'success'}>
                            {alert.value}
                        </Alert>
                    </div>
            }
            
            <div className="jumbotron">
                <SocialMedia/>
                
                <div className="row">
                    <div className="col-12">
                        <h1 className="espc-main-title">El Search Party Collection - Synergy</h1>
                    </div>
                    <div className="col-12 col-lg-9">
                        
                        <SynergyPool synergyList={synergy} collection={collection}/>

                        <CollectionList collection={collection} collectionData={collectionData} removeFilters={removeCollectionFilters} filterEffectSelected={filterEffectSelected}/>
                    </div>
                    <div className="offset-6 col-6 offset-lg-0 col-lg-3">
                        <SynergyEffectList filterByEffect={filterByEffect} removeFilters={removeCollectionFilters} filterEffectSelected={filterEffectSelected} />
                    </div>
                </div>
            </div> 
        </div>
    )
}