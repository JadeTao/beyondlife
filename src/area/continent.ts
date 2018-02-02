import Role from '../core/role'
import Jade from '../creature/jade'
import { IArea } from '../static/interface'

export default class Continent extends Role {

  public world: IArea

  constructor(pulse, script: any, world: IArea) {
    super(pulse, script, world)
    this.world = world
    this.children = [Jade.born(this, 'robot')]
  }

  public add(jade: Jade) {
    this.children.push(jade)
  }
}
