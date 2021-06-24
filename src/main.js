import { Game } from './Game'
import { MainScene } from './MainScene'


window.addEventListener("load", function () {

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: '#3ab8f2'
    };

    const game = new Game(config);
    game.scene.add('main', MainScene, true, { x: 400, y: 450 });
});
