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
        this.load.image('alarm', 'images/alarm.png')
        this.load.image('alarm-message', 'images/alarm-message.png')
        this.load.image('history', 'images/history.png')
        this.load.image('history-message', 'images/history-message.png')
        this.load.image('check-box', 'images/check-box.png')
        this.load.image('checked-box', 'images/history-message.png')

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
        const year = 2021
        this.seasonIndex = 0
        this.startDay = 1
        this.season = this.cache.json.get('season')[this.seasonIndex]
        this.add.sprite(400, 300, 'play-screen')
        this.add.sprite(400, 30, 'score').setScale(0.3)

        const alarm = this.add.sprite(540, 50, 'alarm').setOrigin(0.5).setScale(0.08).setInteractive()
        alarm.on('pointerup', this.onOpenAlarmEvent, this)

        const history = this.add.sprite(260, 50, 'history').setOrigin(0.5).setScale(0.1).setInteractive()
        history.on('pointerup', this.onOpenHistoryEvent, this)

        // calender
        this.add.sprite(540, 210, 'calender').setScale(0.25)
        this.add.bitmapText(540, 175, 'atari', year).setScale(0.5).setOrigin(0.5).setFontSize(18)
        this.month = this.add.bitmapText(540, 200, 'atari', '').setScale(0.5).setOrigin(0.5).setFontSize(25).setTintFill('0x000000', '0x000000', '0x000000', '0x000000')
        this.day = this.add.bitmapText(540, 230, 'atari', this.startDay).setScale(0.5).setOrigin(0.5).setFontSize(40).setTintFill('0x000000', '0x000000', '0x000000', '0x000000')
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
        this.actionHistory = []
        this.alarmHistory = {}
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
        this.taskTitle = this.add.text(150, 110, service.name, { font: '24px', fill: '#000' })
        this.tasks[service.name] = []
        const data = this.cache.json.get('actions').filter(item => item.service === service.name)
        data.forEach((action, index) => {
            // console.log(action.description)
            const checkBox = this.add.sprite(115, 200 + (index * 40), 'check-box').setOrigin(0.0).setScale(0.15).setInteractive()
            const item = this.add.bitmapText(150, 200 + (index * 40), 'atari', action.title).setScale(0.3)
            checkBox.on('pointerup', this.addActionHistoryEvent.bind(this, item, checkBox, index), this)
            this.tasks[service.name].push(item)
        })
    }

    addActionHistoryEvent (item, checkBox, index) {
        checkBox = this.add.sprite(115, 200 + (index * 40), 'checked-box').setOrigin(0.0).setScale(0.15).setInteractive()
        this.actionHistory.push(item)
        this.actionHistory.forEach(value => {console.log(value)})
    }

    onCloseTaskEvent (service) {
        this.image.destroy()
        this.close.destroy()
        if (service) {
            this.tasks[service.name].forEach(task => task.destroy())
        }
        this.timedEvent.paused = false
    }

    onOpenAlarmEvent () {
        this.timedEvent.paused = true
        this.image = this.add.sprite(200, 30, 'alarm-message').setOrigin(0.0).setScale(1.3).setInteractive()
        this.close = this.add.sprite(550, 80, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
        const taskTitle = this.add.text(350, 100, 'YOUR TASKS', { font: '24px', fill: '#000' })
        const events = ['d','a']
        events.forEach(value => {
            this.add.text(350, 150, value, { font: '24px', fill: '#000' })
        })
        this.close.on('pointerup', this.onCloseAlarmEvent.bind(this, taskTitle, events), this)
    }

    onCloseAlarmEvent (taskTitle, events) {
        this.image.destroy()
        this.close.destroy()
        taskTitle.destroy()
        // if (events) {
        //     events.forEach(event => event.destroy())
        // }
        this.timedEvent.paused = false
    }

    onOpenHistoryEvent () {
        this.timedEvent.paused = true
        this.image = this.add.sprite(200, 30, 'history-message').setOrigin(0.0).setScale(1.3).setInteractive()
        this.close = this.add.sprite(550, 80, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
        this.taskTitle = this.add.text(280, 95, 'YOUR WORK HISTORY', { font: '24px', fill: '#000' })

        // graphics.fillStyle(0xffffff);
        const graphics = this.make.graphics();
        graphics.fillRect(230, 150, 380, 320);

        const mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
        const works = this.add.text(250, 160, ' ec \n\n ec \n\n ec\n\n ec\n\n ec\n\n ec\n\n ec\n\n ec\n\n ec\n\n ec\n\n ec\n\n ec\n\n ec ',
            { fontFamily: 'atari', color: '#000000', wordWrap: { width: 310 } }).setOrigin(0);
        works.setMask(mask);

        //  The rectangle they can 'drag' within
        const zone = this.add.zone(200, 150, 500, 500).setOrigin(0).setInteractive();
        zone.on('pointermove', function (pointer) {
            if (pointer.isDown)
            {
                works.y += (pointer.velocity.y / 10);
                works.y = Phaser.Math.Clamp(works.y, -400, 300);
            }
        });
        this.close.on('pointerup', this.onCloseHistory.bind(this, mask), this)
    }

    onCloseHistory (mask) {
        this.image.destroy()
        this.close.destroy()
        this.taskTitle.destroy()

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
                this.game.sound.destroy()
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
