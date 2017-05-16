export default class Coin {
  constructor(data) {
    this.canvas = data.canvas;
    this.gc = data.gc;
    this.GOIndex = data.GOIndex;
    this.tag = data.tag;
    this.lineIndex = data.lineIndex;
    this.speed = 400;
    this.worth = 15;
    this.dimentions = {
      width: 75,
      height: 75
    }
    this.position = {
      x: this.canvas.width + this.dimentions.width,
      y: this.calculateY()
    }

    this.image = new Image();
    this.image.src = 'assets/images/voorhoedeLogo.png';
  }

  update() {
    this.updatePosition();
    this.checkOffscreen();
  }

  draw() {
    this.canvas.ctx.drawImage(this.image, this.position.x, this.position.y, this.dimentions.width, this.dimentions.height);
  }

  updatePosition() {
    this.position.x -= this.speed * this.canvas.delta;
  }

  checkOffscreen() {
    if(this.position.x < -this.dimentions.width) {
      this.gc.destroy(this.GOIndex);
      this.gc.resetCombo();
    }
  }

  calculateY() {
    return (this.lineIndex * this.gc.lineHeight - (this.gc.lineHeight / 2)) - (this.dimentions.height / 2);
  }
}
