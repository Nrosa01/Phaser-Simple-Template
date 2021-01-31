export default class Boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
  
    //Este .js solo sirve para cargar recursos y dar comienzo a la escena
  
    preload() {
      //Jugador
      this.load.spritesheet('player', '../game/assets/player.png', { frameWidth: 32, frameHeight: 32 });
      this.load.image('platform', '../game/assets/platform.png')
      this.load.bitmapFont('font', '../game/assets/mainFont.png', '../game/assets/mainFont.fnt');
    }
  
    create() { this.scene.start('main'); }
  }