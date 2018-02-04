import Role from '../core/role'
import Jade from '../creature/jade'

export default class Continent extends Role {

  public state = {
    type: 'CONTINENT',
    age: 0,
    birthTime: 0,
  }
  constructor(pulse, script: any, place: any) {
    super(pulse, script, place)

    this.interpreter(script)
  }
  public interpreter(script: any) {
    let jades
    if (script.jade.length) {
      jades = script.jade.map((j) => new Jade(this.pulse, script, this))
    }
    if (jades.length) {
      this.children.concat(jades)
    }
    Object.entries(script)
      .filter((v) => v[0] !== 'jade')
      .forEach((v) => this.state[v[0]] = v[1])
  }
}
