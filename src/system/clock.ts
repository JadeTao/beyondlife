import { interval } from 'rxjs/observable/interval'
import { Observable } from 'rxjs/Rx'

import jade from './../creature/jade'
import { IArea } from './../static/interface'

export default class Clock {
    public static born() {
        return new Clock()
    }
    public source$
    public time
    private intervalHandler: any

    constructor(private grain: number = 1000) {
        this.source$ = Observable.interval(1000)
        this.time = 0;
    }
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
a.source$.do((v) => console.log('do')).subscribe((v) => console.log(v))
