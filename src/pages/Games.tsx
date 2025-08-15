import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";

const Games = () => {
  const availableGames = [
    {
      icon: "🎲",
      title: "Ludo Cash",
      description: "Classic. Competitive. Real Cash. Outsmart your opponent in a strategic race to the finish. Choose your stake — ₹5 to ₹100 — and win double the prize in fast-paced, real-time Ludo battles."
    },
    {
      icon: "♟️",
      title: "Chess Cash",
      description: "Mind Over Money. Play timed 1v1 Chess matches where skill, not luck, rules. From beginners to grandmasters — find your match and win instant cash."
    },
    {
      icon: "🍬",
      title: "CandyCash",
      description: "Sweet, Fast, and Addictively Fun. Match candies under time pressure in this colorful arcade-style game. Score higher than your opponent to win the pot!"
    },
    {
      icon: "🪜",
      title: "Saap Sidhi",
      description: "Luck meets thrill — with real money on the line. Roll the dice and climb your way to the top. Avoid snakes, grab ladders, and beat your rival in this nostalgic board game for cash."
    },
    {
      icon: "🃏",
      title: "Poker Duel",
      description: "Skill, Bluff, and a Sharp Mind. Play short-format poker against real opponents. No bots. No collusion. Just pure 1v1 skill-based card battles."
    },
    {
      icon: "🃏",
      title: "Rummy Classic",
      description: "India's favorite card game — now quicker and fairer. Compete in fast-paced Rummy matches where your memory, strategy, and timing can win you real money."
    }
  ];

  const comingSoonGames = [
    {
      icon: "🧠",
      title: "Quiz Battle",
      description: "Knowledge is Power (and Profit). Answer faster and smarter in real-time trivia duels. Topics include GK, Bollywood, Cricket, and more."
    },
    {
      icon: "🧩",
      title: "Memory Flip",
      description: "Train your brain. Win the game. Flip tiles, match pairs, and beat your opponent in this fast-memory challenge."
    },
    {
      icon: "🎱",
      title: "Carrom 1v1",
      description: "Smooth shots. Smooth wins. Play competitive carrom or pool in real-time, head-to-head battles."
    },
    {
      icon: "🎯",
      title: "Knife Hit",
      description: "Tap. Aim. Hit. Win. Timing is everything in these precision-based arcade skill games. Compete for the bullseye and the prize!"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎮 Explore Games</h1>
          <p className="text-muted-foreground text-lg">Exciting 1v1 cash games and upcoming releases</p>
        </div>

        {/* Available Games */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">✅ Available Games</h2>
          <p className="text-muted-foreground mb-8">Play skill-based, real-money games with fair matchmaking, smooth gameplay, and instant rewards.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableGames.map((game, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔜 Coming Soon</h2>
          <p className="text-muted-foreground mb-8">Stay tuned — these exciting games are launching soon on the Xinnet app!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonGames.map((game, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <GameCard {...game} isComingSoon />
              </div>
            ))}
          </div>
        </section>

        {/* How Game Matches Work */}
        <section className="bg-card rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">💡 How Game Matches Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold mb-2">1v1 Matchmaking</h3>
              <p className="text-muted-foreground text-sm">No bots, only real players</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💸</div>
              <h3 className="font-semibold mb-2">Real Cash Rewards</h3>
              <p className="text-muted-foreground text-sm">Choose your entry stake and win double</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold mb-2">Anti-Collusion System</h3>
              <p className="text-muted-foreground text-sm">Secure and fair gameplay</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-semibold mb-2">Short Sessions</h3>
              <p className="text-muted-foreground text-sm">Play & win in under 3 minutes</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎁 Ready to Play?</h2>
          <p className="text-muted-foreground mb-8">Explore your favorite games and win real rewards instantly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gaming">
              Download the App
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-gaming">
              See How It Works
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Games;