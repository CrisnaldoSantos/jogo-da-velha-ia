import { boardNumericEntry } from "@/reducers/game/reducer";

export function checkBoardIsFull(board: boardNumericEntry[][]): boolean {
  for (const line of board) {
    for (const element of line) {
      if (element === 0) {
        return false;
      }
    }
  }
  return true;
}
