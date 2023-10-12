"use client";
import { produce } from "immer";
import { GameActionTypes } from "./actions";
import { checkAvaliablePiece } from "@/core/rules/check-avaliable-piece";
import { getOpponentPlayer } from "@/core/rules/get-opponent-player";
import { parsePlayerToNumeric } from "@/core/rules/parse-player-to-numeric";

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
        draft.score = {
          victories: state.score.victories + victoryIncrement,
          draws: state.score.draws,
          defeats: state.score.defeats + defeatIncrement,
        };
      });
    }
    default:
      return state;
  }
}
