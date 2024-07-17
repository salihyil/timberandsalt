import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedTextSplitter from "./animated-text-splitter";
import { SelectForm } from "./select-form";

type Props = {};

const Reserve = (props: Props) => {
  const letterVariants = {
    initial: { opacity: 0, x: 50 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

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

  const ref1 = useRef(null);

  const isInViewMenu1 = useInView(ref1, { once: true });

  const variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div
      ref={currentRef}
      className="container mx-auto flex flex-col gap-14 py-[140px] min-[880px]:flex-row"
    >
      <div className="w-full min-[880px]:w-1/2">
        <div className="mt-[35px]">
          <AnimatedTextSplitter
            text="RESERVE"
            className="my-[10px] font-cormorant tracking-[10px]"
            letterClassName="text-4xl text-[#ffffff29] sm:text-5xl md:text-6xl lg:text-[75px] xl:text-[85px] 2xl:text-[100px]"
            spaceBetweenWords="0.5em"
            isInView={isInView}
          />
        </div>
        <div className="flex flex-col pl-[33px]">
          <div className="mb-5">
            <h2>Book a table</h2>
            <p className="mt-[17px]">*reservations recommended</p>
          </div>
          <div>
            <SelectForm />
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full min-[880px]:w-1/2">
        <div className="h-full overflow-hidden">
          <motion.div
            className="h-full"
            ref={ref1}
            variants={variants}
            initial="hidden"
            animate={isInViewMenu1 ? "visible" : "hidden"}
            transition={{ duration: 1.3, ease: [0.39, 0.575, 0.565, 1] }}
            style={{
              scale: imageScale,
              y: imageTranslateY,
            }}
          >
            <Image
              className="w-full rounded-tl-[18vw]"
              src={"/reserve/reserve.jpg"}
              alt="reserve"
              fill
            />
          </motion.div>

          <motion.p
            className="absolute left-3 w-full max-w-[330px] font-mrsSaintDelafield text-[55px] leading-[60px] text-[#C49871]"
            style={{ y: translateY, rotate: -10 }}
          >
            Book private dining & banquet rooms
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
