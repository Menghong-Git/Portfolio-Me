import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PulsatingDots from "@/layout/mvpblocks/pulsating-loader";
import TechScroller from "@/components/animate-ui/Animatie";
import { Layout, NavBar } from "@/layout/Layout";
import { ROUTE_PATH } from "@/lib/route-path";

// Lazy imports
const HomePageSection = lazy(() => import("@/Pages/Home"));
const AboutPage = lazy(() => import("@/Pages/About"));
const ExperiencePage = lazy(() => import("@/Pages/Experience"));
const FooterPage = lazy(() => import("@/components/Footer"));
const CardResumePage = lazy(() => import("@/Pages/Resume"));

// Breakout pages
const AboutMePage = lazy(() => import("@/Pages/AboutBreak"));
const BreakExperience = lazy(
  () => import("@/Pages/Experience/BreakExperience/BreakExperience")
);

const AllRoutes = () => {
  return (
    <Routes>
      {/* Root page */}
      <Route
        path={ROUTE_PATH.root}
        element={
          <Layout>
            <Suspense fallback={<PulsatingDots />}>
              <HomePageSection />
            </Suspense>

            <div className="flex justify-center items-center pt-16 w-full mb-16 z-10">
              <Suspense fallback={<PulsatingDots />}>
                <TechScroller />
              </Suspense>
            </div>

            <Suspense fallback={<PulsatingDots />}>
              <AboutPage />
            </Suspense>

            <Suspense fallback={<PulsatingDots />}>
              <ExperiencePage />
            </Suspense>

            <FooterPage />
          </Layout>
        }
      />

      {/* Other pages */}
      <Route
        path={ROUTE_PATH.HomePage.root}
        element={
          <Layout>
            <Suspense fallback={<PulsatingDots />}>
              <HomePageSection />
            </Suspense>
          </Layout>
        }
      />

      <Route
        path={ROUTE_PATH.About.root}
        element={
          <NavBar>
            <Suspense fallback={<PulsatingDots />}>
              <AboutMePage />
              <FooterPage />
            </Suspense>
          </NavBar>
        }
      />

      <Route
        path={ROUTE_PATH.Experience.root}
        element={
          <NavBar>
            <Suspense fallback={<PulsatingDots />}>
              <BreakExperience />
              <FooterPage />
            </Suspense>
          </NavBar>
        }
      />

      <Route
        path={ROUTE_PATH.ResumePage.root}
        element={
          <NavBar>
            <Suspense fallback={<PulsatingDots />}>
              <CardResumePage />
              <FooterPage />
            </Suspense>
          </NavBar>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
