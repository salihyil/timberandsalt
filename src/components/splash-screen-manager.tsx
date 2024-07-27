"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "./splash-screen";

export default function SplashScreenManager({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return showSplash && isHome ? <SplashScreen /> : children;
}
