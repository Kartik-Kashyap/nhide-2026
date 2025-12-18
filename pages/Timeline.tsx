import React, { useRef } from "react";
import { TIMELINE as ORIGINAL_TIMELINE } from "../constants";
import { MapPin, Download } from "lucide-react";
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

  const handleDownloadImage = async () => {
  // Target the specific capture area ID
  const element = document.getElementById("capture-area");
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2, // 2 is usually plenty for high-quality PNGs
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      // These two lines are the secret to fixing "cramped" layouts:
      windowWidth: 1200, // Force canvas to render as if screen is 1200px wide
      windowHeight: element.scrollHeight,
      
      onclone: (clonedDoc) => {
        const capturedEl = clonedDoc.getElementById("capture-area");
        if (capturedEl) {
          // 1. Force padding so the cards don't touch the image edges
          capturedEl.style.padding = "40px";
          
          // 2. FORCE VISIBILITY: Find all cards and dots
          // This fixes the "must scroll down" issue
          const allElements = capturedEl.querySelectorAll('*');
          allElements.forEach(el => {
            // Remove any classes or styles that hide elements
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = "1";
            htmlEl.style.transform = "none";
            htmlEl.style.visibility = "visible";
            htmlEl.style.transition = "none";
          });

          // 3. Force the vertical timeline line to be 100% height
          // Search for your glow line class
          const line = capturedEl.querySelector('.shadow-glow-line') as HTMLElement;
          if (line) {
            line.style.height = "100%";
            line.style.opacity = "1";
          }
        }
      }
    });

    // Generate and Download
    const imgData = canvas.toDataURL("image/png", 1.0);
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "NHIDE_2026_Schedule.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error("PNG Capture failed:", error);
  }
};

//   const handleDownloadPdf = async () => {
//   const element = printRef.current;
//   if (!element) return;

//   // 1. Temporarily force visibility of all cards
//   element.classList.add("pdf-capture-mode");

//   try {
//     const canvas = await html2canvas(element, {
//       scale: 2, 
//       useCORS: true,
//       logging: false,
//       backgroundColor: "#ffffff",
//       // Wait a tiny bit for the browser to render the class change
//       onclone: (clonedDoc) => {
//         const el = clonedDoc.getElementById("timeline-container");
//         if (el) el.style.padding = "40px";
//       }
//     });

//     const imgData = canvas.toDataURL("image/png");
    
//     // 2. Calculate PDF dimensions for one continuous page
//     const imgWidth = 595.28; // Standard A4 width in points
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     const pdf = new jsPDF({
//       orientation: "portrait",
//       unit: "pt",
//       format: [imgWidth, imgHeight] 
//     });

//     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//     pdf.save("NHIDE_2026_Full_Schedule2.pdf");

//   } catch (error) {
//     console.error("PDF Generation failed", error);
//   } finally {
//     // 3. Remove the temporary class to restore animations
//     element.classList.remove("pdf-capture-mode");
//   }
// };

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Schedule
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Follow the roadmap to NHIDE-2026
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 mb-8">
            📅 19–20 March, 2026 | 📍 Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur (C.G.), India – 495009
          </p>

          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-gray-50 transition-colors" onClick={handleDownloadImage}>
            <Download size={18} /> Download Schedule PNG
          </button>
        </div>

        {/* TIMELINE */}
        <div id="capture-area" className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gray-200 dark:bg-slate-800 -translate-x-1/2 md:translate-x-0 overflow-hidden"
          >
            <div
              style={{ height: fillHeight }}
              // Added shadow-glow-line class for glow effect
              className="bg-navy-500 dark:bg-blue-500 w-full transition-all duration-300 shadow-glow-line"
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
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }
                  transition-all duration-700
                  ${
                    visible
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
                    className={`pl-12 md:pl-0 w-full md:w-1/2 flex ${
                      isLeft
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

                  {/* CARD */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 flex ${
                      isLeft
                        ? "md:justify-start md:pl-12"
                        : "md:justify-end md:pr-12"
                    }`}
                  >
                    <div className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        {event.description}
                      </p>

                      {event.location && (
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-gray-100 dark:bg-slate-800 px-3 py-1.5 rounded-md inline-block">
                          <MapPin size={14} /> {event.location}
                        </div>
                      )}

                      {/* Triangle Pointer */}
                      <div
                        className={`hidden md:block absolute top-6 w-3 h-3 bg-white dark:bg-slate-900 border-t border-r border-gray-200 dark:border-slate-800 rotate-45
                        ${
                          isLeft
                            ? "-left-1.5 border-t-0 border-r-0 border-b border-l"
                            : "-right-1.5"
                        }
                        `}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ SECTION */}
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
                    className={`transform transition-transform ${
                      openFAQ === index ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▶
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 text-slate-600 dark:text-slate-400 ${
                    openFAQ === index ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  {faq.a}
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