import { IARequestBody } from "@/app/api/ia/route";
import { getOpponentPlayer } from "@/core/rules/get-opponent-player";
import { parsePlayerToNumeric } from "@/core/rules/parse-player-to-numeric";
import { PlayerSymbol, boardNumericEntry } from "@/reducers/game/reducer";

export type IAResponse = {
  line: number;
  column: number;
};

export async function getIAPieceSelection(
  board: boardNumericEntry[][],
  humanSymbolString: PlayerSymbol
) {
  const iaSymbolString = getOpponentPlayer(humanSymbolString);

  const body: IARequestBody = {
    board: JSON.stringify(board),
    iaSymbol: parsePlayerToNumeric(iaSymbolString),
    playerSymbol: parsePlayerToNumeric(humanSymbolString),
  };

  const response = await fetch("http://localhost:3000/api/ia", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: IAResponse = await response.json();
  return data;
}
