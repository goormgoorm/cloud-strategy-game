import Phaser from 'phaser'
import { SCENE_PLAY_GAME } from './constant'
class PlayGameScene extends Phaser.Scene {
    constructor () {
        super(SCENE_PLAY_GAME)
    }

    preload () {
        this.load.image('play-screen', 'images/play-screen.png')
    }

    create () {
        this.add.sprite(400, 300, 'play-screen')
    }
}

export {
    PlayGameScene
}
