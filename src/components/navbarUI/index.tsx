"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import MYButtonStyle from "../ui/MyButton";

export function NavbarDemo() {
  // "/" locally, "/Portfolio-Me/" on GitHub Pages (from vite.config.ts)
  // const base = import.meta.env.BASE_URL; 

  // For NavItems (likely renders <a href>), we must prefix with base.
  const desktopItems = [
  { name: "Home",       link: "/" },
  { name: "About",      link: "/About" },
  { name: "Experience", link: "/Experience" },
  { name: "Resume",     link: "/MyResume" },
];

  // For mobile, use React Router Link so basename handles prefixing.
  const mobileItems = [
    { name: "Home",       link: "/" },
    { name: "About",      link: "/About" },
    { name: "Experience", link: "/Experience" },
    { name: "Resume",     link: "/MyResume" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={desktopItems} /> {/* ✅ prefixed paths */}
          <div className="flex items-center gap-4">
            <MYButtonStyle />
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {mobileItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block !text-neutral-600 dark:text-neutral-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <MYButtonStyle />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
