import Board from "@/components/board";
import { CommandButtons } from "@/components/command-buttons";
import RoundsDisplay from "@/components/rounds-display";
import { Score } from "@/components/score";
import { GameContextProvider } from "@/contexts/game-context";

export default function Home() {
  return (
    <h1 className="min-h-screen w-full flex flex-col items-center justify-center">
      <GameContextProvider>
        <Score />
        <Board />
        <CommandButtons />
        <RoundsDisplay />
      </GameContextProvider>
    </h1>
  );
}
