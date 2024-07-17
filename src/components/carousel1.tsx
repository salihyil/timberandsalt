/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Carousel = () => {
  const items = [
    { image: "/api/placeholder/800/600", alt: "Slide 1" },
    { image: "/api/placeholder/800/600", alt: "Slide 2" },
    { image: "/api/placeholder/800/600", alt: "Slide 3" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item: any, index: number) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={item.image}
                alt={item.alt}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 transform"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 transform"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {items.map((_: any, index: number) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
