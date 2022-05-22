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
    return true;
  }
}
