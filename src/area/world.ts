import Continent from '../area/continent'
import Role from '../core/role'
import Jade from '../creature/jade'
import Log from '../service/log'
import Pulse from '../service/pulse'

export default class World extends Role {

    public state = {
        type: 'WORLD',
        age: 0,
        birthTime: 0,
    }
    constructor(pulse: Pulse, script: any, place, log: Log) {
        super(pulse, script, place, log)

        this.interpreter(script)
        this.state.birthTime = new Date().getTime()
        this.pulse.time$.subscribe(this.observer)
    }

    public add(continent: Continent) {
        this.children.push(continent)
    }
    public interpreter(script) {
        let continents
        if (script.continent.length) {
            continents = script.continent.map((j) => new Continent(this.pulse, j, this, this.log))
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
        this.log.print(this.state.type, this.state)
    }
}
