import Phaser from 'phaser'
import { SCENE_PLAY_GAME, SCENE_GAME_OVER_FAIL } from './constant'

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
        this.load.image('close-button', 'images/close-button.png')

        this.load.json('actions', 'actions.json')
        this.load.json('season', 'season.json')
        this.load.path = 'images/action/'
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
        this.seasonIndex = 0
        this.season = this.cache.json.get('season')[this.seasonIndex]
        this.add.sprite(400, 300, 'play-screen')
        this.add.sprite(400, 30, 'score').setScale(0.3)

        // calender
        this.add.sprite(540, 210, 'calender').setScale(0.25)
        this.month = this.add.bitmapText(540, 200, 'atari', '').setScale(0.5).setOrigin(0.5).setFontSize(20).setTintFill('0x000000', '0x000000', '0x000000', '0x000000')
        this.day = this.add.bitmapText(540, 230, 'atari', '1').setScale(0.5).setOrigin(0.5).setFontSize(40).setTintFill('0x000000', '0x000000', '0x000000', '0x000000')
        // left
        const server = this.add.sprite(60, 100, 'server').setOrigin(0.5).setScale(0.08).setInteractive()
        server.name = 'server'
        this.add.bitmapText(60, 140, 'atari', 'SERVER').setOrigin(0.5).setScale(0.17)
        const database = this.add.sprite(60, 200, 'database').setOrigin(0.5).setScale(0.08).setInteractive()
        database.name = 'database'
        this.add.bitmapText(60, 240, 'atari', 'DATABASE').setOrigin(0.5).setScale(0.17)
        const security = this.add.sprite(60, 300, 'autoscaling').setOrigin(0.5).setScale(0.08).setInteractive()
        security.name = 'security'
        this.add.bitmapText(60, 340, 'atari', 'SECURITY').setOrigin(0.5).setScale(0.17)
        const autoscaling = this.add.sprite(60, 400, 'loadbalancing').setOrigin(0.5).setScale(0.08).setInteractive()
        autoscaling.name = 'autoscaling'
        this.add.bitmapText(60, 440, 'atari', 'SCALING').setOrigin(0.5).setScale(0.17)

        // right
        const monitor = this.add.sprite(750, 100, 'monitor').setOrigin(0.5).setScale(0.08).setInteractive()
        monitor.name = 'monitor'
        this.add.bitmapText(750, 140, 'atari', 'MONITOR').setOrigin(0.5).setScale(0.17)
        const network = this.add.sprite(750, 200, 'network').setOrigin(0.5).setScale(0.08).setInteractive()
        network.name = 'network'
        this.add.bitmapText(750, 240, 'atari', 'NETWORK').setOrigin(0.5).setScale(0.17)
        const storage = this.add.sprite(750, 300, 'storage').setOrigin(0.5).setScale(0.08).setInteractive()
        storage.name = 'storage'
        this.add.bitmapText(750, 340, 'atari', 'STORAGE').setOrigin(0.5).setScale(0.17)
        const event = this.add.sprite(750, 400, 'event').setOrigin(0.5).setScale(0.08).setInteractive()
        event.name = 'event'
        this.add.bitmapText(750, 440, 'atari', 'EVENT').setOrigin(0.5).setScale(0.17)

        /** add event */
        const actions = [server, database, security, autoscaling, monitor, network, storage, event]
        actions.forEach(service => service.on('pointerup', this.onOpenTaskEvent.bind(this, service), this))

        this.createTimeEvent()
        this.tasks = {}
    }

    update () {
        this.season = this.cache.json.get('season')[this.seasonIndex]
        if (this.season) {
            this.month.setText(this.season.name)
        }
    }

    onOpenTaskEvent (service) {
        this.timedEvent.paused = true
        this.image = this.add.sprite(400, 300, 'service-task')
        this.close = this.add.sprite(645, 100, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
        this.close.on('pointerup', this.onCloseTaskEvent.bind(this, service), this)

        this.tasks[service.name] = []
        const data = this.cache.json.get('actions').filter(item => item.service === service.name)
        data.forEach((action, index) => {
            // console.log(action.description)
            const text = this.add.bitmapText(150, 220 + (index * 20), 'atari', action.title).setScale(0.3)
            this.tasks[service.name].push(text)
        })
    }

    onCloseTaskEvent (service) {
        this.image.destroy()
        this.close.destroy()
        this.tasks[service.name].forEach(task => task.destroy())
        this.timedEvent.paused = false
    }

    createTimeEvent () {
        this.timedEvent = this.time.addEvent({ delay: 365, callback: this.onTimeEvent, callbackScope: this, loop: true })
    }

    onTimeEvent () {
        if (this.day.text < this.season.days) {
            this.day.setText(++this.day.text)
        } else {
            this.seasonIndex++
            if (this.seasonIndex === 12) {
                this.timedEvent.remove()
                this.scene.start(SCENE_GAME_OVER_FAIL)
            } else {
                this.day.setText(1)
            }
        }
    }
}

export {
    PlayGameScene
}
