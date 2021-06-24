import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor (config) {
        super (config);
        // this.gameTitle = config.gameTitle
    }

    preload () {
        this.load.bitmapFont('atari', './fonts/bitmap/atari-classic.png', './fonts/bitmap/atari-classic.xml');
        // this.load.image('main', './images/main-screen.png');
        this.load.audio('track', ['./audio/track-1.mp3']);
    }

    create (data) {
        this.add.image(data.x, data.y, 'main')
        // this.add.text(data.x / 2, 80, 'Grum Grum', { font: '100px Courier', fill: '#ffffff' });
        // this.add.text(400, 8, 'Phaser 3 pixelArt: true', { font: '16px Courier', fill: '#00ff00' }).setOrigin(0.5, 0).setScale(3);
        this.add.bitmapText(385, 110, 'atari', 'GRUMGRUM').setOrigin(0.5).setScale(1.3);
        this.add.bitmapText(660, 480, 'atari', 'MELONA').setOrigin(0.5).setScale(0.2);
        this.add.bitmapText(650, 500, 'atari', 'MEGATHON').setOrigin(0.5).setScale(0.2);
        this.track = this.sound.add('track')
        const loopMarker = {
            name: 'loop',
            start: 0,
            // duration: 7.68,
            config: {
                loop: true
            }
        };
        this.track.addMarker(loopMarker);
        this.track.play('loop', {
            delay: 0
        });
    }
}

export {
    MainScene
}
