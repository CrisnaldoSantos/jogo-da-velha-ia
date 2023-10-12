import { PlayerSymbol, boardNumericEntry } from "@/reducers/game/reducer";

const playerEntryDictionary = {
  X: {
    value: -1 as boardNumericEntry,
  },
  O: {
    value: 1 as boardNumericEntry,
  },
};

export function parsePlayerToNumeric(player: PlayerSymbol): boardNumericEntry {
  return playerEntryDictionary[player].value;
}
