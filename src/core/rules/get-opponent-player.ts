import { PlayerSymbol } from "@/reducers/game/reducer";

export function getOpponentPlayer(currentPlayer: PlayerSymbol): PlayerSymbol {
  return currentPlayer === "O" ? "X" : "O";
}
