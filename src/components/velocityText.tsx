import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  
  export default function VelocityText(){
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(
      scrollVelocity,
      [-0.5, 0.5],
      ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[1000vh] bg-neutral-950 text-neutral-100"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
          >
            __________________________________________
            se sei arrivata fino a qua, volevo ringraziarti e prometterti che quando avrai bisogno, ci sarò!
          </motion.p>
        </div>
      </section>
    );
  };