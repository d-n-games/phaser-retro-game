const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  backgroundColor: '#000000',
  scene: {
    create
  }
};

new Phaser.Game(config);

function create() {
  this.add.text(40, 100, 'HELLO RETRO GAME', {
    fontSize: '16px',
    fill: '#ffffff'
  });
}
