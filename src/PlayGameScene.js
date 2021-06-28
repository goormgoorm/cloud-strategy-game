import Phaser from 'phaser'
import { SCENE_PLAY_GAME } from './constant'
import { RandomEvent } from './RandomEvent'
import { PointEvent } from './PointEvent'
import { Calender } from './Calender'
class PlayGameScene extends Phaser.Scene {
    constructor () {
        super(SCENE_PLAY_GAME)
    }

    init (data) {
        this.playerName = data
    }

    preload () {
        this.load.bitmapFont('atari', 'fonts/atari-classic.png', './fonts/atari-classic.xml')
        this.load.bitmapFont('visitor', 'fonts/visitor2.png', './fonts/visitor2.xml')
        this.load.audio('double-click', 'sounds/mixkit-fast-double-click-on-mouse-275.wav')
        this.load.audio('error-sound', 'sounds/mixkit-click-error-1110.wav')
        this.load.audio('point-sound', 'sounds/mixkit-video-game-mystery-alert-234.wav')
        // this.load.image('play-screen', 'images/play-screen.png')
        this.load.image('service-task', 'images/service-task.png')
        this.load.image('score', 'images/score.png')
        this.load.image('close-button', 'images/close-button.png')
        this.load.image('alarm', 'images/alarm.png')
        this.load.image('alarm-message', 'images/alarm-message.png')
        this.load.image('history', 'images/history.png')
        this.load.image('history-message', 'images/history-message.png')
        this.load.image('check-box', 'images/check-box.png')
        this.load.image('checked-box', 'images/checked-box.png')
        this.load.image('working1', 'images/working1.png')
        this.load.image('working2', 'images/working2.png')
        this.load.image('button-white', 'images/plain-box.png')
        this.load.image('alert-pop-up', 'images/alertpopup.png')

        this.load.json('actions', 'actions.json')
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
        /** Play main animation */
        this.anims.create({
            key: 'working',
            frames: [
                { key: 'working1' },
                { key: 'working2', duration: 200 }
            ],
            frameRate: 8,
            repeat: -1
        })

        this.add.sprite(30, 20, 'button-white').setOrigin(0).setScale(0.09).setInteractive()
        this.add.bitmapText(40, 36, 'visitor', this.playerName).setOrigin(0).setScale(0.14)
        this.add.sprite(280, 300, 'working1').play('working').setScale(0.28)

        // this.add.sprite(400, 300, 'play-screen')
        this.add.sprite(400, 30, 'score').setScale(0.3)

        const alarm = this.add.sprite(540, 50, 'alarm').setOrigin(0.5).setScale(0.08).setInteractive()
        alarm.on('pointerup', this.onOpenAlarmEvent, this)

        // history
        this.pointEvent = this.scene.add('point-event', PointEvent, true)
        const history = this.add.sprite(260, 50, 'history').setOrigin(0.5).setScale(0.1).setInteractive()
        history.on('pointerup', this.onOpenHistoryEvent, this)

        // calender
        this.calenderEvent = this.scene.add('calender-event', Calender, true)

        // random event
        this.randomEvent = this.scene.add('random-event', RandomEvent, true)
        this.eventIndex = 0

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
        this.point = this.add.bitmapText(400, 45, 'atari', this.pointEvent.point).setOrigin(0.5).setScale(0.6)

        /** add event */
        const actions = [server, database, security, autoscaling, monitor, network, storage, event]
        actions.forEach(service => service.on('pointerup', this.onOpenTaskEvent.bind(this, service), this))
        this.actions = this.cache.json.get('actions')
        this.alertFlag = false
        this.openModal = false
        this.tasks = {}
        this.alarmHistory = []
        this.actionHistory = []
        this.checkedBox = []
    }

    update () {
        this.alarmHistory = this.randomEvent.getHistory()
        if (this.eventIndex !== this.calenderEvent.getEventIndex()) {
            this.eventIndex = this.calenderEvent.getEventIndex()
            this.pointEvent.setAlarmItem(this.alarmHistory[this.eventIndex], this.eventIndex)
        }
    }

    eventCheck () {
        console.log('event check')
    }

    /** Task Modal */
    onOpenTaskEvent (service) {
        const music = this.sound.add('double-click')
        music.play()
        if (this.openModal) return
        this.openModal = true
        this.calenderEvent.pause()
        this.image = this.add.sprite(400, 300, 'service-task')
        this.close = this.add.sprite(645, 100, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
        this.taskTitle = this.add.text(150, 110, service.name, { font: '24px', fill: '#000' })
        this.tasks[service.name] = []
        this.actions.filter(item => item.service === service.name).forEach((action, index) => {
            const checked = this.actionHistory.find(item => item.id === action.id)
            const actionTitle = this.add.bitmapText(150, 200 + (index * 40), 'atari', action.title).setScale(0.3)
            const checkbox = this.add.sprite(115, 200 + (index * 40), checked ? 'checked-box' : 'check-box').setOrigin(0.0).setScale(0.15).setInteractive()
            if (!checked) checkbox.on('pointerup', this.addActionHistoryEvent.bind(this, action, index), this)
            this.checkedBox.push(checkbox)
            this.tasks[service.name].push(actionTitle)
        })

        this.close.on('pointerup', this.onCloseTaskEvent.bind(this, service), this)
    }

    addActionHistoryEvent (action, index) {
        this.actionHistory.push(action)
        this.pointEvent.setActionItems(this.actionHistory)

        const calculatedPoint = this.pointEvent.calculate()

        if (calculatedPoint < 50) {
            const music = this.sound.add('error-sound')
            music.play()
            this.pointEvent.setActionItems(this.actionHistory)
            this.actionHistory.pop()
            if (!this.alertFlag) {
                this.alert = this.add.sprite(400, 300, 'alert-pop-up').setScale(0.3)
                this.alertMessage = this.add.bitmapText(395, 300, 'atari', 'YOU HAVE NO POINTS').setOrigin(0.5).setScale(0.25)
                this.alertClose = this.add.sprite(530, 230, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
                this.alertClose.on('pointerup', this.onCloseAlert.bind(this), this)
                this.alertFlag = true
            }
        } else {
            const music = this.sound.add('point-sound')
            music.play()
            this.checkedBox[index].destroy()
            this.checkedBox[index] = this.add.sprite(113, 196.5 + (index * 40), 'checked-box').setOrigin(0.0).setScale(0.15).setInteractive()
            this.point.destroy()
            this.point = this.add.bitmapText(400, 45, 'atari', this.pointEvent.calculate()).setOrigin(0.5).setScale(0.6)
        }
    }

    onCloseAlert () {
        this.alert.destroy()
        this.alertClose.destroy()
        this.alertMessage.destroy()
        this.alertFlag = false
    }

    onCloseTaskEvent (service) {
        if (this.alertFlag) return
        this.openModal = false
        this.image.destroy()
        this.close.destroy()
        this.taskTitle.destroy()
        this.tasks[service.name].forEach(task => task.destroy())
        this.checkedBox.forEach(child => child.destroy())
        this.calenderEvent.start()
    }

    /** Alarm Modal */
    onOpenAlarmEvent () {
        const music = this.sound.add('double-click')
        music.play()
        if (this.openModal) return
        this.openModal = true
        this.calenderEvent.pause()
        this.image = this.add.sprite(200, 30, 'alarm-message').setOrigin(0.0).setScale(1.3).setInteractive()
        this.close = this.add.sprite(550, 80, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
        this.alarmTitle = this.add.text(350, 100, 'YOUR TASKS', { font: '24px', fill: '#000' })
        this.alarm = this.add.text(400, 250, this.alarmHistory[this.eventIndex].description, { font: '24px', fill: '#000' }).setOrigin(0.5)
        this.close.on('pointerup', this.onCloseAlarmEvent, this)
    }

    onCloseAlarmEvent () {
        this.openModal = false
        this.image.destroy()
        this.close.destroy()
        this.alarmTitle.destroy()
        this.alarm.destroy()
        this.calenderEvent.start()
    }

    /** History Modal */
    onOpenHistoryEvent () {
        const music = this.sound.add('double-click')
        music.play()
        if (this.openModal) return
        this.openModal = true
        this.calenderEvent.pause()
        this.image = this.add.sprite(200, 30, 'history-message').setOrigin(0.0).setScale(1.3).setInteractive()
        this.close = this.add.sprite(550, 80, 'close-button').setOrigin(0.0).setScale(0.3).setInteractive()
        this.taskTitle = this.add.text(280, 95, 'YOUR WORK HISTORY', { font: '24px', fill: '#000' })
        this.pointEvent.display()
        this.close.on('pointerup', this.onCloseHistory, this)
    }

    onCloseHistory () {
        this.openModal = false
        this.pointEvent.hide()
        this.image.destroy()
        this.close.destroy()
        this.taskTitle.destroy()
        this.calenderEvent.start()
    }
}

export {
    PlayGameScene
}
