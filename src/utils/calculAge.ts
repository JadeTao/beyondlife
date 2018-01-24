import { IAge } from './../static/interface'

export default function calculAge(age: IAge): IAge {
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
  return age
}
