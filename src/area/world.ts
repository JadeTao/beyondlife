import continent from './../area/continent'
import jade from './../creature/jade'
import { IArea } from './../static/interface'
import Pulse from './../system/pulse'

export default class World implements IArea {

    public state = {
        name: 'string',
        birthTime: 0,
    }

    private areas: IArea[] = []

    constructor(private pulse: Pulse) {
        this.pulse.time$.subscribe((v) => console.log(v))
    }

}
