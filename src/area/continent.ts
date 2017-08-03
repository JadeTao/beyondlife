import jade from "./../creature/jade"
import { area } from "./../static/interface"

export default class Continent implements area {
  public static born(jades: jade[]) {
    return new Continent(jades)
  }
  private jades: jade[]

  constructor(jades: jade[]) {
    this.jades = jades
  }

  public tick(current, grain) {
    this.jades.forEach((v) => v.tick(current, grain))
  }
  public add(jade: jade) {
    this.jades.push(jade)
  }
}
