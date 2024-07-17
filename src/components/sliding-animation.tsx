const SlidingAnimation = () => {
  return (
    <div className="pointer-events-none left-0 top-0 z-[-1] h-full w-full overflow-hidden">
      <div className="absolute left-1/3 top-0 h-full w-[1px] bg-[#ffffff1c]"></div>
      <div className="absolute left-2/3 top-0 h-full w-[1px] bg-[#ffffff1c]"></div>
    </div>
  );
};

export default SlidingAnimation;
