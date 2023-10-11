"use client";

import { Piece } from "./piece";
import { useGameContext } from "@/contexts/game-context";

function Board() {
  const { board } = useGameContext();

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex pb-1 gap-1">
          {row.map((cell, cellIndex) => (
            <Piece
              key={cellIndex}
              value={cell}
              line={rowIndex}
              column={cellIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
