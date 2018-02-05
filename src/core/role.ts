import Continent from '../area/continent'
import World from '../area/world'
import Jade from '../creature/jade'
import ROLELEVEL from '../static/constant'

export default abstract class Role {

  public children = []

  constructor(public pulse, private script: any, private place: any) {

  }

  abstract interpreter(script: any)
}
