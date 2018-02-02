import Continent from '../area/continent'
import ROLELEVEL from '../static/constant'

export default class Role {
  public state: any = {}
  public children = []
  constructor(public pulse, private script: any, private place?: any) {

  }
  public add(sth: any) {
    this.children.push(sth)
  }
  private interpreter(script: any) {
    if (ROLELEVEL.world in script) {
      this.state = {}
      return
    } else if (ROLELEVEL.continent in script) {
      this.state = {
        type: 'WORLD',
        age: 0,
        name: '',
        birthTime: 0,
      }
    } else if (ROLELEVEL.jade in script) {
      this.state = {
        type: 'CONTINENT',
        age: 0,
        name: '',
        birthTime: 0,
      }
    }
  }
}
