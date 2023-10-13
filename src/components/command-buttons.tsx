"use client";
import { useGameContext } from "@/contexts/game-context";
import { Button } from "./ui/button";
import { Play, RotateCcw } from "lucide-react";

export function CommandButtons() {
  const { status, startGame, restartGame } = useGameContext();

  const commandButtonsDictionary = {
    NEW: {
      visible: true,
      label: "Iniciar",
      action: () => startGame(),
      icon: () => <Play />,
    },
    IN_PROGRESS: {
      visible: false,
      label: "",
      action: () => console.log("action"),
      icon: () => <></>,
    },
    FINISHED: {
      visible: true,
      label: "Reiniciar",
      action: () => restartGame(),
      icon: () => <RotateCcw />,
    },
  };

  const buttonInfo = commandButtonsDictionary[status];
  const { label, action, visible, icon } = buttonInfo;

  if (visible) {
    return (
      <Button className="h-[6vh] w-1/5 text-xl" onClick={action}>
        <div className="flex justify-center items-center gap-2">
          {icon()}
          {label}
        </div>
      </Button>
    );
  }
  return <></>;
}
