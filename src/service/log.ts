import { IPayload } from './../static/interface'
export default class Log {

    // public print(payload, type?: string, format?: boolean) {
    //     type = type || 'log'
    //     if (format) {
    //         console[type](JSON.stringify(payload, null, 4))
    //     } else {
    //         console[type](this.format(payload))
    //     }
    // }
    public store(payload) {
        // TODO:storage
    }
    public print(type: string, content: any) {
        const { name, age } = content
        if (type === 'WORLD') {
            console.log(`${name} ${age}ms years old`)
            console.log('————————————————————————————————')
        } else if (type === 'CONTINENT') {
            console.log(`——${name} ${age}ms years old`)
        } else if (type === 'JADE') {
            console.log(`————${name} ${age}ms years old`)
        }
    }

    private format(payload: IPayload) {
        return `${payload.when} ${payload.where} ${payload.who} ${payload.how} ${payload.what}`
    }
}
