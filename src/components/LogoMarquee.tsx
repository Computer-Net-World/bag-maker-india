import { useEffect, useRef } from "react";

interface MarqueeProps {
  items: { src: string; alt: string }[];
  speed?: number; // px per second
}

/**
 * Infinite auto-scrolling logo marquee.
 * Clones the list to create a seamless loop via CSS animation.
 */
const LogoMarquee = ({ items, speed = 60 }: MarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate animation duration based on content width and speed
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    track.style.animationDuration = `${half / speed}s`;
  }, [speed]);

  const logos = [...items, ...items]; // double for seamless loop

  return (
    <div
      className="overflow-hidden whitespace-nowrap select-none"
      aria-label="Our clients"
    >
      <div
        ref={trackRef}
        className="inline-flex gap-8 sm:gap-12 items-center"
        style={{
          animation: "marquee-scroll linear infinite",
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center w-24 sm:w-32 h-14 sm:h-16 bg-white rounded-xl border border-border/60 shadow-sm px-3 py-2 shrink-0 hover:shadow-md transition-shadow"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
