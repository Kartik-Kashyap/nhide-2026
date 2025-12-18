import React from 'react';

import { Link } from 'react-router-dom';

import { Calendar, Users, Trophy, Lightbulb, Handshake, GraduationCap, BookOpen, ArrowRight, Download, ExternalLink, Code } from 'lucide-react';

import { THEMES, GOOGLE_FORM_LINK, BROCHURE_LINK, SPONSORS } from '../constants';



const Home: React.FC = () => {

  return (

    <div className="animate-fade-in">

      {/* Hero Section */}

      <section className="relative pt-20 pb-32 overflow-hidden bg-navy-50 dark:bg-slate-900">

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">

             {/* Abstract Pattern */}

             <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400 to-navy-600 blur-3xl" />

             <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-saffron-400 to-orange-600 blur-3xl" />

        </div>

       

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">

            <span className="relative flex h-2 w-2">

              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>

            </span>

            Registrations Open for 2026 Edition

          </div>

         

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">

            <span className="text-navy-500 dark:text-blue-500">NHIDE</span>-2026

          </h1>

          <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">

            National Hackathon on Innovation, Design, and Entrepreneurship

          </p>

         

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">

            Capacity Building for Design and Entrepreneurship (CBDE)

            <br className="hidden md:block" />

            Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur, Chhattisgarh

          </p>

         

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <a

              href={GOOGLE_FORM_LINK}

              target="_blank"

              rel="noopener noreferrer"

              className="w-full sm:w-auto px-8 py-4 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg shadow-lg shadow-navy-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2"

            >

              Register Now <ExternalLink size={18} />

            </a>

            <a

              href="resources\brochure_nhide_2026.pdf" download

              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-750 transition-all flex items-center justify-center gap-2"

            >

              Download Brochure <Download size={18} />

            </a>

          </div>

        </div>

      </section>



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



      {/* Why Participate */}

<section className="py-20 bg-gray-50 dark:bg-slate-900">

  <div className="container mx-auto px-4 md:px-6">

    <div className="text-center mb-16">

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">

        Why Participate?

      </h2>

      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">

        Build, connect, pitch — and grow in a dynamic entrepreneurial environment.

      </p>

    </div>



    {/* MODIFIED: Added flex and justify-center to the grid container and conditional grid behavior */}

    {/* On screens where it's 3 columns (lg:grid-cols-3), the items will flow normally. */}

    {/* By adding flex justify-center, when the last two items (4 and 5) wrap, they will be centered in the available space. */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">



      <FeatureCard

        title="Networking"

        description="Connect with investors, mentors, and industry veterans who can accelerate your entrepreneurial journey."

        icon={<Users className="w-8 h-8 text-blue-500" />}

      />



      <FeatureCard

        title="Knowledge Sharing"

        description="Facilitate discussions through panel talks, workshops, and expert lectures. Topics include startup funding, marketing strategies, scaling and growth."

        icon={<BookOpen className="w-8 h-8 text-blue-500" />}

      />



      <FeatureCard

        title="Showcasing Innovation"

        description="Competitive platform for startups and innovators. Pitch ideas to potential investors and gain national-level visibility."

        icon={<Lightbulb className="w-8 h-8 text-blue-500" />}

      />



      <FeatureCard

        title="Collaborative Ecosystem"

        description="Promote partnerships across industry verticals and foster a supportive entrepreneurial ecosystem."

        icon={<Handshake className="w-8 h-8 text-blue-500" />}

      />



      <FeatureCard

        title="Student Engagement"

        description="Empower aspiring student entrepreneurs to learn directly from established professionals and pitch innovative ideas."

        icon={<GraduationCap className="w-8 h-8 text-blue-500" />}

      />



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

              <div key={theme.id} className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-shadow">

                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">

                  {theme.category}

                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{theme.title}</h3>

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



      {/* Sponsors Strip */}

      <section className="py-12 bg-navy-900 text-white overflow-hidden">

        <div className="container mx-auto px-4 md:px-6">

          <p className="text-center text-navy-200 text-sm uppercase tracking-widest font-semibold mb-8">Supported By</p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90 transition-all duration-500">

            <div className="text-xl md:text-2xl font-bold">Ministry of Education (MoE)</div>

            <div className="text-xl md:text-2xl font-bold">Guru Ghasidas Vishwavidyalaya (GGV)</div>

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

  <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">

    <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6">

      {icon}

    </div>

    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>

    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">

      {description}

    </p>

  </div>

);



export default Home;