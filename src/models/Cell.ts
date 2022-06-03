import { Board } from "./Board";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly coolor: Colors;
    figures: Figure | null;
    board: Board;
    available: boolean; // can move on
    id: number; // for react keys
}