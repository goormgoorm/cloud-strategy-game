
import Phaser from 'phaser'
import { SCENE_MAIN_PROLOG, SCENE_MAIN_CHARACTER } from './constant'
class MainPrologScene extends Phaser.Scene {
    constructor () {
        super(SCENE_MAIN_PROLOG)
        this.list = []
    }

    preload () {
        this.load.image('text-box', './images/text-box.png')
        // this.load.bitmapFont('visitor2', './fonts/visitor2.png', './fonts/visitor2.fnt')
        // this.load.text('prolog')
    }

    create () {
        this.g = this.add.group()
        this.dialog = this.add.sprite(400, 450, 'text-box').setOrigin(0.5).setScale(1.0).setInteractive()
        // this.text = this.add.bitmapText(0, 0, 'visitor2', '', 16)
        this.text = this.add.text(0, 0, '', { font: '24px', fill: '#000' })
        // this.text.smoothed = false
        this.g.visible = false
        // this.list.unshift('Welcome to Whipbit Solutions.\nYour goal is to have lots\nof money or great reputation.\n($300 000 or 300*)\n\nBe careful not to be in debt\nat the end of each month.')
        // this.list.unshift('Create projects by clicking\non one of those buttons.\n\nYou get money by completing\nthem, but penalty when\nyou cross the deadline.')
        // this.list.unshift('Project requirements must\nmatch your skills.\n\nThey also have publicity,\nwhich results in reputation.')
        // this.list.unshift('Positive reputation is safer,\nbut projects with\nnegative publicity are\nsometimes a better deal.\n\nClick this stats button\nfor detailed report.')
        // this.list.unshift('Use the management menu to\nfire/hire developers\nor to improve their skills.')
        // this.list.unshift('\'WHIP\' is used to increase\ndeveloper\'s motivation.\n\nGood luck.')
        this.list.unshift('안녕? 친구!!\n클라우드 세상에 온 것을 환영해!\n지금부터 나와 함께 클라우드 환경 운영을 해보자고.')
        this.list.unshift('나를 도와서 미션을 클리어 해줘.\n빨리 끝내고 집에 가고 싶어...\n야근 하고 싶지 않아ㅜ_ㅜ')
        this.list.unshift('친구만 믿을게! 참! 친구 이름이 뭐라고 했지^^?')
        this.commence()

        this.dialog.on('pointerup', function () {
            this.commence()
        }, this)
    }

    commence () {
        if (!this.g.visible) {
            // pause(true)
            // this.g.visible = true;
            // this.world.bringToTop(this.g)
        }

        if (this.list.length === 0) {
            // pause(false)
            this.g.destroy(true)
            this.scene.start(SCENE_MAIN_CHARACTER)
            // return
        }
        this.g.visible = true
        const current = this.list[this.list.length - 1]
        console.log(this.text)
        this.text.x = 100
        this.text.y = 400
        this.text.setText(current)
        this.list.pop()
    }
}

export {
    MainPrologScene
}
