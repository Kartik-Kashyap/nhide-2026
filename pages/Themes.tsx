import React, { useState, useRef } from 'react';
import { THEMES, GOOGLE_FORM_LINK } from '../constants';
import { Download, ExternalLink, Filter, Cpu, Users, Lightbulb } from 'lucide-react';
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
    <div className="animate-fade-in pt-5 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        {/* Header Section - UPGRADED */}
        <div className="relative text-center max-w-4xl mx-auto mb-20 pt-10">
          {/* Background Glows (Daylight friendly opacity) */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-saffron-400/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <Lightbulb size={14} className="text-saffron-500" />
              <span>Innovation Tracks</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Themes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Domains</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Choose a track that inspires you. These themes are indicative and designed to spark creativity. Feel free to push the boundaries of these domains.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
              <button
                onClick={handleDownloadImage}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Catalogue
              </button>

              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                Register Your Team
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Filters */}
        {/* <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 mr-2 text-slate-500 dark:text-slate-400 font-medium">
            <Filter size={18} /> Filter:
          </div>
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === 'All'
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === cat
                ? 'bg-navy-600 text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div> */}




        {/* Filter Console - UPGRADED */}
        <div className="bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm p-2 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 mb-12">
          <div className="px-4 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-tighter border-r border-slate-300 dark:border-slate-700 mr-2">
            <Filter size={16} /> Track
          </div>

          <button
            onClick={() => setFilter('All')}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'All'
              ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md scale-105'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
          >
            All Categories
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === cat
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md scale-105'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>




        {/* Grid */}
        {/* <div ref={captureRef} id="themes-capture-area" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div> */}
        {/* Themes Grid - UPGRADED */}
        <div ref={captureRef} id="themes-capture-area" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Top Accent Bar based on Difficulty */}
              <div className={`h-1.5 w-full ${theme.difficulty === ThemeDifficulty.BEGINNER ? 'bg-emerald-500' :
                theme.difficulty === ThemeDifficulty.INTERMEDIATE ? 'bg-saffron-500' : 'bg-rose-500'
                }`} />

              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                    {theme.category}
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-black uppercase tracking-widest ${theme.difficulty === ThemeDifficulty.BEGINNER ? 'text-emerald-500' :
                    theme.difficulty === ThemeDifficulty.INTERMEDIATE ? 'text-saffron-500' : 'text-rose-500'
                    }`}>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.difficulty === ThemeDifficulty.BEGINNER ? 'bg-emerald-400' : 'bg-rose-400'
                        }`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.difficulty === ThemeDifficulty.BEGINNER ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}></span>
                    </span>
                    {theme.difficulty}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {theme.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {theme.description}
                </p>

                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Primary Deliverable</span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Cpu size={16} className="text-blue-500" />
                      {theme.deliverable}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Recommended Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {theme.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Users size={14} /> Expert Mentors Ready
                </span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;