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

  constructor(pulse: Pulse, script: any, place: any) {
    super(pulse, script, place)
    console.log('hi')
  }

}
