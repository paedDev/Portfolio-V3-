import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: "Solo Full-Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Architecting complex web applications using the MERN stack and Tailwind CSS v4. Delivering premium, fully responsive digital experiences with advanced GSAP animations and scalable ES module-based architecture.",
  },
  {
    title: "International Intern",
    company: "CHED SIAP Program - Taiwan",
    duration: "Feb 2026 - Present",
    description:
      "Participating in a six-month international immersion program to gain professional competence in the technology sector. Navigating cross-cultural work environments and developing independent project execution skills.",
  },
  {
    title: "Network Operations Intern",
    company: "Commverge Solutions",
    duration: "2025 - 2026",
    description:
      "Monitored network performance and managed DSL provisioning servers using DSLUtil. Supported eSIM AAA authentication, handled administrative requests via Zoho, and executed technical tasks through Xshell while assisting senior engineers with troubleshooting.",
  },
  {
    title: "Computer Engineering Student",
    company: "University",
    duration: "2020 - Present",
    description:
      "Building foundational knowledge in hardware, software architecture, and systems engineering. Developed multiple capstone projects including an IoT monitoring system.",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const linesRef = useRef([]);
  const dotsRef = useRef([]);
  const descRefs = useRef([]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const section = sectionRef.current;

      const getScrollAmount = () =>
        -(container.scrollWidth - window.innerWidth);

      // Initial states
      cardsRef.current.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 40 });
      });
      linesRef.current.forEach((line) => {
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      });
      dotsRef.current.forEach((dot) => {
        gsap.set(dot, {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
        });
      });
      descRefs.current.forEach((desc) => {
        gsap.set(desc, { opacity: 0, y: 10 });
      });
      gsap.set(progressBarRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // ==========================================
      // TRIGGER 1: THE PIN (Holds the screen still)
      // ==========================================
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        // We add window.innerHeight to give the Works section time to slide up
        // AFTER the horizontal scroll is finished.
        end: () => `+=${container.scrollWidth + window.innerHeight}`,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });

      // ==========================================
      // TRIGGER 2: THE ANIMATION (Horizontal Scroll)
      // ==========================================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // The animation ends exactly when the horizontal container reaches the end
          end: () => `+=${container.scrollWidth}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(progressBarRef.current, { scaleX: self.progress });

            // Per-card animations
            cardsRef.current.forEach((card, i) => {
              const total = cardsRef.current.length;
              const start = (i / (total + 1)) * 0.7;
              const fadeEnd = start + 0.18;
              const lineEnd = fadeEnd + 0.1;
              const descEnd = lineEnd + 0.1;
              const p = self.progress;

              const cardP = Math.min(
                Math.max((p - start) / (fadeEnd - start), 0),
                1,
              );
              gsap.set(card, { opacity: cardP, y: 40 * (1 - cardP) });

              if (dotsRef.current[i]) {
                gsap.set(dotsRef.current[i], { scale: cardP, opacity: cardP });
              }

              const lineP = Math.min(
                Math.max((p - fadeEnd) / (lineEnd - fadeEnd), 0),
                1,
              );
              if (linesRef.current[i])
                gsap.set(linesRef.current[i], { scaleX: lineP });

              const descP = Math.min(
                Math.max((p - lineEnd) / (descEnd - lineEnd), 0),
                1,
              );
              if (descRefs.current[i])
                gsap.set(descRefs.current[i], {
                  opacity: descP,
                  y: 10 * (1 - descP),
                });
            });
          },
        },
      });

      tl.to(container, { x: getScrollAmount, ease: "none" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full overflow-hidden h-screen bg-gray-950 relative"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-800 z-20">
        <div
          ref={progressBarRef}
          className="h-full bg-white"
          style={{ transformOrigin: "left center" }}
        />
      </div>

      {/* Header */}
      <div className="absolute left-20 lg:top-10 top-12 z-10 pointer-events-none ">
        <h3 className="uppercase font-bold text-xs tracking-[0.25em] text-gray-500 mb-2">
          CAREER JOURNEY
        </h3>
        <span className="text-6xl font-bold tracking-normal font-display text-white">
          EXPERIENCE
        </span>
      </div>

      {/* Scrolling track */}
      <div className="w-full h-full flex items-center">
        <div
          ref={containerRef}
          className="flex flex-nowrap w-max items-center"
          style={{ paddingLeft: "420px", paddingRight: "120px", gap: "0" }}
        >
          {experienceData.map((item, index) => {
            const isTop = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex flex-col items-center shrink-0"
                style={{ width: "380px" }}
              >
                {/* TOP content */}
                <div
                  style={{ height: "220px" }}
                  className="flex flex-col justify-end pb-6 w-full px-6"
                >
                  {isTop && (
                    <div
                      ref={(el) => (cardsRef.current[index] = el)}
                      className="text-white space-y-3"
                    >
                      <span className="text-xs font-mono text-gray-600 tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="border border-gray-700 px-3 py-0.5 inline-block text-gray-300 rounded-sm text-xs font-mono">
                        {item.duration}
                      </p>
                      <h4 className="font-display text-2xl font-bold tracking-tight leading-tight">
                        {item.title}
                      </h4>
                      <h5 className="uppercase text-gray-500 tracking-[.35em] text-xs">
                        {item.company}
                      </h5>
                      <p
                        ref={(el) => (descRefs.current[index] = el)}
                        className="text-gray-400 text-xs leading-relaxed max-w-[280px]"
                      >
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center timeline axis */}
                <div
                  className="flex items-center w-full relative"
                  style={{ height: "32px" }}
                >
                  {/* Connector line (animated) */}
                  <div
                    ref={(el) => (linesRef.current[index] = el)}
                    className="flex-1 h-px bg-gray-400"
                    style={{ transformOrigin: "left center" }}
                  />

                  {/* Dot (animated) */}
                  <div
                    ref={(el) => (dotsRef.current[index] = el)}
                    className="shrink-0 z-10"
                    style={{ transformOrigin: "center center" }}
                  >
                    {/* Outer ring */}
                    <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                      {/* Inner fill */}
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Static track to next card */}
                  <div className="flex-1 h-px bg-gray-800" />
                </div>

                {/* BOTTOM content */}
                <div
                  style={{ height: "220px" }}
                  className="flex flex-col justify-start pt-6 w-full px-6"
                >
                  {!isTop && (
                    <div
                      ref={(el) => (cardsRef.current[index] = el)}
                      className="text-white space-y-3"
                    >
                      <span className="text-xs font-mono text-gray-600 tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="border border-gray-700 px-3 py-0.5 inline-block text-gray-300 rounded-sm text-xs font-mono">
                        {item.duration}
                      </p>
                      <h4 className="font-display text-2xl font-bold tracking-tight leading-tight">
                        {item.title}
                      </h4>
                      <h5 className="uppercase text-gray-500 tracking-[.35em] text-xs">
                        {item.company}
                      </h5>
                      <p
                        ref={(el) => (descRefs.current[index] = el)}
                        className="text-gray-400 text-xs leading-relaxed max-w-[280px]"
                      >
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-600 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
          <path
            d="M0 5h22M18 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Experience;
