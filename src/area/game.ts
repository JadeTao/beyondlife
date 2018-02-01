import Pulse from '../service/pulse'
import World from './world'

class Game {
  public static bootstrap(script) {
    return new Game(script)
  }
  private pulse
  private state = {

  }
  private area
  constructor(script) {
    const pulse = new Pulse()
  }
  private prepare(pulse, { world }) {
    this.area = world.map((w) => {
      World.subscribe(pulse, world)
    })
  }
}
