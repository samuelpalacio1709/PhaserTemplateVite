import * as Phaser from 'phaser'; 

class Example extends Phaser.Scene {
    preload() {
    }
    create() {
    }
    update(){
    }
}


const config = {
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Example,
};

const game = new Phaser.Game(config);