"use client";

import { Link as ScrollLink } from "react-scroll";

const linkData = [
  {
    name: "home",
    target: "home",
    offset: -100,
  },
  {
    name: "AcercaDeMi",
    target: "about",
    offset: -80,
  },
  {
    name: "blog",
    target: "blog",
    offset: -80,
  },
  {
    name: "Testimonios",
    target: "testimonial",
    offset: -70,
  },
  {
    name: "Contacto",
    target: "contact",
    offset: 0,
  },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {linkData.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            offset={link.offset}
            to={link.target}
            spy
            smooth
            className="cursor-pointer transition-all hover:text-purple-700"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};
export default MobileNav;
