import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HelpCircle, Mail, MessageCircle, FileText } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "How do I earn money on Xinnet?",
      answer: "Simply download the app, play real-money games like Ludo, Chess, CandyCash, or Saap Sidhi, and win matches. Your winnings can be instantly withdrawn to UPI or bank."
    },
    {
      question: "Do I get a signup bonus?",
      answer: "Yes! New users get ₹25 bonus instantly after signup — no deposit needed."
    },
    {
      question: "How do I withdraw money?",
      answer: "Go to the wallet section in the app, enter your UPI ID or bank account details, and withdraw your winnings instantly. KYC verification may be required."
    },
    {
      question: "Are the games fair? Any bots?",
      answer: "100% fair and bot-free. All our games are real 1v1 skill-based matches with strict anti-fraud checks and verified players only."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">❓ FAQ & Support</h1>
          <p className="text-muted-foreground text-lg">Answers to your questions. Help when you need it.</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔥 Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="game-card">
                <CardHeader>
                  <h3 className="text-lg font-bold">Q{index + 1}: {faq.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">A: {faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">📮 Need More Help?</h2>
          <p className="text-center text-muted-foreground mb-8">If your question isn't listed above, we're here to help.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="game-card text-center">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">📩 Email Support</h3>
                <p className="text-muted-foreground text-sm">support@xinnet.io</p>
              </CardContent>
            </Card>
            
            <Card className="game-card text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">🗨️ Live Chat</h3>
                <p className="text-muted-foreground text-sm">Available in the Xinnet App</p>
              </CardContent>
            </Card>
            
            <Card className="game-card text-center">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">📄 Help Center</h3>
                <p className="text-muted-foreground text-sm">xinnet.io/help</p>
              </CardContent>
            </Card>
            
            <Card className="game-card text-center">
              <CardContent className="pt-6">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">📱 Support Coming Soon</h3>
                <p className="text-muted-foreground text-sm">Telegram/WhatsApp</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">📝 Submit a Support Ticket</h2>
          <p className="text-muted-foreground mb-8">Having an issue? Fill the quick form below and our team will reach out within 24 hours.</p>
          
          <Button size="lg" className="btn-gaming">
            Contact Form
          </Button>
          
          <p className="text-muted-foreground text-sm mt-6">
            ✅ We're available 24/7 via App Live Chat. Your feedback, suggestions, and bug reports help us improve every day.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support;