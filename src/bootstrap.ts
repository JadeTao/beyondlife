import Game from './area/game'
import Pulse from './service/pulse'
import SCRIPT from './story'

const pulse = new Pulse()
Game.bootstrap(SCRIPT)
