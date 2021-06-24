import Phaser from 'phaser'

class CharacterScene extends Phaser.Scene {
    preload () {

        /** Register game title font */
        this.load.bitmapFont('atari', './fonts/bitmap/atari-classic.png', './fonts/bitmap/atari-classic.xml')

        /** egister main BGM */
        this.load.audio('track', ['./audio/track-1.mp3'])

        this.load.image('face','./images/face.png');
        this.load.image('face2','./images/face2.png');
        this.load.image('face3','./images/face3.png');

        // function create ()
        // {
        //     this.add.text(10, 10, 'Enter your name:', { font: '32px Courier', fill: '#ffffff' });
        //
        //     var textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00' });
        //
        //     this.input.keyboard.on('keydown', function (event) {
        //
        //         if (event.keyCode === 8 && textEntry.text.length > 0)
        //         {
        //             textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
        //         }
        //         else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
        //         {
        //             textEntry.text += event.key;
        //         }
        //
        //     });
        // }
        // create();
    }

    create (data) {
        /** Play main BGM */
        this.track = this.sound.add('track')
        const loopMarker = {
            name: 'loop',
            start: 0,
            // duration: 7.68,
            config: {
                loop: true
            }
        }
        this.track.addMarker(loopMarker)
        this.track.play('loop', {
            delay: 0
        })

        // this.add.sprite(400, 300, 'main1')
        //     .play('snooze');

        /** Add game title font */
        this.add.bitmapText(385, 110, 'atari', 'GRUMGRUM').setOrigin(0.5).setScale(1.3);
        this.add.bitmapText(660, 480, 'atari', 'MELONA').setOrigin(0.5).setScale(0.2);
        this.add.bitmapText(650, 500, 'atari', 'MEGATHON').setOrigin(0.5).setScale(0.2);
        this.add.text(400, 270, 'Name', { font: '32px Courier', fill: '#ffffff' });

        var textEntry = this.add.text(400, 320, '', { font: '40px Courier', fill: '#DC6561' });


        this.anims.create({
            key: 'snooze',
            frames: [
                { key: 'face' , duration: 500 },
                { key: 'face3', duration: 500  },
                { key: 'face2', duration: 5000 },
                { key: 'face3', duration: 500 },
            ],
            frameRate: 8,
            repeat: -1
        });

        this.add.sprite(300, 300, 'cat1').play('snooze');
        this.add.image(100, 200, 'face')
        this.add.text(100, 400, 'Enter your name', { font: '32px Courier', fill: '#ffffff' })

        const textEntry = this.add.text(500, 400, '', { font: '32px Courier', fill: '#DC6561' })

        this.input.keyboard.on('keydown', function (event) {
            if (event.keyCode === 8 && textEntry.text.length > 0) {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1)
            } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                textEntry.text += event.key
            }
        })
    }
}

export {
    CharacterScene
}
