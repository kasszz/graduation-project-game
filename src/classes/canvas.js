export default class Canvas {
  constructor(element) {
      this.element = element;
      this.ctx = this.element.getContext('2d');
      this.width = 1000;
      this.height = 500;

      this.element.width = this.width;
      this.element.height = this.height;

      this.delta = 0;
  }

  get dimentions() {
    return {
      width: this.width,
      height: this.height
    }
  }
}
