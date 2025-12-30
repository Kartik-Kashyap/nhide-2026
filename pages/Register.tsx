import React from 'react';
import { PRIZES, GOOGLE_FORM_LINK, CONTACT_EMAIL } from '../constants';
import { Trophy, Gift, Rocket, Sparkles, Award, ExternalLink, HelpCircle, Users, Lightbulb, 
  Rocket as RocketIcon, 
  GraduationCap, 
  Beaker, 
  Wallet, 
  Cpu, 
  Gavel, 
  Leaf } from 'lucide-react';


  

const Register: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-24">
      
      {/* Registration CTA - UPGRADED SECTION */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-4xl mx-auto relative group">
            {/* Outer Glow Effect for the whole card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron-500 to-blue-600 rounded-[2rem] blur opacity-5 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden border border-slate-700/50">
                
                {/* 1. Dynamic Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"></div>

                {/* 2. Tech Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(circle at 5px 18px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                {/* 3. Vibrant Light Leaks (Decorations) */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* 4. Floating Icon (Visual Interest) */}
                <div className="absolute top-10 left-10 text-white/5 animate-pulse hidden md:block rotate-12">
                    <Rocket size={120} />
                </div>
                <div className="absolute top-10 right-10 text-white/5 animate-pulse hidden md:block rotate-15 scale-x-[-1] transform">
                    <Rocket size={120} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                        {/* <Sparkles size={14} className="text-saffron-400" /> */}
                        <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                        <span>NHIDE-2026 Registrations Open</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">Innovate?</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Secure your spot in the region's premier hackathon. Register your team and showcase your innovation, design, and entrepreneurial skills.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a 
                            href={GOOGLE_FORM_LINK}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-saffron-500/25 transition-all hover:scale-105 hover:shadow-saffron-500/40 overflow-hidden"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span>Register Now</span>
                            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-white/10 w-full max-w-2xl text-sm text-slate-400">
                        <p className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            <span className="font-semibold text-slate-300">Required:</span> 
                            <span>Team Name</span> • 
                            <span>Member Details</span> • 
                            <span>Preferred Theme</span> •
                            <span>GitHub (Optional)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Prizes & Perks - UPGRADED */}
      <section className="container mx-auto px-4 md:px-6 mb-20 relative">
        {/* Abstract background blur for the prize area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-saffron-500/5 blur-[120px] pointer-events-none"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">The Prize Pool</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Beyond the cash, winners get exclusive access to incubation, mentorship, and cloud credits to scale their ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          
          {/* 2nd Place - Silver Tier */}
          <div className="group order-2 md:order-1 relative bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700">
              RUNNER UP
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-500 rounded-2xl flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 transition-transform shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">2nd Place</h3>
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 my-4 tracking-tight">
                {PRIZES[1].amount}
              </div>
              <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6"></div>
              <ul className="space-y-4 w-full">
                 {PRIZES[1].perks.map((perk, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                     {perk}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          {/* 1st Place - Gold Tier (Winner) */}
          <div className="group order-1 md:order-2 relative bg-white dark:bg-slate-900 border-2 border-saffron-500 p-10 rounded-[2.5rem] shadow-2xl shadow-saffron-500/20 transform md:-translate-y-8 z-10 transition-all duration-300 hover:-translate-y-10">
            {/* Animated Glow behind the Winner card */}
            <div className="absolute inset-0 bg-saffron-500/5 rounded-[2.5rem] animate-pulse"></div>
            
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-saffron-500 text-white text-sm font-black px-6 py-2 rounded-full shadow-lg shadow-saffron-500/40 tracking-widest uppercase">
              Grand Champion
            </div>

            <div className="relative flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-tr from-saffron-400 to-yellow-600 rounded-3xl flex items-center justify-center mb-6 -rotate-6 group-hover:rotate-0 transition-transform shadow-xl shadow-saffron-500/30">
                <Trophy size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">The Winner</h3>
              <div className="text-5xl font-black text-saffron-500 my-4 tracking-tighter">
                {PRIZES[0].amount}
              </div>
              <div className="w-full h-px bg-saffron-100 dark:bg-saffron-900/50 mb-6"></div>
              <ul className="space-y-4 w-full">
                 {PRIZES[0].perks.map((perk, i) => (
                   <li key={i} className="flex items-start gap-3 text-base font-semibold text-slate-800 dark:text-slate-200">
                     <Sparkles size={18} className="text-saffron-500 shrink-0 mt-0.5" />
                     {perk}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          {/* 3rd Place - Bronze Tier */}
          <div className="group order-3 md:order-3 relative bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700">
              SECOND RUNNER UP
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl flex items-center justify-center mb-6 -rotate-3 group-hover:rotate-0 transition-transform shadow-lg">
                <Gift size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">3rd Place</h3>
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 my-4 tracking-tight">
                {PRIZES[2].amount}
              </div>
              <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6"></div>
              <ul className="space-y-4 w-full">
                 {PRIZES[2].perks.map((perk, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></div>
                     {perk}
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Judging Criteria - UPGRADED */}
<section className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden">
  {/* Subtle background decoration */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
  
  <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
    <div className="flex flex-col items-center mb-16">
      <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
        Evaluation Rubric
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white text-center">
        What are we looking for?
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Visual Summary Side */}
      <div className="space-y-8">
        <CriterionBar label="Innovation & Novelty" percentage={30} color="bg-blue-500" icon={<Sparkles size={18} />} />
        <CriterionBar label="Technical Feasibility" percentage={25} color="bg-purple-500" icon={<Rocket size={18} />} />
        <CriterionBar label="Social Impact" percentage={25} color="bg-green-500" icon={<Users size={18} />} />
        <CriterionBar label="UX & Design" percentage={10} color="bg-orange-500" icon={<Award size={18} />} />
        <CriterionBar label="Presentation" percentage={10} color="bg-pink-500" icon={<ExternalLink size={18} />} />
      </div>

      {/* Info Card Side */}
      <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Selection Process</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          Our panel of industry experts and academicians will evaluate your projects based on the weights shown. 
          <strong> Innovation</strong> and <strong>Technical Execution</strong> carry the most weight, but don't underestimate 
          the power of a great presentation!
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-500">1</div>
            Internal Review Rounds
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-purple-500">2</div>
            Live Demo & Q&A Session
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-saffron-500">3</div>
            Final Pitching & Award Ceremony
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


       {/* Who Can Register Section - UPGRADED */}
<section className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
  {/* Background decorative text */}
  <div className="absolute top-20 left-0 text-[10rem] font-black text-slate-200/20 dark:text-slate-800/20 leading-none select-none -z-0">
    JOIN US
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
        Open for <span className="text-blue-600">Everyone</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-400">NHIDE-2026 is a cross-disciplinary ecosystem. Find your category below.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {[
        { title: "Entrepreneurs", desc: "Visionaries building the next big thing.", icon: <Sparkles className="text-saffron-500" /> },
        { title: "Early Startups", desc: "Seed-stage teams ready to scale.", icon: <Rocket className="text-blue-500" /> },
        { title: "Academicians", desc: "Researchers & Students with a thesis for change.", icon: <Users className="text-purple-500" /> },
        { title: "R&D Labs", desc: "Deep-tech innovators & scientists.", icon: <Trophy className="text-green-500" /> },
        { title: "Investors", desc: "VCs & Angels seeking high-potential startups.", icon: <Award className="text-amber-500" /> },
        { title: "Tech Experts", desc: "Consultants & Architecture specialists.", icon: <ExternalLink className="text-pink-500" /> },
        { title: "Govt. Bodies", desc: "Policy makers & public sector innovators.", icon: <HelpCircle className="text-cyan-500" /> },
        { title: "Green Advocates", desc: "Sustainability & ESG focused teams.", icon: <Sparkles className="text-emerald-500" /> },
      ].map((item, idx) => (
        <div 
          key={idx}
          className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden"
        >
          {/* Hover Spotlight Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
          
          {/* Bottom "Access" line */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Help Section - Clean & Trustworthy */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-500/30">
            
            {/* Subtle background decoration */}
            <div className="absolute -right-4 -top-4 text-slate-200 dark:text-slate-800 opacity-50 rotate-12">
              <HelpCircle size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Icon Side */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-500">
                  <HelpCircle size={32} />
                </div>
              </div>

              {/* Text Side */}
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Need a hand with registration?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-0">
                  If you're experiencing technical glitches with the registration, or have any question related to the hackathon, our support team is ready to help.
                </p>
              </div>

              {/* Action Side */}
              <div className="flex-shrink-0">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md active:scale-95"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* Footer-lite note */}
          <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
            NHIDE 2026 • Innovation • Design • Entrepreneurship
          </p>
        </div>
      </section>
    </div>
  );
};

const CriterionBar: React.FC<{ label: string; percentage: number; color: string }> = ({ label, percentage, color }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default Register;