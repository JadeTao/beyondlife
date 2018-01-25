import World from './area/world'
import SCRIPT from './story'
import Pulse from './system/pulse'

const pulse = new Pulse()
const world = World.subscribe(pulse, SCRIPT);
