export default class Boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
  
    //Este .js solo sirve para cargar recursos y dar comienzo a la escena
  
    preload() {
      let width = this.cameras.main.width;
      let height = this.cameras.main.height;
  
      //Loading screen
      let barPosX = width / 2 - 260;
      let barPosY = height / 2 + 30;
      let progressBar = this.add.graphics();
      let progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(barPosX, barPosY, 500, 35);
  
      let loadingText = this.make.text({
        x: width / 2,
        y: height / 2,
        text: 'Loading...',
        style: {
          font: '20px monospace',
          fill: '#ffffff'
        }
      });
      loadingText.setOrigin(0.5, 0.5);
  
      let percentText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      percentText.setOrigin(0.5, 0.5);
  
      let fileText = this.make.text({
        x: width / 2,
        y: height / 2 + 100,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff'
        }
      });
      fileText.setOrigin(0.5, 0.5);
  
      this.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(barPosX + 5, barPosY + 5, 480 * value, 25);
      });
  
      this.load.on('complete', function () {
        fileText.destroy();
        percentText.destroy()
        loadingText.destroy();
        progressBar.destroy();
        progressBox.destroy();
      });
  
  
      this.load.on('fileprogress', function (file) {
        fileText.setText(file.src)
      });
  
      //Jugador
      this.load.spritesheet('player', '../game/assets/player.png', { frameWidth: 32, frameHeight: 32 });
    }
  
    create() { this.scene.start('main'); }
  }