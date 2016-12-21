RedTowerButton = function (game, x, y) {
  TowerButton.call(this, game, x, y, 0);

};

RedTowerButton.prototype = Object.create(TowerButton.prototype);
RedTowerButton.prototype.constructor = RedTowerButton;
// RedTowerButton.prototype.ballColourIndex = 0;

RedTowerButton.prototype.buildTower = function(game, x, y) {
  return new RedTower(game, x, y);
};
