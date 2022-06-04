import { Cell } from "../Cell";
import { Сolors } from "../Colors";
import logo from "../../pictures/black-king.png"

export enum FigureNames{
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
};


export class Figure{
    color: Сolors;
    cell: Cell;
    logo: typeof logo | null;
    name: FigureNames;
    id: number;

    constructor(color: Сolors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
    }

}