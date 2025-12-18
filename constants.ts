import { NavItem, Theme, ThemeDifficulty, EventItem, Prize, Organizer, Speaker } from './types';
import { Lightbulb, Leaf, Stethoscope, GraduationCap, Wallet, RefreshCw, Cpu, Globe } from 'lucide-react';

export const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSc-5J3VjmMQ-xqIiSfFf8vDeAWp8GV0e3rlttfBUNcnVWhV-w/viewform?usp=publish-editor"; // Placeholder - Update with actual form link
export const BROCHURE_LINK = "resources/brochure_nhide_2026.pdf"; // Placeholder - Update with actual brochure link
export const CONTACT_EMAIL = "ratnesh.singh75@ggu.ac.in";

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Themes', path: '/themes' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'Register', path: '/register' },
];

export const THEMES: Theme[] = [
  {
    id: 't1',
    title: 'Advanced Materials & Manufacturing',
    description: 'Innovate in material science, manufacturing processes, and industrial applications. Create solutions for smart manufacturing, composite materials, additive manufacturing, or sustainable production methods.',
    deliverable: 'Prototype or Design Model',
    techStack: ['CAD Software', 'MATLAB', '3D Printing', 'IoT'],
    difficulty: ThemeDifficulty.ADVANCED,
    category: 'Manufacturing'
  },
  {
    id: 't2',
    title: 'Artificial Intelligence',
    description: 'Develop AI-powered solutions for real-world problems. Explore machine learning, deep learning, computer vision, natural language processing, or AI-driven automation systems.',
    deliverable: 'AI Model or Application',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
    difficulty: ThemeDifficulty.ADVANCED,
    category: 'AI/ML'
  },
  {
    id: 't3',
    title: 'Digital Communications',
    description: 'Build innovative communication systems, networking solutions, IoT connectivity, or next-generation communication protocols. Focus on improving connectivity, bandwidth, or communication security.',
    deliverable: 'Communication System or Network Solution',
    techStack: ['C++', 'Python', 'Embedded Systems', 'Network Protocols'],
    difficulty: ThemeDifficulty.INTERMEDIATE,
    category: 'Communications'
  },
  {
    id: 't4',
    title: 'Emerging Agriculture Technologies',
    description: 'Create smart farming solutions, precision agriculture tools, crop monitoring systems, or agricultural automation. Help farmers increase yield, reduce waste, and optimize resource usage.',
    deliverable: 'Agri-Tech Solution or IoT Device',
    techStack: ['IoT', 'Arduino/Raspberry Pi', 'Computer Vision', 'Python'],
    difficulty: ThemeDifficulty.INTERMEDIATE,
    category: 'Agriculture'
  },
  {
    id: 't5',
    title: 'Electronics & Semiconductor Manufacturing',
    description: 'Design electronic systems, embedded solutions, sensor networks, or semiconductor applications. Focus on hardware-software integration, circuit design, or electronic device innovation.',
    deliverable: 'Electronic System or Embedded Solution',
    techStack: ['Arduino', 'Raspberry Pi', 'Verilog/VHDL', 'C/C++'],
    difficulty: ThemeDifficulty.ADVANCED,
    category: 'Electronics'
  },
  {
    id: 't6',
    title: 'Energy, Environment & Climate',
    description: 'Develop solutions for renewable energy, energy efficiency, climate monitoring, waste management, or environmental sustainability. Create tools to track, optimize, or improve environmental impact.',
    deliverable: 'Energy/Environment Solution or Platform',
    techStack: ['IoT', 'Python', 'React', 'Data Analytics'],
    difficulty: ThemeDifficulty.INTERMEDIATE,
    category: 'Environment'
  },
  {
    id: 't7',
    title: 'Health & Medical Technologies',
    description: 'Build healthcare solutions, medical devices, telemedicine platforms, health monitoring systems, or diagnostic tools. Improve accessibility, affordability, or effectiveness of healthcare services.',
    deliverable: 'Medical Device or Health App',
    techStack: ['Flutter/React Native', 'IoT', 'Machine Learning', 'Biomedical Sensors'],
    difficulty: ThemeDifficulty.ADVANCED,
    category: 'Healthcare'
  },
  {
    id: 't8',
    title: 'Quantum Science & Technology',
    description: 'Explore quantum computing applications, quantum algorithms, quantum cryptography, or quantum sensing. Develop solutions leveraging quantum principles for computation, communication, or sensing.',
    deliverable: 'Quantum Algorithm or Simulation',
    techStack: ['Qiskit', 'Cirq', 'Python', 'Quantum Algorithms'],
    difficulty: ThemeDifficulty.ADVANCED,
    category: 'Quantum'
  }
];

export const TIMELINE: EventItem[] = [
  {
    id: 'e1',
    title: 'Announcement & Call for Teams',
    date: 'January 2026',
    description: 'Official launch of NHIDE-2026. Problem statements and thematic areas released.',
    isCompleted: false
  },
  {
    id: 'e2',
    title: 'Registration Opens',
    date: 'February 2026',
    description: 'Team registrations begin via Google Form. Submit abstracts and team details.',
    isCompleted: false
  },
  {
    id: 'e3',
    title: 'Registration Deadline',
    date: 'Early March 2026',
    description: 'Last date to submit team details, initial ideas, and preferred thematic areas.',
    isCompleted: false
  },
  {
    id: 'e4',
    title: 'Shortlist Announcement',
    date: 'Mid March 2026',
    description: 'Selected teams announced for NHIDE-2026 final round.',
    isCompleted: false
  },
  {
    id: 'e5',
    title: 'NHIDE-2026 Day 1',
    date: 'Mar 19, 2026',
    time: '09:00 AM',
    location: 'Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur (C.G.)',
    description: 'Opening ceremony, keynote sessions, panel talks, workshops, and hacking begins.',
    isCompleted: false
  },
  {
    id: 'e6',
    title: 'NHIDE-2026 Day 2 & Judging',
    date: 'Mar 20, 2026',
    time: '05:00 PM',
    location: 'Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur (C.G.)',
    description: 'Hacking continues, expert lectures, final pitching to investors and judges, winner announcement.',
    isCompleted: false
  }
];

export const PRIZES: Prize[] = [
  {
    id: 'p1',
    rank: '1st Place',
    amount: '₹50,000',
    perks: ['Trophy', 'Certificate of Excellence', 'Networking Opportunities'],
    iconName: 'Trophy'
  },
  {
    id: 'p2',
    rank: '2nd Place',
    amount: '₹30,000',
    perks: ['Trophy', 'Certificate of Excellence', 'Mentorship'],
    iconName: 'Award'
  },
  {
    id: 'p3',
    rank: '3rd Place',
    amount: '₹20,000',
    perks: ['Trophy', 'Certificate of Excellence', 'Goodies'],
    iconName: 'Medal'
  }
];

// Key Contacts
export const KEY_CONTACTS: Organizer[] = [
  {
    name: 'Prof. Ratnesh Singh',
    role: 'Principal Investigator, CBDE & Chairman',
    email: 'ratnesh.singh75@ggu.ac.in',
  },
  {
    name: 'Prof. T. V. Arjunan',
    role: 'Co-Principal Investigator, CBDE & Convenor',
    email: 'arjun_nivi@yahoo.com',
  }
];

// Full Organizing Committee
export const ORGANIZERS: Organizer[] = [
  {
    name: 'Prof. Alok Kumar Chakrawal',
    role: 'Chief Patron - Hon\'ble Vice-Chancellor',
    email: '',
  },
  {
    name: 'Prof. Ashwini Kumar Dixit',
    role: 'Patron - Registrar',
    email: '',
  },
  {
    name: 'Prof. Ratnesh Singh',
    role: 'Chairman - Principal Investigator, CBDE',
    email: 'ratnesh.singh75@ggu.ac.in',
  },
  {
    name: 'Prof. T. V. Arjunan',
    role: 'Convenor - Co-Principal Investigator, CBDE',
    email: 'arjun_nivi@yahoo.com',
  },
  {
    name: 'Dr. Suraj Sharma',
    role: 'Coordinator',
    email: '',
  },
  {
    name: 'Dr. T. G. Loganathan',
    role: 'Coordinator',
    email: '',
  },
  {
    name: 'Mr. Bhushan Singh Gautam',
    role: 'Coordinator',
    email: '',
  },
  {
    name: 'Dr. Mahavir Hiralal Ghante',
    role: 'Coordinator',
    email: '',
  }
];

// Keynote Speakers / Resource Persons
export const SPEAKERS: Speaker[] = [
  {
    name: 'Dr. Sudhir Varatharajan',
    designation: 'Programme Director, Capacity Building on Design and Entrepreneurship',
    organization: 'Ministry of Education, GoI, IIITDM',
    location: 'Kanchipuram, Tamil Nadu'
  },
  {
    name: 'Dr. Alok Kumar Tripathi',
    designation: 'Whole Time Director',
    organization: 'NTPC GE Power Services Pvt. Ltd.',
    location: 'Noida, Uttar Pradesh'
  },
  {
    name: 'Dr. A. B. Mukherjee',
    designation: 'Former Director (Retd.), RPG',
    organization: 'BARC',
    location: 'Mumbai, Maharashtra'
  },
  {
    name: 'Mr. Rajdeep Dewangan',
    designation: 'Director',
    organization: 'DFMEA Technosol',
    location: 'Bengaluru, Karnataka'
  },
  {
    name: 'Mr. Vibhas Ambekar',
    designation: 'Managing Director',
    organization: 'Helical Technology',
    location: 'Bengaluru, Karnataka'
  },
  {
    name: 'Mr. B. R. Naresh',
    designation: 'Founder',
    organization: 'Czar Solutions',
    location: 'Pune, Maharashtra'
  },
  {
    name: 'Mr. Ajit Ekbote',
    designation: 'Sr. Deputy General Manager (Retd.) & Guest Lecturer',
    organization: 'Vedic Mathematics Teacher',
    location: 'Bengaluru, Karnataka'
  },
  {
    name: 'Mr. Siddharth Bhatter',
    designation: 'Founder & CEO',
    organization: 'Karkhana Makerspace, Co-Founder, Karkhana Hub',
    location: 'NCR, Delhi'
  },
  {
    name: 'Mr. Nandan Kr Singh',
    designation: 'Director',
    organization: 'Twinverse Technologies',
    location: 'Bhubaneswar, Odisha'
  }
];


export const SPONSORS = [
  { 
    name: "Ministry of Education", 
    logo: "https://yt3.googleusercontent.com/d8JqpVEsgZaogEQv1xdZ25lHhHj3sdjyO9Udl82km9KgROsUB0wicQ5vGWar_0oLl1_d59w-=s900-c-k-c0x00ffffff-no-rj", 
    link: "https://www.education.gov.in/" 
  },
  { 
    name: "Guru Ghasidas Vishwavidyalaya", 
    logo: "https://placehold.co/200x80/0f172a/white?text=GGV+Bilaspur", 
    link: "https://new.ggu.ac.in/" 
  },
  { 
    name: "AICTE", 
    logo: "https://placehold.co/200x80/0f172a/white?text=AICTE", 
    link: "https://www.aicte-india.org/" 
  },
  { 
    name: "Digital India", 
    logo: "https://placehold.co/200x80/0f172a/white?text=Digital+India", 
    link: "https://www.digitalindia.gov.in/" 
  },
  { 
    name: "Startup India", 
    logo: "https://placehold.co/200x80/0f172a/white?text=Startup+India", 
    link: "https://www.startupindia.gov.in/" 
  },
];