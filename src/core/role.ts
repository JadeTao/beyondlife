import Continent from '../area/continent'
import World from '../area/world'
import Jade from '../creature/jade'
import ROLELEVEL from '../static/constant'

export default abstract class Role {
  public state: any = {}
  public children = []

  constructor(public pulse, private script: any, private place: any) {
  }

  // private interpreter(script: any) {
  //   if (ROLELEVEL.global in script) {
  //     this.state = {}
  //     return
  //   } else if (ROLELEVEL.world in script) {
  //     this.state = {
  //       type: 'WORLD',
  //       age: 0,
  //       name: '',
  //       birthTime: 0,
  //     }
  //     console.log('world')
  //     return script.continent.map((c) => new Continent(this.pulse, c, this))
  //   } else if (ROLELEVEL.continent in script) {
  //     this.state = {
  //       type: 'CONTINENT',
  //       age: 0,
  //       name: '',
  //       birthTime: 0,
  //     }
  //     console.log('continent')
  //     return script.jade.map((j) => new Jade(this.pulse, j, this))
  //   } else if (ROLELEVEL.jade in script) {
  //     this.state = {
  //       type: 'JADE',
  //       age: 0,
  //       name: '',
  //       birthTime: 0,
  //     }
  //     console.log('jade')
  //     return
  //   }
  // }
  abstract interpreter(script: any)
}
