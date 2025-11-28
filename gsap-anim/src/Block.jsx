import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
import "./Block.css";

function Block() {
  gsap.registerPlugin(ScrollTrigger);
  const root = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=150%",       
          scrub: true,
          pin: true,
          markers: {
            startColor: 'white',
            endColor: 'white',
          }
        }
      });

      tl.to(".square", {
        rotation: -360,
        scale: 0.5,
        backgroundColor: "red",
      });

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section section--green"></section>

      <section ref={root} className="section section--blue">
        <div className="square"></div>
      </section>

      <section className="section section--green"></section>
    </>
  );
}
export default Block
