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
export interface IAbility {
  placeholder?: any
}
export interface IJade {
  name: string
  hero: boolean
  ability: IAbility[]
}
export interface IContinent {
  name: string
  jade: IJade[]
}

export interface IWorld {
  name: string
  continent: IContinent[]
}

export interface IScript {
  world: IWorld[]
}
