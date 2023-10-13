"use client";

import { useGameContext } from "@/contexts/game-context";
import { VisibleGuard } from "@/guards/visible-guard";
import { Bot, User } from "lucide-react";

function RoundsDisplay() {
  const { status, currentPlayer, humanSymbol } = useGameContext();
  const gameInProgress = status === "IN_PROGRESS";

  const playerRound = currentPlayer === humanSymbol;

  const roundLabel = playerRound ? "Sua vez:" : "Vez da IA:";
  const icon = playerRound ? <User /> : <Bot />;
  return (
    <VisibleGuard visible={gameInProgress}>
      <div className="flex items-center justify-center gap-2 text-white text-xl">
        {icon}
        <span>{roundLabel}</span>
        <span className="font-semibold">{currentPlayer}</span>
      </div>
    </VisibleGuard>
  );
}

export default RoundsDisplay;
