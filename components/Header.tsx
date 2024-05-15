"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/logo-a-color-1536x690.png";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    //activando handler scroll
    window.addEventListener("scroll", handlerScroll);

    //quitando scroll event
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <header
      className={`${headerActive ? "h-[115px]" : "h-[120px]"} fixed top-0 z-50 h-[100px] w-full max-w-[1920px] bg-white transition-all`}
    >
      <div className="container mx-auto flex h-full flex-col items-center justify-between lg:flex-row  ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={117}
            height={58}
            className="mt-7 py-7 lg:py-4"
          />
        </Link>

        <MobileNav containerStyles="capitalize fixed text-black mt-4 flex font-bold gap-1.5 md:text-xl lg:hidden" />
        <Nav containerStyles="capitalize flex gap-4 hidden font-bold text-black lg:flex" />
      </div>
    </header>
  );
};
export default Header;
