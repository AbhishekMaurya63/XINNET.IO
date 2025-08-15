const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🔒 Privacy Policy</h1>
          <p className="text-muted-foreground">Effective Date: [Insert Date]</p>
        </div>

        <div className="prose max-w-none text-muted-foreground space-y-8">
          <p>Xinnet.io, operated by XINNET IT SOLUTIONS LLP, is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. 📥 Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">a. Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name, email address, mobile number</li>
                  <li>KYC documents (PAN, Aadhaar, etc.)</li>
                  <li>Bank account or UPI details (for withdrawals)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">b. Device & App Data</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address, device ID, OS version, app activity</li>
                  <li>Location (if required for legal compliance)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. 🔐 How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify your identity and age (KYC)</li>
              <li>Provide gameplay and wallet services</li>
              <li>Detect and prevent fraud or collusion</li>
              <li>Improve game recommendations and app experience</li>
              <li>Send important updates, promotions, and referral rewards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. 📲 Data Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption on sensitive data</li>
              <li>Secure cloud storage (India-based servers)</li>
              <li>Two-factor authentication (coming soon)</li>
              <li>Internal audits and fraud detection tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. 🧍 Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>View or update your profile and KYC info</li>
              <li>Request data export (email: privacy@xinnet.io)</li>
              <li>Delete your account and personal data (unless blocked by law or fraud detection)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. 📬 Contact Us</h2>
            <p>For privacy concerns, complaints, or queries:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>📧 privacy@xinnet.io</li>
              <li>📧 support@xinnet.io</li>
            </ul>
          </section>

          <div className="bg-card p-6 rounded-lg">
            <p className="text-center font-medium">✅ By using the Xinnet app or website, you consent to this Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;