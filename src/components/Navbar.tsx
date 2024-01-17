"use client";
import { logo } from "@/assets";
import { hoverSound } from "@/utils/Sounds";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navBar = [
    {
      id: "home",
      title: "Home",
      order: "order-1  ",
      link: "/",
    },
    {
      id: "news",
      title: "News",
      order: "order-2",
      link: "/news",
    },
    {
      id: "events",
      title: "Events",
      order: "order-4",
      link: "/events",
    },
    {
      id: "teams",
      title: "Teams",
      order: "order-5",
      link: "/teams",
    },
  ];
  return (
    <div className="flex items-center justify-center py-5 px-10 ">
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
        <Link className="w-24 order-3 neon-hover" href="/">
          <Image alt="mmle" src={logo} />
        </Link>
      </ul>
      <button className="font-bold border border-light-0 rounded-full bg-light-0 text-dark-0 hover:text-light-0 hover:bg-transparent transall px-8 py-2 absolute right-16">
        Sign in
      </button>
    </div>
  );
}
