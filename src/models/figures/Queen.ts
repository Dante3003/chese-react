import { Figure, FigureNames } from "./Figure";
import blackSprite from "../../assets/black-queen.png";
import whiteSprite from "../../assets/white-queen.png";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.sprite = color === Colors.WHITE ? whiteSprite : blackSprite;
    this.name = FigureNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmtpyHorizontal(target)) {
      return true;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
