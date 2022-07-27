import dayjs from 'dayjs'

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs)
  const nowDayjs = dayjs()

  if (timestampDayjs.isBefore(nowDayjs))
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00"
    }

  return {
    seconds: getRemainingSecs(nowDayjs, timestampDayjs),
    minutes: getRemainingMins(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs)
  }
}

function getRemainingSecs(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
  return padWithZeros(seconds, 2)
}

function getRemainingMins(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
  return padWithZeros(minutes, 2)
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
  return padWithZeros(hours, 2)
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'days')
  return padWithZeros(days, 2)
}

function padWithZeros(number, minLength) {
  const numberStr = number.toString()
  if (numberStr.length >= minLength) return numberStr

  return "0".repeat(minLength - numberStr.length) + numberStr
}