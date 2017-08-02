import { area } from './../static/interface'
import jade from './../creature/jade'

export default class continent implements area {
  private jades: Array<jade>

  constructor(jades: Array<jade>) {
    this.jades = jades
  }

  static born(jades: Array<jade>) {
    return new continent(jades)
  }

  public tick(current, grain) {
    this.jades.forEach(v => v.tick(current, grain))
  }
  public add(jade: jade) {
    this.jades.push(jade)
  }
}