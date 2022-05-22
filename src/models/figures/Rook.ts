import { Figure, FigureNames } from "./Figure";
import blackSprite from "../../assets/black-rook.png";
import whiteSprite from "../../assets/white-rook.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.sprite = color === Colors.WHITE ? whiteSprite : blackSprite;
    this.name = FigureNames.ROOK;
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
    return false;
  }
}
