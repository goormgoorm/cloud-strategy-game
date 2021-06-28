import Phaser from 'phaser'
import { POINT_EVENT } from './constant'

class PointEvent extends Phaser.Scene {
    constructor () {
        super(POINT_EVENT)
        this.point = 100
        this.alarms = []
        this.actions = []
        this.actionItems = [] // Action Object Array From ActionJsonFile
    }

    preload () {
        console.log('Point Event - preload')
    }

    create () {
        console.log('Point Event - create')
        this.g = this.add.group()
    }

    display () {
        const graphics = this.make.graphics()
        graphics.fillRect(230, 150, 380, 320)

        const mask = new Phaser.Display.Masks.GeometryMask(this, graphics)
        const works = this.add.text(250, 160, this.actions,
            { fontFamily: 'atari', color: '#000000', wordWrap: { width: 310 } }).setOrigin(0).setScale(1.3)
        works.setMask(mask)

        // test
        console.log(this.actions)
        console.log(this.alarms)

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

    setActions (actions) {
        this.actions = actions
        console.log(actions)
    }

    setAlarms (alarms) {
        this.alarms = alarms
    }

    setActionItems (actionItems) {
        this.actionItems = actionItems
        this.calculate()
    }

    calculate () {
        const result = this.actionItems.reduce((acc, cur) => {
            return acc + cur.point
        }, 0)
        this.pointReset()
        return this.point - result
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
