import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SiteMotion({ paused, onToggle }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const portrait = document.querySelector(".portrait-area");
    const frame = document.querySelector(".portrait-frame");
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;
    root.classList.toggle("motion-paused", paused);
    function paint() {
      raf = 0;
      const range = root.scrollHeight - innerHeight;
      root.style.setProperty(
        "--page-progress",
        range > 0 ? Math.min(1, Math.max(0, scrollY / range)) : 0,
      );
      document
        .querySelector(".site-header")
        ?.classList.toggle("has-scrolled", scrollY > 15);
      const enabled = !paused && !reduced.matches;
      if (frame) {
        frame.style.setProperty(
          "--portrait-scroll",
          enabled ? `${Math.min(16, scrollY * 0.035)}px` : "0px",
        );
        frame.style.setProperty(
          "--portrait-rx",
          enabled ? `${pointerY}deg` : "0deg",
        );
        frame.style.setProperty(
          "--portrait-ry",
          enabled ? `${pointerX}deg` : "0deg",
        );
      }
    }
    function schedule() {
      if (!raf) raf = requestAnimationFrame(paint);
    }
    function move(event) {
      if (!finePointer.matches || paused || reduced.matches) return;
      const box = portrait.getBoundingClientRect();
      pointerX = ((event.clientX - box.left) / box.width - 0.5) * 4;
      pointerY = -((event.clientY - box.top) / box.height - 0.5) * 4;
      schedule();
    }
    function reset() {
      pointerX = 0;
      pointerY = 0;
      schedule();
    }
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", reset);
    portrait?.addEventListener("pointermove", move);
    portrait?.addEventListener("pointerleave", reset);
    schedule();
    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", reset);
      portrait?.removeEventListener("pointermove", move);
      portrait?.removeEventListener("pointerleave", reset);
      root.classList.remove("motion-paused");
    };
  }, [pathname, paused]);
  return (
    <>
      <div className="page-progress" aria-hidden="true">
        <span />
      </div>
      <button
        className="motion-toggle"
        type="button"
        onClick={onToggle}
        aria-label={paused ? "Resume animations" : "Pause animations"}
        title={paused ? "Resume animations" : "Pause animations"}
        aria-pressed={paused}
      >
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          {paused ? (
            <path d="m9 5 10 7-10 7Z" />
          ) : (
            <>
              <path d="M8 5v14M16 5v14" />
            </>
          )}
        </svg>
      </button>
    </>
  );
}
