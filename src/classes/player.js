export default class Player {
  constructor(data) {
    this.canvas = data.canvas;
    this.gc = data.gc;
    this.GOIndex = data.GOIndex;
    this.tag = data.tag;
    this.lineActive = 0;
    this.position = {
      x: 0,
      y: this.calculateY()
    }
    this.dimentions = {
      width: 10,
      height: this.gc.lineHeight
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
      x: 0,
      y: this.calculateY()
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

  calculateY() {
    return this.lineActive * this.gc.lineHeight;
  }
}
