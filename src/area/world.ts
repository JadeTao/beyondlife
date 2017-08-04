import continent from "./../area/continent"
import jade from "./../creature/jade"
import { Area } from "./../static/interface"
import clock from "./../system/clock"
import log from "./../system/log"

export default class World implements Area {
    public static born() {
        return new World()
    }
    public birthTime: number
    public name: string

    private clock: clock

    private log: log

    private areas: Area[] = []

    constructor() {
        this.init()
        this.log = log.born()
        this.log.print({
            hi: "game starts",
            time: this.getTime()
        }, null, true)

        this.clock.tick(this)
    }

    public getTime() {
        return (new Date()).getTime() - this.birthTime
    }

    public tick(grain) {
        this.areas.forEach((v) => v.tick(grain))
    }

    private init() {
        this.birthTime = (new Date()).getTime()
        this.areas.push(continent.born(this))
        this.clock = clock.born()
    }
}
