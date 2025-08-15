import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GameCard from "@/components/GameCard";
import { 
  Shield, 
  Zap, 
  DollarSign, 
  Gift, 
  Smartphone, 
  Star,
  Download,
  Play,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const games = [
    {
      icon: "🎲",
      title: "Ludo Cash",
      description: "Roll, race, and win! Classic gameplay with real rewards."
    },
    {
      icon: "♟️",
      title: "Chess Cash", 
      description: "Outsmart your opponent in fast-paced strategic matches."
    },
    {
      icon: "🍬",
      title: "CandyCash",
      description: "Match and score in seconds. Fast, fun, and addictively competitive."
    },
    {
      icon: "🪜",
      title: "Saap Sidhi",
      description: "Luck meets fun in this nostalgic dice game — now with real cash prizes!"
    },
    {
      icon: "🃏",
      title: "Poker Duel",
      description: "Real skill. Real strategy. Go head-to-head and outplay your opponent."
    },
    {
      icon: "🃏",
      title: "Rummy Classic",
      description: "India's favorite card game — now faster and fairer."
    }
  ];

  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Real Cash Rewards",
      description: "Win and withdraw instantly to your UPI or bank account."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast & Fair Matches",
      description: "Smooth gameplay, no waiting, and zero bots or fake players."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Verified",
      description: "KYC verification, fraud protection, and encrypted transactions."
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "₹25 Signup Bonus",
      description: "Start playing with a free bonus — no deposit needed."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Lightweight App",
      description: "Quick installation, lightning-fast loading, and minimal data usage."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Sign up & get ₹25 bonus",
      description: "Quick registration with instant bonus"
    },
    {
      number: "2", 
      title: "Choose a game table",
      description: "Pick your favorite game and stake"
    },
    {
      number: "3",
      title: "Play & win matches", 
      description: "Compete in real-time 1v1 battles"
    },
    {
      number: "4",
      title: "Withdraw directly to UPI or bank",
      description: "Get your winnings instantly"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background/95 to-secondary/20 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 pulse-glow">
              🎁 Get ₹25 Bonus on Signup!
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-in-up">
              🎮 Play. Compete. 
              <span className="bg-gradient-to-r from-primary via-gaming-secondary to-accent bg-clip-text text-transparent">
                Win Real Cash.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 fade-in-up">
              Join India's most exciting real-money gaming platform. Play games like Ludo, Chess, CandyCash, and Saap Sidhi — and win instant cash, anytime!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
              <Button size="lg" className="btn-hero text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary-gaming text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Play Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Games Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💥 Featured Cash Games</h2>
            <p className="text-muted-foreground text-lg">Choose your favorite and start winning!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {games.map((game, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="btn-secondary-gaming">
              See All Games
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Xinnet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🛡️ Why Choose XINNET?</h2>
            <p className="text-muted-foreground text-lg">Experience the best in real-money gaming</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="game-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Get Started in 4 Easy Steps</h2>
            <p className="text-muted-foreground text-lg">From signup to cashout in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="btn-gaming">
              <Download className="mr-2 h-5 w-5" />
              Download the App
            </Button>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💬 What Players Say</h2>
            <p className="text-muted-foreground text-lg">Real feedback from real winners</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="game-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4">"Ludo tables are super fast and smooth. I made my first ₹100 in 10 minutes!"</p>
                <p className="text-muted-foreground text-sm">— Rishi, Bhopal</p>
              </CardContent>
            </Card>
            
            <Card className="game-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4">"Feels fair and competitive. CandyCash is my new favorite!"</p>
                <p className="text-muted-foreground text-sm">— Priya, Lucknow</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-gaming-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📱 Play on the Go. Win on the Go.</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Download the Xinnet app and jump into real-cash gaming. No ads. No bots. Just pure competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gaming">
              <Download className="mr-2 h-5 w-5" />
              Download APK
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-gaming">
              📱 QR Code
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">🎁 Don't miss your ₹25 free bonus!</h3>
          <p className="text-muted-foreground mb-6">Start your first game today and turn your skills into real cash.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              🔘 Play Now
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-gaming">
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;