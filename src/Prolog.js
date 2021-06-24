
import Phaser from 'phaser'

class Prolog extends Phaser.Scene {
    constructor () {
        super()
    }

    create() {
        this.dialogGroup = this.add.group();

        const button = this.add.button(105, 105, 'Text', 16);
        button.scale.setTo(4, 4);
        button.smoothed = false;

        this.dialogGroup.add(button);

    }

    start() {
        console.log(this)
    }
}

export {
    Prolog
}