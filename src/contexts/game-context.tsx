"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  boardNumericEntry,
  gameReducer,
  GameState,
  GameStatus,
  PlayerSymbol,
  Score,
} from "@/reducers/game/reducer";
import { generateRandomSymbol } from "@/core/rules/generate-random-symbol";
import { defineAWinnerAction, markAPieceAction } from "@/reducers/game/actions";
import { checkWinner } from "@/core/rules/check-winner";
import { checkBoardIsFull } from "@/core/rules/check-board-is-full";

interface GameContextType {
  board: boardNumericEntry[][];
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
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
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

  useEffect(() => {
    const winner = checkWinner(board);
    const fullBoard = checkBoardIsFull(board);
    if (winner) {
      console.log(winner);
      dispatch(defineAWinnerAction(winner));
    }
    if (fullBoard) {
      console.log("Dispara Ação de empate");
    }
  }, [board]);

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
