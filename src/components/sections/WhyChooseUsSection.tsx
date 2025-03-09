import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Check, Clock, Shield, Zap } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({
  icon = <Check className="h-8 w-8 text-blue-600" />,
  title = "Value Title",
  description = "Description of this company value",
}: ValueCardProps) => {
  return (
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          {icon}
        </div>
        <CardTitle className="text-xl text-blue-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface WhyChooseUsSectionProps {
  title?: string;
  subtitle?: string;
  values?: Array<{
    icon: "quality" | "speed" | "security" | "reliability";
    title: string;
    description: string;
  }>;
  ctaText?: string;
  onCtaClick?: () => void;
}

const WhyChooseUsSection = ({
  title = "Why Choose SellapyTech",
  subtitle = "We combine technical excellence with a client-focused approach to deliver exceptional results for your business.",
  values = [
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
  ],
  ctaText = "Schedule a Consultation",
  onCtaClick = () => console.log("CTA clicked"),
}: WhyChooseUsSectionProps) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "quality":
        return <Check className="h-8 w-8 text-blue-600" />;
      case "speed":
        return <Zap className="h-8 w-8 text-blue-600" />;
      case "security":
        return <Shield className="h-8 w-8 text-blue-600" />;
      case "reliability":
        return <Clock className="h-8 w-8 text-blue-600" />;
      default:
        return <Check className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={getIcon(value.icon)}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={onCtaClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
