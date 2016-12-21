function createGrid() {
  linesX = new Array();
  for (x=0; x<10; x++) {
    linesX.push(new Phaser.Line(x * GRID_SPACING, 0, x * GRID_SPACING, game.height));
  }
  linesY = new Array();
  for (y=0; y<20; y++) {
    linesY.push(new Phaser.Line(0, y * GRID_SPACING, game.width, y * GRID_SPACING));
  }
}

function drawGrid() {
  linesX.forEach (function(line) {
    game.debug.geom(line);
  });
  linesY.forEach (function(line) {
    game.debug.geom(line);
  });
}

function coordToPixelsX(x) {
  return coordToPixels(x);
}

function coordToPixelsY(y) {
  return coordToPixels(y);
}

function coordToPixels(coord) {
  return (coord*GRID_SPACING) + (GRID_SPACING/2);
}

function pixelsToCoords(pixel) {
  return Math.floor(pixel/GRID_SPACING);
}
