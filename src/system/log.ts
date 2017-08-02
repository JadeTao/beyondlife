export default class log {
    private who: string
    private when: string
    private what: string

    constructor() { }
    
    static born() {
        return new log()
    }
    public print(payload, type?: string, format?: boolean) {
        type = type || 'log'
        format
            ? console[type](JSON.stringify(payload, null, 4))
            : console[type](JSON.stringify(payload))
    }
    public store(payload, ){

    }
}

