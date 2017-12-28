import initState from './../static/init-state'
import { Age, Area, Payload, State } from './../static/interface'
import { calculAge, formatTime } from './../static/utils'
import Log from './../system/log'

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
    this.age = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
  }

  public tick(grain?) {
    this.grow(grain)
    // this.log.print(this.getLog('grow old', '1 second'))
  }

  public tellName() {
    const time = [{
      type: 'second',
      num: 0
    }]
    return this.name
  }

  public getLog(how?: string, what?: string): Payload {
    return {
      when: formatTime(Math.floor(((new Date().getTime()) - this.area.world.birthTime) / 1000)),
      where: this.area.name,
      who: this.name,
      how,
      what
    }
  }

  private grow(grain) {
    // TODO: add grow logic
    const action = 'age'
    Reflect.ownKeys(grain).forEach((v) => {
      this.age[v] += grain[v]
    })

    calculAge(this.age)
    this.log.print(this.getLog(action, JSON.stringify(this.age)))
  }
}
