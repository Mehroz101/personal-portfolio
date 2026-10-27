import { useId, useRef, useState } from "react";

const ExpandIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M5 19 19 5M5 5h14v14" />
  </svg>
);

export default function ScreenshotSlider({ pages, onOpen }) {
  const [active, setActive] = useState(0);
  const track = useRef(null);
  const trackId = useId();
  const titleId = useId();

  function goTo(index) {
    const element = track.current;
    const slides = element.querySelectorAll(".screenshot-slide");
    const next = Math.max(0, Math.min(index, pages.length - 1));
    element.scrollTo({
      left: slides[next].offsetLeft - slides[0].offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  function syncPosition() {
    const element = track.current;
    const slides = element.querySelectorAll(".screenshot-slide");
    let nearest = 0;
    let distance = Infinity;
    slides.forEach((slide, index) => {
      const delta = Math.abs(
        slide.offsetLeft - slides[0].offsetLeft - element.scrollLeft,
      );
      if (delta < distance) {
        nearest = index;
        distance = delta;
      }
    });
    setActive(nearest);
  }

  return (
    <section
      className="gallery-section screenshot-slider"
      aria-labelledby={titleId}
      aria-roledescription="carousel"
    >
      <p className="eyebrow">
        SELECTED SCREENS / {String(pages.length).padStart(2, "0")}
      </p>
      <h2 id={titleId}>A closer look.</h2>
      <p>
        Explore the screens. Swipe or use the arrows, and select an image to
        view it in full.
      </p>
      <div
        className="screenshot-track"
        data-single={pages.length === 1}
        id={trackId}
        ref={track}
        tabIndex={0}
        aria-label="Project screenshots"
        onScroll={syncPosition}
        onKeyDown={(event) => {
          const destinations = {
            ArrowRight: active + 1,
            ArrowLeft: active - 1,
            Home: 0,
            End: pages.length - 1,
          };
          if (event.key in destinations) {
            event.preventDefault();
            goTo(destinations[event.key]);
          }
        }}
      >
        {pages.map((page, index) => (
          <div
            className="screenshot-slide"
            key={`${page.title}-${index}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${pages.length}: ${page.title}`}
          >
            <button
              className="screenshot-open"
              onClick={(event) => onOpen(page, event.currentTarget)}
              aria-label={`Open screenshot ${index + 1}: ${page.title}`}
            >
              <span className="browser-bar" aria-hidden="true">
                <span className="browser-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="browser-address" />
                <span className="browser-expand">
                  <ExpandIcon />
                </span>
              </span>
              <img
                src={page.img}
                alt={page.title}
                loading="lazy"
                width="1440"
                height="1000"
              />
              <span className="screenshot-view">
                View full image{" "}
                <span aria-hidden="true">
                  <ExpandIcon />
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button
          className="slider-arrow"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous screenshot"
          aria-controls={trackId}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="m14 5-7 7 7 7" />
          </svg>
        </button>
        <div className="slider-caption" aria-live="polite" aria-atomic="true">
          <p className="slider-count">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(pages.length).padStart(2, "0")}
          </p>
          <p>{pages[active].title}</p>
        </div>
        <button
          className="slider-arrow"
          onClick={() => goTo(active + 1)}
          disabled={active === pages.length - 1}
          aria-label="Next screenshot"
          aria-controls={trackId}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="m10 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
