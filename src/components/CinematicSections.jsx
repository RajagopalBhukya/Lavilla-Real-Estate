import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Every section owns exactly one film. Neither scroll nor an animation clock
// changes its source or seeks its playhead.
function FilmSection({
  id,
  src,
  poster,
  className,
  children,
  reducedMotion,
  suspended,
  active,
  eager = false,
}) {
  const section = useRef(null);
  const video = useRef(null);
  useEffect(() => {
    const film = video.current;
    let visible = eager;
    let disposed = false;
    function synchronize() {
      if (disposed) return;
      film.playbackRate = 0.65;
      if (!visible || suspended || reducedMotion || document.hidden)
        film.pause();
      else
        film.play().catch(() => {
          /* Poster stays visible if autoplay is denied. */
        });
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
        synchronize();
      },
      { threshold: [0, 0.15] },
    );
    observer.observe(section.current);
    document.addEventListener("visibilitychange", synchronize);
    // Autoplay can be blocked by device settings; retry on ordinary interaction,
    // without adding playback controls to the design.
    window.addEventListener("pointerdown", synchronize, { passive: true });
    window.addEventListener("touchstart", synchronize, { passive: true });
    film.addEventListener("loadeddata", synchronize);
    synchronize();
    return () => {
      disposed = true;
      observer.disconnect();
      film.pause();
      document.removeEventListener("visibilitychange", synchronize);
      window.removeEventListener("pointerdown", synchronize);
      window.removeEventListener("touchstart", synchronize);
      film.removeEventListener("loadeddata", synchronize);
    };
  }, [eager, reducedMotion, suspended]);

  useLayoutEffect(() => {
    if (!active || reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scene-copy > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.current,
            start: "top 72%",
            once: true,
          },
        },
      );
      if (!matchMedia("(max-width: 760px), (pointer: coarse)").matches)
        gsap.fromTo(
          ".scene-film",
          { yPercent: -3, scale: 1.08 },
          {
            yPercent: 3,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: section.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            },
          },
        );
    }, section);
    return () => ctx.revert();
  }, [active, reducedMotion]);

  return (
    <section
      ref={section}
      id={id}
      className={`film-section ${className}`}
      aria-label={id === "home" ? "LAVILLA Home" : "LAVILLA Interior"}
    >
      <div className="scene-visual">
        <video
          ref={video}
          className="scene-film"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay={!reducedMotion}
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        />
        <div className="film-shade" />
      </div>
      {children}
    </section>
  );
}

export default function CinematicSections({
  reducedMotion,
  suspended,
  active,
  navigate,
}) {
  return (
    <>
      <FilmSection
        id="home"
        src="./videos/lavilla-hero.mp4"
        poster="./images/posters/lavilla_hero_poster.jpg"
        className="home-section"
        reducedMotion={reducedMotion}
        suspended={suspended}
        active={active}
        eager
      >
        <div className="hero-copy scene-copy">
          <p className="eyebrow">
            BALI, INDONESIA <span>—</span> PRIVATE RESIDENCES
          </p>
          <h1>LAVILLA</h1>
          <p className="hero-subtitle">A quieter kind of extraordinary.</p>
        </div>
        <div className="hero-bottom">
          <span>
            Architecture shaped by nature.
            <br />
            Living, without compromise.
          </span>
          <div className="hero-specs">
            <span>
              <b>1–3</b>Bedrooms
            </span>
            <span>
              <b>70–140</b>Square meters
            </span>
            <span>
              <b>Bali</b>A sense of place
            </span>
          </div>
        </div>
        <a
          className="scene-next"
          href="#interior"
          onClick={(e) => {
            e.preventDefault();
            navigate("interior");
          }}
        >
          Step inside <ArrowDown size={17} />
        </a>
      </FilmSection>
      <FilmSection
        id="interior"
        src="./videos/lavilla-interior.mp4"
        poster="./images/posters/lavilla_interior.jpg"
        className="interior-section"
        reducedMotion={reducedMotion}
        suspended={suspended}
        active={active}
      >
        <div className="interior-copy scene-copy">
          <p className="eyebrow">01 / STEP INSIDE</p>
          <h2>
            Space to live.
            <br />
            <em>Room to breathe.</em>
          </h2>
          <p>
            Light, natural stone, and open horizons.
            <br />
            Discover a different rhythm of life in Bali.
          </p>
          <a
            className="editorial-link"
            href="#property-story"
            onClick={(e) => {
              e.preventDefault();
              navigate("property-story");
            }}
          >
            Explore the residence <ArrowUpRight size={19} />
          </a>
        </div>
        <span className="scene-label">THE ART OF LIVING / LAVILLA</span>
      </FilmSection>
    </>
  );
}
