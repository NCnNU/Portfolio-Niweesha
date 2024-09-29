// components/ui/floating-dock.tsx
"use client"; // Ensure this directive is present to mark the file as a client component
import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "fixed bottom-4 left-0 right-0 flex justify-center items-center gap-4 p-2 bg-black", // Center the icons at the bottom in mobile
        className
      )}
    >
      {items.map((item) => (
        <Link href={item.href} key={item.title}>
          <motion.div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900">
            {item.icon}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex mx-auto h-16 gap-8 items-end rounded-2xl bg-black px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeMultiplier = 1.0;
  const widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40 * sizeMultiplier, 80 * sizeMultiplier, 40 * sizeMultiplier]
  );
  const heightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40 * sizeMultiplier, 80 * sizeMultiplier, 40 * sizeMultiplier]
  );

  const widthIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20 * sizeMultiplier, 40 * sizeMultiplier, 20 * sizeMultiplier]
  );
  const heightIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20 * sizeMultiplier, 40 * sizeMultiplier, 20 * sizeMultiplier]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIconSpring = useSpring(widthIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIconSpring = useSpring(heightIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <motion.div
          style={{ width: widthIconSpring, height: heightIconSpring }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
