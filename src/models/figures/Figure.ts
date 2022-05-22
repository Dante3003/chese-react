import logo from "../../assets/black-king.png";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  KNIGHT = "Конь",
  BISHOP = "Слон",
  PAWN = "Пешка",
}

export class Figure {
  color: Colors;
  sprite: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.sprite = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }
    if (target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }
  moveFigure(target: Cell): void {}
}
