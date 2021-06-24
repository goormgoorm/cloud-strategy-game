
import Phaser from 'phaser'
import { Prolog } from './Prolog'
class Game extends Phaser.Game {

    constructor(option) {
        super(option);
    }

    boot() {
        super.boot();
    }

    create () {
        console.log(this.Game)
        new Prolog()
    }
}

export {
    Game
}