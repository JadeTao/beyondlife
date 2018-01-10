import { IAge } from './../static/interface'

type st = string | number

export function calculAge(age: IAge) {
  let { second, minute, hour, day, month, year } = age
  if (second && second > 60) {
    minute += Math.floor(second / 60)
    second = second % 60
  }
  if (minute && minute > 60) {
    hour += Math.floor(minute / 60)
    minute = minute % 60
  }
  if (hour && hour > 24) {
    day += Math.floor(hour / 24)
    hour = day % 24
  }
  if (day && day > 30) {
    month += Math.floor(day / 30)
    day = day % 30
  }
  if (month && month > 12) {
    year += Math.floor(month / 12)
    month += month % 12
  }
  age.second = second
  age.minute = minute
  age.hour = hour
  age.day = day
  age.month = month
  age.year = year
}

function adjust(time: st) {
  return time < 10 ? '0' + time : time
}

export function formatTime(time: number): string {
  let ret: string
  if (time < 60) {
    ret = `[0天 00:00:${adjust(time)}]`
  } else if (time < 3600) {
    const minute: st = Math.floor(time / 60)
    const second: st = time % 60
    ret = `[0天 00:${adjust(minute)}:${adjust(second)}]`
  } else if (time < 86400) {
    const hour: st = Math.floor(time / 3600)
    const minute: st = Math.floor((time - 3600 * hour) / 60)
    const second: st = time % 60
    ret = `[0天 ${adjust(hour)}:${adjust(minute)}:${adjust(second)}]`
  }
  return ret
}
