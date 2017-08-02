import { area } from './static/interface'
import clock from './system/clock'
import jade from './creature/jade'
import log from './system/log'
import continent from './area/continent'

class world {
    private clock: clock
    private timer: number
    private log: log

    private areas: Array<area> = []

    constructor() {
        this.timer = (new Date()).getTime()
        this.log = log.born()

        this.areas.push(continent.born([jade.born({})]))
        this.clock = clock.born(this.areas)

        this.log.print({
            hi: 'game starts',
            time: this.getTime()
        }, null, true)
        
        setInterval(()=>{this.log.print({
            hi: 'fetch time',
            time: this.getTime()
        }, null, true)},10000)

    }
    static born() {
        return new world()
    }

    public getTime() {
        return (new Date()).getTime() - this.timer
    }

}


world.born()