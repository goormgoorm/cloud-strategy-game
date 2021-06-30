import Phaser from 'phaser'
import { TIME_EVENT } from './constant'

class Calender extends Phaser.Scene {
    constructor () {
        super(TIME_EVENT)
    }

    preload () {
        this.load.image('calender', 'images/calender-2.png')
        this.load.json('season', 'season.json')
    }

    create () {
        const year = 2021
        this.seasonIndex = 1
        this.currentDay = 1
        this.allSeason = this.cache.json.get('season')
        this.season = this.allSeason[this.seasonIndex]
        this.g = this.add.group()

        // calender
        this.g.add(this.add.sprite(650, 60, 'calender').setScale(0.25))
        this.g.add(this.add.bitmapText(650, 25, 'atari', year).setScale(0.5).setOrigin(0.5).setFontSize(18))
        this.month = this.add.bitmapText(650, 50, 'atari', '').setScale(0.5).setOrigin(0.5).setFontSize(25).setTintFill('0x000000', '0x000000', '0x000000', '0x000000')
        this.g.add(this.month)
        this.day = this.add.bitmapText(650, 80, 'atari', this.currentDay).setScale(0.5).setOrigin(0.5).setFontSize(40).setTintFill('0x000000', '0x000000', '0x000000', '0x000000')
        this.g.add(this.day)
        this.createTimeEvent()

        this.isEnd = false
    }

    update () {
        this.season = this.cache.json.get('season')[this.seasonIndex]
        if (this.season) {
            this.month.setText(this.season.name)
        }
    }

    /** TimeEvent */
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
                this.game.sound.pauseAll()
                this.isEnd = true
            } else {
                this.day.setText(1)
            }
        }
        this.currentDay = this.day.text
    }

    pause (flag) {
        if (!flag) {
            this.g.setVisible(false)
        }
        this.timedEvent.paused = true
    }

    start () {
        this.g.setVisible(true)
        this.timedEvent.paused = false
    }

    getEventIndex () {
        return parseInt(this.seasonIndex / 2) || 0
    }

    getIsEnd () {
        return this.isEnd
    }

    getDueDate () {
        let index = this.seasonIndex + 1
        while (!parseInt(index / 2)) {
            index++
        }
        const month = index + 1 < 10 ? `0${index + 1}` : index + 1
        return month + '/' + this.allSeason[index].days
    }

    getCurrentDay () {
        return this.currentDay
    }
}

export {
    Calender
}
