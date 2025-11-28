import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap' 
import MotionPathPlugin from 'gsap/all'
import { ReactComponent as Path } from './assets/path.svg';
import planet1 from './assets/planet1.svg';
import planet2 from './assets/planet2.svg';
import planet3 from './assets/planet3.svg';
import comet from './assets/comet.svg';

function Galactic() {
    const mainRef = useRef(null);
    gsap.registerPlugin(MotionPathPlugin);
    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#planet1", {
        duration: 10,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: "#path1",   // ← путь внутри SVG
          align: "#path1",
          autoRotate: true
        }
      });
    }, mainRef);

    return () => ctx.revert();
    }, []);       
  return (
    <main ref={mainRef} className="main">
        <Path id="path-svg" />
        <img src={planet1} id="planet1" className="planet" />
        <img src={planet2} id="planet2" className="planet" />
        <img src={planet3} id="planet3" className="planet" />
        <img src={comet} id="comet" className="comet" />
    </main>

  )
}

export default Galactic
