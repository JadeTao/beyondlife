import Continent from '../area/continent'
import Role from '../core/role'
import Jade from '../creature/jade'
import Pulse from '../service/pulse'

export default class World extends Role {

    public state = {
        type: 'WORLD',
        age: 0,
        birthTime: 0,
    }
    constructor(pulse: Pulse, script: any, place) {
        super(pulse, script, place)

        this.pulse.time$.subscribe(this.observer)
        this.interpreter(script)
    }

    public add(continent: Continent) {
        this.children.push(continent)
    }
    public interpreter(script) {
        console.log(script)
        let continents
        if (script.continent.length) {
            continents = script.continent.map((j) => new Jade(this.pulse, script, this))
        }
        if (continents.length) {
            this.children.concat(continents)
        }
        Object.entries(script)
            .filter((v) => v[0] !== 'continent')
            .forEach((v) => this.state[v[0]] = v[1])
    }
    private observer = (t) => {
        this.state.age += t
        this.state.birthTime = new Date().getTime()
        console.log(this.state)
    }

}
