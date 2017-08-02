import { area } from './../static/interface';
import jade from '../creature/jade';

export default class clock {
    private intervalHandler: any
    private areas: Array<area>

    static born(areas: Array<area>) {
        return new clock(areas)
    }

    constructor(areas: Array<area>) {
        this.areas = areas
        this.tick()
    }

    public tick() {
        this.intervalHandler = setInterval(() => {
            this.areas.forEach(v => v.tick())
        }, 1000)
    }
}