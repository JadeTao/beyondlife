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
    this.prepare(pulse, script)
  }
  private prepare(pulse, script ) {
    this.children = script.world.map((w) => new World(pulse, w, this))
  }
}
