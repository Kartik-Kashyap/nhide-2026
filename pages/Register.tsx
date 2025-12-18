import React from 'react';
import { PRIZES, GOOGLE_FORM_LINK, CONTACT_EMAIL } from '../constants';
import { Trophy, Gift, Award, ExternalLink, HelpCircle } from 'lucide-react';

const Register: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-24">
      
      {/* Registration CTA */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-4xl mx-auto bg-navy-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          {/* Deco circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-saffron-500 opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Innovate?</h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
            Secure your spot in NHIDE-2026. Register your team and showcase your innovation, design, and entrepreneurial skills.
          </p>
          <a 
            href={GOOGLE_FORM_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-saffron-500/30 transition-transform hover:scale-105 relative z-10"
          >
            Register Now <ExternalLink size={20} />
          </a>
          
          <div className="mt-8 text-sm text-blue-200 relative z-10">
            <p><strong>Required info:</strong> Team Name, Member Details (Roll No, Email), GitHub ID (Optional), Preferred Theme.</p>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Prizes & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 flex flex-col items-center bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 rounded-2xl md:mt-8">
            <div className="w-16 h-16 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2nd Place</h3>
            <div className="text-3xl font-bold text-navy-600 dark:text-blue-400 my-2">{PRIZES[1].amount}</div>
            <ul className="text-center space-y-2 mt-4">
               {PRIZES[1].perks.map((perk, i) => (
                 <li key={i} className="text-sm text-slate-600 dark:text-slate-400">{perk}</li>
               ))}
            </ul>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 flex flex-col items-center bg-white dark:bg-slate-900 border-2 border-saffron-500 p-8 rounded-2xl shadow-xl shadow-saffron-500/10 transform md:-translate-y-4">
            <div className="w-20 h-20 bg-saffron-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 text-saffron-600">
              <Trophy size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Winner</h3>
            <div className="text-4xl font-bold text-saffron-500 my-2">{PRIZES[0].amount}</div>
            <ul className="text-center space-y-2 mt-4">
               {PRIZES[0].perks.map((perk, i) => (
                 <li key={i} className="text-sm font-medium text-slate-700 dark:text-slate-300">{perk}</li>
               ))}
            </ul>
          </div>

          {/* 3rd Place */}
          <div className="order-3 md:order-3 flex flex-col items-center bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 rounded-2xl md:mt-8">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mb-4 text-amber-700">
              <Gift size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3rd Place</h3>
            <div className="text-3xl font-bold text-navy-600 dark:text-blue-400 my-2">{PRIZES[2].amount}</div>
            <ul className="text-center space-y-2 mt-4">
               {PRIZES[2].perks.map((perk, i) => (
                 <li key={i} className="text-sm text-slate-600 dark:text-slate-400">{perk}</li>
               ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="bg-gray-50 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Judging Criteria</h2>
           <div className="space-y-6">
             <CriterionBar label="Innovation & Novelty" percentage={30} color="bg-blue-500" />
             <CriterionBar label="Technical Feasibility & Completeness" percentage={25} color="bg-purple-500" />
             <CriterionBar label="Social Impact & Relevance" percentage={25} color="bg-green-500" />
             <CriterionBar label="User Experience / Design" percentage={10} color="bg-orange-500" />
             <CriterionBar label="Presentation" percentage={10} color="bg-pink-500" />
           </div>
        </div>
      </section>

      {/* Help */}
      <section className="container mx-auto px-4 md:px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 mb-4 text-slate-500">
           <HelpCircle size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registration Issues?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          If you are facing trouble with the form or payment gateway.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy-600 dark:text-blue-400 font-medium hover:underline">
          Report an Issue via Email
        </a>
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