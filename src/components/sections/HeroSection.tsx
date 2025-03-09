import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  techImage?: string;
}

const HeroSection = ({
  title = "SellapyTech",
  tagline = "Innovative Software Solutions for Modern Businesses",
  ctaText = "Book a Consultation",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80",
  techImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[700px] bg-white overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Content container - Two column layout */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center items-start text-left">
          {/* Logo */}
          <div className="mb-6 bg-white/10 backdrop-blur-sm p-4 rounded-full inline-flex items-center justify-center">
            <svg
              className="h-16 w-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-xl mb-8">
            {tagline}
          </p>

          {/* CTA Button */}
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Column - Tech Image */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            {/* Main tech image with glow effect */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={techImage}
                alt="Business professionals shaking hands in tech office"
                className="w-full h-auto max-w-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/30 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl z-0"></div>
          </div>
        </div>

        {/* Abstract shapes for tech-inspired design */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
