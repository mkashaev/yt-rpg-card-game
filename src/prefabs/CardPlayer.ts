import Phaser from 'phaser';
import CardDraggable, { ICardDraggable } from 'prefabs/CardDraggable';

interface ICardPlayer extends ICardDraggable {
  health: string;
}

export default class CardPlayer extends CardDraggable {
  public textHealth: Phaser.GameObjects.BitmapText;
  public textMaxHealth: Phaser.GameObjects.BitmapText;
  public textArmor: Phaser.GameObjects.BitmapText;
  public spriteArmor: Phaser.GameObjects.Sprite;

  private _health: string;
  private _maxHealth: string;
  private _armor: string;

  constructor(data: ICardPlayer) {
    const { health } = data;
    super(data);
    this.textHealth = new Phaser.GameObjects.BitmapText(this.scene, 0, -102, 'pressstart', health);
    this.textMaxHealth = new Phaser.GameObjects.BitmapText(
      this.scene,
      -20,
      -90,
      'pressstart',
      health,
      12,
    );
    this.textArmor = new Phaser.GameObjects.BitmapText(this.scene, 0, 0, 'pressstart');
    this.spriteArmor = new Phaser.GameObjects.Sprite(this.scene, 50, -80, 'armor');

    this.textHealth.tint = 0;
    this.textMaxHealth.tint = 0;
    this.add([this.textHealth, this.textMaxHealth, this.textArmor, this.spriteArmor]);

    this.health = health;
    this.maxHealth = health;
    this.armor = '0';
  }

  set health(newHealth: string) {
    this._health = newHealth;
    this.textHealth.text = this._health;
    this.textHealth.x = -44 - this.textHealth.width / 2;
  }

  get health() {
    return this._health;
  }

  set maxHealth(newMaxHealth: string) {
    this._maxHealth = newMaxHealth;
  }

  get maxHealth() {
    return this._maxHealth;
  }

  set armor(newArmor: string) {
    this._armor = newArmor;
    this.textArmor.text = this._armor;
    this.textArmor.x = 46 - this.textArmor.width / 2;
    this.textArmor.alpha = this._armor === '0' ? 0 : 1;
    this.spriteArmor.alpha = this._armor === '0' ? 0 : 1;
  }

  get armor() {
    return this._armor;
  }
}
