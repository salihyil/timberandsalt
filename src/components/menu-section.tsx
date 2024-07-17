import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {};

const MenuSection = (props: Props) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInViewMenu1 = useInView(ref1, { once: false });
  const isInViewMenu2 = useInView(ref2, { once: false });
  const isInViewMenu3 = useInView(ref3, { once: false });
  const variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section className="flex h-full flex-shrink flex-grow basis-auto gap-[100px] px-[6%] py-[140px] max-[880px]:flex-col">
      <div className="flex basis-4/12 flex-col items-center gap-y-[80px]">
        <motion.div
          ref={ref1}
          className="flex w-[90%] items-center justify-center"
          variants={variants}
          initial="hidden"
          animate={isInViewMenu1 ? "visible" : "hidden"}
          transition={{ duration: 1.3, ease: [0.39, 0.575, 0.565, 1] }}
        >
          <Image
            className="rounded-t-[300px]"
            src={"/menu/menu1.jpg"}
            alt="menu1"
            width={901}
            height={1351}
          />
        </motion.div>
        <motion.div
          ref={ref2}
          className="flex w-full items-center justify-center"
          variants={variants}
          initial="hidden"
          animate={isInViewMenu2 ? "visible" : "hidden"}
          transition={{ duration: 1.3, ease: [0.39, 0.575, 0.565, 1] }}
        >
          <Image
            className="rounded-b-[193px] rounded-t-[193px]"
            src={"/menu/menu2.jpg"}
            alt="menu1"
            width={320}
            height={431}
          />
        </motion.div>
      </div>
      <div className="flex basis-4/12 flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center">
          <div className="my-[25px] flex flex-col items-center justify-center">
            <h5>Discover Our Menu</h5>
            <Image src={"/menu/icon.png"} alt="menu1" width={8} height={4} />
          </div>
          <div className="my-[10px] space-y-3 text-center">
            <div>
              <p>Timber & Salt Double Smash Burger 24$</p>
              <p className="text-xs">
                Candied bacon, American cheese, lettuce, Caramelized onions,
                horseradish mayo, pickles,Served with fries
              </p>
            </div>
            <div>
              <p>Southern Hot Fried Chicken 29$</p>
              <p className="text-xs">
                New south collard greens w/ bacon, white cheddar grits, spicy
                honey, hot sauce drizzle
              </p>
            </div>
            <div>
              <p>Housemade Potato Gnocchi 27$</p>
              <p className="text-xs">
                Heirloom tomatoes, olives, capers, shallots, herb ricotta,
                parmesan, Pumpkin seed gremolata
              </p>
            </div>
            <div>
              <p>PEI Steamed Mussels 23$</p>
              <p className="text-xs">
                White wine herb butter broth, blistered grape tomatoes, grilled
                bread
              </p>
            </div>
            <div>
              <p>Petit Filet Mignon 38$</p>
              <p className="text-xs">
                Served with choice of red wine bordelaise, blue cheese butter,
                bearnaise, chimichurri, or whiskey-molasses butter
              </p>
            </div>
            <div>
              <p>Certified Angus Ribeye 55$</p>
              <p className="text-xs">
                Served with choice of red wine bordelaise, blue cheese butter,
                bearnaise, chimichurri, or whiskey-molasses butter
              </p>
            </div>
            <div>
              <p>Creole Pork Tenderloin 34$</p>
              <p className="text-xs">
                Served with choice of red wine bordelaise, blue cheese butter,
                bearnaise, chimichurri, or whiskey-molasses butter
              </p>
            </div>
            <div>
              <p>Center Cut Norwegian Salmon 38$</p>
              <p className="text-xs">
                Served with choice of red wine bordelaise, blue cheese butter,
                bearnaise, chimichurri, or whiskey-molasses butter
              </p>
            </div>
          </div>
          <Button className="mt-5" asChild>
            <Link href={"/menu"}>
              Entire Menu
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
      <motion.div
        ref={ref3}
        variants={variants}
        initial="hidden"
        animate={isInViewMenu3 ? "visible" : "hidden"}
        transition={{ duration: 1.3, ease: [0.39, 0.575, 0.565, 1] }}
        className="flex basis-4/12 flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-br-[12em] rounded-tl-[12em]"
            src={"/menu/menu3.jpg"}
            alt="menu3"
            width={303}
            height={505}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;
