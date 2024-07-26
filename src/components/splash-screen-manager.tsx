"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./splash-screen";

export default function SplashScreenManager({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  const finishLoading = () => {
    setShowSplash(false);
  };

  return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children;
}
