"use client";

import {
  createContext,
  ReactNode,
  useCallback,
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
import {
  defineADrawAction,
  defineAWinnerAction,
  markAPieceAction,
  restartGameAction,
  startGameAction,
} from "@/reducers/game/actions";
import { checkWinner } from "@/core/rules/check-winner";
import { checkBoardIsFull } from "@/core/rules/check-board-is-full";
import { generateEmptyBoard } from "@/core/rules/generate-empty-board";
import { getIAPieceSelection } from "@/services/get-ia-piece-selection";

interface GameContextType {
  board: boardNumericEntry[][];
  status: GameStatus;
  humanSymbol: PlayerSymbol;
  currentPlayer: PlayerSymbol;
  score: Score;
  winnerText: string;
  markAPiece: (line: number, column: number) => void;
  startGame: () => void;
  restartGame: () => void;
}

export const GameContext = createContext({} as GameContextType);

interface GameContextProviderProps {
  children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [gameState, dispatch] = useReducer(gameReducer, {
    board: generateEmptyBoard(),
    status: "NEW",
    currentPlayer: "X",
    humanSymbol: generateRandomSymbol(),
    winnerText: "",
    score: {
      victories: 0,
      draws: 0,
      defeats: 0,
    },
  } as GameState);

  const { board, status, currentPlayer, humanSymbol, score, winnerText } =
    gameState;

  useEffect(() => {
    const winner = checkWinner(board);
    const fullBoard = checkBoardIsFull(board);
    if (winner) {
      console.log(winner);
      dispatch(defineAWinnerAction(winner));
    } else {
      if (fullBoard) {
        dispatch(defineADrawAction());
      }
    }
  }, [board]);

  const queryIA = useCallback(async () => {
    if (status === "IN_PROGRESS" && currentPlayer !== humanSymbol) {
      const iaResponse = await getIAPieceSelection(board, humanSymbol);
      const { line, column } = iaResponse;
      dispatch(markAPieceAction(line, column));
    }
  }, [board, currentPlayer, humanSymbol, status]);

  useEffect(() => {
    queryIA();
  }, [queryIA]);

  function markAPiece(line: number, column: number) {
    dispatch(markAPieceAction(line, column));
  }

  function startGame() {
    dispatch(startGameAction());
  }

  function restartGame() {
    dispatch(restartGameAction());
  }
  return (
    <GameContext.Provider
      value={{
        board,
        status,
        currentPlayer,
        humanSymbol,
        score,
        winnerText,
        markAPiece,
        startGame,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => useContext(GameContext);
