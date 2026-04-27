import { Header, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

/**
 * Services Page - Ahura Mind
 * Design: Cosmic Minimalism with Sacred Geometry
 * Focus: Detailed service offerings and expertise
 */

export default function Services() {
  const services = [
    {
      title: "AI Integration & Consulting",
      description:
        "Strategic implementation of artificial intelligence systems tailored to your business needs.",
      features: [
        "AI Strategy & Roadmap Development",
        "Machine Learning Model Implementation",
        "Natural Language Processing Solutions",
        "Computer Vision Integration",
        "Predictive Analytics & Forecasting",
        "AI-Powered Automation",
      ],
      icon: "🧠",
    },
    {
      title: "Web & Application Development",
      description:
        "High-performance digital solutions built with cutting-edge technologies and best practices.",
      features: [
        "Full-Stack Web Development",
        "Mobile Application Development",
        "Progressive Web Apps (PWA)",
        "Cloud Infrastructure Setup",
        "API Development & Integration",
        "Performance Optimization",
      ],
      icon: "💻",
    },
    {
      title: "Digital Transformation",
      description:
        "Comprehensive modernization of your digital infrastructure and business processes.",
      features: [
        "Legacy System Modernization",
        "Process Automation",
        "Cloud Migration Services",
        "Data Analytics & Insights",
        "Security & Compliance",
        "Change Management Support",
      ],
      icon: "🚀",
    },
    {
      title: "Strategic Social Media Management",
      description:
        "Elevate your brand presence with data-driven social media strategies.",
      features: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Analytics & Reporting",
        "Campaign Optimization",
      ],
      icon: "📱",
    },
    {
      title: "Executive AI Training & Workshops",
      description:
        "Empower your leadership team with comprehensive AI knowledge and skills.",
      features: [
        "AI Fundamentals for Executives",
        "Strategic AI Implementation",
        "Data-Driven Decision Making",
        "AI Ethics & Governance",
        "Custom Workshop Development",
        "Ongoing Mentorship",
      ],
      icon: "👔",
    },
    {
      title: "Custom Solutions",
      description:
        "Bespoke solutions designed specifically for your unique business challenges.",
      features: [
        "Requirements Analysis",
        "Solution Architecture",
        "Rapid Prototyping",
        "Scalable Implementation",
        "Ongoing Support",
        "Continuous Improvement",
      ],
      icon: "⚙️",
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/abstract-divine-tech-LFbLfzQiDjzTzWUBTFzieH.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-charcoal/75"></div>
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-6">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your business and unlock
              new possibilities.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-lg bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4">{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-3 group-hover:text-[#E0F7FA] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-gold flex-shrink-0 mt-0.5"
                        />
                        <span className="text-cream/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact">
                    <a>
                      <Button className="w-full bg-gold/20 text-gold hover:bg-gold hover:text-charcoal border border-gold/50 transition-all duration-300 font-poppins font-600">
                        Learn More
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-y border-gold/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-8 text-center">
                Why Partner with <span className="text-gold">Ahura Mind</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Visionary Expertise",
                    desc: "Our team combines deep technical knowledge with strategic business acumen to deliver transformative solutions.",
                  },
                  {
                    title: "Innovation-Driven",
                    desc: "We stay at the forefront of technology trends, ensuring your business always has access to cutting-edge solutions.",
                  },
                  {
                    title: "Personalized Approach",
                    desc: "Every solution is tailored to your unique needs, challenges, and goals. We do not believe in one-size-fits-all.",
                  },
                  {
                    title: "Proven Track Record",
                    desc: "Our portfolio showcases successful transformations across diverse industries and business scales.",
                  },
                  {
                    title: "Ongoing Support",
                    desc: "We partner with you for the long term, providing continuous support, optimization, and strategic guidance.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-charcoal font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-playfair font-bold text-gold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-cream/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-charcoal text-center">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
              Let us discuss how our services can transform your business and unlock
              new opportunities.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] px-10 py-6 text-lg font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow">
                  Schedule a Consultation
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
