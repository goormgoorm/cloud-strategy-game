import Phaser from 'phaser'
import { POINT_EVENT } from './constant'

class PointEvent extends Phaser.Scene {
    constructor () {
        super(POINT_EVENT)
        this.point = 100
        this.alarmItem = {}
        this.actionItems = []
        this.plusPoint = 0
    }

    preload () {
        // console.log('Point Event - preload')
    }

    create () {
        // console.log('Point Event - create')
        this.g = this.add.group()
    }

    display () {
        const graphics = this.make.graphics()
        graphics.fillRect(230, 150, 380, 320)
        const actionTitles = this.actionItems.map(item => `${item.title} (-${item.point})`)
        const mask = new Phaser.Display.Masks.GeometryMask(this, graphics)
        const textStyle = {
            fontFamily: 'atari',
            color: '#000000',
            wordWrap: {
                width: 310
            }
        }
        const works = this.add.text(250, 160, actionTitles, textStyle).setOrigin(0).setScale(1.3)
        works.setMask(mask)

        //  The rectangle they can 'drag' within
        const zone = this.add.zone(200, 150, 500, 500).setOrigin(0).setInteractive()
        zone.on('pointermove', function (pointer) {
            if (pointer.isDown) {
                works.y += (pointer.velocity.y / 10)
                works.y = Phaser.Math.Clamp(works.y, -400, 300)
            }
        })
        this.g.add(works)
    }

    /* START NEW EVENT - SET PLUS POINT AND NEW EVENT */
    setAlarmItem (alarm, index) {
        this.alarmItem[index] = this.actionItems.filter(item => alarm.defenseActions.includes(item.id)).length * alarm.point
        this.plusPoint += this.alarmItem[index]
    }

    setActionItems (action) {
        this.actionItems.push(action)
        this.calculate()
    }

    getActions () {
        return this.actionItems
    }

    calculate () {
        this.pointReset()
        const sumPoint = (acc, cur) => acc + cur.point
        const minusPoint = this.actionItems.reduce(sumPoint, 0)
        return this.point - minusPoint + this.plusPoint
    }

    pointReset () {
        this.point = 100
    }

    hide () {
        this.g.getChildren().forEach(child => child.destroy())
    }

    getPoint () {
        return this.point
    }
}

export {
    PointEvent
}
