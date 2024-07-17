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

  console.log(current);

  return (
    <div
      className="relative flex min-h-[800px] items-center max-2xl:min-h-[600px]"
      style={{
        accentColor: "#1F3634",
        backgroundImage:
          "url(https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/h1-testtimonials-bc-img.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex w-full items-center text-center">
        <div className="basis-1/2">
          <div className="max-[1600px]:px-[9%] max-[1512px]:px-[7%] max-[1368px]:px-[5%]">
            <p className="absolute bottom-0 right-[55%] z-[2] -rotate-[6deg] pt-[10px] font-mrsSaintDelafield text-[55px] leading-[35px] text-[#B58C67]">
              Our gest say about us
            </p>

            <AnimatePresence initial={false}>
              <motion.div
                key={current}
                className="absolute left-0 top-0 h-full w-1/2"
                style={{
                  backgroundImage: `url(${items[current - 1].backgroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
                initial={{ x: "10%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div ref={currentRef} className="basis-1/2">
          <div className="max-w-[1600px]:pl-[11%] max-w-[1600px]:pr-[6%] max-w-[1512px]:pl-[10%] max-w-[1512px]:pr-[5%] max-w-[1368px]:pl-[8%] max-w-[1368px]:pr-[3%] w-[50vw] pl-[120px] text-left">
            <AnimatedTextSplitter
              text="THEY SAY"
              className="relative bottom-[50px] my-[10px] font-cormorant tracking-[10px]"
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
