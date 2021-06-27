import Phaser from 'phaser'
import { RANDOM_EVENT } from './constant'

class RandomEvent extends Phaser.Scene {
    constructor () {
        super(RANDOM_EVENT)
    }

    preload () {
        this.load.json('actions', 'actions.json')
    }

    create () {
        this.actions = this.cache.json.get('actions')

        console.log(this.actions)
    }

    random () {
        console.log('random')
    }

    display () {
        console.log(111)
    }
}

export {
    RandomEvent
}
