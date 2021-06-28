import Phaser from 'phaser'
import { SCENE_MAIN_CHARACTER, SCENE_PLAY_GAME } from './constant'
class MainCharacterScene extends Phaser.Scene {
    constructor () {
        super(SCENE_MAIN_CHARACTER)
    }

    preload () {
        /** Register clicking start button after images */
        this.load.image('face3', 'images/face3.png')
        this.load.image('face2', 'images/face2.png')
        this.load.image('face', 'images/face.png')
        this.load.image('input', 'images/button_white.png')
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
        this.add.sprite(150, 250, 'main1').play('face-anims')
        this.add.text(220, 200, '\n친구를 뭐라고 부르면 될까?', { font: '32px Courier', fill: '#ffffff' })
        this.add.sprite(430, 320, 'input').setOrigin(0.5).setScale(0.3)

        this.add.text(330, 350, 'only english', { font: '15px Courier', fill: '#000000' })

        const textEntry = this.add.text(340, 300, '', { font: '32px Courier', fill: '#000' })
        this.input.keyboard.on('keydown', function (event) {
            if (event.keyCode === 13 && textEntry.text.length > 0) {
                console.log('player name : ' + textEntry.text)
                this.scene.start(SCENE_PLAY_GAME, textEntry.text)
            }
            if (event.keyCode === 8 && textEntry.text.length > 0) {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1)
            } else if (textEntry.text.length > 10) {
                return true
            } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                textEntry.text += event.key
            }
        }, this)
    }
}

export {
    MainCharacterScene
}
