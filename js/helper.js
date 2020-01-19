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
function updateGame(delta) {
  updateSprites(delta);
}

function renderGame() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  drawSprites();

  drawLabels();
}

function updateSprites(delta) {
  Object.keys(sprites).forEach(function(spriteID) {
    // var sprite = sprites[spriteID];
    // console.log(sprite);
  });
}

//LABELS CONTROLS//
function drawLabels() {
  Object.keys(labels).forEach(function(labelID) {
    let label = labels[labelID];
    drawLabel(label.text, label.xPos, label.yPos);
  });
}
function drawLabel(text, x, y) {
  console.log("DRQ");
  canvasContext.font = font;

  canvasContext.fillText(text, x, y);
}

//SPRITE CONTROLLS//
function drawSprites() {
  Object.keys(sprites).forEach(function(spriteID) {
    let sprite = sprites[spriteID];
    if (sprite.image.complete) {
      drawSprite(spriteID);
    } else {
      sprite.image.onload = function() {
        sprites[spriteID].calculateScale(
          sprite.image.width,
          sprite.image.height
        );
        drawSprite(spriteID);
      };
    }
  });
}

function drawSprite(spriteID) {
  let sprite = sprites[spriteID];
  if (sprite.showBubble) {
    drawLabel(sprite.textBubble, sprite.xPos, sprite.yPos);
    setTimeout(function() {
      sprites[spriteID].setBubbleSpeech(false);
    }, sprite.speechTimerMilliseconds); // get in millseconds
  }
  canvasContext.drawImage(
    sprite.image,
    sprite.xPos,
    sprite.yPos,
    sprite.width,
    sprite.height
  );
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
  console.log("New " + font);
}

function getFont() {
  return fontSize + "px " + fontName;
}
