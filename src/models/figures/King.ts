import { Figure, FigureNames } from "./Figure";
import blackSprite from "../../assets/black-king.png";
import whiteSprite from "../../assets/white-king.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.sprite = color === Colors.WHITE ? whiteSprite : blackSprite;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    console.log();
    const dy = Math.abs(this.cell.y - target.y);
    const dx = Math.abs(this.cell.x - target.x);
    if (dy === 1 && dx === 1) {
      return true;
    }
    if (
      (target.y === this.cell.y + 1 && target.x === this.cell.x) ||
      (target.y === this.cell.y - 1 && target.x === this.cell.x)
    ) {
      return true;
    }
    if (
      (target.y === this.cell.y && target.x === this.cell.x + 1) ||
      (target.y === this.cell.y && target.x === this.cell.x - 1)
    ) {
      return true;
    }
    return false;
  }
}
