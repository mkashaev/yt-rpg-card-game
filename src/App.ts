import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    console.log('Hello');
  }
}

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [MainScene],
};

export default new Phaser.Game(config);
