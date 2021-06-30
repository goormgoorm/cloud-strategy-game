import Phaser from 'phaser'
import {
    SCENE_GAME_OVER_CLEAR,
    SOUND_EFFTCT_CLEAR
} from './constant'
class GameOverClearScene extends Phaser.Scene {
    constructor () {
        super(SCENE_GAME_OVER_CLEAR)
    }

    preload () {
        this.load.image('gameclear1', 'images/gameclear1.png')
        this.load.image('gameclear2', 'images/gameclear2.png')
        this.load.audio(SOUND_EFFTCT_CLEAR, 'sounds/mixkit-completion-of-a-level-2063.wav')

        this.load.path = 'images/main-screen/'
        this.load.image('main1', 'main-img-1.png')
        this.load.image('main2', 'main-img-2.png')
        this.load.image('main3', 'main-img-3.png')
        this.load.image('main4', 'main-img-4.png')
        this.load.image('main5', 'main-img-5.png')
        this.load.image('main6', 'main-img-6.png')
        this.load.image('main7', 'main-img-7.png')
        this.load.image('main8', 'main-img-8.png')
        this.load.image('main9', 'main-img-9.png')
        this.load.image('main10', 'main-img-10.png')
        this.load.image('main11', 'main-img-11.png')
        this.load.image('main1', 'main-img-10.png')
        this.load.image('main2', 'main-img-9.png')
        this.load.image('main3', 'main-img-8.png')
        this.load.image('main4', 'main-img-7.png')
        this.load.image('main5', 'main-img-6.png')
        this.load.image('main6', 'main-img-5.png')
        this.load.image('main7', 'main-img-4.png')
        this.load.image('main8', 'main-img-3.png')
        this.load.image('main9', 'main-img-2.png')
        this.load.image('main10', 'main-img-1.png')
    }

    create () {
        console.log('Game Over - Clear')
        const music = this.sound.add(SOUND_EFFTCT_CLEAR)
        music.play()
        this.anims.create({
            key: 'successCharacter',
            frames: [
                { key: 'main1' },
                { key: 'main2' },
                { key: 'main3' },
                { key: 'main4' },
                { key: 'main5' },
                { key: 'main6' },
                { key: 'main7' },
                { key: 'main8' },
                { key: 'main9' },
                { key: 'main10' },
                { key: 'main11' },
                { key: 'main10' },
                { key: 'main9' },
                { key: 'main8' },
                { key: 'main7' },
                { key: 'main6' },
                { key: 'main5' },
                { key: 'main4' },
                { key: 'main3' },
                { key: 'main2' },
                { key: 'main1', duration: 200 }
            ],
            frameRate: 8,
            repeat: -1
        })

        this.anims.create({
            key: 'gameclear',
            frames: [
                { key: 'gameclear1' },
                { key: 'gameclear2', duration: 200 }
            ],
            frameRate: 8,
            repeat: -1
        })

        this.add.sprite(400, 300, 'main1').play('successCharacter').setScale(1)
        this.add.sprite(400, 300, 'gameclear1').play('gameclear').setScale(0.5)
        this.add.bitmapText(220, 510, 'atari', 'MELONA X MEGATHON').setOrigin(0).setScale(0.32)
        this.add.bitmapText(300, 545, 'visitor', 'MEGAZONE CLOUD').setOrigin(0).setScale(0.15)
    }
}

export {
    GameOverClearScene
}
