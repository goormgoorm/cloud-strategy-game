import Phaser from 'phaser'
import { SCENE_GAME_OVER_CLEAR } from './constant'
class GameOverClearScene extends Phaser.Scene {
    constructor () {
        super(SCENE_GAME_OVER_CLEAR)
    }

    preload () {
        //
    }

    create () {
        console.log('Game Over - Clear')
    }
}

export {
    GameOverClearScene
}
