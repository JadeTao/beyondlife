import continent from './../area/continent'
import jade from './../creature/jade'
import Pulse from './../service/pulse'
import { IArea } from './../static/interface'

export default class World implements IArea {

    public static subscribe(pulse: Pulse, script) {
        return new World(pulse, script)
    }

    public state = {
        age: 0,
        name: '',
        birthTime: 0,
    }

    private areas: IArea[] = []

    constructor(private pulse: Pulse, script) {
        this.pulse.time$.subscribe(this.observer)
        this.prepare(pulse, script)
    }

    private observer = (t) => {
        this.state.age += t
        this.state.birthTime = new Date().getTime()
        console.log(this.state.age)
    }
    private prepare = (pulse, { continent }) => {
        console.log(1);
    }
}
