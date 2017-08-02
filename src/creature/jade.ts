import { state } from './../static/interface'
import initState from './../static/init-state'
import log from '../system/log'
import { age } from '../static/interface'


export default class jade {
  private state: state

  private skill: Array<any>

  private name: string
  private gender: string
  private age: age
  constructor(state, name?: string) {
    //TODO:状态的层次问题
    this.state = Object.assign({}, initState, state)
    this.name = name || 'jader'
  }

  static born(state, name?: string) {
    return new jade(state, name)
  }
  private grow(time) {

  }
  public tick(current, grain) {
    console.log(`i'm ${this.tellName()},${(new Date()).getTime()-current}`)
  }

  public tellName() {
    const time = [{
      type: 'second',
      num: 0
    }]
    return this.name
  }
}
