/**
 * Button sprite interactuable with cursor
 * @param {object} data needed for constructing the class
 * 
 * /// PARAMS NEEDED TO PASS AS AN OBJECT WHEN CREATING ///
 * 
 * @param {Phaser.Scene} context reference to the Phase scene
 * @param  {number} x    x position of the object in the scene
 * @param  {number} y    y position of the object in the scene
 * @param {string} sprite sprite name for the button to load
 * @param {function} function function to call when the button is clicked
 */
//TEMPLATE
// let button = new Button({
//     x: 100,
//     y: 150,
//     context: this,
//     sprite: 'playButton',
//     function: () => {
//       console.log("Button clicked")
//     }

import CT from "./constants.js";
import Tweener from "./tween.js";

//   })
export default class Button extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.context, data.x, data.y, data.sprite)
        data.context.add.existing(this)
        this.setInteractive();
        this.setScrollFactor(0)
        this.wasOver = false;
        let onOver = () => { this.OnOver(data.context); }
        let onOut = () => { this.OnOut(data.context); }
        let onDown = () => {
            if('function' in data) data.function()
            else console.log('Bro un botón sin callback es inútil xDDD')
            //data.context.sliderEnd.play();
        }

        this.on('pointerdown', onDown, data.context)
        this.on('pointerover', onOver, data.context)
        this.on('pointerout', onOut, data.context)

        this.animation = new Tweener({
            context: data.context,
            target: this,
            duration: CT.buttonAnimation,
            ease: 'Circ',
            locked: false,
            hidden: true,
            attribs: [
                {
                    propertie: 'scaleX',
                    hidden: 1.25,
                    notHidden: 1
                },
                {
                    propertie: 'scaleY',
                    hidden: 1.25,
                    notHidden: 1
                }
            ]
        })
    }

    OnOver(scene) {
        if (!this.wasOver) {
            //scene.slider.play() //Tengo que crear un gestor de sonidos global
            this.animation.Toggle()
            this.wasOver = true;
        }
    }

    OnOut(scene) {
        if (this.wasOver) {
            this.animation.Toggle()
            this.wasOver = false;
        }

    }
}