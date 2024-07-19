import { useState } from "react";

type Props = {};

const MobileMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="hover:cursor-pointer min-[1200px]:hidden"></div>;
};

export default MobileMenu;
