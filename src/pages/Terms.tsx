const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📜 Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: [Insert Date]</p>
        </div>

        <div className="prose max-w-none text-muted-foreground space-y-8">
          <p>Welcome to Xinnet.io, operated by XINNET IT SOLUTIONS LLP. By using our platform, app, or services, you agree to follow these Terms & Conditions. Please read carefully.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. ✅ Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be 18 years or older to create an account or play real-money games.</li>
              <li>You must be a resident of India (excluding banned states if any) and capable of entering into a legal agreement.</li>
              <li>You must complete KYC verification to withdraw cash rewards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. 🎮 Game Conduct & Fair Play</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All games offered are skill-based, not gambling.</li>
              <li>Bot usage, collusion, or cheating of any kind is strictly prohibited.</li>
              <li>Accounts found violating fair play will be permanently banned, and winnings may be forfeited.</li>
              <li>Multiple accounts by one person are not allowed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. 🧾 Account Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You must provide accurate details during signup and KYC verification.</li>
              <li>Any suspicious or fraudulent activity may result in account suspension or investigation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. 💰 Deposits & Withdrawals</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users can deposit real money into their game wallet using UPI or net banking.</li>
              <li>Withdrawals are processed to UPI or bank accounts after successful KYC verification.</li>
              <li>Bonuses and referral earnings may have specific withdrawal conditions.</li>
              <li>No chargebacks or refunds are allowed once a game has started.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. ⚖️ Governing Law</h2>
            <p>These terms are governed by the laws of India, under the jurisdiction of [Your Registered State].</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. 📬 Contact</h2>
            <p>For questions regarding these Terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>📩 legal@xinnet.io</li>
              <li>📩 support@xinnet.io</li>
            </ul>
          </section>

          <div className="bg-card p-6 rounded-lg">
            <p className="text-center font-medium">✅ By downloading the app, registering, or using Xinnet, you agree to all the above terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;