"use client";

import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceLinks, industryLinks } from "@/lib/navigation";

function DropdownItem({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
        >
          <div className="text-sm font-medium text-gray-900">{title}</div>
          <p className="mt-1 text-sm text-gray-500 leading-snug">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
  };

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#17135F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1.5 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:9058285055"
              className="flex items-center gap-1.5 hover:text-gray-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (905) 828-5055
            </a>
            <a
              href="mailto:sales@trutechprecision.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-gray-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              sales@trutechprecision.com
            </a>
          </div>
          <div className="text-gray-300 text-xs">
            AS9100 & ISO 9001:2015 Certified
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/assets/af8bb2b29d9184d4d83751d1fa438bea1a181d56.png"
                alt="Tru-Tech Precision Inc."
                className="h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#17135F] transition-colors"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#17135F] bg-transparent hover:bg-gray-100">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-2">
                      {serviceLinks.map((link) => (
                        <DropdownItem key={link.href} {...link} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#17135F] bg-transparent hover:bg-gray-100">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-2">
                      {industryLinks.map((link) => (
                        <DropdownItem key={link.href} {...link} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#17135F] transition-colors"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/quality-assurance"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#17135F] transition-colors"
                    >
                      Quality
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/gallery"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#17135F] transition-colors"
                    >
                      Gallery
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blog"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#17135F] transition-colors"
                    >
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/contact"
              className="ml-4 bg-[#17135F] hover:bg-[#17135F]/90 text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services Collapsible */}
            <div>
              <button
                onClick={() => toggleMobileSection("services")}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileSection === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileSection === "services" && (
                <div className="pl-6 space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Collapsible */}
            <div>
              <button
                onClick={() => toggleMobileSection("industries")}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Industries
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileSection === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileSection === "industries" && (
                <div className="pl-6 space-y-1">
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/quality-assurance"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Quality Assurance
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block mx-4 mt-2 bg-[#17135F] text-white text-center px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
}
