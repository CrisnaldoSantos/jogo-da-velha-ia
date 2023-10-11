import Board from "@/components/board";
import { GameContextProvider } from "@/contexts/game-context";

export default function Home() {
  return (
    <h1 className="min-h-screen w-full flex items-center justify-center">
      <GameContextProvider>
        <Board />
      </GameContextProvider>
    </h1>
  );
}
