export default class Player {
  constructor(data) {
    this.canvas = data.canvas;
    this.gc = data.gc;
    this.GOIndex = data.GOIndex;
    this.tag = data.tag;
    this.lineActive = 0;

    this.dimentions = {
      width: this.gc.lineWidth,
      height: 10
    }
  }

  update() {
    this.move();
    this.checkCollidion();
  }

  draw() {
    if(this.gc.debug) {
      this.canvas.ctx.fillStyle = 'green';
      this.canvas.ctx.fillRect(this.position.x, this.position.y, this.dimentions.width, this.dimentions.height);
    }
  }

  setMove(position) {
    this.lineActive = position;
    this.setPosition();
  }

  move() {
    if(this.gc.keysPressed.a) {
      this.lineActive = 0;
    } else if(this.gc.keysPressed.s) {
      this.lineActive = 1;
    } else if(this.gc.keysPressed.d) {
      this.lineActive = 2;
    }

    this.setPosition();
  }

  setPosition() {
    this.position = {
      x: this.calculateX(),
      y: this.canvas.height - this.dimentions.height
    }
  }

  checkCollidion() {
    this.gc.gameObjects.forEach((go, i) => {
      if(i === this.GOIndex) {
        return;
      }

      const collition = utils.isCollidingWith(this, go);

      if(collition && collition.tag === 'coin') {
        this.gc.addToScore(collition.worth);
        this.gc.addToCombo();
        this.gc.coinOutOfGame ++;
        this.gc.destroy(collition.GOIndex);
      }
    });
  }

  calculateX() {
    return this.lineActive * this.gc.lineWidth;
  }
}
