import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { BGAnimation2 } from "./BGAnimation";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingNavX
      } w-full flex items-center py-5 fixed z-20 ${
        scrolled ? "bg-[#7e15abd2]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <BGAnimation2 />
          <p className="text-cyan-400 text-[18px] font-bold cursor-pointer ml-8">
            Ashabul Jannat
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-6 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-cyan-400" : "text-secondary"
              } hover:text-cyan-400 text-[15px] hover:scale-125 font-medium cursor-pointer transition ease-in-out `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`${
              active === "Blogs" ? "text-cyan-400" : "text-secondary"
            } hover:text-cyan-400 text-[15px] hover:scale-125 font-medium cursor-pointer transition ease-in-out `}
            onClick={() => setActive("Blogs")}
          >
            <a target="_blank" href="https://alif-personal-blog.vercel.app/">
              Blogs
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[22px] h-[25px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-5 black-gradient absolute top-14 right-0 min-w-[120px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-1">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-cyan-400" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
