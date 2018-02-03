import Continent from '../area/continent'
import Role from '../core/role'
import jade from '../creature/jade'
import Pulse from '../service/pulse'

export default class World extends Role {

    constructor(pulse: Pulse, script: any, place) {
        super(pulse, script, place)

        this.pulse.time$.subscribe(this.observer)
    }

    public add(continent: Continent) {
        this.children.push(continent)
    }
    public interpreter(script) {
        let continents
        if (script.continent.length) {
            continents = script.continent
        }
    }
    private observer = (t) => {
        this.state.age += t
        this.state.birthTime = new Date().getTime()
        console.log(this.state.age)
    }

}
