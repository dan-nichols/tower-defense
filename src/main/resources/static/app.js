App = function() {
  var linesX;
  var linesY;

  var towers;
  var towerButtons;

  this.preload = function preload() {
      game.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);
  };

  this.create = function create() {
    this.initTowers();
    game.stage.backgroundColor = '#124184';
    createGrid();

    game.input.onDown.add(this.addTowerAttempt, this);
  };

  this.initTowers = function initTowers() {
    towers = new Array();
    towerButtons = new Array();
    towerButtons.push(new RedTowerButton(game, 3, GRID_Y - 1));
    towerButtons.push(new BlueTowerButton(game, 4, GRID_Y - 1));
  }

  this.addTowerAttempt = function addTowerAttempt(pointer) {
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
  };
}
