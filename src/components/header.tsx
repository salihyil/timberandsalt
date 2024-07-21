"use client";

import { useInView } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "./constants";
import MobileMenu from "./mobile-menu";
import StickyHeader from "./sticky-header";
import { Button } from "./ui/button";
import { NavBar } from "./ui/navbar";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsScrollUp(true);
      } else {
        setIsScrollUp(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header ref={ref} className="page-header">
      <div className={`header-inner ${isOpen && "mb-7"}`}>
        <NavBar />
        <Link
          className="relative mt-8 flex flex-shrink-0 items-center justify-center"
          href="/"
        >
          <Image
            className="max-w-[150px]"
            src={"/logo.png"}
            alt="logo"
            height={200}
            width={200}
          />
        </Link>
        <div className="flex h-full w-full items-center justify-end max-[1200px]:hidden">
          <Button asChild>
            <Link className="font-cinzel" href={"/book-a-table"}>
              Book a table
              <span className="pointer-events-none absolute inset-0 m-1">
                <span className="absolute left-0 top-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                <span className="absolute bottom-0 right-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                <span className="absolute left-0 top-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
                <span className="absolute bottom-0 right-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
              </span>
            </Link>
          </Button>
        </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <nav
        className={cn(
          `fixed z-10 w-full overflow-hidden bg-black px-14 py-10 transition-all duration-500 min-[1200px]:hidden`,
          isOpen ? "h-full opacity-100" : "h-0 opacity-0",
        )}
        role="navigation"
      >
        <ul className="flex flex-col items-center justify-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name} className="">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group relative font-cinzel text-3xl font-normal uppercase leading-[1.91667em] tracking-[.15em] text-white",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-button-border transition-all duration-500",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <StickyHeader isScrollUp={isScrollUp} isInView={isInView} />

      {!isInView && (
        <Button
          size={"icon"}
          className="fixed bottom-[70px] right-[2.7%] z-[100] size-[50px] font-cinzel transition-all"
          onClick={scrollToTop}
        >
          Top
          <span className="pointer-events-none absolute inset-0 m-1">
            <span className="absolute left-0 top-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            <span className="absolute left-0 top-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
          </span>
        </Button>
      )}
    </header>
  );
};

export default Header;
