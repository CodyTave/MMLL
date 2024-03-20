import React from "react";
import GameCard from "./GameCard";

export default function Hot() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 ">
      <div className="uppercase text-3xl font-bold text-light-0">
        Hot Right Now
      </div>
      <div className="flex justify-between items-center gap-44">
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
