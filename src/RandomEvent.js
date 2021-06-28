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

        this.random()
        this.random()
        this.random()
        this.random()
    }

    getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    random () {
        const num = this.getRandomInt(0, this.quests.length)
        const randomEvent = this.quests[num]
        this.quests.splice(num, 1)
        this.history.push(randomEvent)
        return randomEvent
    }

    getHistory () {
        return this.history
    }
}

export {
    RandomEvent
}
