import jade from "./../creature/jade"
import { Area } from "./../static/interface"

export default class Clock {
    public static born() {
        return new Clock()
    }

    private intervalHandler: any

    public tellTime() {
        return (new Date()).getTime()
    }

    public tick(world, grain?) {
        const theGrain = grain || { minute: 0, second: 3 }
        this.intervalHandler = setInterval(() => {
            world.tick(theGrain)
        }, 1000)
    }
}
