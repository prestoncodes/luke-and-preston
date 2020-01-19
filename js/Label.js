class Label {
  constructor(data) {
    this.text = data.text;
    this.xPos = data.xPos;
    this.yPos = data.yPos;
    console.log("New label made");
    labels[data.id] = this;
  }
}
