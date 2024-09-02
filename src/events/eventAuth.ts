class EventEmitter {
    private events: { [key: string]: Function[] } = {};

    subscribe(eventName: string, callback: Function) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName: string, data: any) {
        const callbacks = this.events[eventName] || [];
        callbacks.forEach(callback => callback(data));
    }
}

export const eventAuth = new EventEmitter();
