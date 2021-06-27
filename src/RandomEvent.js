import Phaser from 'phaser'
import { RANDOM_EVENT } from './constant'

class RandomEvent extends Phaser.Scene {
    constructor () {
        super(RANDOM_EVENT)
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
