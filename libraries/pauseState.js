export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "pause" });
  }
  init(data) {
    this.sceneToResume = data.scene;
  }


  preload() { }

  create() {
    this.resume = this.input.keyboard.addKey('Space');
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.resume)) {
      this.scene.stop()
      this.scene.resume(this.sceneToResume.scene.key)
      this.sceneToResume.pauseButton.pause.isDown = false;
    }
  }
}
