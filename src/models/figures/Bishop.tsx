import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import { Сolors } from "../Colors";
import blackLogo from "../../pictures/black-bishop.png";
import whiteLogo from "../../pictures/white-bishop.png";


export class Bishop extends Figure{
    constructor(color: Сolors, cell: Cell) {
        super(color, cell);
        this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
        return false;
        if(this.cell.isEmptyDiagonal(target))
        return true
        return false
    };
}