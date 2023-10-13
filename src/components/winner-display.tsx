"use client";

import { useGameContext } from "@/contexts/game-context";
import { VisibleGuard } from "@/guards/visible-guard";
import { Trophy } from "lucide-react";

export function WinnerDisplay() {
  const { winnerText, status } = useGameContext();

  const gameFinished = status === "FINISHED";

  return (
    <VisibleGuard visible={gameFinished}>
      <div className="flex items-center justify-center py-4 gap-2">
        <Trophy />
        <span>{winnerText}</span>
      </div>
    </VisibleGuard>
  );
}
