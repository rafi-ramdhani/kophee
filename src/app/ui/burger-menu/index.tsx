"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

function NavItem({ href, onClick }: { href: string; onClick: () => void }) {
  return (
    <li className="flex items-center w-full pl-6 h-14 text-cream text-base font-bold hover:opacity-80">
      <Link href={`#${href}`} onClick={onClick} className="capitalize">
        {href}
      </Link>
    </li>
  );
}

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickLink = () => {
    setIsOpen(false);
  };

  const navItems = ["home", "about", "menu", "feedback", "location"];

  useEffect(() => {
    // Function to handle clicks outside the element
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Add event listener for mousedown (or you can use click event)
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Fragment>
      <button
        className="lg:hidden h-[18px] w-[25px] flex flex-col justify-between"
        onClick={handleClick}
      >
        <div className="w-full h-[2px] rounded-2xl bg-cream" />
        <div className="w-full h-[2px] rounded-2xl bg-cream" />
        <div className="w-full h-[2px] rounded-2xl bg-cream" />
      </button>
      <ul
        ref={ref}
        className={`${isOpen ? "fixed" : "hidden"} top-10 left-0 flex lg:hidden flex-col w-full bg-espresso pt-6 pb-4`}
      >
        {navItems.map((href) => {
          return <NavItem key={href} href={href} onClick={handleClickLink} />;
        })}
      </ul>
    </Fragment>
  );
}
