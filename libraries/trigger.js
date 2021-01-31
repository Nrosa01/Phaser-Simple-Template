
// TEMPLATE 
// let trigger = new Trigger({
//    x: object.x,
//    y: object.y,
//    scene: this,
//    xSize: 50,
//    ySize: 50,,
//    collisionObject: this.player,
//    enter: () => {},
//    exit: () => {},
//    stay: () => {},
// })
/**
 * Create a trigger that respond to collisions with player
 * (it must exist a player in a phaser scene)
 * @param  {object} data data needed for constructing de class
 * 
 *  /// PARAMS NEEDED TO PASS AS AN OBJECT WHEN CREATING ///
 * 
 * @param  {number} x    x position of the object in the scene
 * @param  {number} y    y position of the object in the scene
 * @param  {Phaser.Scene} scene referecne to the Phaser scene
 * @param  {number} xSize x size of the trigger bounds
 * @param  {number} ySize y size of the trigger bounds
 * @param  {function} enter function called when the player enters the trigger first time
 * @param  {function} stay function called when the player stays in the trigger
 * after the first time
 * @param  {function} exit funtion called when the player leaves the trigger
 * 
 * FUNCTIONS HAS NO PARAMS, THEY AREN'T NEEDED THO 
 * 
 */
export default class Trigger extends Phaser.GameObjects.GameObject {
    constructor(data) {
        super(data.scene, data.x, data.y)
        this.scene.add.existing(this)

        this.trigger = data.scene.add.zone(data.x, data.y);
        this.trigger.setSize(data.xSize, data.ySize);
        this.playerRef = data.scene.player
        this.collisionToCheck = data.collisionObject
        this.hasEntered = false;

        this.onTriggerEnter = () => {
            this.hasEntered = true;
            if ('enter' in data) data.enter()
        }
        this.onTriggerExit = () => { if ('exit' in data) data.exit() }
        this.onTriggerStay = () => { if ('stay' in data) data.stay() }
    }

    destroy() { //Si este método da problemas, solo cambiale el nombre de destroy a otra cosa, solo si pasara a algo
        this.trigger.destroy(true)
    }

    checkOverlap() {

        var boundsA = this.trigger.getBounds();
        var boundsB = this.collisionToCheck.getBounds();

        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
    }

    preUpdate() {

        if (this.checkOverlap()) {
            if (!this.hasEntered) this.onTriggerEnter();
            else this.onTriggerStay();
        }
        else if (this.hasEntered) {
            this.onTriggerExit()
            this.hasEntered = false;
        }
    }

}