import { Card, CardHeader, CardContent } from "./ui/card";

interface ScoreItem {
  title: string;
  value: number | string;
}

export function ScoreItem({ title, value }: ScoreItem) {
  return (
    <Card className="w-[32vw] flex flex-col items-center justify-center space-y-1 p-2 md:w-[8vw]">
      <CardHeader className="space-y-1 p-2">{title}</CardHeader>
      <CardContent>
        <span className="text-xl">{value}</span>
      </CardContent>
    </Card>
  );
}
