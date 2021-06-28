
class Store {
    constructor () {
        this.events = {}
        this.state = {}
    }

    subscribe (event, callback) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = []
        }
        return this.events[event].push(callback)
    }

    publish (event, data = {}) {
        if (!this.events.hasOwnProperty(event)) {
            return []
        }
        return this.events[event].map(callback => callback(data))
    }

    commit (key, payload) {
        this.state[key] = payload
        this.publish('statechange', this.state)
    }

    getter (key, callback) {
        if (callback && typeof callback === 'function') {
            return callback(this.state, key)
        } else {
            return this.state[key]
        }
    }
}

const store = new Store()
window.store = store

export default store

export {
    Store
}
