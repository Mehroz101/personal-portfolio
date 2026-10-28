import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Prepare offscreen entries before paint so visible content never jumps backwards.
export default function ScrollMotion({ paused = false }) {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      paused ||
      preference.matches ||
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;
    const animations = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          entry.target.dataset.motionEntered = "true";
          animations.get(entry.target)?.play();
        });
      },
      { threshold: 0 },
    );
    document
      .querySelectorAll(
        ".section-heading, .about-grid > div, .timeline-row, .featured-project, .archive-row, .skill-group, .education-row, .contact-grid > div, .gallery-section, .stack-connections, .connection-illustration",
      )
      .forEach((element) => {
        if (element.dataset.motionEntered) return;
        const bounds = element.getBoundingClientRect();
        // Leave content already in view (including restored scroll positions) still.
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          element.dataset.motionEntered = "true";
          return;
        }
        // The graph inherits its parent's reveal; it only needs its beam trigger.
        if (!element.matches(".connection-illustration")) {
          const animation = element.animate(
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 500,
              easing: "cubic-bezier(.2,.7,.2,1)",
              fill: "both",
            },
          );
          animation.pause();
          animation.currentTime = 0;
          animations.set(element, animation);
          animation.onfinish = () => {
            animation.cancel();
            animations.delete(element);
          };
        }
        observer.observe(element);
      });
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, [pathname, paused]);
  return null;
}
