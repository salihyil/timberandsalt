"use client";

import { useInView } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { Button } from "./ui/button";
import { NavBar } from "./ui/navbar";

type Props = {};

const Header = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div ref={ref}>
      <header className="page-header">
        <div className={`header-inner`}>
          <NavBar />

          <Link
            className="relative mt-8 flex flex-shrink-0 items-center justify-center"
            href="/"
          >
            <Image src={"/logo.png"} alt="logo" height={200} width={200} />
          </Link>

          <div className="hidden h-full w-full items-center justify-end xl:flex">
            <Button asChild>
              <Link href={"/book-a-table"}>
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

          <span className="qodef-m-icon qodef--open">
            <span className="qodef-m-lines">
              <span className="qodef-m-line qodef--1"></span>
              <span className="qodef-m-line qodef--2"></span>
              <span className="qodef-m-line qodef--3"></span>
              <span className="qodef-m-line qodef--4"></span>
            </span>
          </span>
        </div>
        <StickyHeader isScrollUp={isScrollUp} isInView={isInView} />
      </header>

      {!isInView && (
        <Button
          size={"icon"}
          className="fixed bottom-[70px] right-[2.7%] z-[100] size-[50px] transition-all"
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
    </div>
  );
};

export default Header;
