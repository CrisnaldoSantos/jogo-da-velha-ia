"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  gameReducer,
  GameState,
  GameStatus,
  PlayerSymbol,
  Score,
} from "@/reducers/game/reducer";
import { generateRandomSymbol } from "@/core/rules/generate-random-symbol";
import { markAPieceAction } from "@/reducers/game/actions";

interface GameContextType {
  board: string[][];
  status: GameStatus;
  humanSymbol: PlayerSymbol;
  currentPlayer: PlayerSymbol;
  score: Score;
  markAPiece: (line: number, column: number) => void;
}

export const GameContext = createContext({} as GameContextType);

interface GameContextProviderProps {
  children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [gameState, dispatch] = useReducer(gameReducer, {
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    status: "NEW",
    currentPlayer: "X",
    humanSymbol: generateRandomSymbol(),
    score: {
      victories: 0,
      draws: 0,
      defeats: 0,
    },
  } as GameState);

  const { board, status, currentPlayer, humanSymbol, score } = gameState;

  function markAPiece(line: number, column: number) {
    dispatch(markAPieceAction(line, column));
  }
  return (
    <GameContext.Provider
      value={{ board, status, currentPlayer, humanSymbol, score, markAPiece }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => useContext(GameContext);
