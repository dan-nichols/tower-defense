var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'phaser-example', new App());

var GRID_SPACING = 40;
var GRID_X = game.width / GRID_SPACING;
var GRID_Y = game.height / GRID_SPACING;

var selectedTower = null;
