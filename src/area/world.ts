import Continent from '../area/continent'
import Role from '../core/role'
import jade from '../creature/jade'
import Pulse from '../service/pulse'

export default class World extends Role {

    constructor(pulse: Pulse, script: any) {
        super(pulse, script)

        this.pulse.time$.subscribe(this.observer)
        this.prepare(pulse, script)
    }

    public add(continent: Continent) {
        this.children.push(continent)
    }

    private observer = (t) => {
        this.state.age += t
        this.state.birthTime = new Date().getTime()
        console.log(this.state.age)
    }

    private prepare = (pulse, { continent }) => {
        this.pulse = pulse
        this.children = continent.map((c) => new Continent(continent, this, pulse))
    }
}
