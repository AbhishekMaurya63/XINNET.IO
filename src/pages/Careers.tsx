const Careers = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Careers at XINNET.IO</h1>
          <p className="text-muted-foreground text-lg">Join India's Next-Gen Gaming Revolution</p>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-8">At XINNET IT SOLUTIONS LLP, we're not just building games — we're building experiences. We create competitive, fast-paced, real-money games that people love to play.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="game-card p-6">
              <h3 className="text-xl font-bold mb-4">💼 Open Roles</h3>
              <ul className="text-muted-foreground text-left space-y-2">
                <li>🔧 Backend Developer (Node.js / Python)</li>
                <li>☁️ DevOps Engineer (AWS / Kubernetes)</li>
                <li>📱 Flutter/React Native Developer</li>
                <li>🎮 Game Designer</li>
                <li>🧩 UI/UX Designer</li>
              </ul>
            </div>
            
            <div className="game-card p-6">
              <h3 className="text-xl font-bold mb-4">🌱 Why Work With Us?</h3>
              <ul className="text-muted-foreground text-left space-y-2">
                <li>🕹️ User-First Innovation</li>
                <li>⚡ Speed & Ownership</li>
                <li>🤝 Collaboration & Trust</li>
                <li>💼 Remote + Hybrid</li>
                <li>🧬 Equity & Growth</li>
              </ul>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">Send your resume with a short intro to careers@xinnet.io</p>
          <p className="font-medium">✨ At XINNET, we don't just build games — we build futures. Yours could be next.</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;