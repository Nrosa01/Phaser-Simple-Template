import Dialog from '../../configs/dialogConfig.js'

/**
 * Clase que crea un texto y lo anima caracter por caracter
 * @param {Phaser.Scene} scene Escena de phaser donde se construye el texto
 * @param {string} text Texto para construir
 */
export default class AnimatedText extends Phaser.GameObjects.BitmapText {
    constructor(scene, text) {
        super(scene, text.x, text.y, Dialog.dialogFont, text.text
            , Dialog.dialogSize, Dialog.dialogAlign)

        scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)

        let copy = this.text
        this.text = ""
        this.i = 0
        this.timer = scene.time.addEvent({
            callback: () => {
                this.text += copy[this.i]
                this.i++
            },
            repeat: copy.length - 1,
            delay: Dialog.dialogSpeed,
        })

        this.visible = true
    }

    stopAnimation() {
        this.timer.remove();
        this.destroy(true)
    }
}