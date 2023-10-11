import { PlayerSymbol } from "@/reducers/game/reducer";

export function generateRandomSymbol(): PlayerSymbol {
  const randomNumber = Math.floor(Math.random() * 2);

  return randomNumber === 0 ? "O" : "X";
}
