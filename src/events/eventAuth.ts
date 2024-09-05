class EventEmitter {
    private events: { [key: string]: Array<(data: any) => void> } = {};

    subscribe(eventName: string, callback: (data: any) => void) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return () => {
            this.events[eventName] = this.events[eventName].filter(
                eventCallback => eventCallback !== callback
            );
        };
    }
    emit(eventName: string, data: any) {
        const callbacks = this.events[eventName] || [];
        callbacks.forEach(callback => {
            if (typeof callback === 'function') {
                callback(data);
            }
        });
    }
}

// Exportamos la instancia del EventEmitter
export const eventAuth = new EventEmitter();
