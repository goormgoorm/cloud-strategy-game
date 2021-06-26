import Phaser from 'phaser'
import { SCENE_GAME_OVER_FAIL } from './constant'
class GameOverFailScene extends Phaser.Scene {
    constructor () {
        super(SCENE_GAME_OVER_FAIL)
    }

    preload () {
        console.log(this.game)
        //
    }

    create () {
        console.log('Game Over - Fail')
    }
}

export {
    GameOverFailScene
}
