import anime from "animejs";
import Image from "next/image";
import { useEffect } from "react";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const animate = () => {
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
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center bg-black/30 backdrop-blur">
      <div className="absolute z-10 flex size-40 h-full w-full items-center justify-center md:size-64">
        <Image
          id="logo"
          src="/logo.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <video
        className="absolute z-0 h-[500px] max-h-full w-full max-w-full object-contain"
        id="video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/splash-screen.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
