import { defaultTeamLogo } from "@/assets";
import Image from "next/image";
import React from "react";

export default function GameCard() {
  return (
    <div className="flex gap-8">
      <Image src={defaultTeamLogo} alt="team logo" />
      <div className="flex flex-col items-center my-3 text-4xl uppercase font-bold">
        <span className="  text-sm">12/20 - 8 PM</span>
        <span className="mt-5">VS</span>
      </div>
      <Image src={defaultTeamLogo} alt="team logo" />
    </div>
  );
}
