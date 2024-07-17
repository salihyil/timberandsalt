"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Chefs from "@/components/chefs";
import Comments from "@/components/comments";
import Connect from "@/components/connect";
import Cuisine from "@/components/cuisine";
import MenuSection from "@/components/menu-section";
import PromoSection from "@/components/promo-section";
import Reserve from "@/components/reserve";
import SlidingAnimation from "@/components/sliding-animation";
import SwipeCarousel from "@/components/swipe-carousel";
import Video from "@/components/video";

export default function Home() {
  return (
    <div className="relative mt-[-121px] h-full min-[1200px]:pt-8">
      <SlidingAnimation />
      <main className="relative h-full w-full min-[1200px]:p-5">
        <video
          src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/12/production_id_4255506-1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-dvh max-h-dvh w-full object-cover brightness-75"
        ></video>
        <div className="absolute inset-0 flex h-full items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center text-[45px] uppercase tracking-widest text-white"
          >
            Good Times Great Tastes
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute bottom-[100px] left-16 space-y-5"
          >
            <p className="inline-block text-xs uppercase tracking-wide text-white">
              / Find Us
            </p>
            <p className="flex w-[60%] flex-col text-base font-light text-white">
              <Link
                className="transition-opacity hover:opacity-75"
                target="_blank"
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x808fa3ad257d7f7f:0x44e8f6270af8d4fd?sa=X&ved=1t:8290&ictx=111"
              >
                881 Middlefield Rd. Redwood City, CA 94063,
              </Link>
              <Link
                className="transition-opacity hover:opacity-75"
                href="tel:(650) 362-3777"
              >
                (650) 362-3777
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
      <PromoSection />
      <div className="container mx-auto">
        <Chefs />
        <Cuisine />
      </div>
      <SwipeCarousel />
      <MenuSection />
      <div className="relative bg-[#1F3634]">
        <Reserve />
      </div>
      <Video />
      <Comments />
      <Connect />
    </div>
  );
}
