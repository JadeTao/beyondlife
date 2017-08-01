import jade from '../creature/jade';

export default class clock {
    private intervalHandler: any

    static born(jades: Array<jade>) {
        return new clock(jades)
    }

    constructor(jades: Array<jade>) {
        this.tick(jades)
    }

    public tick(jades: Array<jade>) {
        this.intervalHandler = setInterval(() => {
            jades.forEach(v => v.tick())
        }, 1000)
    }
}