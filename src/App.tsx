import React, { useEffect, useState } from 'react';
import {Сolors} from "./models/Colors";
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import { Player } from './models/Player';
import LostFigures from './components/LostFigures';
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer] = useState(new Player(Сolors.WHITE))
  const [blackPlayer] = useState(new Player(Сolors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  },[whitePlayer])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  };

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Сolors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title="Черные фигуры"
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title="Белые фигуры"
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
