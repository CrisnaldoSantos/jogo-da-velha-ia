"use client";

import { useGameContext } from "@/contexts/game-context";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ScoreItem } from "./score-item";

export function Score() {
  const { score } = useGameContext();
  const { victories, draws, defeats } = score;
  return (
    <div className="flex flex-col items-center justify-center w-full pb-8">
      <p className="text-2xl text-white pb-2">Score</p>
      <div className="flex items-center justify-center w-3/5 gap-2">
        <ScoreItem title="Victories" value={victories} />
        <ScoreItem title="Draws" value={draws} />
        <ScoreItem title="Defeats" value={defeats} />
      </div>
    </div>
  );
}
