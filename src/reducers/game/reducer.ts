"use client";
import { current, produce } from "immer";
import { GameActionTypes } from "./actions";
import { checkAvaliablePiece } from "@/core/rules/check-avaliable-piece";
import { getOpponentPlayer } from "@/core/rules/get-opponent-player";
import { parsePlayerToNumeric } from "@/core/rules/parse-player-to-numeric";
import { generateEmptyBoard } from "@/core/rules/generate-empty-board";
import { generateRandomSymbol } from "@/core/rules/generate-random-symbol";

export type PlayerSymbol = "X" | "O";

export type GameStatus = "NEW" | "IN_PROGRESS" | "FINISHED";

export type Score = {
  victories: number;
  draws: number;
  defeats: number;
};

export type boardNumericEntry = -1 | 0 | 1;

export interface GameState {
  board: boardNumericEntry[][];
  status: GameStatus;
  humanSymbol: PlayerSymbol;
  currentPlayer: PlayerSymbol;
  score: Score;
  winnerText: string;
}

export function gameReducer(state: GameState, action: any) {
  switch (action.type) {
    case GameActionTypes.START_GAME:
      return produce(state, (draft) => {
        draft.status = "IN_PROGRESS";
      });
    case GameActionTypes.MARK_A_PIECE: {
      const { line, column } = action.payload;
      const isAvaliable = checkAvaliablePiece(state.board, line, column);

      if (!isAvaliable) {
        return state;
      }

      return produce(state, (draft) => {
        draft.board[line][column] = parsePlayerToNumeric(state.currentPlayer);
        draft.currentPlayer = getOpponentPlayer(state.currentPlayer);
      });
    }
    case GameActionTypes.DEFINE_A_WINNER: {
      const { winner } = action.payload;

      const isVictory = winner === state.humanSymbol;

      const victoryIncrement = isVictory ? 1 : 0;
      const defeatIncrement = isVictory ? 0 : 1;

      return produce(state, (draft) => {
        draft.status = "FINISHED";
        draft.winnerText = isVictory ? "Você venceu!" : "A IA venceu!";
        draft.score = {
          victories: state.score.victories + victoryIncrement,
          draws: state.score.draws,
          defeats: state.score.defeats + defeatIncrement,
        };
      });
    }
    case GameActionTypes.DEFINE_A_DRAW: {
      return produce(state, (draft) => {
        draft.status = "FINISHED";
        draft.winnerText = "Deu empate!";
        draft.score = {
          victories: state.score.victories,
          draws: state.score.draws + 1,
          defeats: state.score.defeats,
        };
      });
    }
    case GameActionTypes.RESTART_GAME: {
      return produce(state, (draft) => {
        draft.board = generateEmptyBoard();
        draft.status = "NEW";
        draft.currentPlayer = "X";
        draft.humanSymbol = generateRandomSymbol();
      });
    }
    default:
      return state;
  }
}
