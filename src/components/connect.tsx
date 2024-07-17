import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";

import { galleries } from "./constants";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type Props = {};

const Connect = (props: Props) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex w-full flex-col items-center px-[110px] py-[130px]">
      <h2>Connect With Us</h2>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.play()}
        className="w-full max-w-full"
      >
        <CarouselContent className="pb-[10px] pt-[60px]">
          {galleries.map((gallery, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
              <Link href={gallery.link} target="_blank">
                <div
                  className="aspect-square w-full rounded p-1"
                  style={{
                    backgroundImage: `url(${gallery.backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <h6 className="font-jost">Inspired by you, always_#restaurante</h6>
    </div>
  );
};

export default Connect;
