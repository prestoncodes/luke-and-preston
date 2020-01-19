let canvas = getObject("canvas");
let canvasContext = canvas.getContext("2d");

let fontName = "courier";
let fontSize = "30";
let font = getFont();

var sprites = [];
var labels = [];

function getObject(objectId) {
  return document.getElementById(objectId);
}

//update function
function update() {
  updateSprites();
}

function updateSprites() {
  Object.keys(sprites).forEach(function(spriteID) {
    var sprite = sprites[spriteID];
  });
}

function render() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  drawLabels();
  drawSprites();
}

function drawLabels() {
  Object.keys(labels).forEach(function(labelID) {
    let label = labels[labelID];
    drawText(label.text, label.xPos, label.yPos);
  });
}

//TEXT CONTROLS//
function drawText(text, x, y) {
  canvasContext.font = font;
  canvasContext.fillText(text, x, y);
}

function drawSprites() {
  Object.keys(sprites).forEach(function(spriteID) {
    let sprite = sprites[spriteID];
    console.log(sprite);
    if (sprite.image.completed) {
      drawImage(sprite.image, sprite.xPos, sprite.yPos);
    } else {
      console.log("waiting for load");
      sprite.image.onload = function() {
        drawSprite(sprite.image, sprite.xPos, sprite.yPos);
        console.log("I loaded");
      };
    }
  });
}
function drawSprite(image, xPos, yPos) {
  canvasContext.drawImage(image, xPos, yPos);
}

// FONT CONTROLS //
function setFontSize(size) {
  fontSize = size;
  setFont();
}

function setFontName(name) {
  fontName = name;
  setFont();
}

function setFont() {
  font = getFont();
  console.log("New font loaded: " + font);
}

function getFont() {
  return fontSize + "px " + fontName;
}
