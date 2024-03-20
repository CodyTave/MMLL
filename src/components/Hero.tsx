"use client";
import { heroDesktop, heroMobile } from "@/assets";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center sm:p-20 p-5 mt-24 mb-36">
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
      <div className="flex sm:flex-row flex-col gap-5 items-center justify-center mt-10">
        <Button href="/signup" type="primary">
          be a legend
        </Button>
        <Button href="/signup" type="secondary">
          explore
        </Button>
      </div>
    </div>
  );
}
