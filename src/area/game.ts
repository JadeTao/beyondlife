import Pulse from '../service/pulse'
import World from './world'

export default class Game {

  public static bootstrap(script) {
    return new Game(script)
  }
  private pulse: Pulse

  private area
  constructor(script) {
    const pulse = new Pulse()
  }
  private prepare(pulse, { world }) {
    this.area = world.map((w) => new World(pulse, world))
  }
}
