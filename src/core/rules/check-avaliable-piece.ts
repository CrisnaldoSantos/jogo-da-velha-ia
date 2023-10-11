export function checkAvaliablePiece(
  board: string[][],
  line: number,
  column: number
): boolean {
  return board[line][column] === "";
}
