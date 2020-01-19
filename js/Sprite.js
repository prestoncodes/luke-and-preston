class Sprite {
  constructor(data) {
    this.spriteId = data.spriteId;

    this.xPos = data.xPos;
    this.yPos = data.yPos;
    this.velocityX = 0;
    this.velocityY = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.url = data.url;
    this.image = new Image();
    this.image.src = data.url;
    console.log(this.image);
    sprites[this.spriteId] = this;
    console.log("Sprite made: " + JSON.stringify(this));
  }

  load() {
    // this.image.src = this.url;
  }
}
