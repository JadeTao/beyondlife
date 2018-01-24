import jade from './../creature/jade'
import { IArea } from './../static/interface'

export default class Continent implements IArea {

  public world: IArea
  public state: {
    name: 'init-land',
    birthTime: 0,
  }
  private jades: jade[]

  constructor(world: IArea) {
    this.world = world
    this.jades = [jade.born(this, 'robot')]
  }

  public add(aJade: jade) {
    this.jades.push(aJade)
  }
}
