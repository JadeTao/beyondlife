import continent from './../area/continent'
import jade from './../creature/jade'
import { IArea } from './../static/interface'
import clock from './../system/clock'
import log from './../system/log'

export default class World implements IArea {
    public static born() {
        return new World()
    }
    public state = {
        birthTime: 0,
        name: 'string',
    }
    private clock: clock

    private log: log

    private areas: IArea[] = []

    constructor() {
        console.log('init');
    }

}
