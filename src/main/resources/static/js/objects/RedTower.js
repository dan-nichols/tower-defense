RedTower = function (game, x, y) {
    this.xCoord = x;
    this.yCoord = y;

    Phaser.Sprite.call(this, game, coordToPixelsX(x), coordToPixelsY(y), 'balls', 0);
    this.anchor.set(0.5);

    game.add.existing(this);
};

RedTower.prototype = Object.create(Phaser.Sprite.prototype);
RedTower.prototype.constructor = RedTower;

RedTower.prototype.update = function() {

};
