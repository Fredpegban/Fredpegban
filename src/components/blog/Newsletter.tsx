import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log("Subscribing email:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-blue-50 rounded-xl p-6 md:p-8">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <Mail className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Subscribe to Our Newsletter
      </h3>

      <p className="text-gray-600 mb-4">
        Get the latest articles, resources, and insights delivered straight to
        your inbox.
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-3 rounded-md">
          Thank you for subscribing! You'll receive our next newsletter soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
