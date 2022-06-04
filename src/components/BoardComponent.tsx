import React from "react";
import { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponents";

interface BoardProps{
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board: Board, setBoard}) => {
    return (
        <div className="board">
            {Board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                        
                        />
                        )}
            </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent