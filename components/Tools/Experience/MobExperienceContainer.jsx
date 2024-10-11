import { english, spanish } from '../../../translations/translations'
import { useRouter } from 'next/router'

function MobExperienceContainer({dungeons, updateDungeon, onChangeInput}) {
    const { locale } = useRouter()
    const t = locale === 'en' ? english.experience : spanish.experience

    return (
        <div className='mob-multipliers mb-3'>
            <div className="row">
                <div className="form-group col-12 col-md-4">
                    <label htmlFor="dungeon">{t.dungeon}</label>
                    <select className='form-select form-control' name="dungeon" id="dungeon" onChange={updateDungeon}>
                        <option value="">{t['select-dungeon']}</option>
                        {dungeons.map(dungeon => (
                            <option key={dungeon.name} value={dungeon.name}>{dungeon.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-12 col-md-4">
                    <label htmlFor="expStat">{t['base-experience']}</label>
                    <input className='form-control' type="number" id='expStat' name="expStat" min={0} defaultValue={0} onChange={onChangeInput} />
                </div>
                <div className="form-group col-12 col-md-4 align-self-end">
                    <div className="form-check">
                        <label className='form-check-label' htmlFor="guildSkill">{t['guild-skill']}</label>
                        <input className='form-check-input' type="checkbox" name="guildSkill" id="guildSkill" onChange={onChangeInput} />
                    </div>
                    <div className="form-check">
                        <label className='form-check-label' htmlFor="guildFountain">{t['guild-fountain']}</label>
                        <input className='form-check-input' type="checkbox" name="guildFountain" id="guildFountain" onChange={onChangeInput} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobExperienceContainer