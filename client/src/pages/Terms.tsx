/**
 * Terms of Service Page - Ahura Mind
 * Design: Cosmic Minimalism with professional legal content
 */

export default function Terms() {
  return (
    <div className="min-h-screen bg-charcoal text-cream pt-24">
      <div className="container max-w-4xl py-12">
        <h1 className="font-playfair font-bold text-5xl mb-8 text-gold">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-cream/80">
          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Ahura Mind's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">3. Disclaimer</h2>
            <p>
              The materials on Ahura Mind's website are provided on an 'as is' basis. Ahura Mind makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">4. Limitations</h2>
            <p>
              In no event shall Ahura Mind or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ahura Mind's website, even if Ahura Mind or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Ahura Mind's website could include technical, typographical, or photographic errors. Ahura Mind does not warrant that any of the materials on its website are accurate, complete, or current. Ahura Mind may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">6. Links</h2>
            <p>
              Ahura Mind has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ahura Mind of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">7. Modifications</h2>
            <p>
              Ahura Mind may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="font-playfair font-bold text-2xl text-gold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
