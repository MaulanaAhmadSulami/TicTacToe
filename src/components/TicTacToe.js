import { useState } from "react";
// import Box from "./Box.js";
import "./TicTacToe.css";


export const TicTacToe = () => {
  const [Board, setBoard] = useState(Array(9).fill(""));
  const [XIsNExt, setXIsNExt] = useState(true);
  const [GameOver, setGameOver] = useState(false);

  const clickHandle = (index) => {
    if (Board[index] || calculateWinner(Board)) return;

    const newBoard = Board.slice();
    newBoard[index] = XIsNExt ? "X" : "O";
    setBoard(newBoard);
    setXIsNExt(!XIsNExt);
  };

  const renderBox = (index) => (
    <td className="Box" onClick={() => clickHandle(index)}>{Board[index]}</td>
    // <Box value={Board[index]} onClick={() => clickHandle(index)} />
  );

  const winner = calculateWinner(Board);
  let status;

  if(winner){
    status = `${winner} is the winner!`
  }else if(Board.every((Box) => Box)){
    status = "It's a draw!"
  }else{
    status = `Next player : ${XIsNExt ?  "X" : "O"}`
  }

  return (
    <div className="tictactoe">
      <div className="status">{status}</div>
      <table>
        <tbody>
          <tr>
            {renderBox(0)}
            {renderBox(1)}
            {renderBox(2)}
          </tr>
          <tr>
            {renderBox(3)}
            {renderBox(4)}
            {renderBox(5)}
          </tr>
          <tr>
            {renderBox(6)}
            {renderBox(7)}
            {renderBox(8)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function calculateWinner(Board){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i=0; i<lines.length; i++){
        const[a, b, c] = lines[i];
        if(Board[a] && Board[a] === Board[b] && Board[a] === Board[c]){
            return Board[a];
        }
    }

    return null; //if no winner empty
}

export default TicTacToe;