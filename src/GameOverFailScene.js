import Phaser from 'phaser'
import {
    SCENE_GAME_OVER_FAIL,
    SOUND_EFFTCT_FAIL
} from './constant'
class GameOverFailScene extends Phaser.Scene {
    constructor () {
        super(SCENE_GAME_OVER_FAIL)
    }

    preload () {
        this.load.image('gameover1', 'images/gameover1.png')
        this.load.image('gameover2', 'images/gameover2.png')

        this.load.audio(SOUND_EFFTCT_FAIL, 'sounds/mixkit-player-losing-or-failing-2042.wav')
    }

    create () {
        console.log('Game Over - Fail')
        const music = this.sound.add(SOUND_EFFTCT_FAIL)
        music.play()
        this.add.bitmapText(670, 580, 'atari', 'MELONA X MEGATHON').setOrigin(0.5).setScale(0.2)
        this.anims.create({
            key: 'gameover',
            frames: [
                { key: 'gameover1' },
                { key: 'gameover2', duration: 200 }
            ],
            frameRate: 8,
            repeat: -1
        })

        this.add.sprite(400, 300, 'gameover').play('gameover').setScale(0.5)
    }
}

export {
    GameOverFailScene
}
