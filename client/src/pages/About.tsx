import { Header, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react";

/**
 * About Page - Ahura Mind
 * Design: Cosmic Minimalism with Sacred Geometry
 * Focus: Company story, philosophy, and team
 */

export default function About() {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and visionary thinking to create solutions that transcend conventional boundaries.",
    },
    {
      icon: <Target size={32} />,
      title: "Excellence",
      description:
        "Every project is executed with meticulous attention to detail and unwavering commitment to quality.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "We believe in the power of partnership, working closely with clients to understand and exceed their expectations.",
    },
  ];

  const team = [
    {
      name: "Dr. Aria Cipher",
      role: "Founder & Chief Visionary",
      bio: "Pioneering AI researcher with 15+ years of experience in machine learning and digital transformation.",
    },
    {
      name: "Marcus Stellar",
      role: "Chief Technology Officer",
      bio: "Full-stack architect specializing in scalable cloud infrastructure and enterprise solutions.",
    },
    {
      name: "Sophia Illuminate",
      role: "Head of Strategy",
      bio: "Strategic consultant with expertise in digital transformation and business optimization.",
    },
    {
      name: "Kai Nexus",
      role: "Lead AI Engineer",
      bio: "Machine learning specialist focused on building intelligent systems that drive business value.",
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
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/hero-golden-brain-g5wxWWKrhw5yRFg8d6FSyF.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-charcoal/75"></div>
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-6">
              About <span className="text-gold">Ahura Mind</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Where technology meets the spark of creation, and ancient wisdom guides
              the future.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-8">
                Our <span className="text-gold">Story</span>
              </h2>

              <div className="space-y-6 text-cream/80 leading-relaxed">
                <p>
                  Ahura Mind was founded on a simple yet profound belief: that artificial
                  intelligence, when guided by wisdom and ethical principles, can be a
                  transformative force for humanity. Our name draws inspiration from Ahura
                  Mazda, the supreme wisdom in ancient Persian philosophy, symbolizing the
                  eternal pursuit of knowledge and enlightenment.
                </p>

                <p>
                  In a world where technology often feels disconnected from human values, we
                  envisioned a different path. We set out to create an agency that would not
                  merely implement AI solutions, but would architect digital experiences that
                  honor both innovation and integrity. Our team comprises visionary technologists,
                  strategic thinkers, and creative minds united by a singular purpose: to elevate
                  businesses through intelligent, purposeful digital transformation.
                </p>

                <p>
                  Since our inception, we have partnered with industry leaders, ambitious
                  startups, and forward-thinking organizations across diverse sectors. Each
                  project has reinforced our conviction that the most powerful solutions emerge
                  when technology is infused with strategic insight, creative excellence, and
                  a deep understanding of human needs.
                </p>

                <p>
                  Today, Ahura Mind stands as a beacon of innovation in the digital landscape,
                  known for delivering not just solutions, but transformations that reshape
                  industries and empower businesses to thrive in an increasingly complex world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-y border-gold/30">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-16 text-center">
              Our <span className="text-gold">Philosophy</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-lg bg-charcoal/50 border border-gold/30 text-center"
                >
                  <div className="flex justify-center mb-4 text-gold">{value.icon}</div>
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-16 text-center">
              Meet Our <span className="text-gold">Team</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="group rounded-lg overflow-hidden bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow"
                >
                  {/* Avatar */}
                  <div className="h-40 bg-gradient-to-br from-gold to-[#E0F7FA] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 rounded-full bg-charcoal flex items-center justify-center">
                      <span className="text-3xl font-playfair font-bold text-gold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-playfair font-bold text-cream mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm font-poppins font-600 mb-3">
                      {member.role}
                    </p>
                    <p className="text-cream/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-y border-gold/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="p-8 rounded-lg bg-charcoal/50 border border-gold/30">
                <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
                  Our Mission
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  To empower organizations with intelligent, transformative digital solutions
                  that bridge the gap between human wisdom and artificial intelligence,
                  enabling them to thrive in an increasingly complex and interconnected world.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-lg bg-charcoal/50 border border-gold/30">
                <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
                  Our Vision
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  To be the global beacon of ethical, innovative AI and digital solutions,
                  recognized for our commitment to excellence, integrity, and the
                  transformative power of technology guided by wisdom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-8">
                Why We <span className="text-gold">Exist</span>
              </h2>

              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                We exist because we believe that technology should serve humanity, not the
                other way around. In an age where artificial intelligence is reshaping every
                aspect of business and society, we are committed to ensuring that this
                transformation is guided by wisdom, ethics, and a deep respect for human
                potential.
              </p>

              <p className="text-cream/80 text-lg leading-relaxed mb-12">
                Every project we undertake, every solution we architect, and every partnership
                we forge is rooted in this fundamental belief. We are not just building
                technology; we are architecting the future, one intelligent solution at a time.
              </p>

              <Link href="/contact">
                <a>
                  <Button className="bg-gold text-charcoal hover:bg-[#E0F7FA] px-10 py-6 text-lg font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow">
                    Join Our Mission
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
