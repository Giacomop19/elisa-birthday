import { Schedule } from "@/components/scheduleListComponent";
import { SmoothScrollHero } from "@/components/smoothScrollHeroComponent";
import VelocityText from "@/components/velocityText";
import React from "react";
export default function Home(){
  return (
    <>
      <SmoothScrollHero/>
      <Schedule/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-black uppercase text-zinc-200 text-4xl">Eli Tanti Auguri</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Elisa, tanti auguri, questo è un posto tutto tuo, fanne buon uso
            <br></br>
            Il tuo amico Giacomino
          </p>
        </div>
      </div>
      <VelocityText/>
    </>
  )
}