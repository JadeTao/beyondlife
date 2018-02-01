import World from './area/world'
import Pulse from './service/pulse'
import SCRIPT from './story'

const pulse = new Pulse()
const world = World.subscribe(pulse, SCRIPT);
