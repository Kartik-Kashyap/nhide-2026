import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_LINK, CONTACT_EMAIL } from '../constants';
import { 
  FileText, Send, Calendar, CheckCircle, AlertCircle, Mail, Phone, Download, 
  Sparkles, Rocket, Users, Award, ExternalLink, HelpCircle, ArrowRight, ChevronRight, FileCode
} from 'lucide-react';

const Submission: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-24">

      {/* --- HERO SECTION: HIGH ENERGY LAUNCHPAD --- */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-5xl mx-auto relative group">
            
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#0B0F19] rounded-[2rem] p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden border border-slate-800">
                
                {/* 1. Dynamic Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B0F19] to-slate-900"></div>

                {/* 2. Tech Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.15]" 
                     style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                {/* 3. Vibrant Light Leaks */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* 4. Floating Elements */}
                <div className="absolute top-10 left-10 text-white/5 animate-pulse hidden md:block rotate-12">
                    <Rocket size={120} />
                </div>
                <div className="absolute bottom-10 right-10 text-white/5 animate-pulse hidden md:block -rotate-12">
                    <FileCode size={120} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Phase 1: Call for Proposals
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400 animate-gradient">Innovation</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The journey to NHIDE 2026 starts here. Download the format, craft your proposal, and pitch your idea to the screening committee.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
                        <a 
                            href="/proposal_format.docx"
                            download
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-bold text-lg rounded-2xl border border-slate-700 hover:border-slate-600 transition-all backdrop-blur-sm"
                        >
                            <Download size={20} className="text-blue-400 group-hover:-translate-y-1 transition-transform" />
                            <span>Download Format</span>
                        </a>

                        <a 
                            href={GOOGLE_FORM_LINK}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-blue-600/40"
                        >
                            <span>Submit Proposal</span>
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle size={14} className="text-emerald-500" />
                        <span>Deadline: <span className="text-slate-300 font-semibold">23 February 2026</span></span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- ROADMAP SECTION: THE FLOW --- */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden">
           
           <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Submission Roadmap</h2>
              <p className="text-slate-500 dark:text-slate-400">From abstract to the grand finale.</p>
           </div>

           <div className="relative z-10">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-blue-500/20 to-slate-200 dark:from-slate-800 dark:via-blue-500/20 dark:to-slate-800 rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                    { step: "01", title: "Submit Proposal", desc: "Download format, fill details, and submit via form.", icon: <FileText size={24} /> },
                    { step: "02", title: "Screening", desc: "Expert committee reviews feasibility & innovation.", icon: <Sparkles size={24} /> },
                    { step: "03", title: "Shortlist", desc: "Selected teams announced on 25 Feb.", icon: <CheckCircle size={24} /> },
                    { step: "04", title: "Final Register", desc: "Shortlisted teams confirm spots for the event.", icon: <Award size={24} /> }
                 ].map((item, i) => (
                    <div key={i} className="group relative bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2">
                       {/* Step Number Badge */}
                       <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-900 dark:text-white font-bold shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 relative z-20">
                          {item.icon}
                       </div>
                       
                       <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                       </h3>
                       <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- GUIDELINES & CONTACT --- */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

           {/* Left Column: Detailed Steps */}
           <div className="space-y-10">
              <div className="flex items-center gap-4 mb-2">
                 <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                 <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Detailed Guidelines</h2>
              </div>
              
              <div className="space-y-8 pl-4">
                  {/* Step 1 */}
                  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#020617]"></div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Proposal Submission</h3>
                     <ul className="list-disc pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 marker:text-blue-500">
                        <li>Participants must submit their project proposal in the <strong>prescribed format only</strong>.</li>
                        <li>Clearly describe the problem statement, solution, methodology, and innovation aspects.</li>
                        <li>Submission Deadline: <span className="text-blue-600 font-bold">23 February 2026</span></li>
                     </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-[#020617]"></div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Selection Criteria</h3>
                     <ul className="list-disc pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 marker:text-purple-500">
                        <li>Evaluated by an expert review committee based on innovation, feasibility, and impact.</li>
                        <li>Results announced on or before <span className="font-bold">25 February 2026</span>.</li>
                     </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-8 border-l-2 border-transparent">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-[#020617]"></div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Final Registration</h3>
                     <ul className="list-disc pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 marker:text-emerald-500">
                        <li><strong>Only shortlisted participants</strong> are eligible to register.</li>
                        <li>Registration link shared via email to selected teams.</li>
                        <li>Deadline: <span className="font-bold">1 March 2026</span></li>
                     </ul>
                  </div>
              </div>
           </div>

           {/* Right Column: Instructions & Contact */}
           <div className="space-y-6">
              
              {/* Instructions Card */}
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 p-8 rounded-3xl">
                 <h3 className="text-lg font-bold text-amber-800 dark:text-amber-400 mb-6 flex items-center gap-2">
                    <AlertCircle size={20} /> Important Notes
                 </h3>
                 <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex gap-3">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                       Check registered email IDs regularly for official communication.
                    </li>
                    <li className="flex gap-3">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                       Provide correct and complete information to avoid disqualification.
                    </li>
                    <li className="flex gap-3">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                       The decision of the organizing committee is final and binding.
                    </li>
                 </ul>
              </div>

              {/* Submission Queries Contact */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Phone size={20} className="text-blue-500" /> Submission Queries
                 </h3>

                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
                          <Users size={18} />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Mr. Shubhra Vishwas</p>
                          <p className="text-xs text-slate-500 mb-1">Ph.D. Scholar, Mechanical Engg.</p>
                          <a href="tel:7389639077" className="text-sm text-blue-600 font-medium hover:underline">7389639077</a>
                       </div>
                    </div>
                    
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-800"></div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
                          <Users size={18} />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Mr. M Nagrajan Achary</p>
                          <p className="text-xs text-slate-500 mb-1">Ph.D. Scholar, Law</p>
                          <a href="tel:7008205221" className="text-sm text-blue-600 font-medium hover:underline">7008205221</a>
                       </div>
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <a href="mailto:ggvcbde@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                       <Mail size={16} /> ggvcbde@gmail.com
                    </a>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* --- JUDGING CRITERIA --- */}
      <section className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
               Screening Matrix
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white text-center">
               How will proposals be judged?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Rubric Bars */}
            <div className="space-y-8">
              <CriterionBar label="Innovation & Novelty" percentage={30} color="bg-blue-500" icon={<Sparkles size={18} />} />
              <CriterionBar label="Technical Feasibility" percentage={25} color="bg-purple-500" icon={<Rocket size={18} />} />
              <CriterionBar label="Social Impact" percentage={25} color="bg-green-500" icon={<Users size={18} />} />
              <CriterionBar label="UX & Design" percentage={10} color="bg-orange-500" icon={<Award size={18} />} />
              <CriterionBar label="Presentation" percentage={10} color="bg-pink-500" icon={<ExternalLink size={18} />} />
            </div>

            {/* Info Card */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Selection Process</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Our panel of industry experts and academicians will evaluate your proposals based on the weights shown.
                <strong> Innovation</strong> and <strong>Feasibility</strong> carry the most weight for the initial screening.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-500">1</div>
                  Internal Review Rounds
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-purple-500">2</div>
                  Shortlist Announcement
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-saffron-500">3</div>
                  Final Registration Invite
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HELP / FOOTER CTA --- */}
      <section className="container mx-auto px-4 md:px-6 py-24 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-500/30">
             
             <div className="absolute -right-4 -top-4 text-slate-200 dark:text-slate-800 opacity-50 rotate-12">
               <HelpCircle size={120} />
             </div>

             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-500">
                   <HelpCircle size={32} />
                 </div>
               </div>

               <div className="text-center md:text-left flex-grow">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                   Still have questions?
                 </h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-0">
                   If you're confused, experiencing any issues, or have questions about the hackathon, our team is here to assist.
                 </p>
               </div>

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
        </div>
      </section>

    </div>
  );
};

// --- Reusable Components (Internal) ---

const CriterionBar: React.FC<{ label: string; percentage: number; color: string; icon: React.ReactNode }> = ({ label, percentage, color, icon }) => {
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="group">
      <div className="flex justify-between items-end mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-tight">{label}</span>
        </div>
        <span className="text-sm font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
          {percentage}%
        </span>
      </div>
      
      <div className="w-full bg-slate-100 dark:bg-slate-800/50 rounded-full h-3 overflow-hidden border border-slate-200 dark:border-slate-800">
        <div 
          className={`${color} h-full rounded-full relative transition-all duration-1000 ease-out`} 
          style={{ 
            width: `${width}%`,
            boxShadow: width > 0 ? '0 0 15px -3px rgba(59, 130, 246, 0.5)' : 'none'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Submission;