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
      duration: 2000,
      easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center bg-black/30 backdrop-blur">
      <div className="relative z-10 flex size-44 items-center justify-center md:size-64">
        <Image
          id="logo"
          src="/logo.png"
          alt="logo"
          fill
          role="img"
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <video
        className="absolute z-0 object-contain lg:h-[500px]"
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
