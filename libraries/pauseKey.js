export default class PauseKey extends Phaser.GameObjects.GameObject {
    constructor(scene, pauseButton) {
        super(scene, 0, 0)
        this.scene = scene;
        this.scene.add.existing(this);
        this.pause = this.scene.input.keyboard.addKey(pauseButton);
    }

    pauseScene() {
        this.scene.input.disable(this.scene);
        this.scene.scene.launch('pause', { scene: this.scene });
        this.scene.scene.pause();
    }

    preUpdate(time, delta) {
        if (this.pause.isDown) { this.pauseScene() }
    }

}
