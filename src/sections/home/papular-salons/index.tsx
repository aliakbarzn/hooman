import SimpleCard from "@/components/cards/simple-card";
import React from "react";

export default function PapularSalons() {
  return (
    <div className="w-full py-16 px-32">
      <div className="mb-11">
        <h1 className="">papular salons</h1>
        <span className="text-gray-300 text-sm">of the month</span>
      </div>
      <SimpleCard />
    </div>
  );
}
