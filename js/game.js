console.log("Game loaded");

var healthLabel = new Label({
  id: "healthLabel",
  text: "Health: 100",
  xPos: 10,
  yPos: 55
});

var ammoLabel = new Label({
  id: "ammoLabel",
  text: "Ammo: 10",
  xPos: 10,
  yPos: 30
});

var player = new Sprite({
  id: "playerSprite",
  xPos: 100,
  yPos: 100,
  url: "images/player.png"
});

drawSprites();

function userSubmittedText(text) {
  //text is the input from the user
  console.log("Game.js input detected: " + text);
}

drawLabels();
