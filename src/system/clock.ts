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
        grain = grain || [{ second: 1 }]
        this.intervalHandler = setInterval(() => {
            world.tick(grain)
        }, 1000)
    }
}
