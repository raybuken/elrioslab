import React from 'react'
import { EXP_MEDALS } from './data/expMedals'
import { FIELD_BUFFS } from './data/fieldBuffs'
import { RANDOM_MISSIONS } from './data/randomMission'
import { english, spanish } from '../../../translations/translations'
import { useRouter } from 'next/router'

function DungeonExperienceContainer({onChangeInput}) {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.experience : spanish.experience

    return (
        <div className='dungeon-multipliers'>
            <h2>{t['additional-options']}</h2>
            <div className="row">
                <div className="col-12 pb-2">
                    <div className="form-check">
                        <label className='form-check-label' htmlFor="guildContract">{t['guild-contract']}</label>
                        <input className='form-check-input' type="checkbox" name="guildContract" id="guildContract" onChange={onChangeInput} />
                    </div>
                    <div className="form-check">
                        <label className='form-check-label' htmlFor="expEvent">{t['server-buff']}</label>
                        <input className='form-check-input' type="checkbox" name="expEvent" id="expEvent" onChange={onChangeInput} />
                    </div>
                    <div className="form-check">
                        <label className='form-check-label' htmlFor="mvp">MVP (+10% exp)</label>
                        <input className='form-check-input' type="checkbox" name="mvp" id="mvp" onChange={onChangeInput} />
                    </div>
                    <div className="form-check">
                        <label className='form-check-label' htmlFor="guildSkill">{t['guild-banner']}</label>
                        <input className='form-check-input' type="checkbox" name="guildBanner" id="guildBanner" onChange={onChangeInput} />
                    </div>
                </div>
                <div className="form-group col-12 col-md-4">
                    <legend className='col-form-label p-0 fw-bold'>{t['exp-medal']}</legend>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type="radio" name="expMedal" id="expMedal_none" value={''} defaultChecked onChange={onChangeInput} />
                        <label htmlFor="expMedal_none">{t.none}</label>
                    </div>

                    {
                        EXP_MEDALS.map((medal, i) => (
                            <div key={i} className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" name="expMedal" id={`expMedal_${medal}`} value={medal} onChange={onChangeInput} />
                                <label htmlFor={`expMedal_${medal}`}>{medal}%</label>
                            </div>
                        ))
                    }

                </div>
                <div className="form-group col-12 col-md-4">
                    <legend className='col-form-label p-0 fw-bold'>{t['field-buff']}</legend>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type="radio" name="fieldBuff" id="fieldBuff_none" value={''} defaultChecked onChange={onChangeInput} />
                        <label htmlFor="fieldBuff_none">{t.none}</label>
                    </div>

                    {
                        FIELD_BUFFS.map((buff, i) => (
                            <div key={i} className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" name="fieldBuff" id={`fieldBuff_${buff}`} value={buff} onChange={onChangeInput} />
                                <label htmlFor={`fieldBuff_${buff}`}>{buff}%</label>
                            </div>
                        ))
                    }
                </div>
                <div className="form-group col-12 col-md-4">
                    <label className='fw-bold' htmlFor="randomMission">{t['random-mission']}</label>
                    <select className='form-select form-control' name="randomMission" id="randomMission" onChange={onChangeInput}>
                        <option value="">{t.none}</option>
                        {RANDOM_MISSIONS.map(randomMission => (
                            <option key={randomMission} value={randomMission}>{randomMission}%</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default DungeonExperienceContainer