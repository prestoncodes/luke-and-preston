//This class is responbile for updating the game each second, kinda like a clock or engine
let fps = 2;
var currentFps = 0;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;
var engineUpdate = false;

function draw() {
  if (engineUpdate) {
    return;
  }
  requestAnimationFrame(draw);
  now = Date.now();
  delta = now - then;
  if (delta > interval) {
    then = now - (delta % interval);
    currentFps = Math.round((1 / delta) * 1000);

    updateGame(delta);
    renderGame();
  }
}

// draw();
// requestAnimationFrame(draw);
