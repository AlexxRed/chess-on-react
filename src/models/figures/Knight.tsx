import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import { Сolors } from "../Colors";
import blackLogo from "../../pictures/black-knight.png";
import whiteLogo from "../../pictures/white-knight.png";

export class Knight extends Figure{
    constructor(color: Сolors, cell: Cell) {
        super(color, cell);
        this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
}