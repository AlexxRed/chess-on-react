import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import { Сolors } from "../Colors";
import blackLogo from "../../pictures/black-king.png";
import whiteLogo from "../../pictures/white-king.png";

export class King extends Figure{
    constructor(color: Сolors, cell: Cell) {
        super(color, cell);
        this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
        return false;
        return true
    };
}