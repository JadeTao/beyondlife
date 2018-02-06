import Role from '../core/role'
import Jade from '../creature/jade'
import Log from '../service/log'

export default class Continent extends Role {

  public state = {
    type: 'CONTINENT',
    age: 0,
    birthTime: 0,
  }
  constructor(pulse, script: any, place: any, log: Log) {
    super(pulse, script, place, log)

    this.interpreter(script)
    this.state.birthTime = new Date().getTime()
    this.pulse.time$.subscribe(this.observer)
  }
  public interpreter(script: any) {
    let jades
    if (script.jade.length) {
      jades = script.jade.map((j) => new Jade(this.pulse, j, this, this.log))
    }
    if (jades.length) {
      this.children.concat(jades)
    }
    Object.entries(script)
      .filter((v) => v[0] !== 'jade')
      .forEach((v) => this.state[v[0]] = v[1])
  }
  private observer = (t) => {
    this.state.age += t
    this.log.print(this.state.type, this.state)
  }
}
