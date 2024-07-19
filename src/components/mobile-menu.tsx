import { Dispatch, SetStateAction } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div className="hover:cursor-pointer min-[1200px]:hidden">
      {isOpen ? (
        <div onClick={() => setIsOpen(!isOpen)} className="relative h-16 w-16">
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="left-0 h-px w-full rotate-45 bg-[#B58c67]"></div>
            <div className="h-px w-full -rotate-45 bg-[#B58c67]"></div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col space-y-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="h-px w-16 bg-[#B58c67]"> </div>
          <div className="h-px w-12 self-end bg-[#B58c67]"> </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
