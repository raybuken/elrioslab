import React from 'react'
import { EXP_MEDALS } from './data/expMedals'
import { FIELD_BUFFS } from './data/fieldBuffs'
import { RANDOM_MISSIONS } from './data/randomMission'
import { SERVER_BUFFS } from './data/serverBuffs'
import { useTranslations } from 'next-intl'

function DungeonExperienceContainer({ onChangeInput }) {
    const t = useTranslations()

    return (
        <div className='dungeon-multipliers'>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-md-4 pb-2">
                            <div className="form-check">
                                <label className='form-check-label' htmlFor="guildContract">{t('guild-contract')}</label>
                                <input className='form-check-input' type="checkbox" name="guildContract" id="guildContract" onChange={onChangeInput} />
                            </div>
                            <div className="form-check">
                                <label className='form-check-label' htmlFor="mvp">{t('mvp')}</label>
                                <input className='form-check-input' type="checkbox" name="mvp" id="mvp" onChange={onChangeInput} />
                            </div>
                            <div className="form-check">
                                <label className='form-check-label' htmlFor="guildBanner">{t('guild-banner')}</label>
                                <input className='form-check-input' type="checkbox" name="guildBanner" id="guildBanner" onChange={onChangeInput} />
                            </div>
                        </div>
                        <div className="form-group col-12 col-md-4">
                            <legend className='col-form-label p-0 fw-bold'>{t('exp-medal')}</legend>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" name="expMedal" id="expMedal_none" value={''} defaultChecked onChange={onChangeInput} />
                                <label htmlFor="expMedal_none">{t('none')}</label>
                            </div>

                            {EXP_MEDALS.map((medal, i) => (
                                <div key={i} className='form-check form-check-inline'>
                                    <input className='form-check-input' type="radio" name="expMedal" id={`expMedal_${medal}`} value={medal} onChange={onChangeInput} />
                                    <label htmlFor={`expMedal_${medal}`}>{medal}%</label>
                                </div>
                            ))}

                        </div>
                        <div className="form-group col-12 col-md-4">
                            <legend className='col-form-label p-0 fw-bold'>{t('field-buff')}</legend>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" name="fieldBuff" id="fieldBuff_none" value={''} defaultChecked onChange={onChangeInput} />
                                <label htmlFor="fieldBuff_none">{t('none')}</label>
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
                    </div>
                </div>

                <div className="form-group col-12 col-md-4">
                    <label className='form-check-label fw-bold' htmlFor="serverBuff">{t('server-buff')}</label>
                    <select className='form-select form-control' name="serverBuff" id="serverBuff" onChange={onChangeInput}>
                        <option value="">{t('none')}</option>
                        {
                            SERVER_BUFFS.map(buff => (
                                <option key={buff.value} value={buff.value}>{buff.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group col-12 col-md-4">
                    <label className='fw-bold' htmlFor="randomMission">{t('random-mission')}</label>
                    <select className='form-select form-control' name="randomMission" id="randomMission" onChange={onChangeInput}>
                        <option value="">{t('none')}</option>
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