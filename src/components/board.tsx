"use client";

import { useState } from "react";
import { Piece } from "./piece";

function Board() {
  const emptyBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [board, setBoard] = useState<string[][]>(emptyBoard);

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Piece
              key={cellIndex}
              value={cell}
              line={rowIndex}
              collum={cellIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
