/**
 * Privacy Policy Page - Ahura Mind
 * Design: Cosmic Minimalism with professional legal content
 */

export default function Privacy() {
  return (
    <div className="min-h-screen bg-charcoal text-cream pt-24">
      <div className="container max-w-4xl py-12">
        <h1 className="font-playfair font-bold text-5xl mb-8 text-gold">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-cream/80">
          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">1. Introduction</h2>
            <p>
              Ahura Mind ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you voluntarily provide through forms.</li>
              <li><strong>Automatic Data:</strong> Information about your device, browser type, IP address, pages visited, and time spent on our site.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience and track site usage.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process your inquiries and respond to your requests</li>
              <li>Send you marketing and promotional communications</li>
              <li>Generate analytics and improve our services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent transactions and protect against liability</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">4. Disclosure of Your Information</h2>
            <p>We may share your information with third parties in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your consent or at your direction</li>
              <li>To service providers who assist us in operating our website and conducting our business</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-charcoal/50 border border-gold/20 rounded-lg">
              <p><strong>Email:</strong> <a href="mailto:info@ahuramind.com" className="text-gold hover:text-[#E0F7FA] transition-colors">info@ahuramind.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+17473278061" className="text-gold hover:text-[#E0F7FA] transition-colors">+1 747 327 80 61</a></p>
            </div>
          </section>

          <section className="text-sm text-cream/60 mt-12">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
