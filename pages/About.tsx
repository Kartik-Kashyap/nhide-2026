import React from 'react';
import { Mail, CheckCircle, AlertCircle, Users, Phone } from 'lucide-react';
import { ORGANIZERS, KEY_CONTACTS, SPEAKERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">About NHIDE-2026</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Capacity Building for Design and Entrepreneurship (CBDE) presents
          </p>
          <p className="text-xl md:text-2xl font-semibold text-navy-600 dark:text-blue-400 mb-4">
            National Hackathon on Innovation, Design, and Entrepreneurship
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Hosted by Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur, Chhattisgarh, India. 
            {/* <br className="hidden md:block" /> */}<br></br>
            NHIDE-2026 brings together innovators, entrepreneurs, and industry leaders to create impactful solutions 
            and foster a culture of innovation, design thinking, and entrepreneurial spirit.
          </p>
        </div>
      </section>

      {/* Who Can Register Section */}
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
      </section>

      {/* Key Contacts */}
      <section className="container mx-auto px-4 md:px-6 py-20">
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
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="bg-gray-50 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Organising Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ORGANIZERS.map((org, index) => (
              <div key={index} className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{org.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{org.role}</p>
                {org.email && (
                  <a href={`mailto:${org.email}`} className="text-xs text-slate-500 dark:text-slate-400 hover:text-navy-600 dark:hover:text-blue-400 flex items-center gap-1 mt-2">
                    <Mail size={12} /> {org.email}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            <p className="font-semibold mb-2">Committee Members:</p>
            <p className="leading-relaxed">
              Prof. Anand Murty Mishra, Prof. Chandra Shekhar Gahan, Dr. Madhulika Singh, Dr. Vishnu Prasad Yadav, 
              Dr. Niraj Kumari, Dr. Kundan Meshram, Dr. Vanita Soni, Dr. Nishant Behar, Dr. Raksha Pandey, 
              Dr. Shreemat Dash, Dr. Rajbhanu Patel, Dr. Budh Singh, Dr. B. P. Singh Dohare, Dr. Manoj Gupta, 
              Dr. Ajay Amit, Dr. Garima Tiwari, Mr. Anurag Singh, Mr. Somnath Singrol, Dr. Abhishek Jain, 
              Dr. Vikas Rajpopat, Dr. Sagar Jaiswal, Dr. Prem Shankar Dwivedi, Dr. Neha Gaikwad, Dr. Samarjit Singh, 
              Dr. Biplab Das, Dr. Achal Mishra, Dr. Vijay Kumar Chaurasiya, Dr. Pradip Das, Dr. Prasoon Soni, 
              Dr. Sushant Kumar Verma, Mr. Suman Lakra, Dr. Shiv Kumar, Dr. Murli Manohar Singh, Dr. Ghanshyam Dubey, 
              Dr. Nahid Hasan
            </p>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="container mx-auto px-4 md:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Keynote Speakers / Resource Persons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{speaker.name}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">{speaker.designation}</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">{speaker.organization}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{speaker.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;