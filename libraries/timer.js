//El timer se para automáticamente al llegar a 0, puede reiniciarse usando el método restart
//También se puede destruir pero no lo recomiendo, si llamas a algún lado a getTime
//asegurate entonces de que tu timer no es null, porque será problemático si lo destruyes y luego intentas
//acceder a getTime

export default class Timer extends Phaser.GameObjects.GameObject {
    constructor(data) {
        super(data.scene, 0, 0)
        data.scene.add.existing(this);
        this.initialTimer = data.time * 1000;;
        this.internalTimer = this.initialTimer;
        this.isStopped = false;
        this.callback = () => {
            data.callback();
            this.stop();
        };
    }

    getTime() {
        return Math.round(this.internalTimer / 1000);
    }

    stop() {
        this.isStopped = true;
    }

    destroyTimer() { //Si se llama destroy da error por cosas de Phaser
        this.destroy(true) //Se destruye al final del frame
    }

    restart() {
        this.isStopped = true;
        this.internalTimer = this.initialTimer
    }
    preUpdate(time, delta) {
        if (this.isStopped) return;
        this.internalTimer -= Math.round(delta)
        if (this.getTime() <= 0) this.callback();
    }
}

//Ejemplo

// this.timer = new Timer(
//     {
//       scene: this,
//       time: 100,
//       callback: () => {
//         this.scene.start('lose');
//       }
//     }
//   );

//Crea un timer de 100 segundos