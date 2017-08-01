import clock from './system/clock'
import jade from './creature/jade'
import log from './system/log'

class world {
    private Clock: clock
    private jades: Array<jade> = []
    private timer: number
    private log: log
    constructor() {
        this.timer = (new Date()).getTime()
        this.log = log.born()
        this.jades.push(jade.born())
        this.Clock = clock.born(this.jades)
        this.log.print({
            hi: 'game starts',
            time: this.getTime()
        }, null, true)

    }
    static born() {
        return new world()
    }

    public getTime() {
        return (new Date()).getTime() - this.timer
    }

}


world.born()