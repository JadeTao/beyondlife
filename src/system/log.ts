import { IPayload } from './../static/interface'
export default class Log {

    public static born() {
        return new Log()
    }

    public print(payload, type?: string, format?: boolean) {
        type = type || 'log'
        if (format) {
            console[type](JSON.stringify(payload, null, 4))
        } else {
            console[type](this.format(payload))
        }
    }
    public store(payload) {
        // TODO:storage
    }

    private format(payload: IPayload) {
        return `${payload.when} ${payload.where} ${payload.who} ${payload.how} ${payload.what}`
    }
}
