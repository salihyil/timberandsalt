import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";

interface CarouselItem {
  id: number;
  title: string;
  subTitle: string;
  backgroundImage: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Menu",
    subTitle: "Main Courses",
    backgroundImage: "/h1-slider-img1.jpg",
  },
  {
    id: 2,
    title: "Cocktail",
    subTitle: "Favorites",
    backgroundImage: "/h1-slider-img2.jpg",
  },
  {
    id: 3,
    title: "Wine List",
    subTitle: "Best Offer",
    backgroundImage: "/h1-slider-img3.jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SwipeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = offset.x;

    if (Math.abs(velocity.x) > 500 || Math.abs(swipe) > 100) {
      if (swipe < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      className="relative mt-10 h-[400px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CustomCursor isHovering={isHovering} />

      {/* Sabit arka plan resmi */}
      <div className="absolute inset-0">
        <Image
          src={items[currentIndex].backgroundImage}
          alt={items[currentIndex].title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute flex h-full w-full cursor-grab items-center justify-center"
          style={{
            backgroundImage: `url(${items[currentIndex].backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.a
            href="/"
            className="carausel-text-before carausel-text-after absolute left-1/2 top-1/2 flex h-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center px-[50px] pb-[10px] min-[800px]:px-[165px]"
          >
            {/* carausel-text-before carausel-text-after absolute left-1/2 top-1/2 flex h-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center px-[100px] pb-[10px] min-[800px]:px-[165px] */}
            <span className="font-cormorant text-[37px] uppercase leading-[1em] tracking-wider text-white min-[800px]:text-[80px]">
              {items[currentIndex].title}
            </span>
            <span className="font-jost text-[17px] text-white">
              {items[currentIndex].subTitle}
            </span>
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SwipeCarousel;
