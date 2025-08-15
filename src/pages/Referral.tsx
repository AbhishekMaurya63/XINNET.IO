import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Share, Gift, Users, DollarSign } from "lucide-react";

const Referral = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎁 Referral & Rewards</h1>
          <p className="text-muted-foreground text-lg">Earn cash by inviting friends. Everyone wins!</p>
        </div>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">🤝 Refer & Earn Real Money</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            Love playing on Xinnet? Share the fun and get rewarded! When your friend joins Xinnet using your referral link or code:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
            <Card className="game-card">
              <CardContent className="pt-6 text-center">
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">They get ₹25 Bonus</h3>
                <p className="text-muted-foreground">Instant welcome bonus for new users</p>
              </CardContent>
            </Card>
            
            <Card className="game-card">
              <CardContent className="pt-6 text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">You get up to ₹50</h3>
                <p className="text-muted-foreground">When they start playing</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg">The more friends you invite, the more you earn — unlimited referrals!</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">💸 How Referral Works (3 Simple Steps)</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="game-card text-center">
              <CardHeader>
                <Share className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">1️⃣ Share Your Link</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Go to the "Refer & Earn" section in the app. Copy your unique referral link or code and share it on WhatsApp, Telegram, Instagram, etc.</p>
              </CardContent>
            </Card>
            
            <Card className="game-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">2️⃣ Friend Signs Up</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your friend joins using your link/code and instantly gets a ₹25 welcome bonus.</p>
              </CardContent>
            </Card>
            
            <Card className="game-card text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold">3️⃣ You Get Paid</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">You earn ₹25 when your friend plays their first game, and another ₹25 after their first deposit. That's ₹50 per successful referral!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🧮 Referral Earnings Example</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold">Friends Invited</th>
                  <th className="text-left py-4 px-4 font-bold">Total Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">10 Friends</td>
                  <td className="py-4 px-4 text-primary font-bold">₹500</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">25 Friends</td>
                  <td className="py-4 px-4 text-primary font-bold">₹1250</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">100 Friends</td>
                  <td className="py-4 px-4 text-primary font-bold">₹5000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-muted-foreground mt-6">💬 Top referrers earn up to ₹10,000/month — just by sharing!</p>
        </section>

        <section className="text-center bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">🚀 Start Referring Now!</h2>
          <p className="text-muted-foreground mb-8">Need help with tracking your referrals? Visit the Help Center or contact our Support Team anytime.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gaming">
              🔗 Get My Referral Link
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-gaming">
              Download the App
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Referral;