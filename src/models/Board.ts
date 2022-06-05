import { Cell } from "./Cell";
import { Сolors } from "./Colors";
import { Queen } from "./figures/Queen";

export class Board{
    cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j , i, Сolors.BLACK, null))//black cells
                } else {
                    row.push(new Cell(this, j , i, Сolors.WHITE, null))//white cells
                }
                
            }
            this.cells.push(row);
        }
    };

    public getCell(x: number, y: number) {
        return this.cells[x][y];
    };

    public addFigures() {
        new Queen(Сolors.WHITE, this.getCell(3,3))
    }
}   