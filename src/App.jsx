import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import { useSceneNavigation } from "./hooks/useSceneNavigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Preloader from "./components/Preloader";
import CinematicSections from "./components/CinematicSections";
import { ArchitecturalPhilosophy } from "./components/ArchitecturalPhilosophy";
import { PropertyStorySection } from "./components/PropertyStorySection";
import { VillaCollection } from "./components/VillaCollection";
import { InvestmentRoiCalculator } from "./components/InvestmentRoiCalculator";
import ContactSection from "./components/ContactSection";
import BrochureModal from "./components/BrochureModal";

export default function App() {
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [modal, setModal] = useState(false);
  const pending = useRef(location.hash.slice(1) || null);
  const lenis = useRef(null);
  const frame = useRef(null);
  const finishLoading = useCallback(() => setLoading(false), []);
  const openBrochure = useCallback(() => setModal(true), []);
  const closeBrochure = useCallback(() => setModal(false), []);
  const locked = loading || modal || menu;
  const lockedRef = useRef(locked);
  lockedRef.current = locked;

  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const instance = new Lenis({
      duration: 1.65,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
    });
    lenis.current = instance;
    instance.on("scroll", ScrollTrigger.update);
    if (lockedRef.current) instance.stop();
    let raf;
    function tick(time) {
      instance.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      instance.destroy();
      lenis.current = null;
    };
  }, [reduced]);

  useLayoutEffect(() => {
    if (!locked) {
      lenis.current?.start();
      const refresh = requestAnimationFrame(() => {
        lenis.current?.resize();
        ScrollTrigger.refresh();
      });
      return () => cancelAnimationFrame(refresh);
    }
    lenis.current?.stop();
    const y = loading ? 0 : window.scrollY;
    const old = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    Object.assign(document.body.style, {
      position: "fixed",
      top: `-${y}px`,
      width: "100%",
      overflow: "hidden",
    });
    return () => {
      Object.assign(document.body.style, old);
      window.scrollTo(0, y);
      lenis.current?.start();
    };
  }, [locked, loading, reduced]);

  const scrollTo = useCallback((id, onComplete) => {
    const element = document.getElementById(id);
    if (!element) {
      onComplete?.();
      return;
    }
    if (lenis.current) {
      lenis.current.resize();
      lenis.current.scrollTo(element, {
        offset: 0,
        duration: 1.65,
        lock: true,
        force: true,
        onComplete,
      });
    } else {
      element.scrollIntoView({ behavior: "instant", block: "start" });
      onComplete?.();
    }
    history.replaceState(null, "", `#${id}`);
    element.setAttribute("tabindex", "-1");
    element.focus({ preventScroll: true });
  }, []);

  const setSceneBusy = useCallback((value) => {
    setTransitioning(value);
    if (value) lenis.current?.stop();
    else lenis.current?.start();
  }, []);
  const sceneNavigate = useSceneNavigation({
    enabled: !loading,
    reducedMotion: reduced,
    locked,
    scrollTo,
    onBusy: setSceneBusy,
  });

  const flushNavigation = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (lockedRef.current || !pending.current) return;
      const target = pending.current;
      pending.current = null;
      sceneNavigate(target);
    });
  }, [sceneNavigate]);
  const navigate = useCallback(
    (id) => {
      pending.current = id;
      setMenu(false);
      flushNavigation();
    },
    [flushNavigation],
  );
  useEffect(() => {
    if (!locked) flushNavigation();
  }, [locked, flushNavigation]);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const links = [
    ["interior", "The residence"],
    ["collection", "Collection"],
    ["investment", "Investment"],
    ["contact", "Contact"],
  ];
  return (
    <>
      <a
        className="skip-link"
        href="#contact"
        inert={loading}
        onClick={(e) => {
          e.preventDefault();
          navigate("contact");
        }}
      >
        Go to contact
      </a>
      <header className="site-header" inert={modal || loading || transitioning}>
        <a
          href="#home"
          className="brand-logo"
          aria-label="LAVILLA Home"
          onClick={(e) => {
            e.preventDefault();
            navigate("home");
          }}
        >
          <img
            src="./brand/lavilla-logo.png"
            alt="LAVILLA"
            width="1672"
            height="941"
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="header-cta" onClick={openBrochure}>
          Discover LAVILLA <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          aria-expanded={menu}
          aria-controls="mobile-menu"
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((m) => !m)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      {menu && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Mobile navigation"
          data-lenis-prevent
        >
          {links.map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(id);
              }}
            >
              <small>0{i + 1}</small>
              {label}
              <ArrowUpRight />
            </a>
          ))}
          <button
            className="gold-button"
            onClick={() => {
              setMenu(false);
              openBrochure();
            }}
          >
            Get the residence overview
          </button>
        </nav>
      )}
      <main inert={menu || modal || loading} data-transitioning={transitioning}>
        <CinematicSections
          reducedMotion={reduced}
          suspended={menu || modal}
          active={!loading}
          navigate={navigate}
        />
        <div className="residence-content">
          <PropertyStorySection onOpenBrochure={openBrochure} />
          <ArchitecturalPhilosophy lang="en" />
          <VillaCollection lang="en" onOpenBrochure={openBrochure} />
          <InvestmentRoiCalculator lang="en" onOpenBrochure={openBrochure} />
          <ContactSection />
        </div>
      </main>
      <BrochureModal open={modal} onClose={closeBrochure} />
      {loading && (
        <Preloader reducedMotion={reduced} onComplete={finishLoading} />
      )}
    </>
  );
}
