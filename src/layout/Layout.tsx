// Layout.tsx
import React, { Suspense } from "react";
import PulsatingDots from "@/layout/mvpblocks/pulsating-loader";
import { NavbarDemo } from "@/components/navbarUI";
import { BackgroundPaths } from "@/components/ui/background-paths";

type LayoutProps = {
  children: React.ReactNode;
};

type NavBarProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full w-screen flex flex-col overflow-hidden">
      {/* Background always visible */}
      <div className="fixed w-full z-0">
        <Suspense fallback={<PulsatingDots />}>
          <BackgroundPaths />
        </Suspense>
      </div>

      {/* Navbar always visible */}
      <div className="fixed top-0 left-0 w-full z-20 drop-shadow-[0_4px_50px_rgba(239,68,68,0.7)]">
        <Suspense fallback={<PulsatingDots />}>
          <NavbarDemo />
        </Suspense>
      </div>

      {/* Page content */}
      <main className="flex-1 flex flex-col justify-start items-center mt-32 z-10">
        {children}
      </main>
    </div>
  );
};

const NavBar = ({ children }: NavBarProps) => {
  return (
    <div className="h-full w-screen flex flex-col overflow-hidden">

      {/* Navbar always visible */}
      <div className="fixed top-0 left-0 w-full z-20 drop-shadow-[0_4px_50px_rgba(239,68,68,0.7)]">
        <Suspense fallback={<PulsatingDots />}>
          <NavbarDemo />
        </Suspense>
      </div>

      {/* Page content */}
      <main className="flex-1 flex flex-col justify-start items-center mt-32 z-10">
        {children}
      </main>
    </div>
  );
};

export { Layout, NavBar };
