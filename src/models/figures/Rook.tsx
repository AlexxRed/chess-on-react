import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import { Сolors } from "../Colors";
import blackLogo from "../../pictures/black-rook.png";
import whiteLogo from "../../pictures/white-rook.png";

export class Rook extends Figure{
    constructor(color: Сolors, cell: Cell) {
        super(color, cell);
        this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    };
    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyVertical(target))
            return true
        if(this.cell.isEmptyHorizontal(target))
            return true
        return false
    };
};