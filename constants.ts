import { NavItem, Theme, ThemeDifficulty, EventItem, Prize, Organizer, Speaker, VentureCapitalist } from './types';
import { Lightbulb, Leaf, Stethoscope, GraduationCap, Wallet, RefreshCw, Cpu, Globe } from 'lucide-react';

export const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSc-5J3VjmMQ-xqIiSfFf8vDeAWp8GV0e3rlttfBUNcnVWhV-w/viewform?usp=publish-editor"; // Placeholder - Update with actual form link
export const BROCHURE_LINK = "resources/brochure_nhide_2026.pdf"; // Placeholder - Update with actual brochure link
// export const CONTACT_EMAIL = "ratnesh.singh75@ggu.ac.in";
export const CONTACT_EMAIL = "contact@nhide2026.in";


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
  },
  {
    id: 't9',
    title: 'Society Welfare and Service',
    description: 'Develop solutions that address social challenges, improve community welfare, enhance public services, or support vulnerable populations. Focus on creating inclusive, accessible, and impactful solutions for societal betterment.',
    deliverable: 'Social Impact Solution or Service Platform',
    techStack: ['Web/Mobile App', 'IoT', 'Data Analytics', 'Community Platforms'],
    difficulty: ThemeDifficulty.INTERMEDIATE,
    category: 'Social Impact'
  }
];

export const TIMELINE: EventItem[] = [
  {
    id: 'e1',
    title: 'Announcement & Call for Teams',
    date: 'December 2026',
    description: 'Official launch of NHIDE-2026. Organising committee formed. Thematic areas released.',
    isCompleted: false
  },
  {
    id: 'e2',
    title: 'Registration Opens',
    date: 'January 2026',
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

// Full Organizing Committee - Organized by hierarchy
// export const ORGANIZERS: Organizer[] = [
//   // Chief Patron
//   {
//     name: 'Prof. Alok Kumar Chakrawal',
//     role: 'Chief Patron - Hon\'ble Vice-Chancellor',
//     email: '',
//     // image: '/images/organizers/prof-alok-kumar-chakrawal.jpg', // Placeholder path
//     image: 'https://static.toiimg.com/thumb/msid-98022404,width-400,resizemode-4/98022404.jpg'
//   },
//   // Patron
//   {
//     name: 'Prof. Ashwini Kumar Dixit',
//     role: 'Patron - Registrar',
//     email: '',
//     image: '/images/organizers/prof-ashwini-kumar-dixit.jpg', // Placeholder path
//     // image: 'https://www.ggu.ac.in/media/FacultyPersonalInfo/photo/ashwini-kumar-dixit.JPG'
//   },
//   // Chairman & Convenor
//   {
//     name: 'Prof. Ratnesh Singh',
//     role: 'Chairman - Principal Investigator, CBDE',
//     email: 'ratnesh.singh75@ggu.ac.in',
//     image: '/images/organizers/prof-ratnesh-singh.jpg', // Placeholder path
//     // image: 'https://ggu.ac.in/media/staff/PROF._RATNESH_SINGH_g9UyeqK.jpg'
//   },
//   {
//     name: 'Prof. T. V. Arjunan',
//     role: 'Convenor - Co-Principal Investigator, CBDE',
//     email: 'arjun_nivi@yahoo.com',
//     // image: '/images/organizers/prof-tv-arjunan.jpg', // Placeholder path
//     image: 'https://www.ggu.ac.in/media/FacultyPersonalInfo/photo/TV_Arjunan.jpeg'
//   },
//   // Coordinators 1 & 2
//   {
//     name: 'Dr. Suraj Sharma',
//     role: 'Coordinator',
//     email: '',
//     image: '/images/organizers/dr-suraj-sharma.jpg', // Placeholder path
//   },
//   {
//     name: 'Dr. T. G. Loganathan',
//     role: 'Coordinator',
//     email: '',
//     image: '/images/organizers/dr-tg-loganathan.jpg', // Placeholder path
//   },
//   // Coordinators 3 & 4
//   {
//     name: 'Mr. Bhushan Singh Gautam',
//     role: 'Coordinator',
//     email: '',
//     image: '/images/organizers/mr-bhushan-singh-gautam.jpg', // Placeholder path
//   },
//   {
//     name: 'Dr. Mahavir Hiralal Ghante',
//     role: 'Coordinator',
//     email: '',
//     image: '/images/organizers/dr-mahavir-hiralal-ghante.jpg', // Placeholder path
//   }
// ];

export const ORGANIZERS: Organizer[] = [
  // Chief Patron
  {
    name: 'Prof. Alok Kumar Chakrawal',
    role: 'Chief Patron - Hon\'ble Vice-Chancellor',
    department: 'Guru Ghasidas Vishwavidyalaya, Bilaspur (C.G.), India',
    email: '',
    image: 'https://static.toiimg.com/thumb/msid-98022404,width-400,resizemode-4/98022404.jpg'
  },
  // Patron
  {
    name: 'Prof. Ashwini Kumar Dixit',
    role: 'Patron - Registrar',
    department: 'GGV, Bilaspur',
    email: '',
    image: '/images/organizers/prof-ashwini-kumar-dixit.jpg',
  },
  // Chairman & Convenor
  {
    name: 'Prof. Ratnesh Singh',
    role: 'Chairman - Professor, Dept. of Physical Education',
    department: 'Principal Investigator, CBDE',
    email: 'ratnesh.singh75@ggu.ac.in',
    image: '/images/organizers/prof-ratnesh-singh.jpg',
  },
  {
    name: 'Prof. T. V. Arjunan',
    role: 'Convenor - Professor, Dept. of Mechanical Engg.',
    department: 'Co-Principal Investigator, CBDE',
    email: 'arjun_nivi@yahoo.com',
    image: 'https://www.ggu.ac.in/media/FacultyPersonalInfo/photo/TV_Arjunan.jpeg'
  },
  // Coordinators 1 & 2
  {
    name: 'Dr. Suraj Sharma',
    role: 'Coordinator',
    department: 'Associate Professor, Dept. of Computer Science & Engg.',
    email: '',
    image: '/images/organizers/dr-suraj-sharma.jpg',
  },
  {
    name: 'Dr. T. G. Loganathan',
    role: 'Coordinator',
    department: 'Associate Professor, Dept. of Mechanical Engg.',
    email: '',
    image: '/images/organizers/dr-tg-loganathan.jpg',
  },
  // Coordinators 3 & 4
  {
    name: 'Mr. Bhushan Singh Gautam',
    role: 'Coordinator',
    department: 'Assistant Professor, Dept. of Mechanical Engg.',
    email: '',
    image: '/images/organizers/mr-bhushan-singh-gautam.jpg',
  },
  {
    name: 'Dr. Mahavir Hiralal Ghante',
    role: 'Coordinator',
    department: 'Assistant Professor, Dept. of Pharmacy',
    email: '',
    image: '/images/organizers/dr-mahavir-hiralal-ghante.jpg',
  }
];

// Keynote Speakers / Resource Persons
export const SPEAKERS: Speaker[] = [
  {
    name: 'Dr. Sudhir Varatharajan',
    designation: 'Programme Director, Capacity Building on Design and Entrepreneurship',
    organization: 'Ministry of Education, GoI, IIITDM',
    location: 'Kanchipuram, Tamil Nadu',
    image: '/images/speakers/dr-sudhir-varatharajan.jpg' // Placeholder path
  },
  {
    name: 'Dr. Alok Kumar Tripathi',
    designation: 'Whole Time Director',
    organization: 'NTPC GE Power Services Pvt. Ltd.',
    location: 'Noida, Uttar Pradesh',
    image: '/images/speakers/dr-alok-kumar-tripathi.jpg' // Placeholder path
  },
  {
    name: 'Dr. A. B. Mukherjee',
    designation: 'Former Director (Retd.), RPG',
    organization: 'BARC',
    location: 'Mumbai, Maharashtra',
    image: '/images/speakers/dr-ab-mukherjee.jpg' // Placeholder path
  },
  {
    name: 'Mr. Rajdeep Dewangan',
    designation: 'Director',
    organization: 'DFMEA Technosol',
    location: 'Bengaluru, Karnataka',
    image: '/images/speakers/mr-rajdeep-dewangan.jpg' // Placeholder path
  },
  {
    name: 'Mr. Vibhas Ambekar',
    designation: 'Managing Director',
    organization: 'Helical Technology',
    location: 'Bengaluru, Karnataka',
    image: '/images/speakers/mr-vibhas-ambekar.jpg' // Placeholder path
  },
  {
    name: 'Mr. B. R. Naresh',
    designation: 'Founder',
    organization: 'Czar Solutions',
    location: 'Pune, Maharashtra',
    image: '/images/speakers/mr-br-naresh.jpg' // Placeholder path
  },
  {
    name: 'Mr. Ajit Ekbote',
    designation: 'Sr. Deputy General Manager (Retd.) & Guest Lecturer',
    organization: 'Vedic Mathematics Teacher',
    location: 'Bengaluru, Karnataka',
    image: '/images/speakers/mr-ajit-ekbote.jpg' // Placeholder path
  },
  {
    name: 'Mr. Siddharth Bhatter',
    designation: 'Founder & CEO',
    organization: 'Karkhana Makerspace, Co-Founder, Karkhana Hub',
    location: 'NCR, Delhi',
    image: '/images/speakers/mr-siddharth-bhatter.jpg' // Placeholder path
  },
  {
    name: 'Mr. Nandan Kr Singh',
    designation: 'Director',
    organization: 'Twinverse Technologies',
    location: 'Bhubaneswar, Odisha',
    image: '/images/speakers/mr-nandan-kr-singh.jpg' // Placeholder path
  }
];

// Venture Capitalists / Investors
export const VENTURE_CAPITALISTS: VentureCapitalist[] = [
  {
    name: 'VC Firm Name 1',
    designation: 'Partner / Managing Director',
    organization: 'Investment Firm Name',
    location: 'Location',
    logo: '/images/vc/vc-logo-1.png', // Placeholder path
    link: 'https://example.com'
  },
  {
    name: 'VC Firm Name 2',
    designation: 'Partner / Managing Director',
    organization: 'Investment Firm Name',
    location: 'Location',
    logo: '/images/vc/vc-logo-2.png', // Placeholder path
    link: 'https://example.com'
  },
  // Add more VC firms as needed
];


export const SPONSORS = [
  { 
    name: "Ministry of Education", 
    // logo: "https://scetngp.com/wp-content/uploads/2023/04/logonew1.jpg", 
    logo: "/images/sponsors/moe-modified3.png",
    link: "https://www.education.gov.in/" 
  },
  { 
    name: "Guru Ghasidas Vishwavidyalaya", 
    // logo: "https://placehold.co/200x80/0f172a/white?text=GGV+Bilaspur", 
    logo: "https://www.ggu.ac.in/media/BasePageImage/GGV-logo.png",
    // logo: "/images/sponsors/Guru_Ghasidas_University_Insignia.jpeg",
    link: "https://www.ggu.ac.in/" 
  },
  { 
    name: "AICTE", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/316px-All_India_Council_for_Technical_Education_logo.png", 
    link: "https://www.aicte-india.org/" 
  },
  { 
    name: "Digital India", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/330px-Digital_India_logo.svg.png", 
    link: "https://www.digitalindia.gov.in/" 
  },
  { 
    name: "Startup India", 
    logo: "https://vectorseek.com/wp-content/uploads/2023/08/Startup-India-Hub-Logo-Vector.svg-.png", 
    link: "https://www.startupindia.gov.in/" 
  },
  { 
    name: "HCL", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/1200px-HCL_Technologies_logo.svg.png?20100214041014", // Placeholder - add actual logo
    link: "https://www.hcltech.com/" 
  },
  { 
    name: "NTPC", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/NTPC_Logo.svg/120px-NTPC_Logo.svg.png?20100830204023", // Placeholder - add actual logo
    link: "https://www.ntpc.co.in/" 
  },
];