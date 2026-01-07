import React from 'react';
import { Mail, CheckCircle, AlertCircle, Users, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { ORGANIZERS, SPEAKERS, VENTURE_CAPITALISTS } from '../constants';

const ArrowDown = () => (
  <div className="flex justify-center py-4 opacity-30 dark:opacity-20">
    <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0V44M12 44L6 38M12 44L18 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const ProfileCard: React.FC<{
  org: any;
  level: 'chief' | 'patron' | 'chair' | 'coordinator';
  className?: string;
}> = ({ org, level, className = "" }) => {
  if (!org) return null;

  // Size and Style logic based on hierarchy level
  const isChief = level === 'chief';
  const isPatron = level === 'patron';

  // Parse role to extract level label and designation
  const roleParts = org.role.split(' - ');
  const levelLabel = roleParts[0] || org.role;
  const designation = roleParts[1] || '';

  return (
    <div className={`flex flex-col items-center group relative z-10 ${className}`}>
      {/* Level Badge */}
      <div className={`mb-3 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px] border
        ${isChief ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700' :
          isPatron ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700' :
          level === 'chair' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-700' :
          'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'}
      `}>
        {levelLabel}
      </div>

      {/* Image Container */}
      <div className={`relative rounded-full overflow-hidden border-4 shadow-xl mb-4 transition-transform duration-300 group-hover:scale-105 bg-white dark:bg-slate-800
        ${isChief ? 'w-40 h-40 border-amber-500 shadow-amber-500/20' :
          isPatron ? 'w-32 h-32 border-blue-500 shadow-blue-500/20' :
            'w-28 h-28 border-slate-300 dark:border-slate-700 shadow-slate-300/50 dark:shadow-none'}
      `}>
        <img
          src={org.image || "/placeholder-user.png"}
          alt={org.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div className={`text-center transition-all bg-white dark:bg-slate-900 rounded-xl border shadow-sm
        ${isChief || isPatron ? 'px-6 py-3 border-slate-100 dark:border-slate-800' : 'px-4 py-2 border-slate-100 dark:border-slate-800'}
      `}>
        {/* Name */}
        <h3 className={`font-bold text-slate-900 dark:text-white ${isChief ? 'text-xl' : 'text-base'}`}>
          {org.name}
        </h3>
        
        
        
        {/* Designation */}
        {designation && (
          <p className={`mt-1.5 font-medium leading-snug
            ${isChief ? 'text-amber-600 dark:text-amber-400 text-xs' :
              isPatron ? 'text-blue-600 dark:text-blue-400 text-xs' :
              level === 'chair' ? 'text-purple-600 dark:text-purple-400 text-xs' :
              'text-slate-500 dark:text-slate-400 text-[11px]'}
          `}>
            {designation}
          </p>
        )}

        {/* Department (NEW) */}
        {org.department && (
          <p className={`mt-1.5 leading-snug text-slate-600 dark:text-slate-400
            ${isChief || isPatron ? 'text-xs' : 'text-[11px]'}
          `}>
            {org.department}
          </p>
        )}
      </div>
    </div>
  );
};

// // --- 1. Reusable Profile Card Component (Updated) ---
// const ProfileCard: React.FC<{
//   org: any;
//   level: 'chief' | 'patron' | 'chair' | 'coordinator';
//   className?: string;
// }> = ({ org, level, className = "" }) => {
//   if (!org) return null;

//   // Size and Style logic based on hierarchy level
//   const isChief = level === 'chief';
//   const isPatron = level === 'patron';

//   // Parse role to extract level label and designation
//   // Example: "Chief Patron - Hon'ble Vice-Chancellor" → ["Chief Patron", "Hon'ble Vice-Chancellor"]
//   const roleParts = org.role.split(' - ');
//   const levelLabel = roleParts[0] || org.role;
//   const designation = roleParts[1] || '';

//   return (
//     <div className={`flex flex-col items-center group relative z-10 ${className}`}>
//       {/* Level Badge (appears first) */}
//       <div className={`mb-3 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px] border
//         ${isChief ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700' :
//           isPatron ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700' :
//           level === 'chair' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-700' :
//           'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'}
//       `}>
//         {levelLabel}
//       </div>

//       {/* Image Container */}
//       <div className={`relative rounded-full overflow-hidden border-4 shadow-xl mb-4 transition-transform duration-300 group-hover:scale-105 bg-white dark:bg-slate-800
//         ${isChief ? 'w-40 h-40 border-amber-500 shadow-amber-500/20' :
//           isPatron ? 'w-32 h-32 border-blue-500 shadow-blue-500/20' :
//             'w-28 h-28 border-slate-300 dark:border-slate-700 shadow-slate-300/50 dark:shadow-none'}
//       `}>
//         <img
//           src={org.image || "/placeholder-user.png"}
//           alt={org.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Text Container */}
//       <div className={`text-center transition-all bg-white dark:bg-slate-900 rounded-xl border shadow-sm
//         ${isChief || isPatron ? 'px-6 py-3 border-slate-100 dark:border-slate-800' : 'px-4 py-2 border-slate-100 dark:border-slate-800'}
//       `}>
//         {/* Name (now second) */}
//         <h3 className={`font-bold text-slate-900 dark:text-white ${isChief ? 'text-xl' : 'text-base'}`}>
//           {org.name}
//         </h3>
        
//         {/* Designation (now third, if exists) */}
//         {designation && (
//           <p className={`mt-1.5 font-medium leading-snug
//             ${isChief ? 'text-amber-600 dark:text-amber-400 text-xs' :
//               isPatron ? 'text-blue-600 dark:text-blue-400 text-xs' :
//               level === 'chair' ? 'text-purple-600 dark:text-purple-400 text-xs' :
//               'text-slate-500 dark:text-slate-400 text-[11px]'}
//           `}>
//             {designation}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-24">
      {/* Hero Section - UPGRADED */}
      <section className="container mx-auto px-4 md:px-6 mb-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold tracking-wider text-xs uppercase">
            Established 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            Building the Future at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              NHIDE-2026
            </span>
          </h1>

          <div className="relative p-8 md:p-12 mb-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl group dark:hover:shadow-blue-400/20 hover:shadow-indigo-400/20 transition-shadow">
            {/* Quote decoration */}
            <div className="absolute top-6 left-8 text-6xl text-slate-100 dark:text-slate-800 font-serif leading-none transition duration-300 group-hover:text-blue-400 group-hover:scale-125 group-hover:rotate-6">
              “
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light relative z-10">
              <strong className="text-slate-900 dark:text-white font-bold">Capacity Building for Design and Entrepreneurship (CBDE)</strong> presents a national platform where visionaries converge.
              Hosted by <span className="font-semibold text-blue-600 dark:text-blue-400">Guru Ghasidas Vishwavidyalaya</span>, we are fostering a culture where
              design thinking meets entrepreneurial grit.
            </p>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-gradient-to-r from-blue-50/50 via-transparent to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 blur-3xl -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* Who Can Register Section
      <section className="bg-gray-50 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 justify-center">
               <Users className="text-navy-500 dark:text-blue-400" /> 
               Who Can Register?
             </h2>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Aspiring Entrepreneurs</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Individuals looking to start their entrepreneurial journey</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Early-Stage Startups</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Startups in their initial stages seeking growth opportunities</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Academicians, Researchers & Students</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Academic professionals and students with innovative ideas</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">R&D Laboratories and Innovators</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Research organizations and innovation labs</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Investors and Venture Capitalists</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Funding organizations looking for promising startups</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Consultants and Technology Experts</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Industry experts and technology consultants</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Government Representatives and Policy Makers</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Government officials and policy stakeholders</p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Environmentalists & Sustainability Advocates</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-sm">Sustainability experts and environmental advocates</p>
               </div>
             </div>
           </div>
        </div>
      </section> */}


      {/* Organizing Committee */}
      {/* --- ORGANIZING COMMITTEE (The Tree) --- */}
      <section className="bg-slate-50 dark:bg-slate-950 py-20 relative border-y border-slate-200 dark:border-slate-800">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-16">Organizing Committee</h2>

          <div className="flex flex-col items-center">

            {/* Level 1: Chief Patron */}
            <div className="relative flex flex-col items-center">
              <ProfileCard org={ORGANIZERS[0]} level="chief" />
              {/* Line Down */}
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
            </div>

            {/* Level 2: Patron */}
            <div className="relative flex flex-col items-center">
              <ProfileCard org={ORGANIZERS[1]} level="patron" />
              {/* Line Down */}
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
            </div>

            {/* Level 3: Chairman + Convenor */}
            <div className="relative pt-8 pb-12 w-full max-w-2xl">
              {/* Branching Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 border-t border-l border-r h-8 border-slate-300 dark:border-slate-700 rounded-t-xl"></div>

              <div className="flex justify-between items-start px-4 md:px-16">
                <ProfileCard org={ORGANIZERS[2]} level="chair" />
                <ProfileCard org={ORGANIZERS[3]} level="chair" />
              </div>

              {/* Lines continuing down from Chairman/Convenor to Coordinators is tricky visually, 
                     so we use a central connector for the next block */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
            </div>

            {/* Level 4: Coordinators (Grouped) */}
            <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest rounded-full border border-slate-200 dark:border-slate-700">
                Coordinators
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Coord 1 & 2 */}
                <ProfileCard org={ORGANIZERS[4]} level="coordinator" />
                <ProfileCard org={ORGANIZERS[5]} level="coordinator" />
                {/* Coord 3 & 4 */}
                <ProfileCard org={ORGANIZERS[6]} level="coordinator" />
                <ProfileCard org={ORGANIZERS[7]} level="coordinator" />
              </div>
            </div>

            {/* Level 5: Committee Members List */}
            <div className="mt-16 max-w-4xl text-center">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Committee Members</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Prof. Anand Murty Mishra", "Prof. Chandra Shekhar Gahan", "Dr. Madhulika Singh", "Dr. Vishnu Prasad Yadav",
                  "Dr. Niraj Kumari", "Dr. Kundan Meshram", "Dr. Vanita Soni", "Dr. Nishant Behar", "Dr. Raksha Pandey",
                  "Dr. Shreemat Dash", "Dr. Rajbhanu Patel", "Dr. Budh Singh", "Dr. B. P. Singh Dohare", "Dr. Manoj Gupta",
                  "Dr. Ajay Amit", "Dr. Garima Tiwari", "Mr. Anurag Singh", "Mr. Somnath Singrol", "Dr. Abhishek Jain",
                  "Dr. Vikas Rajpopat", "Dr. Sagar Jaiswal", "Dr. Prem Shankar Dwivedi", "Dr. Neha Gaikwad", "Dr. Samarjit Singh",
                  "Dr. Biplab Das", "Dr. Achal Mishra", "Dr. Vijay Kumar Chaurasiya", "Dr. Pradip Das", "Dr. Prasoon Soni",
                  "Dr. Sushant Kumar Verma", "Mr. Suman Lakra", "Dr. Shiv Kumar", "Dr. Murli Manohar Singh", "Dr. Ghanshyam Dubey",
                  "Dr. Nahid Hasan"
                ].map((name, i) => (
                  <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-300">
                    {name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Keynote Speakers - TRADING CARDS */}
      <section className="container mx-auto px-4 md:px-6 py-24 border-t border-slate-100 dark:border-slate-800/50">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-16 text-center">
          Voices of Innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="h-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
              <div className="px-8 pb-8">
                <div className="relative -mt-12 w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Users className="text-slate-300" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{speaker.name}</h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">{speaker.designation}</p>
                <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-2"><Globe size={14} /> {speaker.organization}</div>
                  <div className="flex items-center gap-2"><MapPin size={14} /> {speaker.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venture Capitalists / Investors */}
      {VENTURE_CAPITALISTS && VENTURE_CAPITALISTS.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 py-24 border-t border-slate-100 dark:border-slate-800/50">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 text-center">
            Investment Partners
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Meet the investors who will be evaluating and funding the most promising startups at NHIDE-2026.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VENTURE_CAPITALISTS.map((vc, index) => (
              <div key={index} className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
                <div className="px-8 pb-8">
                  <div className="relative -mt-12 w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-lg mb-6 group-hover:scale-105 transition-transform bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {vc.logo ? (
                      <img src={vc.logo} alt={vc.organization} className="w-full h-full object-contain p-4" />
                    ) : (
                      <Users className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{vc.name}</h3>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">{vc.designation}</p>
                  <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-2"><Globe size={14} /> {vc.organization}</div>
                    {vc.location && (
                      <div className="flex items-center gap-2"><MapPin size={14} /> {vc.location}</div>
                    )}
                    {vc.link && (
                      <a
                        href={vc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                      >
                        <Globe size={14} /> Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-24 border-t border-slate-100 dark:border-slate-800/50"></div> */}
        </section>
      )}

      {/* Key Contacts */}
      {/* <section className="container mx-auto px-4 md:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Prof. Ratnesh Singh</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm">Principal Investigator, CBDE & Chairman</p>
            <a href="tel:+919826200372" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-blue-400 flex items-center gap-2 mb-2">
              <Phone size={14} /> 9826200372
            </a>
            <a href="mailto:ratnesh.singh75@ggu.ac.in" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-blue-400 flex items-center gap-2">
              <Mail size={14} /> ratnesh.singh75@ggu.ac.in
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Prof. T. V. Arjunan</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm">Co-Principal Investigator, CBDE & Convenor</p>
            <a href="tel:+919894332446" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-blue-400 flex items-center gap-2 mb-2">
              <Phone size={14} /> 9894332446
            </a>
            <a href="mailto:arjun_nivi@yahoo.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-blue-400 flex items-center gap-2">
              <Mail size={14} /> arjun_nivi@yahoo.com
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 text-center">Venue</h3>
          <p className="text-slate-700 dark:text-slate-300 text-center">
            Guru Ghasidas Vishwavidyalaya<br />
            (A Central University)<br />
            Koni, Bilaspur, (C.G.) India – 495009
          </p>
        </div> */}

{/* Critical Contact Section */}
<div className="mt-4 border-t border-slate-100 dark:border-slate-800/50"></div>

<section className="container mx-auto px-4 md:px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-16 text-center">
    Contact Information
  </h2>
  <div className="max-w-6xl mx-auto">
    {/* Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      
      {/* Left Column - Contact Cards */}
      {/* CHANGE 1: Used flex, flex-col, h-full, and gap-6 instead of space-y-6 */}
      <div className="flex flex-col gap-6 h-full">
        
        {/* Contact Card 1 */}
        {/* CHANGE 2: Added 'flex-1' to make it stretch */}
        <div className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0 mb-4">
            <Users size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Prof. Ratnesh Singh</h4>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">Principal Investigator & Chairman</p>
          <div className="space-y-2 text-sm">
            <a href="tel:+919826200372" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone size={14} /> +91 98262 00372
            </a>
            <a href="mailto:ratnesh.singh75@ggu.ac.in" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={14} /> ratnesh.singh75@ggu.ac.in
            </a>
          </div>
        </div>

        {/* Contact Card 2 */}
        {/* CHANGE 3: Added 'flex-1' to make it stretch */}
        <div className="flex-1 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center shrink-0 mb-4">
            <Users size={24} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Prof. T. V. Arjunan</h4>
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">Co-Principal Investigator & Convenor</p>
          <div className="space-y-2 text-sm">
            <a href="tel:+919894332446" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Phone size={14} /> +91 98943 32446
            </a>
            <a href="mailto:arjun_nivi@yahoo.com" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Mail size={14} /> arjun_nivi@yahoo.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Venue Card */}
      {/* CHANGE 4: Added 'h-full' to ensure the wrapper respects grid height */}
      <div className="h-full p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 mb-4">
          <MapPin size={24} className="text-amber-600 dark:text-amber-400" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/50 dark:bg-amber-900/30 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest mb-4 text-amber-700 dark:text-amber-300 w-fit">
          <MapPin size={12} /> Event Venue
        </div>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-3">
          Guru Ghasidas<br />Vishwavidyalaya
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          (A Central University)<br />
          Koni, Bilaspur, (C.G.)<br />
          India – 495009
        </p>

        {/* Map Preview */}
        <div className="flex-1 rounded-xl overflow-hidden border border-amber-200 dark:border-amber-800/50 shadow-inner min-h-[250px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4379.287901079577!2d82.1377255!3d22.1287782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280befca3a0d2f%3A0x580096dff518fe20!2sGuru%20Ghasidas%20Vishwavidyalaya%2C%20Bilaspur!5e1!3m2!1sen!2snp!4v1767084848822!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <div className="mt-4 pt-4 border-t border-saffron-200 dark:border-saffron-800/50">
          <a
            href="https://maps.app.goo.gl/Hm6TNtrypAQbWpEV8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-saffron-600 dark:text-saffron-400 hover:gap-3 transition-all"
          >
            Get Directions <span>→</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>



    </div>
  );
};

export default About;