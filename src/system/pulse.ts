import { interval } from 'rxjs/observable/interval'
import { Observable } from 'rxjs/Rx'

import jade from './../creature/jade'
import { IArea } from './../static/interface'

export default class Pulse {

    public time
    public time$

    private source$
    private realTime
    private timeHandler: any
    private sourceHandler

    constructor(private multiple: number = 1) {
        this.realTime = 0
        this.time = 0
        this.source$ = Observable.interval(1000).mapTo(1000).publish().refCount()
        this.sourceHandler = this.source$.subscribe((v) => this.realTime += v)
        const gap = 1000 / multiple
        this.time$ = Observable.interval(gap).mapTo(1000).publish().refCount()
    }

}
