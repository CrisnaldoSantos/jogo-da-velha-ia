import { PlayerSymbol } from "@/reducers/game/reducer";

export function checkWinner(
  currentBoard: string[][],
  currentPlayer: PlayerSymbol,
  line: number,
  column: number
) {
  let winner = null;
  let board = [...currentBoard];
  board[line][column] = currentPlayer;
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      winner = currentPlayer;
      return;
    }

    // Verifica colunas
    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer
    ) {
      winner = currentPlayer;
      return;
    }
  }

  // Verifica diagonais
  if (
    (board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer) ||
    (board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer)
  ) {
    winner = currentPlayer;
  }
  console.log(winner);
  return winner;
}
