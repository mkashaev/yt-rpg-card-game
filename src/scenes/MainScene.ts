import Phaser from 'phaser';
// import CardContainer from 'prefabs/CardContainer';
// import CardDraggable from 'prefabs/CardDraggable';
import CardPlayer from 'prefabs/CardPlayer';

export default class MainScene extends Phaser.Scene {
  private player: CardPlayer;

  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.image('armor', 'assets/images/armor.png');
    this.load.image('card', 'assets/images/card.png');
    this.load.image('dead', 'assets/images/dead.png');
    this.load.image('deathknight', 'assets/images/deathknight.png');
    this.load.image('firedrake', 'assets/images/firedrake.png');
    this.load.image('goldendragon', 'assets/images/goldendragon.png');
    this.load.image('healingpotion', 'assets/images/healingpotion.png');
    this.load.image('kobold', 'assets/images/kobold.png');
    this.load.image('ogre', 'assets/images/ogre.png');
    this.load.image('paladin', 'assets/images/paladin.png');
    this.load.image('playercard', 'assets/images/playercard.png');
    this.load.image('restartbutton', 'assets/images/restartbutton.png');
    this.load.image('shield', 'assets/images/shield.png');
    this.load.image('troll', 'assets/images/troll.png');
    this.load.bitmapFont(
      'pressstart',
      'assets/images/pressstart.png',
      'assets/images/pressstart.fnt',
    );
  }

  create() {
    this.player = new CardPlayer({
      scene: this,
      name: 'Palading',
      health: '16',
      x: Number(this.game.config.width) / 2,
      y: Number(this.game.config.height) - 600,
      card: 'playercard',
      image: 'paladin',
      depth: 1,
      onDragEnd: () => {
        console.log('Drag end');
      },
    });
  }
}
