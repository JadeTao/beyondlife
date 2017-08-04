import initState from "./../static/init-state"
import { Age, Area, Payload, State } from "./../static/interface"
import Log from "./../system/log"

export default class Jade {

  public static born(area: Area, name: string, state?: State) {
    return new Jade(area, name, state)
  }
  public area

  private state: State

  private log: Log
  private skill: any[]

  private name: string
  private gender: string
  private age: Age

  constructor(area: Area, name: string, state?: State) {
    // TODO:状态的层次问题
    this.state = Object.assign({}, initState, state)
    this.name = name
    this.log = Log.born()
    this.area = area
  }

  public tick(grain) {
    this.log.print(this.getLog())
  }

  public tellName() {
    const time = [{
      type: "second",
      num: 0
    }]
    return this.name
  }

  public getLog(): Payload {
    return {
      when: Math.floor(((new Date().getTime()) - this.area.world.birthTime) / 1000),
      where: this.area.name,
      who: this.name,
      how: "grow old",
      what: "1 second"
    }
  }

  private grow(time) {
    // TODO: add grow logic
  }
}
