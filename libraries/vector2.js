/**
 * Simple vector 2 class consisting in two integers (x,y)
 * @param {number} x x value of the vector
 * @param {number} y y value of the vector
 */
export default class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static substract(v1, v2) {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y
        }
    }

    static add(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        }
    }


    static zero() {
        return { x: 0, y: 0 }
    }

    static equal(vector1, vector2) {
        return vector1.x === vector2.x && vector1.y === vector2.y
    }

    static direction(vector1, vector2) {
        let direction = {
            x: vector1.x - vector2.x,
            y: vector1.y - vector2.y,
        }

        if (this.equal(direction, this.zero())) return direction;

        //Normalizar la distancia
        let divisor = 0;
        if (Math.abs(direction.x) < Math.abs(direction.y)) divisor = Math.abs(direction.y)
        else divisor = Math.abs(direction.x)

        direction.x /= divisor
        direction.y /= divisor

        return direction
    }

    static multiply(v1, v2) {
        return {
            x: v1.x * v2.x,
            y: v1.y * v2.y,
        }
    }

    static powMagnitude(v1) {
        return (v1.x * v1.x + v1.y * v1.y)
    }
}