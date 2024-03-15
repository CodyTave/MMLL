"use client";
import { heroDesktop, heroMobile } from "@/assets";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center items-center p-20 h-[60vh]">
      <Image
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        className="sm:flex hidden select-none"
        alt="Conquer The Game , Embrace The Legend"
        src={heroDesktop}
      />
      <Image
        draggable="false"
        alt="Conquer The Game , Embrace The Legend"
        className="sm:hidden select-none"
        src={heroMobile}
      />
    </div>
  );
}
