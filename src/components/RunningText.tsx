import { motion } from 'motion/react';

interface RunningTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'left' | 'bottom';
}

export function RunningText({
  text,
  className = "",
  delay = 0.05,
  direction = 'left',
}: RunningTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const initialOffset = direction === 'left' ? { x: -70, y: 0 } : { x: 0, y: 24 };

  const child = {
    hidden: {
      opacity: 0,
      ...initialOffset,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 15,
        stiffness: 90,
        mass: 0.9,
      },
    },
  };

  return (
    <span className="inline-block overflow-hidden py-1">
      <motion.span
        className={`inline-flex flex-wrap justify-center items-center ${className}`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-[0.28em] last:mr-0 drop-shadow-xs"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
