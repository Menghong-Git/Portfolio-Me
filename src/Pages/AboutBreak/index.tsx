import { motion } from "framer-motion";

import { Box, Lock, MoveDown, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import AnimationButton from "@/components/ui/AnimationButton";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/cta-section-with-gallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="w-full  text-white ">
      <div className="w-full h-[800px] relative overflow-hidden ">
        {/* Spotlight background effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Main content flex */}
        <div className="flex flex-col md:flex-row h-full backdrop-blur-2xl ">
          {/* Left content */}
          <div className="flex-[1.1] p-8 md:p-16 z-10 flex flex-col justify-center items-center backdrop-blur-3xl rounded-4xl drop-shadow-[0_4px_50px_rgba(239,68,68,0.7)] bg-gradient-to-b from-red-400 via-red-200 to-pink-50">
            <h1 className="text-4xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 text-center font-semibold">
              INTRODUCTION
            </h1>
            <p className="mt-6 text-neutral-900 max-w-lg text-center font-mono">
              Hi, I’m MengHong, a Web Developer who loves turning ideas into
              modern, responsive, and user-friendly websites. With a mix of
              creativity and clean code, I bring designs to life and create
              digital experiences that connect with people. Explore my portfolio
              to see how I transform concepts into reality.
            </p>
            <div className="mt-6 flex justify-center">
              <MoveDown className="animate-bounce h-6 w-6 text-neutral-700" />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-[1.7] relative w-full h-full ">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full min-h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Tool showing */}

      <div className="relative flex flex-col space-x-32 md:flex-row  w-screen-full h-screen-full min-w items-center justify-center  overflow-hidden rounded-lg backdrop-blur-2xl px-20 pb-20 pt-8 ">
        <div>
          <IconCloud iconSlugs={slugs} />
        </div>
        <div>
          <h1 className="text-9xl md:text-5xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-red-500 text-center font-mono">
            SKILL
          </h1>
          <div className="grid grid-cols gap-2 w-auto ">
            <div className="flex flex-wrap gap-5 justify-around">
              <AnimationButton title="Html" />
              <AnimationButton title="CSS" />
              <AnimationButton title="Javascript" />
            </div>
            <div className="flex flex-wrap gap-5 justify-around">
              <AnimationButton title="React" />
              <AnimationButton title="NestJs" />
              <AnimationButton title="Javascript" />
            </div>
            <div className="flex flex-wrap gap-5 justify-around">
              <AnimationButton title="Node.js" />
              <AnimationButton title="SQL" />
              <AnimationButton title="Database" />
            </div>
            <div className="flex flex-wrap gap-5 justify-around">
              <AnimationButton title="Ruby" />
              <AnimationButton title="Git" />
              <AnimationButton title="Modern Tool" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid section */}

      <div className="mb-16  mt-32 h-full">
        <div className="text-5xl md:text-8xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-red-500 text-center font-mono ">
          About Me
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 md:p-8 xl:max-h-[48rem]">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-5 w-5" />}
            title="Me"
            description="I am a Full Stack developer with a passion for building web applications using modern technologies. In my free time, I love exploring new tech and contributing to open-source projects."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-5 w-5" />}
            title="Expertise"
            description="My expertise includes React, TypeScript, Node.js, RESTful APIs, state management, testing, and cloud deployments. I create efficient, scalable, and high-performance solutions."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-5 w-5" />}
            title="Purpose"
            description={
              <>
                I build beautiful, functional web experiences. <br />
                I aim to solve real-world problems and empower users. <br />
                I continuously learn, share knowledge, and contribute to the dev
                community. <br />
                I write clean code and collaborate to deliver high-quality
                products. <br />
                Supporting startups and businesses digitally is my goal.
              </>
            }
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-5 w-5" />}
            title="Responsible"
            description={
              <>
                I prioritize secure, maintainable code and best practices.{" "}
                <br />I value ethical decisions, clear communication, and
                privacy. <br />
                Continuous learning, collaboration, and reliability are my
                commitments.
              </>
            }
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-5 w-5" />}
            title="Creative"
            description={
              <>
                I approach challenges with curiosity and imagination. <br />
                Experimenting, designing intuitive UX, and finding innovative
                solutions drives me. <br />
                Creativity + technical skills = impactful digital products.
              </>
            }
          />
        </ul>
      </div>
      <section>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2 mb-16">
          <ContainerStagger>
            <ContainerAnimated className="mb-4 block text-xs font-medium text-rose-500 dark:text-rose-500 md:text-3xl">
              Innovate & Grow
            </ContainerAnimated>
            <ContainerAnimated className="text-4xl font-semibold md:text-[5rem] tracking-tight dark:text-gray-100 text-black">
              Scale Your Business Through Innovation
            </ContainerAnimated>
            <ContainerAnimated className="my-4 text-base text-slate-400  md:my-6 md:text-lg">
              Transform your startup&apos;s potential through innovative
              solutions and strategic growth. We help businesses adapt, evolve,
              and thrive in today&apos;s competitive marketplace.
            </ContainerAnimated>
            <ContainerAnimated>
              <Link to="https://t.me/+85586623507"><Button className=" text-black  ">Start Scaling Today</Button></Link>
            </ContainerAnimated>
          </ContainerStagger>

          <GalleryGrid>
            {IMAGES.map((imageUrl, index) => (
              <GalleryGridCell index={index} key={index}>
                <img
                  className="size-full object-cover object-center"
                  width="100%"
                  height="100%"
                  src={imageUrl}
                  alt=""
                />
              </GalleryGridCell>
            ))}
          </GalleryGrid>
        </div>
      </section>
    </div>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
// cardRunner for active in the about at the bottom section
const IMAGES = [
  "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1481095076.jpg",
  "https://thumbs.dreamstime.com/z/high-performance-business-graph-illustration-design-over-white-background-50655045.jpg",
  "https://tse1.mm.bing.net/th/id/OIP.laPIgjN4A552xFOOJmWHAQHaEP?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://skyryedesign.com/wp-content/uploads/2023/11/personalisation-ui-1536x1152.png",
];

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      className={cn("min-h-[19rem] list-none", area)}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1.5 }}
    >
      <div className="relative h-full rounded-[1.25rem] border border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-background p-6 shadow-sm dark:shadow-[0_0_27px_0_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {title}
              </h3>
              <h2 className="text-sm md:text-base text-muted-foreground font-sans">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default AboutMe;
