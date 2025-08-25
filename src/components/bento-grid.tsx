'use client';

import { cn } from '@/lib/utils';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Code,
  FileText,
  Layers,
  Palette,
  Zap,
} from 'lucide-react';
import { type ReactNode } from 'react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

/* 🔹 Variants with proper typing */
const iconVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  animate: {
    rotate: [0, 10, -10, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1.5,
      ease: 'easeInOut',
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 120 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
}: BentoGridItemProps) => {
  return (
    <motion.div
      variants={cardVariants} // ✅ type-safe now
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card px-6 pt-6 pb-8 shadow-md transition-all duration-500 hover:shadow-xl',
        className,
      )}
    >
      {/* Background grid effect */}
      <div className="absolute top-0 -right-1/2 z-0 size-full bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Big background icon */}
      <div className="absolute right-2 bottom-3 text-primary/5 group-hover:text-primary/10 z-0 scale-[6] transition-all duration-700 group-hover:scale-[6.5]">
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          {icon}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow transition-all duration-500 group-hover:bg-primary/20">
            <motion.div variants={iconVariants} initial="initial" animate="animate">
              {icon}
            </motion.div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-snug">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          <span>Learn more</span>
          <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Developer Experience',
    description:
      'I build with developers in mind, ensuring clean, scalable, and maintainable code. My focus is on simplicity and efficiency, making collaboration seamless while delivering solutions that are easy to integrate, extend, and manage across different environments.',
    icon: <Code className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Accessibility',
    description:
      'I build websites that follow best practices, ensuring everyone — including people with disabilities — can use and enjoy them.',
    icon: <Layers className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Responsive Design',
    description:
      'I create layouts that look great and work smoothly across all devices, from desktops to mobile phones.',
    icon: <Layers className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Customizable',
    description:
      "Every project is tailored to fit your brand’s identity, ensuring a unique and personalized design.",
    icon: <Palette className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Performance',
    description:
      'I optimize websites for speed and efficiency so they load fast and provide a smooth user experience.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Documentation',
    description:
      'I provide clear guidance and documentation, making it easy for you or your team to manage and update the project.',
    icon: <FileText className="size-6" />,
    size: 'large' as const,
  },
];

export function BentoGrid1() {
  return (
    <section className="w-full px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <BentoGridItem
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              size={item.size}
              className={cn(
                item.size === 'large'
                  ? 'col-span-6 md:col-span-4'
                  : item.size === 'medium'
                    ? 'col-span-6 sm:col-span-3'
                    : 'col-span-6 sm:col-span-2',
              )}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
