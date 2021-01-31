import Player from '../libraries/player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {}

  create() {
    this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0xffff00 });
    this.player = new Player(this, 250, 250)
  }

  update(time, delta) {}
}
