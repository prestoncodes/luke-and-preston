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
  width: 100,
  height: 100,
  url: "images/player.png"
});

var enemy = new Sprite({
  id: "enemySprite",
  xPos: 200,
  yPos: 100,
  width: 100,
  height: 100,
  url: "images/enemy.png"
});

function userSubmittedText(text) {
  //text is the input from the user
  console.log("Game.js input detected: " + text);
  player.move(150, 100);
  player.setBubbleSpeech(true);
}

drawSprites();

drawLabels();
