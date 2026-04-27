/**
 * Cookie Policy Page - Ahura Mind
 * Design: Cosmic Minimalism with professional legal content
 */

export default function Cookies() {
  return (
    <div className="min-h-screen bg-charcoal text-cream pt-24">
      <div className="container max-w-4xl py-12">
        <h1 className="font-playfair font-bold text-5xl mb-8 text-gold">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-cream/80">
          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small files that are stored on your browser or the hard drive of your computer. They allow websites to recognize your browser and, if you have a registered account, associate the cookie with your account. Cookies serve many functions, such as allowing you to navigate between pages efficiently, remembering your preferences, and generally improving your user experience.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gold mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
              </div>
              <div>
                <h3 className="font-bold text-gold mb-2">Performance Cookies</h3>
                <p>These cookies collect information about how you use our website, such as which pages you visit and how long you spend on them. This information helps us understand user behavior and improve our services.</p>
              </div>
              <div>
                <h3 className="font-bold text-gold mb-2">Functional Cookies</h3>
                <p>These cookies remember your choices and preferences to provide a more personalized experience.</p>
              </div>
              <div>
                <h3 className="font-bold text-gold mb-2">Marketing Cookies</h3>
                <p>These cookies are used to track your activity across websites to deliver targeted advertising and measure campaign effectiveness.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">3. How We Use Cookies</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To recognize you when you return to our website</li>
              <li>To track your usage patterns and preferences</li>
              <li>To understand how visitors use our website</li>
              <li>To improve our website's functionality and user experience</li>
              <li>To deliver targeted content and advertisements</li>
              <li>To measure the effectiveness of marketing campaigns</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">4. Third-Party Cookies</h2>
            <p>
              We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These third parties have their own privacy policies governing their use of cookies. We do not control how third parties use cookies, and we encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">5. Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. Most web browsers allow you to control cookies through their settings preferences. However, if you choose to reject cookies, you may not be able to use all of the features of our website.
            </p>
            <p className="mt-4">
              To manage cookies, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Delete cookies from your browser settings</li>
              <li>Set your browser to reject cookies</li>
              <li>Use browser extensions to block cookies</li>
              <li>Opt out of third-party cookies through opt-out mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date of this policy.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">7. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
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
