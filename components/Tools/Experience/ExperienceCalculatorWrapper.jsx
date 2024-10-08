import React, { useEffect, useState } from 'react'
import { getTotalReceivedEXP } from './experienceCalculator'
import { dungeons } from './data/dungeons'
import FinalExperienceResult from './FinalExperienceResult'
import MobExperienceContainer from './MobExperienceContainer'
import DungeonExperienceContainer from './AdditionalExperienceContainer.jsx'
import { english, spanish } from '../../../translations/translations'
import { useRouter } from 'next/router.js'

function ExperienceCalculatorWrapper() {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.experience : spanish.experience
    const [dungeon, setDungeon] = useState("")
    const [multipliers, setMultipliers] = useState({})
    const [totalReceivedEXP, setTotalReceivedEXP] = useState(0)

    const updateResults = () => {
        setTotalReceivedEXP(getTotalReceivedEXP(multipliers, dungeon))
    }

    useEffect(() => {
        updateResults()
    }, [multipliers, dungeon])

    const onChangeInput = (e) => {
        const {target} = e
        
        if(target.type === "checkbox") {
            setMultipliers(currState => ({
                ...currState,
                [target.id]: target.checked
            }))
        } else if (target.type === 'radio'){
            setMultipliers(currState => ({
                ...currState,
                [target.name]: target.value
            }))
        }
        else {
            setMultipliers(currState => ({
                ...currState,
                [target.id]: target.value
            }))
        }
    }

    const updateDungeon = (e) => {
        setDungeon(e.target.value);
    }

    return (
        <div className='row'>
            <div className='col-12'>
                <h1 className='text-center'>{t['experience-calculator']}</h1>
            </div>
            <div className='col-12'>
                <MobExperienceContainer
                    dungeons={dungeons}
                    onChangeInput={onChangeInput}
                    updateDungeon={updateDungeon}
                />
                <DungeonExperienceContainer onChangeInput={onChangeInput} />
                <FinalExperienceResult total={totalReceivedEXP}/>
            </div>
        </div>
    )
}

export default ExperienceCalculatorWrapper