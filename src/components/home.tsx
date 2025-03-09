import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";

const Home = () => {
  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Consultation button click handler
  const handleConsultationClick = () => {
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar
        onConsultationClick={handleConsultationClick}
        navLinks={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Why Choose Us", href: "/#why-choose-us" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/#contact" },
        ]}
      />

      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="SellapyTech"
          tagline="Innovative Software Solutions for Modern Businesses"
          ctaText="Book a Free Consultation"
          onCtaClick={handleConsultationClick}
          techImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
        />

        {/* Services Section */}
        <div id="services">
          <ServicesSection
            title="Our Services"
            subtitle="We provide comprehensive software solutions to help your business thrive in the digital landscape"
            services={[
              {
                title: "Software Development",
                description:
                  "Custom software solutions tailored to your business needs. We build scalable, robust applications using modern technologies.",
                icon: "development",
              },
              {
                title: "Software Testing",
                description:
                  "Comprehensive testing services to ensure your software is bug-free and performs optimally under all conditions.",
                icon: "testing",
              },
              {
                title: "AI Agent & Automation",
                description:
                  "Cutting-edge AI solutions and automation tools to streamline your business processes and enhance productivity.",
                icon: "ai",
              },
            ]}
          />
        </div>

        {/* Why Choose Us Section */}
        <div id="why-choose-us">
          <WhyChooseUsSection
            title="Why Choose SellapyTech"
            subtitle="We combine technical excellence with a client-focused approach to deliver exceptional results for your business."
            values={[
              {
                icon: "quality",
                title: "Technical Excellence",
                description:
                  "Our team of experienced developers delivers high-quality, maintainable code that meets industry standards.",
              },
              {
                icon: "speed",
                title: "Rapid Delivery",
                description:
                  "We employ agile methodologies to ensure quick turnaround times without compromising on quality.",
              },
              {
                icon: "security",
                title: "Security-First Approach",
                description:
                  "We prioritize the security of your data and applications at every stage of development.",
              },
              {
                icon: "reliability",
                title: "Reliable Support",
                description:
                  "Our commitment doesn't end at delivery - we provide ongoing support and maintenance for all our solutions.",
              },
            ]}
            ctaText="Schedule a Consultation"
            onCtaClick={handleConsultationClick}
          />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection
            onSubmit={(values) => {
              console.log("Form submitted to database:", values);
            }}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        companyName="SellapyTech"
        address="Uplands Road, Handsworth, Birmingham, B21 8BT, UK"
        phone="+44 778 621 9226"
        email="info@sellapytech.com"
        navigationLinks={[
          { title: "Home", href: "/" },
          { title: "Services", href: "/#services" },
          { title: "About Us", href: "/#why-choose-us" },
          { title: "Blog", href: "/blog" },
          { title: "Contact", href: "/#contact" },
          { title: "Careers", href: "/#contact" },
        ]}
      />
    </div>
  );
};

export default Home;
