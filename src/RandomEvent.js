import Phaser from 'phaser'
import { RANDOM_EVENT } from './constant'

class RandomEvent extends Phaser.Scene {
    constructor () {
        super(RANDOM_EVENT)
    }

    preload () {
        this.load.json('events', 'events.json')
    }

    create () {
        this.history = []
        this.quests = this.cache.json.get('events')
        this.max = this.quests.length
        console.log(this)
    }

    getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    random () {
        const num = this.getRandomInt(0, this.max)
        const randomEvent = this.quests[num]
        this.quests.splice(num, 1)
        this.history.push(randomEvent)
        console.log(this.history)
        return randomEvent
    }

    display () {
        console.log(111)
    }

    getHistory () {
        return this.history
    }
}

export {
    RandomEvent
}
