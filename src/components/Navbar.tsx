"use client";
import { logo } from "@/assets";
import { hoverSound } from "@/utils/Sounds";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { navBar } from "@/constants/statics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="md:flex items-center justify-center py-5 px-10 hidden ">
        <ul className="flex justify-between items-center gap-16 font-semibold ">
          {navBar.map((nav) => (
            <li
              onMouseEnter={hoverSound}
              key={nav.id}
              className={`${nav.order} neon-hover transall`}
            >
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
          <li className="w-20 order-1  neon-hover">
            <Link href="/">
              <Image alt="mmle" src={logo} />
            </Link>
          </li>
        </ul>
        {/* <button className="font-bold border border-light-0 rounded-full bg-light-0 text-dark-0 hover:text-light-0 hover:bg-transparent transall px-8 py-2 absolute right-16">
        Sign in
      </button> */}
      </div>
      <div className="flex items-center justify-center  py-5 px-10 md:hidden ">
        <Link className="w-20 md:order-3 neon-hover" href="/">
          <Image alt="mmle" src={logo} />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-center items-center"
        >
          <Bars3Icon className="h-8 w-8 absolute right-10" />
        </button>
      </div>
      <MobileNav close={() => setOpen(false)} open={open} />
    </nav>
  );
}
