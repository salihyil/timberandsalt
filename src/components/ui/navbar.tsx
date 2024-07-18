"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../constants";

export const NavBar = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <nav className="flex h-full w-full items-center justify-start font-cinzel max-[1200px]:hidden">
      <ul className="relative flex h-full items-center whitespace-nowrap">
        {navItems.map((navItem, idx: number) => {
          const isActive = pathname === navItem.link;

          return (
            <li
              key={`item=${idx}`}
              className="mx-[22px] h-full first:ml-0 last:mr-0"
            >
              <Link
                href={navItem.link}
                className="group relative flex h-full items-center text-xs font-normal uppercase tracking-widest"
              >
                <span className="text-[12px] text-white">{navItem.name}</span>
                <span
                  className={cn(
                    "absolute bottom-8 left-0 h-px bg-button-border transition-all duration-500",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                    className,
                  )}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
