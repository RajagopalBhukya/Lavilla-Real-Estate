import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// One transition owns the page at a time. Films keep decoding naturally;
// wheel/touch input never jumps the MP4 playhead (especially important on phones).
export function useSceneNavigation({ enabled, reducedMotion, locked, scrollTo, onBusy }) {
  const state = useRef({ busy: false, enteredAt: 0, scene: null, timer: null, tween: null, disposed: false });
  const options = useRef({ enabled, reducedMotion, locked, scrollTo, onBusy });
  options.current = { enabled, reducedMotion, locked, scrollTo, onBusy };
  const findScene = useCallback(() => [...document.querySelectorAll('.film-section')].find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= innerHeight * .7;
  }), []);

  const navigate = useCallback(id => {
    const current = options.current;
    const s = state.current;
    if (s.busy || current.locked || !current.enabled) return;
    const scene = findScene();
    if (current.reducedMotion || !scene || scene.id === id) { current.scrollTo(id); return; }
    s.busy = true;
    current.onBusy(true);
    const copy = scene.querySelector('.scene-copy');
    const hold = Math.max(0, 1800 - (performance.now() - s.enteredAt));
    s.timer = setTimeout(() => {
      if (s.disposed) return;
      s.tween = gsap.to(copy, { opacity: .25, y: -18, duration: 1.15, ease: 'power2.inOut', onComplete: () => {
        // Only after the outgoing effect finishes may the next section enter.
        options.current.scrollTo(id, () => {
          gsap.set(copy, { clearProps: 'opacity,transform' });
          s.busy = false;
          s.scene = document.getElementById(id);
          s.enteredAt = performance.now();
          if (!s.disposed) options.current.onBusy(false);
        });
      } });
    }, hold);
  }, [findScene]);

  useEffect(() => {
    const s = state.current;
    s.disposed = false;
    if (!enabled || reducedMotion) return;
    s.enteredAt = performance.now();
    let touchY = null;
    function forward(direction) {
      const scene = findScene();
      if (!scene) return false;
      if (scene !== s.scene) { s.scene = scene; s.enteredAt = performance.now(); }
      if (direction > 0) navigate(scene.id === 'home' ? 'interior' : 'property-story');
      else if (scene.id === 'interior') navigate('home');
      return true;
    }
    function intercept(event, direction) {
      if (options.current.locked || event.ctrlKey || event.metaKey) return;
      if (event.target.closest('input,textarea,select,[role="dialog"],.mobile-menu')) return;
      if (s.busy || (direction && forward(direction))) {
        event.preventDefault(); event.stopImmediatePropagation();
      }
    }
    const wheel = event => { if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) intercept(event, Math.sign(event.deltaY)); };
    const start = event => { touchY = event.touches.length === 1 ? event.touches[0].clientY : null; };
    const move = event => {
      if (touchY === null || event.touches.length !== 1) return;
      const delta = touchY - event.touches[0].clientY;
      if (Math.abs(delta) > 12) intercept(event, Math.sign(delta));
    };
    const key = event => {
      if (event.target.closest('button,a,input,textarea,select')) return;
      if (['ArrowDown','PageDown',' ','End'].includes(event.key)) intercept(event, 1);
      if (['ArrowUp','PageUp'].includes(event.key)) intercept(event, -1);
    };
    window.addEventListener('wheel', wheel, { passive: false, capture: true });
    window.addEventListener('touchstart', start, { passive: true, capture: true });
    window.addEventListener('touchmove', move, { passive: false, capture: true });
    window.addEventListener('keydown', key, true);
    return () => {
      s.disposed = true; clearTimeout(s.timer); s.tween?.kill(); s.busy = false; options.current.onBusy(false);
      document.querySelectorAll('.scene-copy').forEach(copy => gsap.set(copy, { clearProps: 'opacity,transform' }));
      window.removeEventListener('wheel', wheel, true);
      window.removeEventListener('touchstart', start, true);
      window.removeEventListener('touchmove', move, true);
      window.removeEventListener('keydown', key, true);
    };
  }, [enabled, reducedMotion, findScene, navigate]);
  return navigate;
}
