
import Phaser from 'phaser'
import { Prolog } from './Prolog'
class Game extends Phaser.Game {

    constructor(option) {
        super(option);
        this.config.gameTitle = option.gameTitle
    }

    boot() {
        super.boot();
        this.create()
    }

    create () {
        // console.log(this)
        new Prolog()
    }
}

export {
    Game
}