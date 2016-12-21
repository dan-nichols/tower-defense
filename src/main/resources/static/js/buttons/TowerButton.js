TowerButton = function (game, x, y, colour) {
    this.xCoord = x;
    this.yCoord = y;

    Phaser.Sprite.call(this, game, coordToPixelsX(x), coordToPixelsY(y), 'balls', colour);
    this.anchor.set(0.5);
    game.add.existing(this);

    this.inputEnabled = true;
    this.events.onInputDown.add(this.selectMe, this);
};

TowerButton.prototype = Object.create(Phaser.Sprite.prototype);
TowerButton.prototype.constructor = TowerButton;

TowerButton.prototype.update = function() {

};

TowerButton.prototype.selectMe = function() {
  if (selectedTower != null) {
    selectedTower.tint = 0xFFFFFF;
  }

  selectedTower = this;
  selectedTower.tint = 0xAAAAAA;
  // TODO: Make this tint a border or something else
  //       cool to show it is selected
};
