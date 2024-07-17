import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedTextSplitter from "./animated-text-splitter";
import { items } from "./constants";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Props = {};

const Comments = (props: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  const currentRef = useRef(null);
  const isInView = useInView(currentRef);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className="flex min-h-[600px] items-center"
      style={{
        accentColor: "#1F3634",
        backgroundImage:
          "url(https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/h1-testtimonials-bc-img.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex w-full flex-col items-center text-center min-[880px]:flex-row">
        <div className="relative w-full min-[880px]:basis-1/2">
          <AnimatePresence initial={false}>
            <motion.div
              /*   key={current} */
              className="h-[500px] w-full"
              style={{
                backgroundImage: `url(/comments/comment1.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
          <p className="absolute bottom-20 left-0 z-[2] -rotate-[6deg] pt-[10px] font-mrsSaintDelafield text-[55px] leading-[35px] text-[#B58C67] min-[880px]:bottom-[5px] min-[880px]:left-1/2">
            Our gest say about us
          </p>
        </div>

        <div ref={currentRef} className="w-full min-[880px]:basis-1/2">
          <div className="pl-[120px] text-left max-[1600px]:pl-[11%] max-[1600px]:pr-[6%] max-[1512px]:pl-[10%] max-[1512px]:pr-[5%] max-[1368px]:pl-[8%] max-[1368px]:pr-[3%]">
            <AnimatedTextSplitter
              text="THEY SAY"
              className="bottom-[50px] my-[10px] font-cormorant tracking-[10px]"
              letterClassName="text-4xl text-[#ffffff29] sm:text-5xl md:text-6xl lg:text-[75px] xl:text-[85px] 2xl:text-[100px]"
              spaceBetweenWords="0.5em"
              isInView={isInView}
            />
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-[90%] pr-10"
              onMouseEnter={() => plugin.current.play()}
              setApi={setApi}
            >
              <CarouselContent className="cursor-grab">
                {items.map((item) => (
                  <CarouselItem
                    className="flex flex-col justify-center"
                    key={item.id}
                  >
                    <p className="mb-[25px] font-jost text-[24px] text-white">
                      {item.paragraf}
                    </p>
                    <h6 className='font-jost text-[12px] font-normal text-white before:mr-2 before:text-[#B58C67] before:content-["/"]'>
                      {item.by}
                    </h6>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -bottom-4 left-1/2 max-[880px]:bottom-10">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
