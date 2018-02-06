import Continent from '../area/continent'
import World from '../area/world'
import Jade from '../creature/jade'
import Log from '../service/log'
import ROLELEVEL from '../static/constant'

export default abstract class Role {

  public children = []

  constructor(public pulse, private script: any, private place: any, public log: Log) {

  }

  abstract interpreter(script: any)
}
