import { dungeons } from './data/dungeons';
import { EXP_MEDALS } from './data/expMedals';
import { FIELD_BUFFS } from './data/fieldBuffs';
import { RANDOM_MISSIONS } from './data/randomMission';
import { SERVER_BUFFS } from './data/serverBuffs';

const MULTIPLIER_VALUES = {
    GUILD_SKILL: 15,
    GUILD_BANNER: 10,
    GUILD_CONTRACT: 50,
    EXP_EVENT: 100,
    EXP_MEDALS: EXP_MEDALS,
    CLEAR_DUNGEON_BONUS: 30,
    MVP_BONUS: 10,
    FIELD_BUFFS: FIELD_BUFFS,
    RANDOM_MISSIONS: RANDOM_MISSIONS,
    SERVER_BUFFS: SERVER_BUFFS,
    GUILD_FOUNTAIN: 10,
}

export const getMobMultiplier = (multipliers) => {
    const expStat = Number(multipliers.expStat) || 0
    const guildSkill = multipliers.guildSkill ? MULTIPLIER_VALUES.GUILD_SKILL : 0
    const guildBanner = multipliers.guildBanner ? MULTIPLIER_VALUES.GUILD_BANNER : 0
    const guildContract = multipliers.guildContract ? MULTIPLIER_VALUES.GUILD_CONTRACT : 0
    const guildFountain = multipliers.guildFountain ? MULTIPLIER_VALUES.GUILD_FOUNTAIN : 0

    return 1 + (expStat + guildSkill + guildBanner + guildContract + guildFountain) / 100
}

const getServerBuff = (serverBuff) => {
    return MULTIPLIER_VALUES.SERVER_BUFFS.some(buff => buff.value === Number(serverBuff)) ? Number(serverBuff) : 0
}

export const getDungeonMultiplier = (multipliers) => {
    const guildContract = multipliers.guildContract ? MULTIPLIER_VALUES.GUILD_CONTRACT : 0
    const serverBuff = getServerBuff(multipliers.serverBuff)
    const expMedal = MULTIPLIER_VALUES.EXP_MEDALS.includes(Number(multipliers.expMedal)) ? Number(multipliers.expMedal) : 0
    const mvp = multipliers.mvp ? MULTIPLIER_VALUES.MVP_BONUS : 0
    const fieldBuffs = MULTIPLIER_VALUES.FIELD_BUFFS.includes(Number(multipliers.fieldBuff)) ? Number(multipliers.fieldBuff) : 0
    
    return 1 + (MULTIPLIER_VALUES.CLEAR_DUNGEON_BONUS + mvp + expMedal + guildContract + serverBuff + fieldBuffs) / 100
}

export const getRandomMissionMultiplier = (multipliers) => {
    const randomMission = MULTIPLIER_VALUES.RANDOM_MISSIONS.includes(Number(multipliers.randomMission)) ? Number(multipliers.randomMission) / 100 : 1

    return randomMission
}

export const getTotalReceivedEXP = (multipliers, dungeonField) => {
    const mobMultiplier = getMobMultiplier(multipliers)
    const dungeonMultiplier = getDungeonMultiplier(multipliers)
    const randomMission = getRandomMissionMultiplier(multipliers)
    const dungeon = dungeons.find(dungeon => dungeon.name === dungeonField)

    if(!dungeon) return 0

    return (dungeon.baseExp * mobMultiplier * dungeonMultiplier * randomMission).toLocaleString('US')
}