
import Phaser from 'phaser'
// import Preloader from './Preloader'
class Game extends Phaser.Game {

    constructor(option) {
        super(option);
        this.gameTitle = option.gameTitle
    }

    boot() {
        super.boot();
        this.music = {};
    }

    playMusic(difficulty) {
        if (!this.currentMusic) {
            this.currentMusic = this.music[difficulty];
        }

        if (!this.currentMusic.isPlaying) {
            this.currentMusic.play();
        } else {
            this.currentMusic.fadeOut(1000);
            this.currentMusic = this.music[difficulty];
            this.currentMusic.fadeIn(1000, true);
        }
    }
}

export {
    Game
}