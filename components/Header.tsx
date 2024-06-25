"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-a-color-1536x690.png";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/lib/disabledNawandFooter";

const Header = () => {
  const path = usePathname();

  return (
    <div>
      {!disableNavWithFooter.includes(path) && (
        <header className=" fixed top-0 z-50 h-[130px] w-full max-w-[1920px] bg-purple-50 transition-all lg:h-[122px]">
          <div className="container mx-auto flex h-full  flex-col items-center justify-between lg:flex-row  ">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={80}
                className="mt-7 py-7 lg:py-4"
              />
            </Link>

            <MobileNav containerStyles="capitalize fixed text-black mt-4 flex font-bold gap-4  md:text-xl lg:hidden" />
            <Nav containerStyles="capitalize flex gap-4 hidden font-bold text-black lg:flex" />
          </div>
        </header>
      )}
    </div>
  );
};
export default Header;
