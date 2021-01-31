import Player from '../libraries/player.js'
import PlatformPlayer from '../libraries/playerPlatform.js'
import Trigger from '../libraries/trigger.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() { }

  create() {
    this.label = this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0xffff00 });
    this.label.setScrollFactor(0)
    this.player = new Player(this, 250, 250)
    //this.player = new PlatformPlayer(this, 250, 250)

    this.platform = this.add.sprite(250, 350, 'platform')
    this.physics.add.existing(this.platform);
    this.platform.body.setImmovable();
    this.platform.body.allowGravity = false
    this.physics.add.collider(this.player, this.platform)

    //Camera settings
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setLerp(0.9, 0.9)

    this.trigger = new Trigger({
      x: 350,
      y: 200,
      scene: this,
      xSize: 50,
      ySize: 50,
      collisionObject: this.player,
      enter: () => { console.log('entro') },
      exit: () => { console.log('salgo') },
      stay: () => { console.log('me quedo') },
    })
  }

  update(time, delta) { }
}
