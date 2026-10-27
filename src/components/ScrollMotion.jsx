import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Animate only after entry; content is visible by default if motion/observers fail.
export default function ScrollMotion() {
  const { pathname } = useLocation();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      preference.matches ||
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;
    const animations = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const animation = entry.target.animate(
            [
              { opacity: 0.35, transform: "translateY(14px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 450, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading, .about-grid > div, .timeline-row, .featured-project, .project-archive, .skill-group, .education-row, .contact-grid > div, .gallery-section",
      )
      .forEach((element) => observer.observe(element));
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
  }, [pathname]);
  return null;
}
