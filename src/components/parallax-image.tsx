import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
};

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt }) => {
  const currentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: currentRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={currentRef} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          fill
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
