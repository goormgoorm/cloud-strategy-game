import { Game } from './Game'
import { MainScene } from './MainScene'


window.addEventListener("load", function () {

    // const option = {
    //     type: Phaser.AUTO,
    //     width: 1024,
    //     height: 768,
    //     gameTitle: 'Grum Grum'
    // }

    class MainAnimation extends Phaser.Scene
    {
        constructor ()
        {
            super();
        }

        preload ()
        {
            this.load.path = 'images/main-screen/';

            this.load.image('main1', 'main-img-1.png');
            this.load.image('main2', 'main-img-2.png');
            this.load.image('main3', 'main-img-3.png');
            this.load.image('main4', 'main-img-4.png');
            this.load.image('main5', 'main-img-5.png');
            this.load.image('main6', 'main-img-6.png');
            this.load.image('main7', 'main-img-7.png');
            this.load.image('main8', 'main-img-8.png');
            this.load.image('main9', 'main-img-9.png');
            this.load.image('main10', 'main-img-10.png');
            this.load.image('main11', 'main-img-11.png');
            this.load.image('main12', 'main-img-12.png');
            this.load.image('main13', 'main-img-13.png');
            this.load.image('main14', 'main-img-14.png');
            this.load.image('main15', 'main-img-15.png');
            this.load.image('main16', 'main-img-16.png');
            this.load.image('main17', 'main-img-17.png');
            this.load.image('main18', 'main-img-18.png');
            this.load.image('main19', 'main-img-19.png');
            this.load.image('main20', 'main-img-20.png');
            this.load.image('main21', 'main-img-21.png');
            this.load.image('main22', 'main-img-22.png');
            this.load.image('main23', 'main-img-23.png');
            this.load.image('main24', 'main-img-24.png');
            this.load.image('main25', 'main-img-25.png');
            this.load.image('main26', 'main-img-26.png');
            this.load.image('main27', 'main-img-27.png');
            this.load.image('main28', 'main-img-28.png');
            this.load.image('main29', 'main-img-29.png');
            this.load.image('main30', 'main-img-30.png');
            this.load.image('main31', 'main-img-31.png');
            this.load.image('main32', 'main-img-32.png');
            this.load.image('main33', 'main-img-33.png');
            this.load.image('main34', 'main-img-34.png');
            this.load.image('main35', 'main-img-35.png');
            this.load.image('main36', 'main-img-36.png');
            this.load.image('main108', 'main-img-108.png');
            this.load.image('main109', 'main-img-109.png');
            this.load.image('main110', 'main-img-110.png');
            this.load.image('main111', 'main-img-111.png');
            this.load.image('main112', 'main-img-112.png');
            this.load.image('main113', 'main-img-113.png');
            this.load.image('main114', 'main-img-114.png');
            this.load.image('main115', 'main-img-115.png');
            this.load.image('main116', 'main-img-116.png');
            this.load.image('main117', 'main-img-117.png');
            this.load.image('main118', 'main-img-118.png');
            this.load.image('main119', 'main-img-119.png');
            this.load.image('main120', 'main-img-120.png');
            this.load.image('main121', 'main-img-121.png');
            this.load.image('main122', 'main-img-122.png');
            this.load.image('main123', 'main-img-123.png');
            this.load.image('main124', 'main-img-124.png');
            this.load.image('main125', 'main-img-125.png');
            this.load.image('main126', 'main-img-126.png');
            this.load.image('main127', 'main-img-127.png');
        }

        create ()
        {
            this.anims.create({
                key: 'snooze',
                frames: [
                    { key: 'main1' },
                    { key: 'main2' },
                    { key: 'main3' },
                    { key: 'main4' },
                    { key: 'main5' },
                    { key: 'main6' },
                    { key: 'main7' },
                    { key: 'main8' },
                    { key: 'main9' },
                    { key: 'main10' },
                    { key: 'main11' },
                    { key: 'main12' },
                    { key: 'main13' },
                    { key: 'main14' },
                    { key: 'main15' },
                    { key: 'main16' },
                    { key: 'main17' },
                    { key: 'main18' },
                    { key: 'main19' },
                    { key: 'main20' },
                    { key: 'main21' },
                    { key: 'main22' },
                    { key: 'main23' },
                    { key: 'main24' },
                    { key: 'main25' },
                    { key: 'main26' },
                    { key: 'main27' },
                    { key: 'main28' },
                    { key: 'main29' },
                    { key: 'main30' },
                    { key: 'main31' },
                    { key: 'main32' },
                    { key: 'main33' },
                    { key: 'main34' },
                    { key: 'main35' },
                    { key: 'main36' },
                    { key: 'main108' },
                    { key: 'main109' },
                    { key: 'main110' },
                    { key: 'main111' },
                    { key: 'main112' },
                    { key: 'main113' },
                    { key: 'main114' },
                    { key: 'main115' },
                    { key: 'main116' },
                    { key: 'main117' },
                    { key: 'main118' },
                    { key: 'main119' },
                    { key: 'main120' },
                    { key: 'main121' },
                    { key: 'main122' },
                    { key: 'main123' },
                    { key: 'main124' },
                    { key: 'main125' },
                    { key: 'main126' },
                    { key: 'main127', duration: 50 }
                ],
                frameRate: 8,
                repeat: -1
            });

            this.add.sprite(400, 300, 'main1')
                .play('snooze');
        }
    }

    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        backgroundColor: '#fbf0e4',
        scene: [ MainAnimation ]
    };

    const game = new Game(config);
    // console.log(game.scene)
    game.scene.add('myScene', MainScene, true, { x: 400, y: 450 });
});
