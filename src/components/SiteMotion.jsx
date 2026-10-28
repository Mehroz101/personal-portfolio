import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SiteMotion() {
  const { pathname } = useLocation();
  useEffect(() => {
    let frame = 0;
    const root = document.documentElement;
    function paint() {
      frame = 0;
      const range = root.scrollHeight - innerHeight;
      root.style.setProperty(
        "--page-progress",
        range > 0 ? Math.min(1, Math.max(0, scrollY / range)) : 0,
      );
      document
        .querySelector(".site-header")
        ?.classList.toggle("has-scrolled", scrollY > 15);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(paint);
    }
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
  return (
    <div className="page-progress" aria-hidden="true">
      <span />
    </div>
  );
}
