import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Lightbulb, Handshake, GraduationCap, BookOpen, ArrowRight, Download, ExternalLink, Sparkles, Zap, MapPin } from 'lucide-react';
import { THEMES, GOOGLE_FORM_LINK, BROCHURE_LINK, SPONSORS } from '../constants';



const Home: React.FC = () => {

  return (

    <div className="animate-fade-in overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-navy-50 dark:bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
          {/* Abstract Pattern - Kept as is */}
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400 to-navy-600 blur-3xl animate-pulse" />
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-saffron-400 to-orange-600 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-purple-400 to-pink-600 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* College & Ministry Logos - Kept Centered as "Letterhead" */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-90">
            {/* ... Existing Logo Code ... */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-white rounded-lg shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform">
              <img
                src="https://www.ggu.ac.in/media/BasePageImage/GGV-logo.png"
                alt="Guru Ghasidas Vishwavidyalaya"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="text-sm text-gray-600 text-center">GGV<br/>Logo</div>';
                }}
              />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-white rounded-lg shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform">
              <img
                src="https://yt3.googleusercontent.com/d8JqpVEsgZaogEQv1xdZ25lHhHj3sdjyO9Udl82km9KgROsUB0wicQ5vGWar_0oLl1_d59w-=s900-c-k-c0x00ffffff-no-rj"
                alt="Ministry of Education"
                className="w-full h-full object-contain scale-125 rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="text-sm text-gray-600 text-center">MoE<br/>Logo</div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* MAIN HERO CONTENT - Modified to Split Layout */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT COLUMN: Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 shadow-lg animate-bounce-slow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="font-semibold">Registrations Open for 2026 Edition</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 animate-fade-up leading-tight">
                <span className="text-navy-500 dark:text-blue-500 bg-gradient-to-r from-navy-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent animate-shimmer">NHIDE</span><span className="animate-scale-in">-2026</span>
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4 animate-slide-in-left">
                National Hackathon on Innovation, Design, and Entrepreneurship
              </p>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed animate-slide-in-right">
                Capacity Building for Design and Entrepreneurship (CBDE)
                <br className="hidden md:block" />
                Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur, Chhattisgarh
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={GOOGLE_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-navy-600 to-blue-600 hover:from-navy-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-navy-500/30 transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 animate-fade-up"
                >
                  Register Now <ExternalLink size={18} />
                </a>
                <a
                  href={BROCHURE_LINK}
                  download
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-navy-400 dark:hover:border-blue-400 transition-all ease-in-out duration-300 hover:shadow-lg flex items-center justify-center gap-2 animate-fade-up hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-navy-900/50"
                >
                  Download Brochure <Download size={18} />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: The Hackathon Graphic */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              {/* Optional: Add a glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full transform scale-75 animate-pulse"></div>

              <img
                src="/graphics/hero.svg"
                alt="NHIDE 2026 Innovation"
                className="relative z-10 w-full max-w-lg h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 animate-fade-in"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50 dark:bg-[#020617]">

        {/* 1. Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* LOGO STRIP (Glassmorphism) */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-12 p-4 md:p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-slate-800 rounded-2xl shadow-xl">
              {/* GGV Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl p-2 shadow-sm hover:scale-105 transition-transform duration-300">
                <img src="https://www.ggu.ac.in/media/BasePageImage/GGV-logo.png" alt="GGV" className="w-full h-full object-contain" />
              </div>
              {/* Divider Line */}
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700 hidden md:block"></div>
              {/* MoE Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl p-2 shadow-sm hover:scale-105 transition-transform duration-300">
                <img src="https://yt3.googleusercontent.com/d8JqpVEsgZaogEQv1xdZ25lHhHj3sdjyO9Udl82km9KgROsUB0wicQ5vGWar_0oLl1_d59w-=s900-c-k-c0x00ffffff-no-rj" alt="MoE" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* LEFT: TEXT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Registrations Open
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                NHIDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">2026</span>
              </h1>

              <p className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-6">
                National Hackathon on Innovation, Design, and Entrepreneurship
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Capacity Building for Design and Entrepreneurship (CBDE) invites you to the ultimate showdown of wits and code at <span className="font-semibold text-slate-900 dark:text-white">Guru Ghasidas Vishwavidyalaya</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={GOOGLE_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                >
                  Register Now <ExternalLink size={18} />
                </a>
                <a
                  href={BROCHURE_LINK}
                  download
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Brochure <Download size={18} />
                </a>
              </div>
            </div>

            {/* RIGHT: HERO GRAPHIC */}
            <div className="w-full lg:w-1/2 relative flex justify-center perspective-1000">
              {/* Glowing backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[80px] rounded-full animate-pulse"></div>

              <img
                src="/graphics/hero.svg"
                alt="Innovation Graphic"
                className="relative z-10 w-full max-w-md hover:scale-105 transition-transform duration-700 drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-navy-50 dark:bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
          {/* Abstract Pattern */}
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400 to-navy-600 blur-3xl animate-pulse" />
          <div
            className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-saffron-400 to-orange-600 blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-purple-400 to-pink-600 blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* College & Ministry Logos */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-90">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-white rounded-lg shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform">
              <img
                src="https://www.ggu.ac.in/media/BasePageImage/GGV-logo.png"
                alt="Guru Ghasidas Vishwavidyalaya"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML =
                    '<div class="text-sm text-gray-600 text-center">GGV<br/>Logo</div>';
                }}
              />
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-white rounded-lg shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform">
              <img
                src="https://yt3.googleusercontent.com/d8JqpVEsgZaogEQv1xdZ25lHhHj3sdjyO9Udl82km9KgROsUB0wicQ5vGWar_0oLl1_d59w-=s900-c-k-c0x00ffffff-no-rj"
                alt="Ministry of Education"
                className="w-full h-full object-contain scale-125 rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML =
                    '<div class="text-sm text-gray-600 text-center">MoE<br/>Logo</div>';
                }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 shadow-lg animate-bounce-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-semibold">Registrations Open for 2026 Edition</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 animate-fade-up">
            <span className="text-navy-500 dark:text-blue-500 bg-gradient-to-r from-navy-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent animate-shimmer">
              NHIDE
            </span>
            <span className="animate-scale-in">-2026</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4 animate-slide-in-left">
            National Hackathon on Innovation, Design, and Entrepreneurship
          </p>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-in-right">
            Capacity Building for Design and Entrepreneurship (CBDE)
            {/* <br className="hidden md:block" /> */}
            <br />
            Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur, Chhattisgarh
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-navy-600 to-blue-600 hover:from-navy-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-navy-500/30 transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 animate-fade-up"
            // w-full sm:w-auto px-8 py-4 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg shadow-lg shadow-navy-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2
            >
              Register Now <ExternalLink size={18} />
            </a>

            <a
              href="/brochure_nhide_2026.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-navy-400 dark:hover:border-blue-400 transition-all ease-in-out duration-300 hover:shadow-lg flex items-center justify-center gap-2 animate-fade-up hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-navy-900/50"
            // w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-750 transition-all flex items-center justify-center gap-2
            >
              Download Brochure <Download size={18} />
            </a>
          </div>
        </div>
      </section>


      {/* --- STATS BAR (Floating HUD) --- */}
      {/* <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-4 md:p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700/50">
           <StatCard icon={<Calendar className="w-6 h-6 text-blue-500" />} label="Event Date" value="Mar 19-20" />
           <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-700 h-12 self-center"></div>
           <StatCard icon={<Trophy className="w-6 h-6 text-saffron-500" />} label="Prize Pool" value="₹1,00,000" />
           <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-700 h-12 self-center"></div>
           <StatCard icon={<MapPin className="w-6 h-6 text-emerald-500" />} label="Location" value="Bilaspur, CG" />
           <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-700 h-12 self-center"></div>
           <StatCard icon={<Lightbulb className="w-6 h-6 text-purple-500" />} label="Tracks" value="8 Themes" />
        </div>
      </section> */}


      



      {/* Key Figures */}

      <section className="bg-white dark:bg-slate-950 border-y border-gray-200 dark:border-slate-800">

        <div className="container mx-auto px-4 md:px-6 py-12">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <StatCard icon={<Calendar className="w-6 h-6 text-saffron-500" />} label="Date" value="Mar 19-20" />

            <StatCard icon={<Trophy className="w-6 h-6 text-saffron-500" />} label="Prize Pool" value="₹1,00,000" />

            <StatCard icon={<Users className="w-6 h-6 text-saffron-500" />} label="Venue" value="GGV, Bilaspur" />

            <StatCard icon={<Lightbulb className="w-6 h-6 text-saffron-500" />} label="Themes" value="8 Tracks" />

          </div>

        </div>

      </section>


      {/* --- WHY PARTICIPATE --- */}
      <section className="py-24 bg-slate-50 dark:bg-[#0b0f19]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Why <span className="text-blue-600">Participate?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Build, connect, pitch — and grow in a dynamic entrepreneurial environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Feature 1 */}
             <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                   <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Networking</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Connect with investors, mentors, and industry veterans who can accelerate your entrepreneurial journey.</p>
             </div>

             {/* Feature 2 */}
             <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                   <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Knowledge</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Panel talks, workshops, and expert lectures on startup funding, marketing strategies, and scaling.</p>
             </div>

             {/* Feature 3 */}
             <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-saffron-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2">
                <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 text-saffron-600 group-hover:scale-110 transition-transform">
                   <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Pitch ideas to potential investors and gain national-level visibility for your startup concepts.</p>
             </div>
             
             {/* Feature 4 & 5 (Centered Row) */}
             <div className="md:col-span-3 flex flex-col md:flex-row gap-8 justify-center">
                <div className="md:w-1/3 group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                       <Handshake size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Collaboration</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Promote partnerships across industry verticals and foster a supportive ecosystem.</p>
                </div>
                <div className="md:w-1/3 group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform">
                       <GraduationCap size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Student Focus</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Empower aspiring student entrepreneurs to learn directly from established professionals.</p>
                </div>
             </div>
          </div>
        </div>
      </section>



{/* --- THEMES PREVIEW --- */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Problem Statements</span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2">Explore the Tracks</h2>
             </div>
             <Link to="/themes" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold hover:text-blue-600 transition-colors">
                View All Themes <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {THEMES.slice(0, 3).map((theme) => (
               <Link key={theme.id} to="/themes" className="group flex flex-col p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="mb-6">
                     <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500">
                        {theme.category}
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                     {theme.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                     {theme.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                     Read More <ArrowRight size={16} />
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>
     





      {/* Themes Preview */}

      <section className="py-20 bg-white dark:bg-slate-950">

        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">

            <div className="text-center md:text-left mb-6 md:mb-0">

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Problem Themes</h2>

              <p className="text-slate-600 dark:text-slate-400">Explore the challenges for this year.</p>

            </div>

            <Link

              to="/themes"

              className="group inline-flex items-center text-navy-600 dark:text-blue-400 font-semibold hover:text-navy-700 transition-colors"

            >

              View All Themes <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />

            </Link>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {THEMES.slice(0, 3).map((theme) => (

              <div key={theme.id} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-900/10 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 group-hover:scale-105 transition-transform">

                  {theme.category}

                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-navy-600 dark:group-hover:text-blue-400 transition-colors">{theme.title}</h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">

                  {theme.description}

                </p>

                <Link to="/themes" className="text-sm font-medium text-navy-600 dark:text-blue-400 hover:underline">

                  Read more

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* --- SPONSORS --- */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
              Supported By Industry Leaders
           </p>
           
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {SPONSORS.map((sponsor, index) => (
                 <a 
                   key={index} 
                   href={sponsor.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-transform"
                   title={sponsor.name}
                 >
                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain dark:invert" />
                 </a>
              ))}
           </div>
        </div>
      </section>



      {/* Sponsors Section */}
      <section className="py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <p className="text-center text-navy-200 text-sm uppercase tracking-widest font-semibold mb-12">Supported By</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 md:gap-12 items-center justify-items-center max-w-7xl mx-auto">
            {SPONSORS.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full max-w-[180px] h-24 md:h-28 bg-white dark:white rounded-lg p-4 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:bg-white"
                title={sponsor.name}
              >
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    {sponsor.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                </div>

                {/* Logo */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-xs text-center text-slate-600 font-semibold">${sponsor.name}</div>`;
                    }
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>

  );

};



const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (

  <div className="flex flex-col items-center text-center p-4">

    <div className="mb-3 p-3 bg-blue-50 dark:bg-slate-900 rounded-full">{icon}</div>

    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{value}</div>

    <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">{label}</div>

  </div>

);



const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (

  <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">

    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">

        {icon}

      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-navy-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">

        {description}

      </p>
    </div>

  </div>

);



export default Home;