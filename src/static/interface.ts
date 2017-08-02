interface hair {
  color: string
  length: number
  feature: string
}
interface eye {
  size: number
  color: string
}
interface nose {

}
interface mouth {

}
interface tooth {

}
interface ear {

}
interface skin {

}
interface face {
  eye: eye
  nose: nose
  mouth: mouth
  tooth: tooth
  ear: ear
}
interface neck {

}
interface head {
  hair: hair
  face: face
  neck: neck
}
interface body {

}
interface leg {

}
interface foot {

}
interface physical {
  head: head
  body: body
  leg: leg
  foot: foot
}

interface mental {

}

interface social {

}

export interface state {
  physical: physical
  mental: mental
  social: social
}

export interface area {
  tick
}