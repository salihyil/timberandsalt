import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavBar } from "./ui/navbar";

type StickyHeaderProps = {
  isScrollUp: boolean;
  isInView: boolean;
};

const StickyHeader = ({ isScrollUp, isInView }: StickyHeaderProps) => {
  return (
    <div
      className={`top-0 z-[100] hidden w-full items-center justify-center bg-[#0003] px-[50px] backdrop-blur-2xl transition-all duration-300 ease-in-out min-[1200px]:fixed min-[1200px]:flex ${isScrollUp && !isInView ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <NavBar className={"bottom-0"} />

      <Link
        className="relative flex flex-shrink-0 items-center justify-center"
        href={"/"}
      >
        <Image
          className="w-4/6 py-2"
          src={"/logo.png"}
          alt="logo"
          height={200}
          width={200}
        />
      </Link>

      <div className="flex h-full w-full items-center justify-end">
        <Button asChild>
          <Link className='font-cinzel' href={"/book-a-table"}>
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
    </div>
  );
};

export default StickyHeader;
