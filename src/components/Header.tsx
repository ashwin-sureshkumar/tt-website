"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sectionLink = (id: string, label: string, className: string) => {
    const href = isHome ? `#${id}` : `/#${id}`;
    return (
      <Link href={href} className={className} onClick={() => setIsMenuOpen(false)}>
        {label}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
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
          <nav className="hidden md:flex space-x-8">
            {sectionLink("home", "Home", "text-gray-700 hover:text-[#17135F] transition-colors")}
            {sectionLink("services", "Services", "text-gray-700 hover:text-[#17135F] transition-colors")}
            {sectionLink("about", "About", "text-gray-700 hover:text-[#17135F] transition-colors")}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#17135F] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
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
          <nav className="md:hidden pb-4 space-y-2">
            {sectionLink("home", "Home", "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded")}
            {sectionLink("services", "Services", "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded")}
            {sectionLink("about", "About", "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded")}
            <Link
              href="/contact"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
