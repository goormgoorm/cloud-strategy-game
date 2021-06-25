import Phaser from 'phaser'
import { SCENE_PLAY_GAME } from './constant'
class PlayGameScene extends Phaser.Scene {
    constructor () {
        super(SCENE_PLAY_GAME)
    }

    preload () {
        this.load.bitmapFont('atari', 'fonts/atari-classic.png', './fonts/atari-classic.xml')

        this.load.image('play-screen', 'images/play-screen.png')

        this.load.path = 'images/aws/'

        this.load.image('authentication', 'authentication.png')
        this.load.image('s3', 'bucket.png')
        this.load.image('cloudwatch', 'cloudwatch.png')
        this.load.image('rds', 'database.png')
        this.load.image('elb', 'ELB.png')
        this.load.image('IAM', 'IAM.png')
        this.load.image('lambda', 'lambda.png')
        this.load.image('ec2', 'server.png')
        this.load.image('vpc', 'vpc.png')
        this.load.image('autoscaling', 'autoscaling.png')
    }

    create () {
        this.add.sprite(400, 300, 'play-screen')

        // left
        const ec2 = this.add.sprite(60, 70, 'ec2').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(60, 120, 'atari', 'SERVER').setOrigin(0.5).setScale(0.2)
        const rds = this.add.sprite(60, 170, 'rds').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(60, 220, 'atari', 'DATABASE').setOrigin(0.5).setScale(0.2)
        const autoscaling = this.add.sprite(60, 270, 'autoscaling').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(60, 320, 'atari', 'SCALING').setOrigin(0.5).setScale(0.2)
        const elb = this.add.sprite(60, 370, 'elb').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(60, 420, 'atari', 'BALANCING').setOrigin(0.5).setScale(0.2)

        // right
        const cloudwatch = this.add.sprite(750, 70, 'cloudwatch').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(750, 120, 'atari', 'MONITOR').setOrigin(0.5).setScale(0.2)
        const vpc = this.add.sprite(750, 170, 'vpc').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(750, 220, 'atari', 'NETWORK').setOrigin(0.5).setScale(0.2)
        const s3 = this.add.sprite(750, 270, 's3').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(750, 320, 'atari', 'STORAGE').setOrigin(0.5).setScale(0.2)
        const lambda = this.add.sprite(750, 370, 'lambda').setOrigin(0.5).setScale(0.1).setInteractive()
        this.add.bitmapText(750, 420, 'atari', 'EVENT').setOrigin(0.5).setScale(0.2)


        button.on('vpc', actionOnClick, this)

        // let button = game.add.button(100, 400, 'vpc', actionOnClick, this);
        // button.onInputOver.add(over, this);
        // button.onInputOut.add(out, this);
        // button.onInputUp.add(up, this);

    }

}

function actionOnClick () {
    console.log('clicked');
}

export {
    PlayGameScene
}
