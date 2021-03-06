Rock = function (game, x, y) {

    this.xCoord = x;
    this.yCoord = y;
    //  We call the Phaser.Sprite passing in the game reference
    //  We're giving it a random X/Y position here, just for the sake of this demo - you could also pass the x/y in the constructor
    Phaser.Sprite.call(this, game, coordToPixelsX(x), coordToPixelsY(y), 'balls', 1);
    this.anchor.set(0.5);

    game.add.existing(this);

};

Rock.prototype = Object.create(Phaser.Sprite.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.update = function() {

    //  Automatically called by World.update
    //this.angle += this.rotateSpeed;

};
