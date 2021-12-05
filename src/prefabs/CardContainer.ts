import Phaser from 'phaser';

export interface ICardContainerConfig {
  scene: Phaser.Scene;
  x: number;
  y: number;
  name: string;
  card: string;
  image: string;
  depth: number;
}

export default class CardContainer extends Phaser.GameObjects.Container {
  public spriteCard: Phaser.GameObjects.Sprite;
  public spriteImage: Phaser.GameObjects.Sprite;
  public textName: Phaser.GameObjects.BitmapText;
  public depth: number;
  public highlighted: boolean;
  private _cardName: string;

  constructor(data: ICardContainerConfig) {
    const { scene, x, y, name, card, image, depth } = data;
    const spriteCard = new Phaser.GameObjects.Sprite(scene, 0, 0, card);
    const spriteImage = new Phaser.GameObjects.Sprite(scene, 0, 0, image);
    const textName = new Phaser.GameObjects.BitmapText(
      scene,
      0,
      0,
      'pressstart',
      name,
      16,
      Phaser.GameObjects.BitmapText.ALIGN_CENTER,
    );
    super(scene, x, y, [spriteCard, spriteImage, textName]);

    this.scene = scene;
    this.spriteCard = spriteCard;
    this.spriteCard = spriteImage;
    this.textName = textName;
    this.cardName = name;
    this.depth = depth;

    this.scene.add.existing(this);
  }

  set cardName(cardName: string) {
    this._cardName = cardName;
    this.textName.text = this._cardName;
    this.textName.maxWidth = this.spriteCard.width;
    this.textName.tint = 0;
    this.textName.x = -this.textName.width / 2;
    this.textName.y = 100;
  }
}
