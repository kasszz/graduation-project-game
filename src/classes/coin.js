export default class Coin {
  constructor(data) {
    this.canvas = data.canvas;
    this.gc = data.gc;
    this.GOIndex = data.GOIndex;
    this.tag = data.tag;
    this.lineIndex = data.lineIndex;
    this.speed = 300;
    this.worth = 15;
    this.dimentions = {
      width: 150,
      height: 150
    }
    this.position = {
      x: this.calculateX(),
      y: 0 - this.dimentions.height
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
    this.position.y += this.speed * this.canvas.delta;
  }

  checkOffscreen() {
    if(this.position.y > this.canvas.height) {
      this.gc.destroy(this.GOIndex);
      this.gc.resetCombo();
      this.gc.coinOutOfGame ++;
    }
  }

  calculateX() {
    return (this.lineIndex * this.gc.lineWidth - (this.gc.lineWidth / 2)) - (this.dimentions.width / 2);
  }
}
