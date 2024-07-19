import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { letterVariants } from "./constants";

const AnimatedTextSplitter = ({
  text,
  className,
  letterClassName,
  spaceBetweenWords = "0.5em",
  isInView,
}: {
  text: string;
  className?: string;
  letterClassName?: string;
  spaceBetweenWords?: string;
  isInView: boolean;
}) => {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={letterIndex}
              className={cn(`inline-block text-[#494949]`, letterClassName)}
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span
              style={{ display: "inline-block", width: spaceBetweenWords }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimatedTextSplitter;
