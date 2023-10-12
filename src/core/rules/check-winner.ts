import { PlayerSymbol, boardNumericEntry } from "@/reducers/game/reducer";

function calculateEntries(
  number1: boardNumericEntry,
  number2: boardNumericEntry,
  number3: boardNumericEntry
) {
  return number1 + number2 + number3;
}

function parseWinner(value: number): PlayerSymbol | null {
  switch (value) {
    case 3:
      return "O";
    case -3:
      return "X";
    default:
      return null;
  }
}

export function checkWinner(board: boardNumericEntry[][]): PlayerSymbol | null {
  let winner: PlayerSymbol | null = null;

  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    const lineEntriesValue = calculateEntries(
      board[i][0],
      board[i][1],
      board[i][2]
    );

    winner = parseWinner(lineEntriesValue);

    if (winner) {
      return winner;
    }

    // Verifica colunas
    const columnEntriesValue = calculateEntries(
      board[0][i],
      board[1][i],
      board[2][i]
    );
    winner = parseWinner(columnEntriesValue);

    if (winner) {
      return winner;
    }
  }

  // Verifica diagonais
  const firstDiagonalEntriesValue = calculateEntries(
    board[0][0],
    board[1][1],
    board[2][2]
  );
  winner = parseWinner(firstDiagonalEntriesValue);

  if (winner) {
    return winner;
  }

  const secondDiagonalEntriesValue = calculateEntries(
    board[0][2],
    board[1][1],
    board[2][0]
  );
  winner = parseWinner(secondDiagonalEntriesValue);

  return winner;
}
