
import Phaser from 'phaser'
class Game extends Phaser.Game {
    constructor (option) {
        super(option)
        this.config.gameTitle = option.gameTitle
    }

    boot () {
        super.boot()
    }
}

export {
    Game
}
