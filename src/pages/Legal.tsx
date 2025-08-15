const Legal = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">⚖️ Legal Disclaimer</h1>
          <p className="text-muted-foreground">Compliance | Age Restrictions | Jurisdiction</p>
        </div>

        <div className="prose max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">✅ 1. Legal Nature of Platform</h2>
            <p>XINNET.IO is a product of XINNET IT SOLUTIONS LLP, operating as a real-money skill-based gaming platform. All games provided on this platform are designed to comply with applicable Indian laws, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Public Gambling Act of 1867</li>
              <li>Rulings from the Supreme Court of India recognizing games of skill as legal</li>
              <li>Applicable Information Technology and Financial Regulations</li>
            </ul>
            <p>We do not offer games of pure chance, gambling, or betting services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">🔞 2. Age Restriction</h2>
            <p>You must be 18 years or older to create an account, access, or participate in any cash games on XINNET.IO.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Age is verified through our mandatory KYC process.</li>
              <li>Accounts found violating this policy will be permanently banned.</li>
              <li>It is the responsibility of the user to ensure their age eligibility before registration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">📍 3. State-Wise Restrictions</h2>
            <p>While skill games are legal in most Indian states, the laws vary by jurisdiction. As of now, users residing in or accessing from the following states are not permitted to participate in cash games on XINNET.IO:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Assam</li>
              <li>Andhra Pradesh</li>
              <li>Telangana</li>
              <li>Odisha</li>
              <li>Nagaland</li>
              <li>Sikkim</li>
            </ul>
            <p>We use geolocation and identity checks to block access from these regions. Users are also advised to check and comply with their local laws before using our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">📧 Contact Us</h2>
            <p>For legal queries or compliance-related questions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>📩 legal@xinnet.io</li>
              <li>📩 support@xinnet.io</li>
            </ul>
          </section>

          <div className="bg-card p-6 rounded-lg">
            <p className="text-center font-medium">✅ By continuing to use XINNET.IO, you confirm that you have read, understood, and agreed to the terms outlined in this Legal Disclaimer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;