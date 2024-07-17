import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import AnimatedTextSplitter from "./animated-text-splitter";
import { Button } from "./ui/button";

type Props = {};

const Chefs = (props: Props) => {
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const currentRef = useRef(null);
  const isInView = useInView(currentRef);
  const { scrollYProgress } = useScroll({
    target: currentRef,
    offset: ["start end", "end start"],
  });
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    springConfig,
  );
  const imageScale = useSpring(
    useTransform(scrollYProgress, [0.5, 1], [1, 1.2]),
    springConfig,
  );
  const imageTranslateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -50]),
    springConfig,
  );

  return (
    <div ref={currentRef} className="flex">
      <div className="w-1/2">
        <div className="mt-[35px]">
          <AnimatedTextSplitter
            text="CHEF'S"
            className="my-[10px] font-cormorant tracking-[10px]"
            letterClassName="text-4xl text-[#ffffff29] sm:text-5xl md:text-6xl lg:text-[75px] xl:text-[85px] 2xl:text-[100px]"
            spaceBetweenWords="0.5em"
            isInView={isInView}
          />
        </div>
        <div className="w-[58%] pl-[33px]">
          <h2>Only the finest food & great service</h2>
          <p className="my-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button className="mt-[22px]" asChild>
            <Link href="/">
              Read More
              <span className="pointer-events-none absolute inset-0 m-1">
                <span className="absolute left-0 top-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                <span className="absolute bottom-0 right-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                <span className="absolute left-0 top-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
                <span className="absolute bottom-0 right-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="h-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              scale: imageScale,
              y: imageTranslateY,
            }}
          >
            <Image
              className="h-[100%] w-full object-cover"
              src={"/steak2.jpeg"}
              alt="steak"
              fill
            />
          </motion.div>
        </div>
        <motion.div
          style={{ translateY }}
          className="absolute -left-[135px] top-1/2"
        >
          <Image src={"/chef.jpg"} alt="chef" width={202} height={281} />
        </motion.div>
      </div>
    </div>
  );
};

export default Chefs;