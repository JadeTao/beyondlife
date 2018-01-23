import { interval } from 'rxjs/observable/interval'
import { Observable } from 'rxjs/Rx'

import jade from './../creature/jade'
import { IArea } from './../static/interface'

export default class Clock {
    public static born() {
        return new Clock()
    }
    public source$
    public time$
    public realTime
    public time
    private intervalHandler: any

    constructor(private grain: number = 1) {
        this.realTime = 0
        this.time = 0
        this.source$ = Observable.interval(1000)
        this.time$ = this.source$
            .do((v) => this.realTime = v * 1000)
            .do((v) => this.time = v * grain * 1000)
    }

    public tellTime() {
        return (new Date()).getTime()
    }
}

const a = new Clock()
a.time$.subscribe((v) => console.log(v))
