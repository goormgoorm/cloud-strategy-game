
import Phaser from 'phaser'
import { SCENE_MAIN_PROLOG, SCENE_MAIN_CHARACTER } from './constant'
class MainPrologScene extends Phaser.Scene {
    constructor () {
        super(SCENE_MAIN_PROLOG)
        this.list = []
    }

    preload () {
        this.load.image('text-box', 'images/text-box.png')
        // this.load.bitmapFont('visitor2', './fonts/visitor2.png', './fonts/visitor2.fnt')
        // this.load.text('prolog')
    }

    create () {
        this.g = this.add.group()
        this.dialog = this.add.sprite(400, 450, 'text-box').setOrigin(0.5).setScale(0.9).setInteractive()
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
        this.list.unshift('\n안녕, 구름구름 서비스에 접속한 걸 환영해!\n우리 구름구름 서비스에 대해 잠깐 설명하자면 \n현재 사용자가 10만명을 돌파하고, \n곧 해외에도 오픈 예정인 인기있는 게임 서비스야.')
        this.list.unshift('\n그런데 사용자가 급격하게 많아져서 속도도 느려지고, \n서비스도 중단되는 상황이 많아져서 \n우리 사용자들이 경쟁업체로 눈을 돌리려고 해.')
        this.list.unshift('\n친구가 도와줄 수 있겠니? \n참! 친구 이름이 뭐라고 했지?')
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
        // console.log(this.text)
        this.text.x = 120
        this.text.y = 350
        this.text.setText(current)
        this.list.pop()
    }
}

export {
    MainPrologScene
}
