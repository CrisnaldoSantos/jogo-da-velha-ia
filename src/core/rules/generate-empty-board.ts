import { boardNumericEntry } from "@/reducers/game/reducer";

export function generateEmptyBoard(): boardNumericEntry[][] {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
}
