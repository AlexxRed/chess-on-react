import { Cell } from "../Cell";
import { Figure } from "./Figure";
import { Сolors } from "../Colors";
import blackLogo from "../../pictures/black-bishop.png";
import whiteLogo from "../../pictures/white-bishop.png";


export class Bishop extends Figure{
    constructor(color: Сolors, cell: Cell) {
        super(color, cell);
        this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo
    }
}