import React, { useEffect, useState } from "react";
import { FC } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponents";

interface BoardProps{
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board: Board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        setSelectedCell(cell)
    // if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
    //     selectedCell.moveFigure(cell);
    //     swapPlayer()
    //     setSelectedCell(null);
    //     updateBoard()
    //     } else {
    //     if (cell.figure?.color === currentPlayer?.color) {
    //         setSelectedCell(cell);
    //     }
    //     }
    }

    useEffect(() => {
        // highlightCells()
    }, [selectedCell])

    // function highlightCells() {
    //     board.highlightCells(selectedCell)
    //     updateBoard()
    // }

    // function updateBoard() {
    //     const newBoard = board.getCopyBoard()
    //     setBoard(newBoard)
    // }

    return (
        <div className="board">
            {Board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                        )}
            </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent

