import Phaser from 'phaser'
import { Game } from './Game'
import { MainTitleScene } from './MainTitleScene'
import { MainCharacterScene } from './MainCharacterScene'

window.addEventListener('load', function () {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: '#4eade6',
        gameTitle: 'GRUMGRUM',
        scene: [MainTitleScene, MainCharacterScene]
    }

    window.game = new Game(config)
})
