const GamblingDisclaimer = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">⚖️ Gambling Disclaimer</h1>
          <p className="text-muted-foreground">Skill-Based Gaming. Not Gambling.</p>
        </div>

        <div className="prose max-w-none text-muted-foreground space-y-8">
          <p>At XINNET IT SOLUTIONS LLP, we are fully committed to operating within the legal framework of Indian laws and ensuring transparency for all our users. The games offered on our platform are games of skill, not games of chance.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">✅ Legal Classification: Games of Skill</h2>
            <p>Under the Public Gambling Act, 1867 and subsequent court rulings, games that primarily require skill — such as decision-making, knowledge, memory, or strategy — are not considered gambling in India.</p>
            
            <div className="space-y-2">
              <p>Games like:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>🎲 Ludo</li>
                <li>♟️ Chess</li>
                <li>🍬 CandyCash</li>
                <li>🪜 Saap Sidhi</li>
                <li>🧠 Quiz Battle</li>
                <li>🎴 Rummy</li>
                <li>🃏 Poker (in select states)</li>
              </ul>
              <p>…are recognized as skill-based games that are legal to offer in most Indian jurisdictions.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">🚫 No Betting or Gambling</h2>
            <p>XINNET.IO does not support, promote, or allow:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Betting on sports or external events</li>
              <li>Games of pure chance or lottery schemes</li>
              <li>Wagering on outcomes outside player control</li>
            </ul>
            <p>We operate real-money games where the outcome is determined by the player's skill, choices, speed, and strategy — not luck.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">⚠️ State Restrictions</h2>
            <p>Although games of skill are legal across most of India, a few states may have restrictions or pending legal clarity on real-money games.</p>
            
            <p>Currently, users from the following states may not be eligible to participate in cash games:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Assam</li>
              <li>Odisha</li>
              <li>Telangana</li>
              <li>Andhra Pradesh</li>
              <li>Nagaland</li>
              <li>Sikkim</li>
            </ul>
            <p className="text-sm">(Subject to change based on legal updates)</p>
            <p>We use geolocation and KYC filters to restrict access from these regions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">📬 Contact</h2>
            <p>For legal questions or clarification:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>📧 legal@xinnet.io</li>
              <li>📧 support@xinnet.io</li>
            </ul>
          </section>

          <div className="bg-card p-6 rounded-lg">
            <p className="text-center font-medium">✔️ XINNET.IO is a skill-based gaming platform built for fair competition, safe entertainment, and legal compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamblingDisclaimer;