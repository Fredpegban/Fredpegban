import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { Phone } from "lucide-react";

interface NavbarProps {
  logo?: string;
  navLinks?: Array<{ label: string; href: string }>;
  onConsultationClick?: () => void;
}

const Navbar = ({
  logo = "SellapyTech",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  onConsultationClick = () => console.log("Consultation button clicked"),
}: NavbarProps) => {
  const location = useLocation();
  return (
    <header className="w-full h-20 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-800">
            {logo}
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 transition-colors ${location.pathname === link.href ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavigationMenuLink
                      href={link.href}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div>
          <Button
            onClick={onConsultationClick}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Phone className="mr-2 h-4 w-4" />
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button - Only shown on mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
