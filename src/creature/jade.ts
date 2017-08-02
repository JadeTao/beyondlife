import { state } from './../static/interface'
import initState from './../static/init-state'


export default class jade {
  private state: state

  private skill: Array<any>

  private name: string

  constructor(state, name?: string) {
    //TODO:状态的层次问题
    this.state = Object.assign({}, initState, state)
    this.name = name || 'jader'
  }
  
  static born(state, name?: string) {
    return new jade(state, name)
  }
  public tick() {
    console.log('1 second passed.')
    console.log(`i'm ${this.tellName()}`)
  }
  public tellName() {
    return this.name
  }
}
