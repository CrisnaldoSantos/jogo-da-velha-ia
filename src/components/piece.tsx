import { useGameContext } from "@/contexts/game-context";
import { Button } from "./ui/button";
import { boardNumericEntry } from "@/reducers/game/reducer";
import { parseNumericToPlayer } from "@/core/rules/parse-numeric-to-player";

interface PieceProps {
  value: boardNumericEntry;
  column: number;
  line: number;
}
export function Piece({ value, line, column }: PieceProps) {
  const { markAPiece, currentPlayer, humanSymbol } = useGameContext();

  //TODO Enable after IA implementation
  //const iaRound = currentPlayer !== humanSymbol;

  const handleMark = () => {
    //if (iaRound) return;

    markAPiece(line, column);
  };

  const playerLabel = parseNumericToPlayer(value);

  return (
    <Button className="h-32 w-32 border" onClick={() => handleMark()}>
      <span className="text-6xl">{playerLabel}</span>
    </Button>
  );
}
