import initState from "./../static/init-state"
import { age, state } from "./../static/interface"
import log from "./../system/log"

export default class Jade {

  public static born(state, name?: string) {
    return new Jade(state, name)
  }
  private state: state

  private skill: any[]

  private name: string
  private gender: string
  private age: age
  constructor(state, name?: string) {
    // TODO:状态的层次问题
    this.state = Object.assign({}, initState, state)
    this.name = name || "jader"
  }

  public tick(current, grain) {
    console.log(`i"m ${this.tellName()},${(new Date()).getTime() - current}`)
  }

  public tellName() {
    const time = [{
      type: "second",
      num: 0
    }]
    return this.name
  }

  private grow(time) {
    // TODO: add grow logic
  }
}
