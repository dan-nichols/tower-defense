BlueTower = function (game, x, y) {
    this.xCoord = x;
    this.yCoord = y;

    Phaser.Sprite.call(this, game, coordToPixelsX(x), coordToPixelsY(y), 'balls', 1);
    this.anchor.set(0.5);

    game.add.existing(this);
};

BlueTower.prototype = Object.create(Phaser.Sprite.prototype);
BlueTower.prototype.constructor = BlueTower;

BlueTower.prototype.update = function() {

};
