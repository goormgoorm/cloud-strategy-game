import { Game } from './Game'
import { MainScene } from './MainScene'
// import { CharacterScene } from './CharacterScene'


window.addEventListener("load", function () {

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: '#4eade6',
        gameTitle: 'GRUMGRUM'
    };

    const game = new Game(config);
    game.scene.add('main', MainScene, true, { x: 400, y: 450 });
    // game.scene.add('main', CharacterScene, true, { x: 400, y: 450 });
});
