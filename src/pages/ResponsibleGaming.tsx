const ResponsibleGaming = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎯 Responsible Gaming</h1>
          <p className="text-muted-foreground">Play smart. Play safe. Play responsibly.</p>
        </div>

        <div className="prose max-w-none text-muted-foreground space-y-8">
          <p>At XINNET, we want gaming to be fun, fair, and rewarding — not stressful or harmful. Real-money gaming is a form of entertainment, and we are committed to helping our players stay in control.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">✅ Our Commitment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promoting fair and balanced gameplay</li>
              <li>Protecting users from addictive behaviors</li>
              <li>Offering tools and resources to stay in control</li>
              <li>Ensuring that only adults (18+) use our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">🛡️ Stay in Control: Smart Gaming Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set a budget before you play — and stick to it</li>
              <li>Take breaks regularly</li>
              <li>Don't chase losses — every match is a fresh start</li>
              <li>Avoid playing under stress, fatigue, or intoxication</li>
              <li>Treat winnings as a bonus — not an income source</li>
              <li>Know when to stop</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">⚠️ Warning Signs of Problem Gaming</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spending more time or money than intended</li>
              <li>Using borrowed funds to play</li>
              <li>Feeling anxious, angry, or guilty after losses</li>
              <li>Neglecting work, family, or social life</li>
              <li>Lying about your gameplay habits</li>
              <li>Playing to escape personal problems</li>
            </ul>
            <p className="text-foreground font-medium">If any of these sound familiar, it might be time to take a break or seek help.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">🆘 Need Help?</h2>
            <p>If you or someone you know is struggling with gaming behavior, contact:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>📞 National Helpline (India): 1800-599-0019</li>
              <li>🌐 https://www.nimhans.ac.in – NIMHANS Centre for Addiction</li>
              <li>📧 support@xinnet.io – for voluntary account suspension</li>
            </ul>
          </section>

          <div className="bg-card p-6 rounded-lg">
            <p className="text-center font-medium">📍 "Gaming is fun — not a way to make a living. Play for thrill, not for need."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGaming;