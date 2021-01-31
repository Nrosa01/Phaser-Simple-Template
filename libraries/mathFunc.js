/**
 * Normalizes a given vector
 * @param {vector2} obj vecto2 to normalize (x,y) 
 */
export function normalizeVector(obj){
  if (!(obj.x === 0 && obj.y === 0)){
    let module = Math.sqrt(obj.x * obj.x + obj.y * obj.y);

    obj.x /= module;
    obj.y /= module;
  }
}

/**
 * Bidimensional module function
 * @param {number} id number to loop
 * @param {number} lenght max num id can reach
 */
export function loop(id, lenght){
  return (Math.abs(id + lenght) % lenght);
}

/**
 * Returns an integer number between 0 and max
 * @param {number} max maximum number to obtain 
 */
export function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}