import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_LINK, CONTACT_EMAIL } from '../constants';
import {
    FileText, Send, Calendar, CheckCircle, AlertCircle, Mail, Phone, Download,
    Sparkles, Rocket, Users, Award, ExternalLink, HelpCircle, ArrowRight, ChevronRight
} from 'lucide-react';

const Submission: React.FC = () => {
    return (
        <div className="animate-fade-in pt-12 pb-8">

            {/* --- HERO SECTION --- */}
            <section className="container mx-auto px-4 md:px-6 mb-20">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Phase 1: Call for Proposals
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                        Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Innovation</span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        The journey to NHIDE 2026 begins here. Submit your project proposal for screening. Only shortlisted teams will proceed to the final registration.
                    </p>

                    {/* PROCESS FLOW VISUALIZATION */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 inline-flex">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs">1</div>
                            <span>Submit Proposal</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">2</div>
                            <span>Screening</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">3</div>
                            <span>Shortlist</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">4</div>
                            <span>Final Register</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/proposal_format.docx"
                            download
                            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <Download size={18} /> Download Format
                        </a>
                        <a
                            href={GOOGLE_FORM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                        >
                            Submit Proposal <Send size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Guidelines Section */}

            <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">



                    {/* Left Column: Flow Steps */}

                    <div className="space-y-12">



                        {/* Step 1 */}

                        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">

                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-black"></div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">

                                1. Proposal Submission

                            </h3>

                            <div className="prose prose-slate dark:prose-invert text-sm text-slate-600 dark:text-slate-400">

                                <ul className="list-disc pl-4 space-y-1">

                                    <li>Participants must submit their project proposal in the <strong>prescribed format only</strong>.</li>

                                    <li>Clearly describe the problem statement, solution, methodology, and innovation aspects.</li>

                                    <li>Submission Deadline: <span className="text-red-500 font-bold">23 February 2026</span></li>

                                </ul>

                            </div>

                        </div>



                        {/* Step 2 */}

                        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">

                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-black"></div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">

                                2. Shortlisting & Selection

                            </h3>

                            <div className="prose prose-slate dark:prose-invert text-sm text-slate-600 dark:text-slate-400">

                                <ul className="list-disc pl-4 space-y-1">

                                    <li>Evaluated by an expert review committee based on innovation, feasibility, and impact.</li>

                                    <li>Results announced on or before <span className="font-bold">25 February 2026</span>.</li>

                                    <li>Selected teams informed via email and website.</li>

                                </ul>

                            </div>

                        </div>



                        {/* Step 3 */}

                        <div className="relative pl-8 border-l-2 border-transparent">

                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-black"></div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">

                                3. Final Registration

                            </h3>

                            <div className="prose prose-slate dark:prose-invert text-sm text-slate-600 dark:text-slate-400">

                                <ul className="list-disc pl-4 space-y-1">

                                    <li><strong>Only shortlisted participants</strong> are eligible to register.</li>

                                    <li>Registration link shared via email to selected teams.</li>

                                    <li>Deadline: <span className="text-red-500 font-bold">1 March 2026</span></li>

                                    <li>Accommodation details to be filled during this process.</li>

                                </ul>

                            </div>

                        </div>



                    </div>



                    {/* Right Column: Important Instructions & Contact */}

                    <div className="space-y-8">



                        {/* Instructions Card */}

                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 p-6 rounded-2xl">

                            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-2">

                                <AlertCircle size={20} /> Important Instructions

                            </h3>

                            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">

                                <li className="flex gap-2">

                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>

                                    Check registered email IDs regularly for official communication.

                                </li>

                                <li className="flex gap-2">

                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>

                                    Provide correct and complete information to avoid disqualification.

                                </li>

                                <li className="flex gap-2">

                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>

                                    Organizing committee's decision is final.

                                </li>

                            </ul>

                        </div>



                        {/* Contact Card */}

                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">

                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">

                                <Phone size={20} className="text-blue-500" /> Contact Information

                            </h3>



                            <div className="space-y-6">

                                <div>

                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">For Submission Queries</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <div>

                                            <p className="font-bold text-slate-800 dark:text-slate-200">Mr. Shubhra Vishwas</p>

                                            <p className="text-xs text-slate-500 mb-1">Ph.D. Scholar, Mechanical Engg.</p>

                                            <a href="tel:7389639077" className="text-sm text-blue-600 hover:underline">7389639077</a>

                                        </div>

                                        <div>

                                            <p className="font-bold text-slate-800 dark:text-slate-200">Mr. M Nagrajan Achary</p>

                                            <p className="text-xs text-slate-500 mb-1">Ph.D. Scholar, Law</p>

                                            <a href="tel:7008205221" className="text-sm text-blue-600 hover:underline">7008205221</a>

                                        </div>

                                    </div>

                                </div>



                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">

                                    <a href="mailto:ggvcbde@gmail.com" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">

                                        <Mail size={16} /> ggvcbde@gmail.com

                                    </a>

                                </div>

                            </div>

                        </div>



                    </div>

                </div>

            </section>



            {/* --- JUDGING CRITERIA (EVALUATION RUBRIC) --- */}
            <section className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

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
                {/* Footer-lite note */}
          <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
            NHIDE 2026 • Innovation • Design • Entrepreneurship
          </p>
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