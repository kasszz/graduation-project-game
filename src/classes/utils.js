export default class Utils {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.exp(Math.random()*Math.log(max - min + 1))) + min;
  }

  isCollidingWith(element, target) {
    if (element.position.x < target.position.x + target.dimentions.width &&
      element.position.x + element.dimentions.width > target.position.x &&
      element.position.y < target.position.y + target.dimentions.height &&
      element.dimentions.height + element.position.y > target.position.y) {
        return target;
    } else {
      return false;
    }
  }
}

/*
isCollidingWith
https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection

getRandomInt
http://stackoverflow.com/questions/1062902/how-random-is-javascripts-math-random
*/
