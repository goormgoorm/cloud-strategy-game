import Phaser from 'phaser'
import { SCENE_MAIN_CHARACTER } from './constant'
class MainCharacterScene extends Phaser.Scene {
    constructor () {
        super(SCENE_MAIN_CHARACTER)
    }

    preload () {
        this.load.image('face', 'face')
        this.load.image('face2', 'face2')
        this.load.image('face3', 'face3')
    }

    create () {
        this.anims.create({
            key: 'face-anims',
            frames: [
                { key: 'face', duration: 10 },
                { key: 'face2', duration: 50 },
                { key: 'face3', duration: 20 }
            ],
            frameRate: 8,
            repeat: -1
        })
        this.add.sprite(100, 300, 'main1').play('face-anims')
        this.add.text(200, 300, 'Enter your name', { font: '32px Courier', fill: '#ffffff' })

        // this.input 은 어디갔나요 ?
        const textEntry = this.add.text(500, 400, '', { font: '32px Courier', fill: '#000' })
        this.input.keyboard.on('keydown', function (event) {
            if (event.keyCode === 8 && textEntry.text.length > 0) {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1)
            } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                textEntry.text += event.key
            }
        })
    }
}

export {
    MainCharacterScene
}
