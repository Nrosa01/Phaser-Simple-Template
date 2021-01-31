import Player from '../libraries/player.js'
import PlatformPlayer from '../libraries/playerPlatform.js'
import Trigger from '../libraries/trigger.js'
import PauseKey from '../libraries/pauseKey.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() { }

  create() {
    this.add.bitmapText(400, 200, 'font', "¡Eso es un trigger!", 40);
    //this.label = this.add.text(400, 290, "¡<--- Eso es un trigger!", { fontColor: 0xffff00 });
    //this.player = new Player(this, 250, 250)
    this.player = new PlatformPlayer(this, 250, 250)

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
      y: 300,
      scene: this,
      xSize: 50,
      ySize: 50,
      collisionObject: this.player,
      enter: () => { console.log('entro') },
      exit: () => { console.log('salgo') },
      stay: () => { console.log('me quedo') },
    })
    //Esto te permite pausar el juego pulsando espacio, no lo recomiendo usar,
    //tiene bugs, seguramente no sepas como se arreglan y yo si se pero no tengo tiempo lol
    //El bug basicamente es que el input del los objetos no se cancela, lo cual ta feo
    //this.pauseButton = new PauseKey(this, 'Space'); 
  }

  update(time, delta) { }
}
