import Phaser from 'phaser';
import CardContainer, { ICardContainerConfig } from 'prefabs/CardContainer';

export interface ICardDraggable extends ICardContainerConfig {
  onDragEnd: (pointer: Phaser.Input.Pointer, gameObject: any) => void;
}

export default class CardDraggable extends CardContainer {
  public draggable: boolean;
  public dragging: boolean;
  public onDragEnd: (pointer: Phaser.Input.Pointer, gameObject: any) => void;
  public originalX: number;
  public originalY: number;
  public dragObject: any;

  constructor(data: ICardDraggable) {
    const { onDragEnd } = data;
    super(data);
    this.originalX = this.x;
    this.originalY = this.y;
    this.draggable = true;
    this.dragging = false;

    this.onDragEnd = onDragEnd;
    this.setSize(this.spriteCard.width, this.spriteCard.height);
    this.setInteractive();
    this.scene.input.setDraggable(this);
    this.scene.input.on('drag', this.handleOnDrag, this);
    this.scene.input.on('dragend', this.handleOnDragEnd, this);
  }

  handleOnDrag(pointer: Phaser.Input.Pointer, gameObject: any, dragX: number, dragY: number) {
    if (!this.draggable) return;
    this.dragging = true;

    gameObject.x = dragX;
    gameObject.y = dragY;
  }

  handleOnDragEnd(pointer: Phaser.Input.Pointer, gameObject: any) {
    this.dragging = false;
    gameObject?.onDragEnd(pointer, gameObject);
  }
}
