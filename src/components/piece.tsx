import { useGameContext } from "@/contexts/game-context";
import { Button } from "./ui/button";

interface PieceProps {
  value: string;
  column: number;
  line: number;
}
export function Piece({ value, line, column }: PieceProps) {
  const { markAPiece } = useGameContext();

  const handleMark = () => {
    markAPiece(line, column);
  };
  return (
    <Button className="h-32 w-32 border" onClick={() => handleMark()}>
      <span className="text-6xl">{value}</span>
    </Button>
  );
}
