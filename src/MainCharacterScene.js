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
        console.log('input Scene')
        this.add.image(350, 300, 'face')
        this.add.image(400, 300, 'face2')
        this.add.image(450, 300, 'face3')
    }
}

// function loadImage ()
// {
//     this.load.once('complete', addSprites, this);
//
//     this.load.image('face3', 'face3')
//     this.load.image('face2', 'face2')
//     this.load.image('face', 'face')
//
//     this.load.start();
// }

// function addSprites () {
//     this.add.image(400, 300, 'face3')
//     this.add.text(100, 400, 'Enter your name', { font: '32px Courier', fill: '#ffffff' })

//     const textEntry = this.add.text(500, 400, '', { font: '32px Courier', fill: '#DC6561' })
//     this.input.keyboard.on('keydown', function (event) {
//         if (event.keyCode === 8 && textEntry.text.length > 0) {
//             textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1)
//         } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
//             textEntry.text += event.key
//         }
//     })
// }
export {
    MainCharacterScene
}
