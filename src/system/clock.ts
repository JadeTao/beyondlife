import jade from "./../creature/jade"
import { area } from "./../static/interface"

export default class Clock {
    public static born() {
        return new Clock()
    }

    public timer: number
    private intervalHandler: any

    constructor() {
        this.timer = (new Date()).getTime()
    }

    public tick(current: number, world, grain?) {
        grain = grain || [{ second: 1 }]
        this.intervalHandler = setInterval(() => {
            world.tick(current, grain)
        }, 1000)
    }
}
