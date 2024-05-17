"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/logo-a-color-1536x690.png";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/lib/disabledNawandFooter";

const Header = () => {
  const path = usePathname();
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
    <div>
      {!disableNavWithFooter.includes(path) && (
        <header
          className={`${headerActive ? "h-[125px]" : "h-[140px]"} fixed top-0 z-50 h-[130px] w-full max-w-[1920px] bg-white transition-all`}
        >
          <div className="container mx-auto flex h-full flex-col items-center justify-between lg:flex-row  ">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={70}
                className="mt-7 h-[120px]  py-7 lg:py-4"
              />
            </Link>

            <MobileNav containerStyles="capitalize fixed text-black mt-4 flex font-bold gap-4 md:text-xl lg:hidden" />
            <Nav containerStyles="capitalize flex gap-4 hidden font-bold text-black lg:flex" />
          </div>
        </header>
      )}
    </div>
  );
};
export default Header;
