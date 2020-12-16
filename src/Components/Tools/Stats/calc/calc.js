import {calcActualStat} from './getActualStat'
import {calcTotalStat} from './getTotalStat'
import {calcEfficiency} from './getEfficiency'
import {calcMultiplicativeStat} from './getMultiplicativeStat'

const getActualStat = (name,total) => calcActualStat(name,total) //Calc Actual Stat

const getTotalStat = (name,actual) => calcTotalStat(name,actual) //Calc Total Stat

const getEfficiency = (name,actual) => calcEfficiency(name,actual) //get Efficiency

const getMultiplicativeStat = (name,actual,mStat) => calcMultiplicativeStat(name,actual,mStat) //get multiplicative stat

export {getTotalStat,getActualStat,getEfficiency,getMultiplicativeStat}