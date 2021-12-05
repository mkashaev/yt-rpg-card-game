import Phaser from 'phaser';
import MainScene from 'scenes/MainScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 1024,
  backgroundColor: '#333333',
  scene: [MainScene],
};
// parent: 'phaser-game',

export default new Phaser.Game(config);
