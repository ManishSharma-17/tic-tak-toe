import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winner's symbol
      }
    }
    return null;
  };

  const winner = checkWinner();
  const handleClick = (index) => {
    if (state[index] || winner) return; // Prevent clicking if there's already a winner or the square is filled
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const restart = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="container mx-auto">
      {!winner && (
        <h3 className=" font-sahwag-kumar">Player {isXTurn ? "X" : "O"} </h3>
      )}
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        {winner ? (
          <div>
            <h1>{winner} is the winner!</h1>
            <button className="border py-2 px-4" onClick={restart}>
              Play Again
            </button>
          </div>
        ) : (
          state.map((item, index) => (
            <Square
              key={index}
              onClick={() => handleClick(index)}
              value={item}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
