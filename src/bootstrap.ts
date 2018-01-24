import World from './area/world'
import Pulse from './system/pulse'

const pulse = new Pulse()
const world = new World(pulse);
