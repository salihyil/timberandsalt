import anime from "animejs";
import Image from "next/image";
import { useEffect } from "react";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 2,
      duration: 3000,
      easing: "easeInOutExpo",
    });
  }, [finishLoading]);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="relative size-40 md:size-64">
        <Image id="logo" src="/logo.png" alt="Logo" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default SplashScreen;
