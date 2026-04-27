import { Header, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Page - Ahura Mind
 * Design: Cosmic Minimalism with Sacred Geometry
 * Focus: Professional inquiry form and contact details
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={32} />,
      title: "Email",
      value: "info@ahuramind.com",
      link: "mailto:info@ahuramind.com",
    },
    {
      icon: <Phone size={32} />,
      title: "Phone",
      value: "+1 747 327 80 61",
      link: "tel:+17473278061",
    },
    {
      icon: <MapPin size={32} />,
      title: "Location",
      value: "United States",
      link: "#",
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
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/abstract-divine-tech-LFbLfzQiDjzTzWUBTFzieH.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-charcoal/75"></div>
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Have a question or ready to start your transformation? We would love to
              hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-charcoal">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="group p-8 rounded-lg bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-glow text-center"
                >
                  <div className="flex justify-center mb-4 text-gold group-hover:text-[#E0F7FA] transition-colors">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-cream mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gold group-hover:text-[#E0F7FA] transition-colors">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-lg bg-gradient-to-br from-gold/10 to-[#E0F7FA]/10 border border-gold/30">
                <h2 className="text-3xl font-playfair font-bold text-cream mb-8 text-center">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-cream font-poppins font-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-gold/30 text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 font-poppins"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-cream font-poppins font-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-gold/30 text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 font-poppins"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-cream font-poppins font-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-gold/30 text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 font-poppins"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-cream font-poppins font-600 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-gold/30 text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 font-poppins"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-cream font-poppins font-600 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-gold/30 text-cream focus:border-gold focus:outline-none transition-colors duration-300 font-poppins"
                    >
                      <option value="">Select a subject</option>
                      <option value="AI Integration">AI Integration & Consulting</option>
                      <option value="Web Development">Web & Application Development</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Social Media">Strategic Social Media Management</option>
                      <option value="Training">Executive AI Training & Workshops</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-cream font-poppins font-600 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-charcoal/50 border border-gold/30 text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 font-poppins resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-charcoal hover:bg-[#E0F7FA] disabled:opacity-50 px-6 py-4 text-lg font-poppins font-600 rounded-lg transition-all duration-300 shadow-glow flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>

                  <p className="text-cream/60 text-sm text-center">
                    We will get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-24 bg-gradient-to-r from-gold/10 to-[#E0F7FA]/10 border-y border-gold/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-8">
                Let us Help You <span className="text-gold">Transform</span>
              </h2>

              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                Whether you are looking to integrate AI into your operations, modernize your
                digital infrastructure, or train your team on emerging technologies, our
                experts are ready to guide you through every step of your transformation
                journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fast Response",
                    desc: "We typically respond within 24 hours",
                  },
                  {
                    title: "Free Consultation",
                    desc: "Initial consultation is always complimentary",
                  },
                  {
                    title: "Flexible Engagement",
                    desc: "Choose the engagement model that works for you",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-lg bg-charcoal/50 border border-gold/30">
                    <h3 className="text-lg font-playfair font-bold text-gold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-cream/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
