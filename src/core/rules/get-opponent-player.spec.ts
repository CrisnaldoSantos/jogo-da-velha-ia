import { PlayerSymbol } from "@/reducers/game/reducer";
import { describe, expect, test } from "vitest";
import { getOpponentPlayer } from "./get-opponent-player";

describe("getOpponentPlayer function", () => {
  test("should return X if currentPlayer is O", () => {
    const currentPlayer: PlayerSymbol = "O";
    const expectedOpponentPlayer: PlayerSymbol = "X";

    const opponentPlayer = getOpponentPlayer(currentPlayer);
    expect(opponentPlayer).toStrictEqual(expectedOpponentPlayer);
  });

  test("should return O if currentPlayer is X", () => {
    const currentPlayer: PlayerSymbol = "X";
    const expectedOpponentPlayer: PlayerSymbol = "O";

    const opponentPlayer = getOpponentPlayer(currentPlayer);
    expect(opponentPlayer).toStrictEqual(expectedOpponentPlayer);
  });
});
