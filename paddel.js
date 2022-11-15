const speed = 0.2;

export default class Paddel {
  constructor(paddelElem) {
    this.paddelElem = paddelElem;
    this.resat()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddelElem).getPropertyValue("--position")
    );
  }
  set position(value) {
    this.paddelElem.style.setProperty("--position", value);
  }
  rect(){
    return this.paddelElem.getBoundingClientRect()
  }
  resat() {
    this.position = 50;
  }
  update(delta, ballHiight) {
    this.position += speed * delta * (ballHiight - this.position);
  }
}
