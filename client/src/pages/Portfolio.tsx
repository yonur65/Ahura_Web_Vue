import { Header, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";

/**
 * Portfolio Page - Ahura Mind
 * Design: Cosmic Minimalism with Sacred Geometry
 * Focus: Gallery of past projects and digital miracles
 */

export default function Portfolio() {
  const projects = [
    {
      title: "FinanceAI Platform",
      category: "AI Integration",
      description:
        "A comprehensive AI-powered financial analytics platform that processes millions of transactions in real-time.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-golden-brain-g5wxWWKrhw5yRFg8d6FSyF.webp",
      results: ["40% efficiency gain", "Real-time insights", "Reduced costs by 35%"],
    },
    {
      title: "E-Commerce Transformation",
      category: "Web Development",
      description:
        "Complete digital transformation of a legacy e-commerce platform with AI-driven recommendations.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/abstract-divine-tech-LFbLfzQiDjzTzWUBTFzieH.webp",
      results: ["3x revenue increase", "99.9% uptime", "Mobile-first design"],
    },
    {
      title: "Healthcare Analytics Suite",
      category: "Digital Transformation",
      description:
        "Modernized healthcare data infrastructure with predictive analytics and patient insights.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-neural-cosmos-EqdZQ4qDm646TTn2ntbakS.webp",
      results: ["Improved patient outcomes", "Reduced wait times", "Data security"],
    },
    {
      title: "Social Media Intelligence",
      category: "Strategic Management",
      description:
        "AI-powered social media management platform with sentiment analysis and trend prediction.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/abstract-divine-tech-LFbLfzQiDjzTzWUBTFzieH.webp",
      results: ["50% engagement boost", "Viral campaigns", "Brand growth"],
    },
    {
      title: "Enterprise Automation",
      category: "AI Integration",
      description:
        "Automated workflow system that reduced manual processes by 80% across enterprise operations.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-golden-brain-g5wxWWKrhw5yRFg8d6FSyF.webp",
      results: ["80% automation", "Cost savings", "Faster delivery"],
    },
    {
      title: "Leadership Development Program",
      category: "Executive Training",
      description:
        "Custom AI training program for C-level executives, enabling strategic decision-making.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-neural-cosmos-EqdZQ4qDm646TTn2ntbakS.webp",
      results: ["Executive readiness", "Strategic alignment", "Innovation culture"],
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-neural-cosmos-EqdZQ4qDm646TTn2ntbakS.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-charcoal/75"></div>
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-6">
              Digital <span className="text-gold">Miracles</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              A showcase of transformative projects that have redefined industries
              and empowered businesses.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group rounded-lg overflow-hidden bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gold/20 border border-gold/50">
                      <span className="text-gold text-xs font-poppins font-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-playfair font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-cream/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.results.map((result, ridx) => (
                        <span
                          key={ridx}
                          className="text-xs text-gold/80 bg-gold/10 px-2 py-1 rounded"
                        >
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-gold/20 text-gold hover:bg-gold hover:text-charcoal border border-gold/50 transition-all duration-300 font-poppins font-600">
                      View Project
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-y border-gold/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "15+", label: "Industries Served" },
                { number: "$500M+", label: "Total Value Created" },
              ].map((stat, idx) => (
                <div key={idx} className="fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-8 text-center">
                Featured Case Study
              </h2>

              <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-2">
                    FinanceAI Platform: Revolutionizing Financial Analytics
                  </h3>
                  <p className="text-cream/70">AI Integration & Web Development</p>
                </div>

                <p className="text-cream/80 mb-6 leading-relaxed">
                  A leading financial services firm approached us with a challenge: process and
                  analyze millions of transactions daily while providing real-time insights to
                  traders and analysts. Their legacy system was slow, inflexible, and unable to
                  scale.
                </p>

                <h4 className="text-lg font-playfair font-bold text-gold mb-3">Solution</h4>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  We architected a cloud-native platform powered by machine learning algorithms
                  that could ingest, process, and analyze financial data in real-time. The
                  platform features advanced predictive analytics, anomaly detection, and
                  automated trading signals.
                </p>

                <h4 className="text-lg font-playfair font-bold text-gold mb-3">Results</h4>
                <ul className="space-y-2 text-cream/80 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    40% improvement in processing efficiency
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Real-time insights enabling faster decision-making
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    35% reduction in operational costs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    99.99% system uptime and reliability
                  </li>
                </ul>

                <Link href="/contact">
                  <a>
                    <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] px-6 py-3 font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow">
                      Discuss Your Project
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-t border-gold/30 text-center">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-6">
              Your Project Awaits
            </h2>
            <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
              Let us create your next digital miracle. Connect with our team to explore
              possibilities.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] px-10 py-6 text-lg font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow">
                  Start Your Project
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
