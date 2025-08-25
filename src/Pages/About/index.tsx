"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function About() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">
          <TextReveal>About</TextReveal>
        </h1>
      </div>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[40rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4" />}
          title="Me"
          description="I am a Full Stack developer with a passion for building web
        applications using modern technologies. In my free time, I love exploring new technologies and contributing
        to open-source projects."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4" />}
          title="Expertise"
          description="My expertise includes React, TypeScript, and Node.js, and I enjoy
        creating efficient and scalable solutions. I have hands-on experience with building RESTful APIs, integrating third-party services, and optimizing front-end performance. My skill set also includes state management, testing, and deploying applications to cloud platforms."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4" />}
          title="Purpose"
          description={
            <>
              Building beautiful and functional web experiences with modern technologies.<br />
              I strive to create impactful solutions that solve real-world problems and empower users.<br />
              My goal is to continuously learn, share knowledge, and contribute to the developer community.<br />
              I believe in writing clean, maintainable code and collaborating with others to deliver high-quality products.<br />
              We help startups and businesses create their digital presence.
            </>
          }
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4" />}
          title="Responsible"
          description={
            <>
              As a developer, I prioritize writing secure, maintainable code and following best practices.<br />
              I value clear communication, ethical decision-making, and respecting user privacy.
              I am committed to continuous learning, collaborating effectively, and delivering reliable solutions.<br />
              My responsibility includes testing thoroughly, documenting my work, and supporting the community.
            </>
          }
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4" />}
          title="Creative"
          description={
            <>
              As a developer, I approach challenges with curiosity and imagination.<br />
              I enjoy experimenting with new ideas, designing intuitive user experiences, and finding innovative solutions to complex problems.<br />
              Creativity drives me to craft unique interfaces, optimize workflows, and bring fresh perspectives to every project.<br />
              I believe that blending technical skills with creative thinking leads to impactful and memorable digital products.
            </>
          }
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      className={cn("min-h-[19rem] list-none", area)}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 50, damping: 20, duration: 2 }}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default About;
