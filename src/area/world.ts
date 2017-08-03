import continent from "./../area/continent"
import jade from "./../creature/jade"
import { area } from "./../static/interface"
import clock from "./../system/clock"
import log from "./../system/log"

export default class World implements area {
    public static born() {
        return new World()
    }
    private clock: clock
    private timer: number
    private log: log

    private areas: area[] = []
    private name: string
    constructor() {
        this.init()
        this.log = log.born()
        this.log.print({
            hi: "game starts",
            time: this.getTime()
        }, null, true)

        this.clock.tick(this.clock.timer, this)
    }

    public getTime() {
        return (new Date()).getTime() - this.timer
    }

    public tick(current, grain) {
        this.areas.forEach((v) => v.tick(current, grain))
    }

    private init() {
        this.timer = (new Date()).getTime()
        this.areas.push(continent.born([jade.born({})]))
        this.clock = clock.born()

    }
}
