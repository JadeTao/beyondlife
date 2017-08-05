interface Hair {
  color: string
  length: number
  feature: string
}
interface Eye {
  size: number
  color: string
}
interface Nose {

}
interface Mouth {

}
interface Tooth {

}
interface Ear {

}
interface Skin {

}
interface Face {
  eye: Eye
  nose: Nose
  mouth: Mouth
  tooth: Tooth
  ear: Ear
}
interface Neck {

}
interface Head {
  hair: Hair
  face: Face
  neck: Neck
}
interface Body {

}
interface Leg {

}
interface Foot {

}
interface Physical {
  head: Head
  body: Body
  leg: Leg
  foot: Foot
}

interface Mental {

}

interface Social {

}

export interface Payload {
  when: number | string
  where: string
  who: string
  how: string
  what: string
  extra?: string
}

export interface State {
  physical: Physical
  mental: Mental
  social: Social
}

export interface Area {
  birthTime: number
  name: string
  tick(grain?: any)
}

export interface Age {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}
