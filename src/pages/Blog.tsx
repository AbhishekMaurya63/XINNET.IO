const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📰 Blog & News</h1>
          <p className="text-muted-foreground text-lg">Latest Updates, Game Tips, and Behind-the-Scenes</p>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-8">Welcome to the official XINNET.IO Blog — your go-to destination for all things gaming, cash contests, platform updates, and pro tips. Stay informed, stay ahead!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="game-card p-6">
              <h3 className="text-xl font-bold mb-4">🎮 Product Announcements</h3>
              <p className="text-muted-foreground">Get the latest scoop on new features, app updates, bug fixes, and upcoming releases.</p>
            </div>
            
            <div className="game-card p-6">
              <h3 className="text-xl font-bold mb-4">🧠 Game Strategies & Tips</h3>
              <p className="text-muted-foreground">Learn winning tactics for your favorite games like Ludo, Chess, and Rummy.</p>
            </div>
            
            <div className="game-card p-6">
              <h3 className="text-xl font-bold mb-4">💰 Player Highlights</h3>
              <p className="text-muted-foreground">See how real players are winning big on XINNET. Get inspired and featured!</p>
            </div>
          </div>
          
          <p className="text-muted-foreground">📬 Want updates delivered to your inbox? Subscribe to the XINNET Newsletter to get bonuses, tips, and news directly.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;