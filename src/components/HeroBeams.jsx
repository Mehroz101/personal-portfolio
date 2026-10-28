import { useEffect, useRef, useState } from "react";

export default function HeroBeams({ hidden }) {
  const container = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={container}
      className={`hero-beams ${visible ? "is-visible" : ""}`}
      aria-hidden="true"
      hidden={hidden}
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {Array.from({ length: 11 }, (_, index) => {
          const x = 80 + index * 115;
          const d = `M ${x} -120 C ${x - 350} 150 ${x + 210} 280 ${x - 130} 480 S ${x - 360} 720 ${x - 160} 940`;
          return (
            <g key={index}>
              <path d={d} className="hero-beam-track" />
              <path
                d={d}
                pathLength="100"
                className="hero-beam-light"
                style={{ animationDelay: `${index * -0.34}s` }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
