import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader({ reducedMotion, onComplete }) {
  const root = useRef(null);
  useLayoutEffect(() => {
    const overlay = root.current;
    let disposed = false;
    let ready = false;
    let waiting = false;
    let fallback;
    const logo = overlay.querySelector("img");
    const poster = new Image();
    poster.src = "./images/posters/lavilla_hero_poster.jpg";
    const decode = (image) =>
      image.decode?.().catch(() => {}) ?? Promise.resolve();
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete });
      // The Home video is already mounted underneath. Decode its fallback and the
      // exact brand asset before dissolving; never leave a visitor on a stuck loader.
      Promise.all([decode(logo), decode(poster)]).then(() => {
        ready = true;
        if (!disposed && waiting) timeline.resume();
      });
      const gate = () => {
        if (ready) {
          timeline.resume();
          return;
        }
        waiting = true;
        fallback = setTimeout(() => {
          if (!disposed) timeline.resume();
        }, 1200);
      };
      if (reducedMotion) {
        timeline
          .to(
            ".preloader-logo, .welcome-word",
            { opacity: 1, duration: 0.2 },
            0,
          )
          .addPause(0.35, gate)
          .to(overlay, { opacity: 0, duration: 0.25 }, 0.35);
      } else {
        timeline
          .to(
            ".preloader-glow",
            { opacity: 1, duration: 0.9, ease: "sine.out" },
            0,
          )
          .fromTo(
            ".preloader-logo",
            { opacity: 0, scale: 0.9, filter: "blur(10px)" },
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "expo.out",
            },
            0.4,
          )
          .fromTo(
            ".logo-sweep-light",
            { xPercent: -130 },
            { xPercent: 230, duration: 0.75, ease: "sine.inOut" },
            0.85,
          )
          .fromTo(
            ".welcome-word",
            { opacity: 0, y: 18, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.6,
              stagger: 0.2,
              ease: "expo.out",
            },
            1.6,
          )
          .addPause(3.1, gate)
          .to(
            ".preloader-welcome",
            {
              opacity: 0,
              y: -12,
              filter: "blur(4px)",
              duration: 0.35,
              ease: "power2.in",
            },
            3.1,
          )
          .to(
            ".preloader-logo",
            { opacity: 0, scale: 1.04, duration: 0.4, ease: "power2.inOut" },
            3.12,
          )
          .to(
            overlay,
            { opacity: 0, duration: 0.35, ease: "sine.inOut" },
            3.25,
          );
      }
    }, overlay);
    return () => {
      disposed = true;
      clearTimeout(fallback);
      ctx.revert();
    };
  }, [reducedMotion, onComplete]);

  return (
    <div
      ref={root}
      className={`preloader ${reducedMotion ? "preloader-reduced" : ""}`}
      role="status"
      aria-label="Welcome to LAVILLA. Loading the residence."
    >
      <div className="preloader-glow" aria-hidden="true" />
      <div className="preloader-composition" aria-hidden="true">
        <div className="preloader-logo">
          <img
            src="./brand/lavilla-logo.png"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
          />
          <div className="logo-sweep">
            <div className="logo-sweep-light" />
          </div>
        </div>
        <p className="preloader-welcome">
          {["WELCOME", "TO", "LAVILLA"].map((word) => (
            <span className="welcome-word" key={word}>
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
