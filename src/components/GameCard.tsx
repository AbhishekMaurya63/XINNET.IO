import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface GameCardProps {
  icon: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}

const GameCard = ({ icon, title, description, isComingSoon = false }: GameCardProps) => {
  return (
    <Card className="game-card h-full">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        {isComingSoon && (
          <span className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
            Coming Soon
          </span>
        )}
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        {!isComingSoon && (
          <Button className="btn-gaming w-full">
            Play Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default GameCard;