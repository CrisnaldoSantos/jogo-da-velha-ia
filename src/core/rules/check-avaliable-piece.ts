import { boardNumericEntry } from "@/reducers/game/reducer";

export function checkAvaliablePiece(
  board: boardNumericEntry[][],
  line: number,
  column: number
): boolean {
  return board[line][column] === 0;
}
