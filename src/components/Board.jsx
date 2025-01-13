import React, { useState } from "react";
import Square from "./Square";
import ResetButton from "./ResetButton";

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
        return state[a];
      }
    }
    return null;
  };
  const winner = checkWinner();
  const handleClick = (index) => {
    if (state[index] || winner) return;
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const restart = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };
  const ifMatchDraw = (val) => {
    return val != null;
  };
  const ifMatchDrawn = state.every(ifMatchDraw);
  console.log(ifMatchDrawn);
  return (
    <div className="container mx-auto">
      {!winner && (
        <h3 className="font-sahwag-kumar">Player {isXTurn ? "X" : "O"} </h3>
      )}
      {!winner && ifMatchDrawn ? (
        <span>
          This match is draw! 🤝
          <ResetButton onclick={restart} />
        </span>
      ) : (
        ""
      )}
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        {winner ? (
          <div>
            <h1>{winner} is the winner!</h1>
            <ResetButton onclick={restart} />
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
