import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
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

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Calculate the total width to slide
      const getScrollAmount = () => {
        let containerWidth = containerRef.current.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Changed 'top' to 'start' (GSAP syntax)
          end: () => `+=${containerRef.current.scrollWidth}`, // Determines how long the scroll lasts
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 2. THIS IS THE MISSING PIECE: The animation tween
      timeline.to(containerRef.current, {
        x: getScrollAmount,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full overflow-hidden h-screen gap-8 bg-gray-950 py-20 relative flex flex-col justify-center"
      ref={sectionRef}
    >
      {/* Title */}
      <div className="gap-4 text-white absolute left-20 top-20 z-10">
        <h3 className="uppercase font-bold text-xs tracking-[0.25em] text-gray-500 mb-2">
          CAREER JOURNEY
        </h3>
        <span className="text-7xl font-bold tracking-normal font-display text-white">
          EXPERIENCE
        </span>
      </div>

      <div className="w-full pt-32">
        <div
          className="flex flex-nowrap w-max gap-32 px-20 items-center"
          ref={containerRef}
        >
          {experienceData.map((item, index) => (
            <div
              key={index}
              // 3. Added shrink-0 and w-[600px] to prevent flexbox from squishing the items
              className="text-white space-y-4 shrink-0 w-[80vw] md:w-[600px]"
            >
              <p className="border px-2 inline-block text-gray-200 rounded-xs font-display">
                {item.duration}
              </p>
              <h4 className="font-display text-4xl font-bold tracking-tight">
                {item.title}
              </h4>
              <h5 className="uppercase text-gray-200 tracking-[.5em]">
                {item.company}
              </h5>
              <p className="max-w-md text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
