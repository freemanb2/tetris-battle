const Phaser = require('phaser');

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  
}

function create ()
{
  var p1_grid = this.add.grid(200, 300, 320, 480, 32, 32, 0x7a7a7a, .7);
  var p2_grid = this.add.grid(570, 300, 320, 480, 32, 32, 0x7a7a7a, .7);
  
}