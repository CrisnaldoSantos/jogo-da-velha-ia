"use client";
import { produce } from "immer";
import { GameActionTypes } from "./actions";
import { checkAvaliablePiece } from "@/core/rules/check-avaliable-piece";
import { getOpponentPlayer } from "@/core/rules/get-opponent-player";
import { checkWinner } from "@/core/rules/check-winner";

export type PlayerSymbol = "X" | "O";

export type GameStatus = "NEW" | "IN_PROGRESS" | "FINISHED";

export type Score = {
  victories: number;
  draws: number;
  defeats: number;
};

export interface GameState {
  board: string[][];
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
      console.log("marcou", line, column);
      const isAvaliable = checkAvaliablePiece(state.board, line, column);

      if (!isAvaliable) {
        return state;
      }

      const winner = checkWinner(
        state.board,
        state.currentPlayer,
        line,
        column
      );

      if (winner) {
        console.log("ganhou:", state.currentPlayer);
      }

      return produce(state, (draft) => {
        draft.board[line][column] = state.currentPlayer;
        draft.currentPlayer = getOpponentPlayer(state.currentPlayer);
      });
    }
    default:
      return state;
  }
}
