import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="relative flex h-screen items-center justify-center bg-black/30 backdrop-blur">
      <motion.div
        className="relative z-10 flex size-44 items-center justify-center md:size-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/logo.png"
          alt="logo"
          fill
          role="img"
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </motion.div>
      <video
        className="absolute z-0 object-contain blur-sm lg:h-[500px]"
        id="video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/splash-screen.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
