import jade from './../creature/jade'
import { Area } from './../static/interface'

export default class Continent implements Area {
  public static born(world: Area) {
    return new Continent(world)
  }
  public world: Area
  public name: string = 'init_land'
  public birthTime: number

  private jades: jade[]

  constructor(world: Area) {
    this.world = world
    this.jades = [jade.born(this, 'robot')]
  }

  public tick(grain?) {
    this.jades.forEach((v) => v.tick(grain))
  }
  public add(jade: jade) {
    this.jades.push(jade)
  }
}
