import { Schedule } from "@/components/scheduleListComponent";
import { SmoothScrollHero } from "@/components/smoothScrollHeroComponent";
import VelocityText from "@/components/velocityText";
import React from "react";
export default function Home(){
  return (
    <>
      <SmoothScrollHero/>
      <Schedule/>
      <VelocityText/>
    </>
  )
}