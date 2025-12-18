import React, { useState, useRef } from 'react';
import { THEMES, GOOGLE_FORM_LINK } from '../constants';
import { Download, ExternalLink, Filter } from 'lucide-react';
import { ThemeDifficulty } from '../types';
import html2canvas from 'html2canvas';

const Themes: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const captureRef = useRef<HTMLDivElement>(null); // Ref for the capture area

  const handleDownloadImage = async () => {
    const element = captureRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: 1400, // Wide width to keep the 3-column grid look
        onclone: (clonedDoc) => {
          const el = clonedDoc.getElementById("themes-capture-area");
          if (el) {
            el.style.padding = "40px";
            // Force all cards to be visible and remove hover transforms
            const cards = el.querySelectorAll('.hover\\:-translate-y-1');
            cards.forEach((c: any) => {
              c.style.transform = "none";
              c.style.boxShadow = "none";
            });
          }
        }
      });

      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "NHIDE_Problem_Statements.png";
      link.click();
    } catch (error) {
      console.error("Capture failed", error);
    }
  };

  const filteredThemes = filter === 'All' 
    ? THEMES 
    : THEMES.filter(t => t.difficulty === filter || t.category === filter);

  const categories = Array.from(new Set(THEMES.map(t => t.category)));

  return (
    <div className="animate-fade-in pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Problem Statements</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Choose a track that inspires you. These problem statements are indicative and designed to spark creativity. You may propose novel solutions within these domains.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
               onClick={handleDownloadImage}
               className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-gray-50 transition-colors"
            >
              <Download size={18} /> Download PNG
            </button>
            <a 
               href={GOOGLE_FORM_LINK} 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-navy-600 text-white rounded-lg font-medium hover:bg-navy-700 transition-colors"
            >
              Register Team <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 mr-2 text-slate-500 dark:text-slate-400 font-medium">
            <Filter size={18} /> Filter:
          </div>
          <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              filter === 'All' 
                ? 'bg-navy-600 text-white' 
                : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
             <button 
             key={cat}
             onClick={() => setFilter(cat)}
             className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
               filter === cat 
                 ? 'bg-navy-600 text-white' 
                 : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gray-200'
             }`}
           >
             {cat}
           </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={captureRef} id="themes-capture-area" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.map((theme) => (
            <div key={theme.id} className="flex flex-col bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {theme.category}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    theme.difficulty === ThemeDifficulty.BEGINNER ? 'text-green-600 bg-green-50 dark:bg-green-900/20' :
                    theme.difficulty === ThemeDifficulty.INTERMEDIATE ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20' :
                    'text-red-600 bg-red-50 dark:bg-red-900/20'
                  }`}>
                    {theme.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{theme.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {theme.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Deliverable</span>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{theme.deliverable}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Suggested Stack</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {theme.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
                <p className="text-xs text-center text-slate-500 italic"> Mentors available for this track</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;