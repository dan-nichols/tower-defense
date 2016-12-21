BlueTowerButton = function (game, x, y) {
  TowerButton.call(this, game, x, y, 1);
};

BlueTowerButton.prototype = Object.create(TowerButton.prototype);
BlueTowerButton.prototype.constructor = BlueTowerButton;

BlueTowerButton.prototype.buildTower = function(game, x, y) {
  return new BlueTower(game, x, y);
};
