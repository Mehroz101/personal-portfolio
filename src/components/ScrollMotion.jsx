import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Animate only after entry; content is visible by default if motion/observers fail.
export default function ScrollMotion({ paused = false }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      paused ||
      preference.matches ||
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;
    const animations = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          entry.target.dataset.motionEntered = "true";
          const animation = entry.target.animate(
            [
              { opacity: 0.15, transform: "translateY(28px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 650,
              delay: Math.min(index % 3, 2) * 65,
              easing: "cubic-bezier(.2,.7,.2,1)",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          if (entry.target.matches(".skill-group")) {
            entry.target.querySelectorAll("li").forEach((chip, chipIndex) => {
              const chipAnimation = chip.animate(
                [
                  { opacity: 0.25, transform: "translateY(8px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                { duration: 350, delay: chipIndex * 35, easing: "ease-out" },
              );
              animations.add(chipAnimation);
              chipAnimation.onfinish = () => animations.delete(chipAnimation);
            });
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading, .about-grid > div, .timeline-row, .featured-project, .project-archive, .archive-row, .skill-group, .education-row, .contact-grid > div, .gallery-section, .stack-connections, .connection-illustration",
      )
      .forEach((element) => {
        if (!element.dataset.motionEntered) observer.observe(element);
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
