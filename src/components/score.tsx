"use client";

import { useGameContext } from "@/contexts/game-context";
import { Card, CardContent, CardHeader } from "./ui/card";

export function Score() {
  const { score } = useGameContext();
  const { victories, draws, defeats } = score;
  return (
    <div className="flex flex-col items-center justify-center w-full pt-4">
      <p className="text-3xl text-white pb-2">Score</p>
      <div className="flex items-center justify-center w-3/5 gap-2">
        <Card className="w-1/5 flex flex-col items-center justify-center">
          <CardHeader>Victories</CardHeader>
          <CardContent>
            <span className="text-2xl">{victories}</span>
          </CardContent>
        </Card>

        <Card className="w-1/5">
          <CardHeader>Draws</CardHeader>
          <CardContent>
            <span className="text-2xl">{draws}</span>
          </CardContent>
        </Card>

        <Card className="w-1/5">
          <CardHeader>Defeats</CardHeader>
          <CardContent className="text-2xl">
            <span>{defeats}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
