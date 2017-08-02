import { area } from './static/interface'
import clock from './system/clock'
import jade from './creature/jade'
import log from './system/log'
import continent from './area/continent'

class world implements area {
    private clock: clock
    private timer: number
    private log: log

    private areas: Array<area> = []
    private name: string
    constructor() {
        this.init()
        this.log = log.born()
        this.log.print({
            hi: 'game starts',
            time: this.getTime()
        }, null, true)

        this.clock.tick(this.clock.timer, this)
    }

    static born() {
        return new world()
    }

    private init() {
        this.timer = (new Date()).getTime()
        this.areas.push(continent.born([jade.born({})]))
        this.clock = clock.born()

    }

    public getTime() {
        return (new Date()).getTime() - this.timer
    }

    public tick(current, grain) {
        this.areas.forEach(v => v.tick(current, grain))
    }

}


world.born()