import React, { useRef } from "react";
import { TIMELINE as ORIGINAL_TIMELINE } from "../constants";
import { MapPin, Download, Sparkles, HelpCircle } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TIMELINE = [
  ...ORIGINAL_TIMELINE,
  {
    id: "winner",
    date: "FINAL DAY",
    time: "5:00 PM",
    title: "Winner Announcement",
    description: "Top 3 teams will be awarded and celebrated on stage.",
    location: "Main Auditorium",
    isCompleted: false, // Keeping this false for initial load
  },
];


const FAQS = [
  {
    q: "What are the dates for NHIDE-2026?",
    a: "NHIDE-2026 will be held on 19–20 March, 2026 at Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur (C.G.), India.",
  },
  {
    q: "What is the venue?",
    a: "The hackathon will be conducted at Guru Ghasidas Vishwavidyalaya (A Central University), Koni, Bilaspur, Chhattisgarh, India – 495009.",
  },
  {
    q: "Who can participate?",
    a: "The hackathon is open to aspiring entrepreneurs, early-stage startups, academicians, researchers, students, R&D laboratories, innovators, investors, consultants, technology experts, government representatives, and environmentalists.",
  },
];

/**
 * 💡 Custom CSS for Glow Effect 💡
 * Add this to your main CSS file (e.g., index.css or global.css)
 * For Tailwind CSS setup, you might need to adjust your config.
 */
/*
.shadow-glow-line {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); // Tailwind blue-500 equivalent glow
}

.dark .shadow-glow-line {
  box-shadow: 0 0 15px rgba(96, 165, 250, 0.8); // Tailwind blue-400 equivalent glow
}

.shadow-glow-dot {
  box-shadow: 0 0 10px 3px rgba(59, 130, 246, 0.8);
}
*/

const Timeline: React.FC = () => {

  const printRef = useRef<HTMLDivElement>(null);


  const handleDownloadImage = () => {
    // Path to the file in your public folder
    const imageUrl = "/schedule_shide_2026.jpg";

    // Create a temporary "anchor" element
    const link = document.createElement("a");
    link.href = imageUrl;

    // This attribute forces the browser to download instead of opening it
    link.download = "NHIDE_2026_Schedule.jpg";

    // Trigger the click and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -------------------------
  // SCROLL-FILL TIMELINE LINE
  // -------------------------
  const lineRef = React.useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      const visible = Math.min(
        // Calculate the visible portion of the line element
        Math.max(winHeight - rect.top, 0),
        rect.height
      );

      // We add a small offset to ensure the line fills up to the dot's center
      const offset = 10;
      setFillHeight(Math.max(0, visible + offset));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------------------------
  // FAQ Drop-down
  // -------------------------
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  const toggleFAQ = (i: number) =>
    setOpenFAQ((prev) => (prev === i ? null : i));

  // -------------------------
  // Animate cards on scroll & Dot Color Trigger
  // -------------------------
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = React.useState<boolean[]>(
    Array(TIMELINE.length).fill(false)
  );

  React.useEffect(() => {
    // Threshold set lower to trigger the animation/color change earlier
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
          // Optional: Add an else block if you want the card to un-animate/dot to change back
          // when it leaves the viewport (e.g., scrolling up).
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () =>
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div className="animate-fade-in pt-12 pb-24" ref={printRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Schedule
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Follow the roadmap to NHIDE-2026
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 mb-8">
            📅 19–20 March, 2026 | 📍 Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur (C.G.), India – 495009
          </p>
          <a
            href="/schedule_nhide_2026.jpg" download
            className="inline-flex px-8 py-4 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-navy-400 dark:hover:border-blue-400 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-navy-900/50 transition-all ease-in-out duration-300 hover:shadow-lg flex items-center justify-center gap-2 animate-fade-up">

            <Download size={18} /> Download Schedule JPG

          </a>
        </div> */}

        {/* Header Section - UPGRADED */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          {/* Background Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <Sparkles size={14} />
            <span>Event Roadmap</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">Schedule</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-600 dark:text-slate-400 font-medium mb-10">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
              <span className="text-blue-500 font-bold">📅</span> 19–20 March, 2026
            </div>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
              <MapPin size={18} className="text-saffron-500" /> Bilaspur, Chhattisgarh
            </div>
          </div>

          <a
            href="/schedule_nhide_2026.jpg"
            download
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            <span>Download Full Schedule</span>
            {/* Subtle shimmer effect on the button */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
        </div>

        {/* TIMELINE */}
        <div id="capture-area" className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gray-200 dark:bg-slate-800 -translate-x-1/2 md:translate-x-0 overflow-hidden"
          >
            {/* Inside the Timeline component, update the Vertical Line div */}
<div
  style={{ height: fillHeight }}
  className="w-full transition-all duration-300 shadow-glow-line bg-gradient-to-b from-blue-400 via-indigo-500 to-saffron-500"
></div>
          </div>

          <div className="space-y-12">
            {TIMELINE.map((event, index) => {
              const isLeft = index % 2 === 0;
              const visible = visibleCards[index]; // Determined by Intersection Observer

              return (
                <div
                  key={event.id}
                  data-index={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isLeft ? "" : "md:flex-row-reverse"
                    }
                  transition-all duration-700
                  ${visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                    }`}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {/* DOT - Color changes based on 'visible' (event reached) */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 z-10 -translate-x-1/2
                    ${
                      // If card is visible, change the dot color and add glow
                      visible
                        ? "bg-blue-500 shadow-glow-dot"
                        : "bg-navy-500" // Default color for incomplete/unreached events
                      }
                    transition-all duration-500
                    ${visible ? "scale-110" : "scale-75 opacity-50"}
                    `}
                  ></div>

                  {/* DATE SIDE */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 flex ${isLeft
                      ? "md:justify-end md:pr-12"
                      : "md:justify-start md:pl-12"
                      }`}
                  >
                    <div className="inline-flex flex-col items-center md:items-end">
                      <span className="text-sm font-bold text-navy-600 dark:text-blue-400 uppercase tracking-wider">
                        {event.date}
                      </span>
                      {event.time && (
                        <span className="text-xs text-slate-500">
                          {event.time}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Replace the content inside {TIMELINE.map((event, index) => { ... })} */}

                  {/* CARD */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex ${isLeft ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"}`}>
                    <div className={`group relative w-full p-1 rounded-[2rem] transition-all duration-500 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>

                      {/* Animated Border Glow */}
                      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity`}></div>

                      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-[1.8rem] shadow-sm group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all">

                        {/* Time Tag for Mobile */}
                        <div className="md:hidden flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold rounded-full uppercase tracking-tighter">
                            {event.time}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {event.location && (
                          <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 w-fit">
                            <div className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                              {event.location}
                            </span>
                          </div>
                        )}

                        {/* Floating Deco Index Number */}
                        <div className="absolute top-3 right-4 text-1xl font-black text-slate-100 dark:text-slate-800/50 pointer-events-none group-hover:text-blue-500/10 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ SECTION
        <div id="faq-section" className="mt-24 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-6">
            Have Questions?
          </h3>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-slate-700 rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    {faq.q}
                  </p>

                  <span
                    className={`transform transition-transform ${openFAQ === index ? "rotate-90" : "rotate-0"
                      }`}
                  >
                    ▶
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 text-slate-600 dark:text-slate-400 ${openFAQ === index ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* FAQ SECTION - UPGRADED */}
        <div id="faq-section" className="mt-40 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-2xl bg-saffron-500/10 text-saffron-600 mb-4">
              <HelpCircle size={28} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">
              Common Queries
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`group border rounded-2xl transition-all duration-300 ${openFAQ === index
                    ? "border-blue-500 bg-blue-50/30 dark:bg-blue-900/10"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-bold text-lg transition-colors ${openFAQ === index ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFAQ === index ? "bg-blue-500 text-white rotate-180" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;