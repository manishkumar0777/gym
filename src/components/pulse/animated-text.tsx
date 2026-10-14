"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  el: Wrapper = "p",
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <Wrapper className={cn(className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.5 }}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        aria-hidden
      >
        {text.split(" ").map((word, wordIndex, array) => (
          <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                variants={defaultAnimations}
                className="inline-block"
                key={`${char}-${charIndex}`}
              >
                {char}
              </motion.span>
            ))}
            {wordIndex !== array.length - 1 && (
              <span className="inline-block whitespace-pre"> </span>
            )}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
