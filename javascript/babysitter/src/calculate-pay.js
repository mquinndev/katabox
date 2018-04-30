import { validateStartTime, validateEndtime, validateBedtime } from './validate-shifts'

const START_TIME_RATE = 12
const BEDTIME_RATE = 8
const MIDNIGHT_RATE = 16

const MIDNIGHT = 12

const calculateStartTime = (startTime, bedtime, endtime) => {
  validateStartTime(startTime)
  if (startTime > bedtime) {
    bedtime = startTime
  }
  return (bedtime - startTime) * START_TIME_RATE
}

const calculateBedtime = (startTime, bedtime, endtime) => {
  validateBedtime(bedtime)
  if ((MIDNIGHT - endtime) < 8) {
    return (endtime - bedtime) * BEDTIME_RATE
  }
  return (MIDNIGHT - bedtime) * BEDTIME_RATE
}

const calculateMidnight = (startTime, bedtime, endtime) => {
  if ((MIDNIGHT - endtime) < 8) {
    endtime = 0
  }
  validateEndtime(endtime)
  return (endtime - 0) * MIDNIGHT_RATE
}

const calculateTotalPay = (startTime, bedtime, endtime) => {
  return calculateStartTime(startTime, bedtime, endtime) +
         calculateBedtime(startTime, bedtime, endtime) +
         calculateMidnight(startTime, bedtime, endtime)
}

export { START_TIME_RATE, calculateStartTime, BEDTIME_RATE, calculateBedtime, MIDNIGHT_RATE, calculateMidnight, calculateTotalPay }
