import Role from '../core/role'
import Pulse from '../service/pulse'
import Log from './../service/log'
import { IAge, IArea, IPayload } from './../static/interface'

export default class Jade extends Role {

  public state = {
    type: 'JADE',
    age: 0,
    birthTime: 0,
  }

  constructor(pulse: Pulse, script: any, place: any, log: Log) {
    super(pulse, script, place, log)

    this.interpreter(script)
    this.state.birthTime = new Date().getTime()
    this.pulse.time$.subscribe(this.observer)
  }

  public interpreter(script: any) {
    Object.entries(script)
      .filter((v) => v[0] !== 'ability')
      .forEach((v) => this.state[v[0]] = v[1])
  }

  private observer = (t) => {
    this.state.age += t
    this.log.print(this.state.type, this.state)
  }
}
