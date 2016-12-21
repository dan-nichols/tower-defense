var game = new Phaser.Game(400, 800, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);

}

var handle1;
var handle2;
var rocks;

var line1;
var linesX;
var linesY;

var availableSpace;

var towers;

var GRID_SPACING = 40;
var GRID_X = 10;
var GRID_Y = 20;

function isAvailableSpace(x, y) {
  return true;
}

function create() {
    availableSpace = new Array(GRID_X);
    for (x=0; x<GRID_X; x++) {
      availableSpace[x] = new Array(GRID_Y).fill(0);
    }

    //test
    availableSpace[2][1] = null;
    availableSpace[9][3] = 1;

    placeRocks(availableSpace, 'balls');

    game.stage.backgroundColor = '#124184';

    handle1 = game.add.sprite(100, 200, 'balls', 0);
    handle1.anchor.set(0.5);
    handle1.inputEnabled = true;
    handle1.input.enableDrag(true);

    handle2 = game.add.sprite(400, 300, 'balls', 0);
    handle2.anchor.set(0.5);
    handle2.inputEnabled = true;
    handle2.input.enableDrag(true);

    line1 = new Phaser.Line(handle1.x, handle1.y, handle2.x, handle2.y);

    linesX = new Array();
    for (x=0; x<10; x++) {
      linesX.push(new Phaser.Line(x * GRID_SPACING, 0, x * GRID_SPACING, game.height));
    }
    linesY = new Array();
    for (y=0; y<20; y++) {
      linesY.push(new Phaser.Line(0, y * GRID_SPACING, game.width, y * GRID_SPACING));
    }
}

function placeRocks(availableSpace, sprite) {
  rocks = new Array();
  availableSpace.forEach(function (xSpace, xIndex) {
    xSpace.forEach(function(ySpace, yIndex) {
      // ySpace = 1 or 0
      if (ySpace == 1) {
        var rock = game.add.sprite((xIndex*GRID_SPACING) + (GRID_SPACING/2), (yIndex*GRID_SPACING) + (GRID_SPACING/2), sprite, 0);
        rock.anchor.set(0.5);
        rocks.push(rock);
      }
    });
  });

}

function update() {

    line1.fromSprite(handle1, handle2, false);

}

function render() {
    linesX.forEach (function(line) {
      game.debug.geom(line);
    });
    linesY.forEach (function(line) {
      game.debug.geom(line);
    });

    game.debug.geom(line1);
    game.debug.lineInfo(line1, 32, 32);

    game.debug.text("Drag the handles", 32, 550);

}
