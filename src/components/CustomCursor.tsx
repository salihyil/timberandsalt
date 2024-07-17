import { useEffect, useState } from "react";

const CustomCursor = ({ isHovering }: { isHovering: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed -left-[58px] -top-[70px] z-50 transition-opacity ${
        isHovering ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div className="flex size-28 items-center justify-center rounded-full font-jost text-white backdrop-blur-lg">
        VIEW
      </div>
    </div>
  );
};

export default CustomCursor;
