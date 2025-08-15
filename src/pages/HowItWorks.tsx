import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download, Gift, Play, DollarSign, Shield, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Download className="h-8 w-8" />,
      title: "Download the App",
      description: "Get the Xinnet app directly from our website or scan the QR code.",
      details: "⚡ Lightweight. Safe. No Play Store needed."
    },
    {
      number: "2", 
      icon: <Gift className="h-8 w-8" />,
      title: "Sign Up & Get ₹25 Bonus",
      description: "Quick registration with mobile number and OTP.",
      details: "🎁 Instant ₹25 bonus credited to your wallet — no deposit required!"
    },
    {
      number: "3",
      icon: <Play className="h-8 w-8" />,
      title: "Choose a Game & Table",
      description: "Pick from exciting skill games like Ludo, Chess, CandyCash, and more.",
      details: "💸 Select your entry stake — ₹5, ₹10, ₹20, ₹50, ₹100. 🎯 Fair 1v1 matchmaking ensures you always play with real players of similar skill level."
    },
    {
      number: "4",
      icon: <Play className="h-8 w-8" />,
      title: "Play to Win",
      description: "Engage in real-time competitive matches. Win or lose — every second is thrilling.",
      details: "🧠 Strategy, speed, focus = real rewards."
    },
    {
      number: "5",
      icon: <DollarSign className="h-8 w-8" />,
      title: "Withdraw Winnings Instantly",
      description: "As soon as you win, your balance is updated.",
      details: "💳 Withdraw your money directly to your UPI or bank account with just a few taps. ⚠️ Complete your KYC once to enable withdrawals."
    }
  ];

  const features = [
    { feature: "Real Games", offer: "All skill-based, 1v1, competitive" },
    { feature: "Real Players", offer: "No bots, no fake opponents" },
    { feature: "Secure Platform", offer: "Encrypted transactions & KYC verified" },
    { feature: "Fair Matchmaking", offer: "Skill-matched players only" },
    { feature: "Fast Withdrawals", offer: "UPI/Bank payouts in minutes" },
    { feature: "Free Signup Bonus", offer: "₹25 bonus to start playing" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">⚙️ How It Works</h1>
          <p className="text-muted-foreground text-lg">Play games. Win real money. Withdraw instantly.</p>
        </div>

        {/* Step-by-Step Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🚀 Step-by-Step Guide to Start Playing & Winning</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="game-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <p className="text-foreground">{step.details}</p>
                      {index === 0 && (
                        <div className="flex gap-2 mt-4">
                          <Button className="btn-gaming">Download Now</Button>
                          <Button variant="outline" className="btn-secondary-gaming">Get APK</Button>
                          <Button variant="outline" className="btn-secondary-gaming">Scan QR</Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What Makes Xinnet Different */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🛡️ What Makes Xinnet Different?</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  <th className="text-left py-4 px-4 font-bold">XINNET.IO Offers</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {row.offer}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Need Help */}
        <section className="text-center bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">🧾 Need Help?</h2>
          <p className="text-muted-foreground mb-8">Still unsure how it works? Check out our FAQ or contact support anytime.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="btn-secondary-gaming">
              Visit FAQs
            </Button>
            <Button className="btn-gaming">
              Chat with Support
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;