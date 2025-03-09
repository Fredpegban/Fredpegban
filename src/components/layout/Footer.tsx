import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  navigationLinks?: Array<{
    title: string;
    href: string;
  }>;
}

const Footer = ({
  companyName = "SellapyTech",
  address = "Innovation Hub, 12 Tech Street, Birmingham, UK",
  phone = "+44 121 123 4567",
  email = "info@sellapytech.com",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  navigationLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Careers", href: "/careers" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-blue-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{companyName}</h3>
            <p className="text-blue-200 max-w-xs">
              Innovative software solutions for businesses of all sizes.
              Specializing in development, testing, and AI automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="https://www.facebook.com/profile.php?id=61564112454425"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-200 hover:text-white transition-colors" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-blue-200 hover:text-white transition-colors" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-blue-200 hover:text-white transition-colors" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-blue-200 hover:text-white transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      to={link.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">More</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(3).map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      to={link.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                <span className="text-blue-200">{address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-200 mr-2" />
                <a
                  href={`tel:${phone}`}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-200 mr-2" />
                <a
                  href={`mailto:${email}`}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-blue-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a
              href="/privacy"
              className="text-blue-200 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-blue-200 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-blue-200 text-sm hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
