import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Lightbulb, Handshake, GraduationCap, BookOpen, ArrowRight, Download, ExternalLink, Sparkles, Zap, MapPin, Award, Gift, Rocket, HelpCircle, TrendingUp, Briefcase, Brain, FileText, CheckCircle, ScreenShare, BriefcaseBusiness, FlaskConical, CircleDollarSign, Cpu, Landmark, LeafyGreen, Network } from 'lucide-react';
import { THEMES, GOOGLE_FORM_LINK, BROCHURE_LINK, SPONSORS, PRIZES, CONTACT_EMAIL } from '../constants';
import { motion } from "framer-motion"


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}



const statContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const statItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}




const Home: React.FC = () => {

  return (

    <div className="animate-fade-in overflow-x-hidden">



      {/* --- HERO SECTION --- */}
      <section className="relative pt-[45px] pb-48 overflow-hidden bg-slate-900">
         {/* <section className="relative pt-16 pb-48 overflow-hidden bg-slate-900"> */}

        {/* 1. Dynamic Background (Gate Photo) - Darkened for text contrast */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Day Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out dark:opacity-0 opacity-100"
            style={{ backgroundImage: 'url("/assets/gate-day.jpg")' }}
          >
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-[3px]"></div>
          </div>

          {/* Night Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out dark:opacity-100 opacity-0"
            style={{ backgroundImage: 'url("/assets/gate-night.jpg")' }}
          >
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[3px]"></div>
          </div>

          {/* Animated Particles/Overlay */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* LOGO STRIP (Glassmorphism) */}
          <div className="flex justify-center mb-16 animate-fade-in-up">
            <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-12 p-4 md:p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-slate-800 rounded-2xl shadow-xl">
              {/* GGV Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl p-2 shadow-sm hover:scale-105 transition-transform duration-300">
                <img src="https://www.ggu.ac.in/media/BasePageImage/GGV-logo.png" alt="GGV" className="w-full h-full object-contain" />
              </div>
              {/* Divider Line */}
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700 hidden md:block"></div>
              {/* MoE Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl p-2 shadow-sm hover:scale-105 transition-transform duration-300">
                <img src="/images/sponsors/Ministry_of_Education_India.png" alt="MoE" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up backdrop-blur-sm bg-white/50 dark:bg-black/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Proposals Open
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight drop-shadow-sm">
              NHIDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">2026</span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-8 max-w-3xl">
              National Hackathon on Innovation, Design, and Entrepreneurship
            </p>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              <span className="font-bold text-slate-900 dark:text-white">Capacity Building for Design and Entrepreneurship (CBDE)</span> <br></br>invites you to the ultimate showdown of entrepreneurial thinking and innovation at <span className="font-bold text-slate-900 dark:text-white">Guru Ghasidas Vishwavidyalaya</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/submission"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
              >
                Submission Guidelines <ArrowRight size={18} />
              </Link>
              <a
                href={BROCHURE_LINK}
                download
                className="w-full sm:w-auto px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Brochure <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>


<section className="bg-white dark:bg-slate-950 border-y border-gray-200 dark:border-slate-800">

  <div className="container mx-auto px-4 md:px-6 py-5">

    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-14 md:gap-x-20"
      variants={statContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {[
        {
          icon: Calendar,
          label: "Date",
          value: "Mar 19–20",
        },
        {
          icon: Trophy,
          label: "Prize Pool",
          value: "₹1,00,000",
        },
        {
          icon: MapPin,
          label: "Venue",
          value: "GGV, Bilaspur",
        },
        {
          icon: Lightbulb,
          label: "Themes",
          value: "9 Tracks",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={statItem}
          whileHover={{
            y: -6,
            scale: 1.04,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="group"
        >
          <div
            className="relative flex flex-col items-center text-center gap-3
                       p-6 md:p-8 rounded-3xl
                       bg-white dark:bg-slate-950
                       transition-all duration-300
                       hover:shadow-2xl hover:shadow-orange-500/10
                       dark:hover:shadow-black/40"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            ring-1 ring-orange-500/20 pointer-events-none" />

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl
                         bg-orange-50 dark:bg-orange-900/20
                         flex items-center justify-center
                         text-saffron-500
                         transition-all duration-300
                         group-hover:-translate-y-1
                         group-hover:scale-110
                         group-hover:shadow-lg group-hover:shadow-orange-500/20"
            >
              <item.icon className="w-6 h-6" />
            </div>

            {/* Label */}
            <span className="text-sm uppercase tracking-wide font-semibold
                             text-slate-500 dark:text-slate-400">
              {item.label}
            </span>

            {/* Value */}
            <span className="text-xl md:text-2xl font-black
                             text-slate-900 dark:text-white">
              {item.value}
            </span>
          </div>
        </motion.div>
      ))}

    </motion.div>

  </div>
</section>


{/* 
<section className="bg-white dark:bg-slate-950 border-y border-gray-200 dark:border-slate-800">


  <div className="group flex flex-col items-center text-center gap-2
                p-4 md:p-6 rounded-2xl
                ">


    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
      variants={statContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

  
      <motion.div variants={statItem}>
        <StatCard
          icon={
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20
                            flex items-center justify-center
                            text-saffron-500">
              <Calendar className="w-6 h-6" />
            </div>
          }
          label="Date"
          value="Mar 19–20"
        />
      </motion.div>

  
      <motion.div variants={statItem}>
        <StatCard
          icon={
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20
                            flex items-center justify-center
                            text-saffron-500">
              <Trophy className="w-6 h-6" />
            </div>
          }
          label="Prize Pool"
          value="₹1,00,000"
        />
      </motion.div>


      <motion.div variants={statItem}>
        <StatCard
          icon={
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20
                            flex items-center justify-center
                            text-saffron-500">
              <MapPin className="w-6 h-6" />
            </div>
          }
          label="Venue"
          value="GGV, Bilaspur"
        />
      </motion.div>


      <motion.div variants={statItem}>
        <StatCard
          icon={
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20
                            flex items-center justify-center
                            text-saffron-500">
              <Lightbulb className="w-6 h-6" />
            </div>
          }
          label="Themes"
          value="9 Tracks"
        />
      </motion.div>

    </motion.div>

  </div>
</section> */}




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

      {/* <section className="bg-white dark:bg-slate-950 border-y border-gray-200 dark:border-slate-800">

        <div className="container mx-auto px-4 md:px-6 py-12">
         

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <StatCard icon={<Calendar className="w-6 h-6 text-saffron-500" />} label="Date" value="Mar 19-20" />

            <StatCard icon={<Trophy className="w-6 h-6 text-saffron-500" />} label="Prize Pool" value="₹1,00,000" />

            <StatCard icon={<MapPin className="w-6 h-6 text-saffron-500" />} label="Venue" value="GGV, Bilaspur" />

            <StatCard icon={<Lightbulb className="w-6 h-6 text-saffron-500" />} label="Themes" value="9 Tracks" />

          </div>

        </div>

      </section> */}

{/* --- NEW SECTION: BEYOND THE CODE --- */}
<section className="relative py-24 bg-white dark:bg-[#0B0F19] overflow-hidden">
  {/* Background Gradients */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs">
        Not Another Typical Hackathon
      </span>

      <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white">
        Beyond Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Coding</span>
      </h2>

      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
        NHIDE isn't about who writes the fastest algorithm. It's about who builds the most viable future, in any domain possible.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      {/* Card 1 */}
      <div className="group p-8 rounded-[2rem]
                      bg-white dark:bg-slate-900/60
                      border border-slate-100 dark:border-slate-800
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:border-blue-500/30
                      hover:shadow-2xl hover:shadow-blue-500/10">

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                        bg-blue-50 dark:bg-blue-900/20
                        text-blue-600 dark:text-blue-400
                        group-hover:scale-110 transition-transform">
          <Briefcase size={28} />
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
          Entrepreneurial Mindset
        </h3>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          We value business models as much as tech stacks. Can your innovation survive in the real market?
        </p>
      </div>

      {/* Card 2 */}
      <div className="group p-8 rounded-[2rem]
                      bg-white dark:bg-slate-900/60
                      border border-slate-100 dark:border-slate-800
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:border-purple-500/30
                      hover:shadow-2xl hover:shadow-purple-500/10">

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                        bg-purple-50 dark:bg-purple-900/20
                        text-purple-600 dark:text-purple-400
                        group-hover:scale-110 transition-transform">
          <Brain size={28} />
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
          Design Thinking
        </h3>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Empathy first. We look for solutions that solve genuine human problems with intuitive design.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group p-8 rounded-[2rem]
                      bg-white dark:bg-slate-900/60
                      border border-slate-100 dark:border-slate-800
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:border-emerald-500/30
                      hover:shadow-2xl hover:shadow-emerald-500/10">

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                        bg-emerald-50 dark:bg-emerald-900/20
                        text-emerald-600 dark:text-emerald-400
                        group-hover:scale-110 transition-transform">
          <TrendingUp size={28} />
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
          Scalable Impact
        </h3>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Prototype today, product tomorrow. We connect you with VCs to take your idea beyond the hackathon.
        </p>
      </div>

    </div>
  </div>
</section>






      {/* --- NEW SECTION: THE ROADMAP (Flowy & Responsive) --- */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B0F19] relative overflow-hidden border-y border-gray-200 dark:border-slate-800">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                The Process
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Impact</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Your journey through NHIDE-2026 is designed to refine, test, and launch your innovation.
              </p>
            </div>
            <Link 
              to="/timeline" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white font-bold hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <span>Full Schedule</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* THE FLOW STEPS */}
          <div className="relative">
            
            {/* Desktop Connector Rail (Hidden on Mobile) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
              {[
                { 
                  step: "01", 
                  title: "Submit Proposal", 
                  desc: "Craft your abstract. Define the problem. Submit via the portal.", 
                  icon: <FileText size={20} />,
                  color: "text-blue-500",
                  bg: "bg-blue-50 dark:bg-blue-900/20",
                  border: "group-hover:border-blue-500"
                },
                { 
                  step: "02", 
                  title: "Screening", 
                  desc: "Expert review of feasibility, innovation, and impact potential.", 
                  icon: <ScreenShare size={20} />,
                  color: "text-purple-500",
                  bg: "bg-purple-50 dark:bg-purple-900/20",
                  border: "group-hover:border-purple-500"
                },
                { 
                  step: "03", 
                  title: "Final Register", 
                  desc: "Shortlisted teams confirm participation & travel details.", 
                  icon: <CheckCircle size={20} />,
                  color: "text-emerald-500",
                  bg: "bg-emerald-50 dark:bg-emerald-900/20",
                  border: "group-hover:border-emerald-500"
                },
                { 
                  step: "04", 
                  title: "Grand Finale", 
                  desc: "48-Hour Hackathon at GGV. Build, Pitch, Win.", 
                  icon: <Trophy size={20} />,
                  color: "text-saffron-500",
                  bg: "bg-orange-50 dark:bg-orange-900/20",
                  border: "group-hover:border-saffron-500"
                }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  
                  {/* Mobile Vertical Line */}
                  <div className="md:hidden absolute left-6 top-16 bottom-[-32px] w-0.5 bg-slate-200 dark:bg-slate-800 z-0 last:hidden"></div>

                  <div className={`relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.border}`}>
                    
                    {/* Icon Bubble */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-full ${item.bg} ${item.color} flex items-center justify-center shrink-0 shadow-inner md:mb-6 md:-mt-16 ring-8 ring-white dark:ring-[#0B0F19]`}>
                       {item.icon}
                    </div>

                    {/* Content */}
                    <div className="text-left md:text-center">
                       <span className={`text-xs font-black ${item.color} uppercase tracking-widest mb-2 block`}>
                         Step {item.step}
                       </span>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                         {item.title}
                       </h3>
                       <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                         {item.desc}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


     


      {/* --- WHO CAN REGISTER (Moved Up) --- */}
      <section className="py-20 bg-slate-50 dark:bg-[#020617] relative overflow-hidden border-y border-gray-200 dark:border-slate-800">
        {/* Background decorative text */}
        <div className="absolute top-20 left-0 text-[10rem] font-black text-slate-200/20 dark:text-slate-800/20 leading-none select-none pointer-events-none -z-0">
          JOIN US
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Open for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Everyone</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">NHIDE-2026 is a cross-disciplinary ecosystem. Find your category below.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: "Entrepreneurs", desc: "Visionaries building the next big thing.", icon: <BriefcaseBusiness className="text-saffron-500" /> },
              { title: "Early Startups", desc: "Seed-stage teams ready to scale.", icon: <Rocket className="text-blue-500" /> },
              { title: "Academicians", desc: "Researchers & Students with a thesis for change.", icon: <GraduationCap className="text-purple-500" /> },
              { title: "R&D Labs", desc: "Deep-tech innovators & scientists.", icon: <FlaskConical className="text-green-500" /> },
              { title: "Investors", desc: "VCs & Angels seeking high-potential startups.", icon: <CircleDollarSign className="text-amber-500" /> },
              { title: "Tech Experts", desc: "Consultants & Architecture specialists.", icon: <Cpu className="text-pink-500" /> },
              { title: "Govt. Bodies", desc: "Policy makers & public sector innovators.", icon: <Landmark className="text-cyan-500" /> },
              { title: "Green Advocates", desc: "Sustainability & ESG focused teams.", icon: <LeafyGreen className="text-emerald-500" /> },
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


      {/* --- WHY PARTICIPATE --- */}
      <section className="py-24 bg-white dark:bg-slate-900/50 ">
      
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Participate?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Build, connect, pitch — and grow in a dynamic entrepreneurial environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Network size={28} />
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
      {/* <section className="py-24 bg-white dark:bg-slate-950">
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
      </section> */}




{/* Prizes & Perks - UPGRADED */}
      <section className="container mx-auto px-4 md:px-6 py-20 relative">
        {/* Abstract background blur for the prize area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-saffron-500/5 blur-[120px] pointer-events-none"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Prize</span> Pool</h2>
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


      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2">Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Themes</span></h2>
              <p className="text-slate-600 dark:text-slate-400">Explore the tracks for this year.</p>
            </div>
            {/* <Link
              to="/themes"
              className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Themes <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link> */}
            <Link
              to="/themes"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-white font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              View All Themes 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEMES.slice(0, 3).map((theme) => (
              <div key={theme.id} className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 group-hover:scale-105 transition-transform">
                  {theme.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{theme.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {theme.description}
                </p>
                <Link to="/themes" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Read more
                </Link>
              </div>
            ))}
          </div> */}
           {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {THEMES.slice(0, 3).map((theme) => (
              <Link 
                key={theme.id} 
                to="/themes"
                className="group relative flex flex-col p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors">
                      {theme.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {theme.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {theme.description}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="border-b-2 border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 pb-0.5 transition-all">
                      Read Mission Brief
                    </span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

   

          {/* Themes Preview */}
          {/* 
      <section className="py-20 bg-white dark:bg-slate-950">

        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">

            <div className="text-center md:text-left mb-6 md:mb-0">

              <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2">Problem Themes</h2>

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
      */}

       

      {/* --- SPONSORS --- */}
      {/* <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
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
      </section> */}



      {/* Sponsors Section - UPGRADED */}
      <section className="py-24 bg-slate-50 dark:bg-[#020617] relative border-t border-slate-200 dark:border-slate-800 overflow-hidden">

        {/* Background Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
              <Handshake size={20} />
            </div>
            <h2 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
              Sponsored By
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {SPONSORS.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                title={sponsor.name}
                className="group relative flex items-center justify-center w-40 h-24 p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Logo with Grayscale-to-Color effect */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:brightness-200 dark:group-hover:brightness-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-xs text-center text-slate-500 font-bold group-hover:text-blue-600 transition-colors">${sponsor.name}</div>`;
                    }
                  }}
                />

                {/* Optional: Glossy Shine Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </a>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
             <p className="text-xs text-slate-400 dark:text-slate-600">
                Want to support innovation? <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 dark:text-blue-400 hover:underline">Become a Sponsor</a>
             </p>
          </div> */}
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

const StatItem: React.FC<{ icon: React.ReactNode; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="flex flex-col items-center text-center group">
    <div className={`mb-4 p-4 rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
      {icon}
    </div>
    <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
      {value}
    </div>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
      {label}
    </div>
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

const CriterionBar: React.FC<{ label: string; percentage: number; color: string; icon: React.ReactNode }> = ({ label, percentage, color, icon }) => (
  <div className="group">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{percentage}%</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
      <div className={`${color} h-full rounded-full transition-all duration-1000 ease-out w-0 group-hover:w-[var(--target-width)]`} style={{ width: `${percentage}%`, '--target-width': `${percentage}%` } as React.CSSProperties}></div>
    </div>
  </div>
);

export default Home;