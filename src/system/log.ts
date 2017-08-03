export default class Log {

    public static born() {
        return new Log()
    }

    private who: string
    private when: string
    private what: string

    public print(payload, type?: string, format?: boolean) {
        type = type || "log"
        format
            ? console[type](JSON.stringify(payload, null, 4))
            : console[type](JSON.stringify(payload))
    }
    public store(payload) {
        // TODO:storage
    }
}

