App = function() {
  var handle1;
  var handle2;
  var rocks;

  var line1;
  var linesX;
  var linesY;

  var availableSpace;
  var towers;
  var towerButtons;

  this.preload = function preload() {
      game.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);
  };

  this.initTowers = function initTowers() {
    towers = new Array();
    towerButtons = new Array();
    towerButtons.push(new RedTowerButton(game, 3, GRID_Y - 1));
    towerButtons.push(new BlueTowerButton(game, 4, GRID_Y - 1));
  }

  this.create = function create() {
    // availableSpace = new Array(GRID_X);
    // for (x=0; x<GRID_X; x++) {
    //   availableSpace[x] = new Array(GRID_Y).fill(0);
    // }
    //
    // //test
    // availableSpace[2][1] = null;
    // availableSpace[9][3] = 1;
    rocks = new Array();
    this.initTowers();

    game.stage.backgroundColor = '#124184';

    createGrid();

    game.input.onDown.add(this.doSomething, this);
  };

  this.doSomething = function doSomething(pointer) {

    if (selectedTower == null) {
      return;
    }

    var xCoord = pixelsToCoords(pointer.x);
    var yCoord = pixelsToCoords(pointer.y);
    if (yCoord < GRID_Y - 1) {
      towers.push(selectedTower.buildTower(game, xCoord, yCoord));
    }
  };

  this.update = function update() {
  };

  this.render = function render() {
    drawGrid();
    game.debug.text("Drag the handles", 32, 550);
  };
}
