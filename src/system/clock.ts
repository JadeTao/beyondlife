import { area } from './../static/interface';
import jade from '../creature/jade';

export default class clock {
    private intervalHandler: any
    public timer: number

    static born() {
        return new clock()
    }

    constructor() {
        this.timer = (new Date()).getTime()
    }

    public tick(current: number, world, grain?) {
        grain = grain || [{ second: 1 }]
        this.intervalHandler = setInterval(() => {
            world.tick(current,grain)
        }, 1000)
    }
}