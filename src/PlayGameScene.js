import Phaser from 'phaser'
import { SCENE_PLAY_GAME } from './constant'
class PlayGameScene extends Phaser.Scene {
    constructor () {
        super(SCENE_PLAY_GAME)
    }

    preload () {
        this.load.bitmapFont('atari', 'fonts/atari-classic.png', './fonts/atari-classic.xml')
        this.load.image('play-screen', 'images/play-screen.png')
        this.load.image('service-task', 'images/service-task.png')
        this.load.image('calender', 'images/calender-2.png')
        this.load.image('score', 'images/score.png')

        this.load.path = 'images/action/'
        this.load.image('security', 'security.png')
        this.load.image('storage', 'storage.png')
        this.load.image('monitor', 'monitor.png')
        this.load.image('database', 'database.png')
        this.load.image('loadbalancing', 'loadbalancing.png')
        this.load.image('event', 'event.png')
        this.load.image('server', 'server.png')
        this.load.image('network', 'network.png')
        this.load.image('autoscaling', 'autoscaling.png')
    }

    create () {
        this.add.sprite(400, 300, 'play-screen')
        this.add.sprite(400, 30, 'score').setScale(0.3)
        this.add.sprite(540, 220, 'calender').setScale(0.2)
        // left
        const server = this.add.sprite(60, 100, 'server').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(60, 140, 'atari', 'SERVER').setOrigin(0.5).setScale(0.17)
        const database = this.add.sprite(60, 200, 'database').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(60, 240, 'atari', 'DATABASE').setOrigin(0.5).setScale(0.17)
        const security = this.add.sprite(60, 300, 'autoscaling').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(60, 340, 'atari', 'SECURITY').setOrigin(0.5).setScale(0.17)
        const autoscaling = this.add.sprite(60, 400, 'loadbalancing').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(60, 440, 'atari', 'SCALING').setOrigin(0.5).setScale(0.17)

        // right
        const monitor = this.add.sprite(750, 100, 'monitor').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(750, 140, 'atari', 'MONITOR').setOrigin(0.5).setScale(0.17)
        const network = this.add.sprite(750, 200, 'network').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(750, 240, 'atari', 'NETWORK').setOrigin(0.5).setScale(0.17)
        const storage = this.add.sprite(750, 300, 'storage').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(750, 340, 'atari', 'STORAGE').setOrigin(0.5).setScale(0.17)
        const event = this.add.sprite(750, 400, 'event').setOrigin(0.5).setScale(0.08).setInteractive()
        this.add.bitmapText(750, 440, 'atari', 'EVENT').setOrigin(0.5).setScale(0.17)

        /** add event */
        const actions = [server, database, security, autoscaling, monitor, network, storage, event]
        actions.forEach(service => service.on('pointerup', this.handlerPointerup, this))
    }

    handlerPointerup () {
        this.add.sprite(0, 0, 'service-task').setOrigin(0.0).setScale(1.0).setInteractive()
    }
}

export {
    PlayGameScene
}
