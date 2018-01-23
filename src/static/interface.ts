export interface IPayload {
  when: number | string
  where: string
  who: string
  how: string
  what: string
  extra?: string
}

export interface IArea {
  state: any
}

export interface IAge {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}
