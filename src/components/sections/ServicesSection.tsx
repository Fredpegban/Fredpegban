import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Array<{
    title: string;
    description: string;
    icon: "development" | "testing" | "ai";
  }>;
}

const ServicesSection = ({
  title = "Our Services",
  subtitle = "We provide comprehensive software solutions to help your business thrive in the digital landscape",
  services = [
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
  ],
}: ServicesProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                onLearnMore={() =>
                  console.log(`Learn more about ${service.title}`)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
