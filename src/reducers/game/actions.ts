"use client";
export enum GameActionTypes {
  START_GAME = "START_GAME",
  MARK_A_PIECE = "MARK_A_PIECE",
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
