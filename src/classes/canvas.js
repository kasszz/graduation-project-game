export default class Canvas {
  constructor(element) {
      this.element = element;
      this.ctx = this.element.getContext('2d');
      this.width = document.body.offsetWidth
      this.height = document.body.offsetHeight

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
