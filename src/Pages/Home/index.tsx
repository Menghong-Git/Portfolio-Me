"use client";

import { motion, type Variants } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import ButtonShadow from "@/components/ui/ButtonShadow";
import Card from "@/components/ui/Card";
import { Typewriter } from "@/components/ui/typewriter-text";

/* 🔹 Variants typed with "custom" */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 p-6">
      {/* Left side */}
      <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AuroraText className="text-3xl font-bold">Welcome,</AuroraText>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typewriter
            text={["Hello !", "I'm MengHong"]}
            speed={100}
            loop={true}
            className="text-5xl md:text-8xl font-bold flex gap-2"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0 mb-12 text-gray-700 dark:text-gray-200"
        >
          <p className="text-lg max-w-md">
            I'm a Full Stack developer specializing in
          </p>
          <p className="text-lg mb-4 max-w-md">React and TypeScript.</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="/MyResume">
            <ButtonShadow title="Resume" />
          </a>
          <a href="https://t.me/+85586623507">
            <ButtonShadow title="Hire Me" />
          </a>
        </motion.div>
      </div>

      {/* Right side (Card) */}
      <motion.div
        variants={fadeUp}
        custom={1.2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center rounded-3xl drop-shadow-[0_4px_50px_rgba(239,68,68,0.7)] mt-12 md:mt-0 md:w-1/2"
      >
        <Card />
      </motion.div>
    </div>
  );
};

export default Home;
