import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, MessageCircle, Building, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📞 Contact Us</h1>
          <p className="text-muted-foreground text-lg">Questions? Feedback? Let's talk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="game-card">
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-primary mb-2" />
              <h2 className="text-2xl font-bold">🗣️ General Support & Player Help</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">💬 Live Chat Support</h3>
                <p className="text-muted-foreground">Available 24/7 directly inside the Xinnet app. Get fast help from real humans.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📩 Email Support</h3>
                <p className="text-muted-foreground">For app-related issues, payment queries, or account help:</p>
                <p className="text-primary">✉️ support@xinnet.io</p>
              </div>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <h2 className="text-2xl font-bold">🤝 Business Inquiries</h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">For brand collaborations, game publishing, or partnership opportunities:</p>
              <p className="text-primary font-medium">📨 business@xinnet.io</p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <Card className="game-card">
            <CardHeader>
              <h2 className="text-3xl font-bold text-center">📝 Contact Form</h2>
              <p className="text-muted-foreground text-center">Need assistance or want to send us a message? Fill out this quick form and our team will get back to you within 24–48 hours.</p>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="btn-gaming">
                Contact Us Form
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="game-card">
            <CardHeader>
              <Building className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-center">🏢 Office Address</h2>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-semibold">XINNET IT SOLUTIONS LLP</p>
              <p className="text-muted-foreground">Registered Office:</p>
              <p className="text-muted-foreground">[Your Future Office Address Here]</p>
              <p className="text-muted-foreground">(Placeholder until official address is finalized)</p>
              <p className="text-sm text-muted-foreground mt-4">
                MCA-Registered | GSTIN Available on Request<br/>
                For legal, investor, or press inquiries: legal@xinnet.io
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">📱 Social & Community (Coming Soon)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <p className="text-muted-foreground">• Telegram Support Channel</p>
            <p className="text-muted-foreground">• Discord Gaming Community</p>
            <p className="text-muted-foreground">• YouTube Tutorials</p>
            <p className="text-muted-foreground">• Instagram / Facebook Pages</p>
          </div>
          
          <p className="text-lg font-medium mb-6">✅ We're available 24/7 via App Live Chat</p>
          <p className="text-muted-foreground">Every query matters — whether you're a player or a partner.</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;