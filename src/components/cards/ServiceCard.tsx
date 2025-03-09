import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Code, TestTube, Bot } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: "development" | "testing" | "ai";
  onLearnMore?: () => void;
}

const ServiceCard = ({
  title = "Software Development",
  description = "Custom software solutions tailored to your business needs. We build scalable, robust applications using modern technologies.",
  icon = "development",
  onLearnMore = () => console.log("Learn more clicked"),
}: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "development":
        return <Code className="h-12 w-12 text-blue-600" />;
      case "testing":
        return <TestTube className="h-12 w-12 text-blue-600" />;
      case "ai":
        return <Bot className="h-12 w-12 text-blue-600" />;
      default:
        return <Code className="h-12 w-12 text-blue-600" />;
    }
  };

  return (
    <Card className="w-full max-w-md h-[450px] flex flex-col bg-white transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-100 mx-auto mb-4">
          {getIcon()}
        </div>
        <CardTitle className="text-xl text-center text-blue-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button
          onClick={onLearnMore}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
