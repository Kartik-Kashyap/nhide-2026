import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronUp, Mail, MapPin, ExternalLink } from 'lucide-react';
import { NAV_LINKS, CONTACT_EMAIL } from '../constants';

export const Layout: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  // 1. NEW STATE: Manage the Legal Modal (Privacy/Terms)
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  const location = useLocation();

  // --- Scroll Monitor ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Theme Logic ---
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  // --- Route Change Scroll Reset ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- BACK TO TOP BUTTON --- */}
      <button
        onClick={goToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-2xl bg-slate-900 dark:bg-blue-600 text-white shadow-2xl shadow-blue-500/20 transition-all duration-500 z-50 hover:-translate-y-1 hover:shadow-xl border border-white/10 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <ChevronUp size={24} strokeWidth={2.5} />
      </button>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 dark:bg-[#020617]/80 border-b border-slate-200/60 dark:border-slate-800/60 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          
          {/* Logo Area */}
          <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
               <div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img 
                 src="/logo.png" 
                 alt="NHIDE-2026 Logo" 
                 className="relative z-10 w-full h-full object-contain drop-shadow-md" 
               />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none tracking-tight text-slate-900 dark:text-white">
                NHIDE<span className="text-blue-600 dark:text-blue-500">2026</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity">
                Innovation Hackathon
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 mr-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-all duration-300 hover:rotate-12 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} fill="currentColor" /> : <Moon size={20} fill="currentColor" />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-transform active:scale-95"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden absolute w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
           <nav className="flex flex-col p-6 space-y-2">
             {NAV_LINKS.map((link) => (
               <NavLink
                 key={link.path}
                 to={link.path}
                 onClick={closeMenu}
                 className={({ isActive }) =>
                   `text-lg font-bold px-4 py-3 rounded-xl transition-all ${
                     isActive
                       ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 pl-6'
                       : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                   }`
                 }
               >
                 {link.label}
               </NavLink>
             ))}
           </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 w-full bg-white dark:bg-[#020617] transition-colors duration-500">
        <Outlet />
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0b0f19] text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
        {/* Abstract Pattern in Footer */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6 text-white">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5">
                   <img src="/logo.png" alt="NHIDE Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                   <span className="font-black text-xl block leading-none">NHIDE</span>
                   <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">2026 Edition</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 mb-6">
                Capacity Building for Design and Entrepreneurship (CBDE).<br/>
                Empowering the next generation of innovators at Guru Ghasidas Vishwavidyalaya.
              </p>
              <div className="flex gap-4">
                 {/* Social Placeholders */}
                 {['twitter', 'linkedin', 'github'].map(icon => (
                    <a key={icon} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                       <ExternalLink size={14} />
                    </a>
                 ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6">Navigation</h3>
              <ul className="space-y-3 text-sm font-medium">
                {NAV_LINKS.map(link => (
                   <li key={link.path}>
                      <NavLink to={link.path} className="hover:text-blue-400 hover:pl-2 transition-all block">{link.label}</NavLink>
                   </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-6">Resources</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="/brochure_nhide_2026.pdf" download className="hover:text-blue-400 transition-colors">Download Brochure</a></li>
                <li><a href="/code_of_conduct_nhide_2026.pdf" download className="hover:text-blue-400 transition-colors">Code of Conduct</a></li>
                <li><NavLink to="/timeline" className="hover:text-blue-400 transition-colors">Event Timeline</NavLink></li>
                <li><NavLink to="/themes" className="hover:text-blue-400 transition-colors">Available Themes</NavLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6">Contact Us</h3>
              <div className="space-y-4 text-sm">
                 <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Guru Ghasidas Vishwavidyalaya<br/>Koni, Bilaspur (C.G.)<br/>India – 495009</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-500 shrink-0" />
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
                 </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
            <p>&copy; {new Date().getFullYear()} NHIDE-2026. All rights reserved.</p>
            
            {/* 2. UPDATED FOOTER LINKS: Now clickable buttons that toggle the modal */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })}
                className="hover:text-blue-500 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setLegalModal({ isOpen: true, type: 'terms' })}
                className="hover:text-blue-500 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 3. NEW: Legal Modal Rendered here */}
      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        title={legalModal.type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
      />

    </div>
  );
};

// --- 4. NEW: Legal Modal Component ---
const LegalModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; type: 'privacy' | 'terms' }> = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[80vh] animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Close modal">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Scrollable Text Area */}
        <div className="p-6 overflow-y-auto prose prose-slate dark:prose-invert prose-sm max-w-none">
          {type === 'privacy' ? (
            <>
              <p><strong>Last Updated: January 2026</strong></p>
              <p>At NHIDE-2026, we value your privacy. This policy outlines how we handle your data.</p>
              <h4>1. Information Collection</h4>
              <p>We collect information such as your name, email, phone number, and academic details solely for the purpose of event registration and communication.</p>
              <h4>2. How We Use Your Data</h4>
              <ul>
                <li>To verify your eligibility for the hackathon.</li>
                <li>To send important updates regarding the schedule and shortlisting.</li>
                <li>To generate certificates and awards.</li>
              </ul>
              <h4>3. Data Sharing</h4>
              <p>We do <strong>not</strong> sell your data. Your information is shared only with the internal organizing committee and verified industry mentors/sponsors for recruitment purposes (if applicable).</p>
            </>
          ) : (
            <>
              <p><strong>Last Updated: January 2026</strong></p>
              <h4>1. Intellectual Property (IP)</h4>
              <p><strong>You own what you build.</strong> The Intellectual Property (IP) of the project developed during the hackathon belongs to the team. However, NHIDE-2026 and GGV reserve the right to use your project details for publicity and reporting purposes.</p>
              <h4>2. Code of Conduct</h4>
              <p>We have a zero-tolerance policy for harassment. All participants must treat others with respect. Plagiarism or using pre-built projects will lead to immediate disqualification.</p>
              <h4>3. Liability</h4>
              <p>The organizers are not responsible for any damage to personal equipment (laptops, hardware) during the event.</p>
              <h4>4. Media Rights</h4>
              <p>By participating, you grant us permission to capture photos and videos during the event for promotional use on social media and our website.</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};