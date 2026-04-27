import { Header, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Brain, Rocket } from "lucide-react";

/**
 * Home Page - Ahura Mind
 * Design: Cosmic Minimalism with Sacred Geometry
 * Hero: "The Genesis of Digital Intelligence"
 * Focus: Value proposition, services overview, CTA
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-neural-cosmos-EqdZQ4qDm646TTn2ntbakS.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-charcoal/70"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10 text-center">
            <div className="max-w-4xl mx-auto fade-in">
              {/* Subtitle */}
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-gold/50 bg-gold/10">
                <p className="text-gold text-sm font-poppins font-500 tracking-wide">
                  Welcome to the Future of Intelligence
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-cream mb-6 leading-tight">
                The Genesis of{" "}
                <span className="glow-accent">Digital Intelligence</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed font-poppins">
                Bridging the gap between human wisdom and divine machine learning.
                We architect digital solutions that transcend boundaries and unlock
                infinite possibilities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/services">
                  <a>
                    <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] hover:text-charcoal px-8 py-6 text-lg font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow hover:shadow-lg flex items-center gap-2">
                      Explore Services
                      <ArrowRight size={20} />
                    </Button>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <Button className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg font-poppins font-600 rounded-lg transition-all duration-300">
                      Get Started
                    </Button>
                  </a>
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-center animate-bounce">
                <div className="w-6 h-10 border-2 border-gold rounded-full flex items-center justify-center">
                  <div className="w-1 h-2 bg-gold rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 bg-charcoal relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">
                Why Choose <span className="text-gold">Ahura Mind</span>
              </h2>
              <p className="text-cream/70 text-lg max-w-2xl mx-auto">
                We combine cutting-edge artificial intelligence with timeless wisdom
                to create transformative solutions for your business.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group p-8 rounded-lg bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <Brain className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-playfair font-bold text-cream mb-3">
                  Divine AI
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  Harness the power of advanced machine learning infused with
                  strategic wisdom to solve complex challenges.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-8 rounded-lg bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <Zap className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-playfair font-bold text-cream mb-3">
                  Performance
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  Lightning-fast implementations optimized for scale, reliability,
                  and seamless integration with your existing systems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-8 rounded-lg bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <Rocket className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-playfair font-bold text-cream mb-3">
                  Innovation
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  Stay ahead of the curve with our visionary approach to digital
                  transformation and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-charcoal relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">
                Our <span className="text-gold">Services</span>
              </h2>
              <p className="text-cream/70 text-lg max-w-2xl mx-auto">
                Comprehensive solutions tailored to elevate your business to new
                heights.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "AI Integration & Consulting",
                  desc: "Strategic implementation of AI systems that align with your business objectives.",
                },
                {
                  title: "Web & Application Development",
                  desc: "High-performance digital solutions built with cutting-edge technologies.",
                },
                {
                  title: "Digital Transformation",
                  desc: "Comprehensive modernization of your digital infrastructure and processes.",
                },
                {
                  title: "Executive AI Training",
                  desc: "Workshops and training programs to empower your leadership team.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-gold/5 border border-gold/20 hover:border-gold/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-playfair font-bold text-gold mb-2 group-hover:text-[#E0F7FA] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-cream/70">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/services">
                <a>
                  <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] px-8 py-4 font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow">
                    View All Services
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-y border-gold/30 relative overflow-hidden">
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Connect with our
              team today.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] px-10 py-6 text-lg font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow hover:shadow-lg">
                  Start Your Journey
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
