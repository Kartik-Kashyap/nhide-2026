import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS, CONTACT_EMAIL } from '../constants';

export const Layout: React.FC = () => {

  const [showTopBtn, setShowTopBtn] = React.useState(false);

  // Monitor scroll position
  React.useEffect(() => {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check local storage or preference
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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={goToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 z-50 hover:bg-blue-700 hover:scale-110 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" 
          viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="3" 
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-gray-200 dark:border-slate-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            {/* <div className="w-8 h-8 bg-navy-500 dark:bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              N
            </div> */}
            <img src="/resources/logo.png" alt="NHIDE-2026 Logo" className="w-8 h-8 rounded-md object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] dark:drop-shadow-[0_0_18px_rgba(96,165,250,0.8)]" />

            <span className="font-bold text-lg md:text-xl tracking-tight text-navy-900 dark:text-white">
              <span className="text-navy-500 dark:text-blue-400">NHIDE</span>-2026
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-navy-500 dark:hover:text-blue-400 ${
                    isActive ? 'text-navy-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-yellow-400"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 absolute w-full left-0 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-medium px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-navy-50 dark:bg-slate-800 text-navy-700 dark:text-blue-400'
                        : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full bg-white dark:bg-slate-950 transition-colors">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-slate-300 py-12 border-t border-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
               
<img src="/resources/logo.png" alt="NHIDE-2026 Logo" className="w-8 h-8 rounded-md object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] dark:drop-shadow-[0_0_28px_rgba(96,165,250,0.8)]" />

                <span className="font-bold text-xl">NHIDE-2026</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Capacity Building for Design and Entrepreneurship (CBDE)<br />
                Guru Ghasidas Vishwavidyalaya (A Central University)<br />
                Bilaspur, Chhattisgarh, India
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
                <li><NavLink to="/themes" className="hover:text-white transition-colors">Problem Statements</NavLink></li>
                <li><NavLink to="/timeline" className="hover:text-white transition-colors">Schedule</NavLink></li>
                <li><NavLink to="/register" className="hover:text-white transition-colors">Register</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="resources\brochure_nhide_2026.pdf" download className="hover:text-white transition-colors">Brochure</a></li>
                <li><a href="resources\code_of_conduct_nhide_2026.pdf" download className="hover:text-white transition-colors">Code of Conduct</a></li>
                <li><a href="#Timeline" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-sm text-slate-400 mb-2">
                Guru Ghasidas Vishwavidyalaya<br />
                Koni, Bilaspur (C.G.), India – 495009
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:text-white flex items-center gap-2 mb-4">
                <Mail size={14} /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} NHIDE-2026. All rights reserved.</p>
            {/* <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-slate-400">Sponsored by:</p>
              <div className="flex gap-4 text-slate-300 font-medium">
                <span>MoE</span>
                <span>+</span>
                <span>GGV</span>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};