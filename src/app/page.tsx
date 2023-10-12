import Board from "@/components/board";
import { Score } from "@/components/score";
import { GameContextProvider } from "@/contexts/game-context";

export default function Home() {
  return (
    <h1 className="min-h-screen w-full flex flex-col items-center justify-center">
      <GameContextProvider>
        <Board />
        <Score />
      </GameContextProvider>
    </h1>
  );
}
