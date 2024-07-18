"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {};

const Footer = (props: Props) => {
  const currentRef = useRef(null);
  const isInView = useInView(currentRef, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 100 },
        opacity: { duration: 1 },
        borderOpacity: { duration: 1, delay: 0.2 },
      },
    },
  };

  const borderYVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const borderXVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer ref={currentRef} className="h-full w-full bg-[#042726]">
      <div className="container mx-auto pb-[105px] pt-[135px]">
        <motion.div
          className="grid grid-cols-1 items-center justify-items-center min-[880px]:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="relative w-full py-[26px] text-center"
            variants={itemVariants}
          >
            <motion.div
              className="absolute right-0 top-0 hidden bg-white/50 min-[880px]:block min-[880px]:w-px"
              variants={borderYVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
            <h5 className="mb-[17px]">Contact Us</h5>
            <p className="font-jost text-[17px]">
              <span>T. </span>
              <Link
                href="tel:(650) 362-3777"
                className="text-[#CED8D8] hover:text-white"
              >
                (650) 362-3777
              </Link>
              <br />
              <span>M. </span>
              <Link
                href="mailto:Events@timberandsalt.com"
                className="text-[#CED8D8] hover:text-white"
              >
                Events@timberandsalt.com
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="relative w-full py-[26px] text-center"
            variants={itemVariants}
          >
            <motion.div
              className="absolute right-0 top-0 hidden bg-white/50 min-[880px]:block min-[880px]:w-px"
              variants={borderYVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
            <h5 className="mb-[17px]">Address</h5>
            <Link
              className="text-[#CED8D8] hover:text-white"
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x808fa3ad257d7f7f:0x44e8f6270af8d4fd?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener"
            >
              881 Middlefield Rd. <br /> Redwood City, CA 94063
            </Link>
          </motion.div>
          <motion.div
            className="w-full py-[26px] text-center"
            variants={itemVariants}
          >
            <h5 className="mb-[17px]">Opening hours</h5>
            <p>
              5pm to 9pm, Tuesday-Thursday
              <br />
              5pm to 10pm, Friday & Saturday
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="px-[8%]">
        <div className="flex w-full items-center justify-between">
          <motion.div
            className="flex w-full justify-end"
            variants={borderXVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="border-b border-b-white/50"
              variants={borderXVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            ></motion.div>
          </motion.div>
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={300} height={300} />
            </Link>
          </div>
          <motion.div
            className="w-full"
            variants={borderXVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="border-b border-b-white/50"
              variants={borderXVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            ></motion.div>
          </motion.div>
        </div>
        <div className="grid w-full grid-cols-1 gap-[20px] pb-[40px] pt-[20px] min-[880px]:grid-cols-2">
          <div className="flex items-center justify-center min-[880px]:justify-start">
            <div className="mr-[20px]">
              <div className="group flex items-center justify-center">
                <Link
                  target="_blank"
                  className="text-[11px] font-normal uppercase text-white"
                  href="https://www.facebook.com/timberandsalt/"
                >
                  <div className="font-cinzel">Facebok</div>
                  <div className="h-px w-0 bg-button-border transition-all duration-300 group-hover:w-full"></div>
                </Link>
                <Image
                  className="ml-[10px]"
                  src="/menu/icon.png"
                  alt="icon"
                  width={8}
                  height={10}
                />
              </div>
            </div>
            <div className="mr-[20px]">
              <div className="group flex items-center justify-center">
                <Link
                  target="_blank"
                  className="text-[11px] font-normal uppercase text-white"
                  href="https://www.instagram.com/timberandsaltrwc/"
                >
                  <div className="font-cinzel">Instagram</div>
                  <div className="h-px w-0 bg-button-border transition-all duration-300 group-hover:w-full"></div>
                </Link>
                <Image
                  className="ml-[10px]"
                  src="/menu/icon.png"
                  alt="icon"
                  width={8}
                  height={10}
                />
              </div>
            </div>
            <div className="mr-[20px]">
              <div className="group flex items-center justify-center">
                <Link
                  target="_blank"
                  className="text-[11px] font-normal uppercase text-white"
                  href="https://www.yelp.com/biz/timber-and-salt-redwood-city"
                >
                  <div className="font-cinzel">Yelp</div>
                  <div className="h-px w-0 bg-button-border transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-[11px] font-normal leading-[20px] tracking-[2px] text-[#CED8D8] min-[880px]:justify-end">
            <p className="font-cinzel">
              © 2024
              <Link
                className="uppercase"
                href="/"
                target="_blank"
                rel="nofollow noopener"
              >
                Salih Yılmaz
              </Link>
              , ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
