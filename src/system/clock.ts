import { interval } from "rxjs/observable/interval"
import { Observable } from "rxjs/Rx"
import jade from "./../creature/jade"
import { Area } from "./../static/interface"

export default class Clock {
    public static born() {
        return new Clock()
    }
    public source = Observable.interval(1000)

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

const a = new Clock()
a.source.subscribe((v) => console.log(v))
