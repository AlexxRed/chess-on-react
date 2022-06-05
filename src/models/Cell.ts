import {Сolors} from "./Colors";
import { Board } from "./Board";
import { Figure } from "./figures/Figure";

export class Cell{
    moveFigure(cell: Cell) {
        throw new Error("Method not implemented.");
    }
    readonly x: number;
    readonly y: number;
    readonly color: Сolors;
    figure: Figure | null;
    board: Board;
    available: boolean; // can move on
    id: number; // for react keys

    constructor(board: Board, x: number, y: number, color: Сolors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }
}