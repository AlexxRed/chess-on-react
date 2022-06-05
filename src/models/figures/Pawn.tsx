import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import { Сolors } from "../Colors";
import blackLogo from "../../pictures/black-pawn.png";
import whiteLogo from "../../pictures/white-pawn.png";

export class Pawn extends Figure{
    isFirstStep: boolean = true;

    constructor(color: Сolors, cell: Cell) {
        super(color, cell);
        this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
        return false;
        const direction = this.cell.figure?.color === Сolors.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Сolors.BLACK ? 2 : -2

        // eslint-disable-next-line no-mixed-operators
        if ((target.y === this.cell.y + direction || this.isFirstStep
            // eslint-disable-next-line no-mixed-operators
            && (target.y === this.cell.y + firstStepDirection))
        && target.x === this.cell.x
        && this.cell.board.getCell(target.x, target.y).isEmpty()) {
        return true;
        }

        if(target.y === this.cell.y + direction
        && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        && this.cell.isEnemy(target)) {
        return true;
        }

        return false;
    };

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false;
    };
}