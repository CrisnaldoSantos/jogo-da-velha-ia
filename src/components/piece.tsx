import { Button } from "./ui/button";

interface PieceProps {
  value: string;
  collum: number;
  line: number;
}
export function Piece({ value }: PieceProps) {
  return (
    <Button className="h-32 w-32 border">
      <span className="text-6xl">{value}</span>
    </Button>
  );
}
