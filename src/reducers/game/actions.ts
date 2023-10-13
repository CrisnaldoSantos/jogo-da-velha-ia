"use client";

import { PlayerSymbol } from "./reducer";

export enum GameActionTypes {
  START_GAME = "START_GAME",
  MARK_A_PIECE = "MARK_A_PIECE",
  DEFINE_A_WINNER = "DEFINE_A_WINNER",
  DEFINE_A_DRAW = "DEFINE_A_DRAW",
  RESTART_GAME = "RESTART_GAME",
}

export function startGameAction() {
  return {
    type: GameActionTypes.START_GAME,
  };
}

export function markAPieceAction(line: number, column: number) {
  return {
    type: GameActionTypes.MARK_A_PIECE,
    payload: {
      line,
      column,
    },
  };
}

export function defineAWinnerAction(winner: PlayerSymbol) {
  return {
    type: GameActionTypes.DEFINE_A_WINNER,
    payload: {
      winner,
    },
  };
}

export function defineADrawAction() {
  return {
    type: GameActionTypes.DEFINE_A_DRAW,
  };
}

export function restartGameAction() {
  return {
    type: GameActionTypes.RESTART_GAME,
  };
}
