import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Target, Eye, Shield, Users, Gamepad2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🧭 About Us</h1>
          <p className="text-muted-foreground text-lg">Where Skill Meets Opportunity</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🏢 Who We Are</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              XINNET IT SOLUTIONS LLP is a homegrown Indian gaming company building a secure, fair, and exciting real-money gaming experience for players who love to compete and win.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe real games should reward real skill — and that's exactly what Xinnet.io delivers: fast-paced, 1v1 skill-based games with instant cash rewards.
            </p>
            <p className="text-lg font-medium">
              🎯 Our Platform: A modern mobile-first gaming app offering Ludo, Chess, CandyCash, Saap Sidhi, and more — all built for real competition and real payouts.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <Card className="game-card">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold">🚀 Our Mission</h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                To empower millions of players across India with a safe, skill-based gaming platform where they can play, compete, and earn with confidence.
              </p>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold">🌟 Our Vision</h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-4">
                To become India's most trusted real-money gaming ecosystem by offering:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>⚖️ Fair play</li>
                <li>🔐 Transparent operations</li>
                <li>💸 Real, instant rewards</li>
                <li>📱 Lightweight, accessible gaming experiences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔧 The Journey So Far</h2>
          <div className="bg-card rounded-lg p-8">
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2025 by gaming and technology enthusiasts, XINNET began with a simple goal — to fix the broken experience of online gaming, often plagued by bots, fraud, and unfair matchmaking.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              What started as a passion project quickly grew into a secure, scalable gaming ecosystem trusted by thousands.
            </p>
            <p className="text-lg font-medium text-center">
              💡 Built by gamers, for gamers.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">✅ Why Players Trust Xinnet</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="game-card">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">🔐 KYC & fraud protection</h3>
                <p className="text-muted-foreground text-sm">Transparent player verification</p>
              </CardContent>
            </Card>
            
            <Card className="game-card">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">⚡ Fair 1v1 matchmaking</h3>
                <p className="text-muted-foreground text-sm">No bots, no teaming, no collusion</p>
              </CardContent>
            </Card>
            
            <Card className="game-card">
              <CardContent className="pt-6">
                <Gamepad2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">💰 Instant UPI payouts</h3>
                <p className="text-muted-foreground text-sm">No delays, no hidden fees</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">📣 Join the Movement</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're on a mission to revolutionize real-money skill gaming in India. Want to be part of the future of fair, skill-based entertainment?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gaming">
              Download the App
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-gaming">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-gaming">
              Partner with Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;