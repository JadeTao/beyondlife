import Log from '../service/log'
import Pulse from '../service/pulse'
import World from './world'

export default class Game {

  public static bootstrap(script) {
    return new Game(script)
  }
  private pulse: Pulse

  private children
  constructor(script) {
    const pulse = new Pulse()
    const log = new Log()
    this.prepare(pulse, script, log)
  }
  private prepare(pulse, script, log) {
    this.children = script.world.map((w) => new World(pulse, w, this, log))
  }
}
