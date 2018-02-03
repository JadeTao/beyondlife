import Role from '../core/role'
import Jade from '../creature/jade'

export default class Continent extends Role {

  constructor(pulse, script: any, place: any) {
    super(pulse, script, place)
  }
  public interpreter(script: any) {
    let jades
    if (script.jade.length) {
      jades = script.jade.map((j) => new Jade(this.pulse, script, this))
    }
    if (jades.length) {
      this.children.concat(jades)
    }
  }
}
