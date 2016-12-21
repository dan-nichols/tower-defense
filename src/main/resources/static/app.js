App = function() {
  var handle1;
  var handle2;
  var rocks;

  var line1;
  var linesX;
  var linesY;

  var availableSpace;
  var towers;

  this.preload = function preload() {

      game.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);

  };

  this.create = function create() {
    rocks = new Array();
    availableSpace = new Array(GRID_X);
    for (x=0; x<GRID_X; x++) {
      availableSpace[x] = new Array(GRID_Y).fill(0);
    }

    //test
    availableSpace[2][1] = null;
    availableSpace[9][3] = 1;
    rocks.push(new Rock(game, 2, 1));

    game.stage.backgroundColor = '#124184';

    handle1 = game.add.sprite(100, 200, 'balls', 0);
    handle1.anchor.set(0.5);
    handle1.inputEnabled = true;
    handle1.input.enableDrag(true);

    handle2 = game.add.sprite(200, 300, 'balls', 0);
    handle2.anchor.set(0.5);
    handle2.inputEnabled = true;
    handle2.input.enableDrag(true);

    line1 = new Phaser.Line(handle1.x, handle1.y, handle2.x, handle2.y);

    createGrid();

    game.input.onDown.add(this.doSomething, this);
  };

  this.doSomething = function doSomething(pointer) {
    var xCoord = pixelsToCoords(pointer.x);
    var yCoord = pixelsToCoords(pointer.y);
    rocks.push(new Rock(game, xCoord, yCoord));
  };

  this.update = function update() {
    line1.fromSprite(handle1, handle2, false);
  };

  this.render = function render() {
    drawGrid();
    game.debug.geom(line1);
    game.debug.lineInfo(line1, 32, 32);

    game.debug.text("Drag the handles", 32, 550);
  };
}
