// import React, { useState } from 'react';
// import { Trophy, Download, AlertCircle, MessageCircle, ExternalLink, Search } from 'lucide-react';

// // Replace this with your actual JSON/CSV data (Omit Emails and Phone Numbers!)
// const MOCK_SHORTLIST = [
//   {
//     "sno": 1,
//     "ref": "NHIDE-2026-26001",
//     "lead": "Aswin R",
//     "org": "Sona College of Technology",
//     "title": "Smart eye pressure monitor",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 2,
//     "ref": "NHIDE-2026-26002",
//     "lead": "Selvakumaran N",
//     "org": "Francis Xavier Engineering College",
//     "title": "Intelligent Resume Screening and HR Automation using NLP",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 3,
//     "ref": "NHIDE-2026-26003",
//     "lead": "RISHIKESH KUMAR",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA BILASPUR (CHHATTISGARH) 495009",
//     "title": "Creating a Smart AC Cloth Model to Stimulate Sweating and Transfer Heat From Human Body to Environment",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 4,
//     "ref": "NHIDE-2026-26004",
//     "lead": "Parmeshwar Sinha",
//     "org": "Government engineering college bilaspur,koni",
//     "title": "DIGITAL KISAN",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 5,
//     "ref": "NHIDE-2026-26005",
//     "lead": "Masud Khan",
//     "org": "Guru Ghasidas Vishwavidyalaya (A Central University), Koni, Bilaspur,Chhattisgarh,495001",
//     "title": "Smart IV Drip Monitoring & Control System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 6,
//     "ref": "NHIDE-2026-26006",
//     "lead": "Abhinandan Kaushik",
//     "org": "Government Engineering College Bilaspur Chhattisgarh",
//     "title": "InfraReport",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 7,
//     "ref": "NHIDE-2026-26007",
//     "lead": "K Vaibhav",
//     "org": "Government Engineering College Koni Bilaspur (C.G)",
//     "title": "SunCredit- Enabling Carbon credit Generation Through Solar Energy",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 8,
//     "ref": "NHIDE-2026-26008",
//     "lead": "Tushar Sahu",
//     "org": "Government Engineering College Bilaspur",
//     "title": "Low Cost Obstacle Detection wrist Band for visually impaired",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 9,
//     "ref": "NHIDE-2026-26009",
//     "lead": "vaibhav shukla",
//     "org": "Guru Ghasidas vishwavidyalay (Koni Bilaspur)",
//     "title": "eraser printer",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 10,
//     "ref": "NHIDE-2026-26010",
//     "lead": "VIKRAM S",
//     "org": "Prathyusha Engineering College",
//     "title": "NearCare – AI Powered Emergency Healthcare Assistance System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 11,
//     "ref": "NHIDE-2026-26011",
//     "lead": "Yash Raj",
//     "org": "Guru Ghasidas vishwavidyalay (Koni Bilaspur)",
//     "title": "Advancement in Agricultural drones",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 12,
//     "ref": "NHIDE-2026-26012",
//     "lead": "Samarth Titotkar",
//     "org": "MIT Academy of Engineering",
//     "title": "P.A.T.S (Public Access To Schemes)",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 13,
//     "ref": "NHIDE-2026-26013",
//     "lead": "Aditya Pandey",
//     "org": "Guru Ghasidas Vishwavidyalaya, bilaspur chhattisgarh",
//     "title": "Affordable Clean Airfilter System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 14,
//     "ref": "NHIDE-2026-26014",
//     "lead": "YOGESHWAR.K",
//     "org": "PRATHYUSHA ENGINEERING COLLEGE",
//     "title": "Solar  powered hybrid EV charging station with smart energy management & green  credit system",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 15,
//     "ref": "NHIDE-2026-26015",
//     "lead": "Rahul Raj Tiwari",
//     "org": "Guru Ghasidas Vishwavidyalaya, bilaspur chhattisgarh",
//     "title": "Parichay",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 16,
//     "ref": "NHIDE-2026-26016",
//     "lead": "Shubham Yadav",
//     "org": "Center for distance and online education jammu university",
//     "title": "Education",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 17,
//     "ref": "NHIDE-2026-26017",
//     "lead": "Yash Tiwari",
//     "org": "Lakhmi Chand Institute of Technology and , Bodri Bilaspur",
//     "title": "ResolveX",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 18,
//     "ref": "NHIDE-2026-26018",
//     "lead": "Harsh Srivastava",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "Jan-Dhan-Drishti: Voice-First AI for Rural Credit Intelligence",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 19,
//     "ref": "NHIDE-2026-26019",
//     "lead": "Digesh Kumar Tandan",
//     "org": "Bhilai Institute of Technology, Durg",
//     "title": "Maximizing Section Throughput Using AI-Powered Train Traffic Control",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 20,
//     "ref": "NHIDE-2026-26020",
//     "lead": "Anshay tripathi",
//     "org": "Guru ghasidas vishwavidyalaya, koni bilaspur",
//     "title": "HR Greenz (Near by fruits & vegetables)",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 21,
//     "ref": "NHIDE-2026-26021",
//     "lead": "Aadil Hussain",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA, BILASPUR",
//     "title": "PlateShare – Reducing Food Waste Through Smart Redistribution",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 22,
//     "ref": "NHIDE-2026-26022",
//     "lead": "Munish Tiwari",
//     "org": "Bhilai institute of technology,durg",
//     "title": "Yamuna E-waste solutions",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 23,
//     "ref": "NHIDE-2026-26023",
//     "lead": "Rinki Soni",
//     "org": "Government Engineering College, Bilaspur, Chhattisgarh",
//     "title": "ClinicChain – A Secure Digital Health Record System for Rural Clinics",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 24,
//     "ref": "NHIDE-2026-26024",
//     "lead": "Hareni E",
//     "org": "Prathyusha Engineering College",
//     "title": "LoomLink - An AI & Blockchain Powered Handloom Ecosystem",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 25,
//     "ref": "NHIDE-2026-26025",
//     "lead": "Ishan Kumar Sahu",
//     "org": "Bhilai Institute of Technology, Durg, Chhattisgarh",
//     "title": "MitanVani- A Chhattisgarhi Language Translator",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 26,
//     "ref": "NHIDE-2026-26026",
//     "lead": "Yashwant sahu",
//     "org": "Government Engineering College koni Bilaspur Chhattisgarh",
//     "title": "BASERA",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 27,
//     "ref": "NHIDE-2026-26027",
//     "lead": "Satya Prakash",
//     "org": "Guru Ghasidas Vishwavidyalaya,Bilaspur,Chhatisgarh  495009",
//     "title": "StatSync : An AI-Driven Integrated Command Centre for Emergency Trauma Response & Resource Optimization",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 28,
//     "ref": "NHIDE-2026-26028",
//     "lead": "Raj jaiswal",
//     "org": "government engineering college koni,bilaspur",
//     "title": "Eco Tracer AI",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 29,
//     "ref": "NHIDE-2026-26029",
//     "lead": "SIVA DHARSHAN S",
//     "org": "Sri Krishna College of Engineering & Technology, Coimbatore, Tamil Nadu.",
//     "title": "AI-Assisted Pest & Disease Early-Warning System (Field-Level)",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 30,
//     "ref": "NHIDE-2026-26030",
//     "lead": "RITURAJ MANDI",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur , Koni, Bilaspur, Chhattisgarh 495009",
//     "title": "OmniGaurd: Privacy-First Edge Computing for Fall Detection and Vital Sign Monitoring",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 31,
//     "ref": "NHIDE-2026-26031",
//     "lead": "Richchik Bardhan",
//     "org": "Guru Ghasidas Vishwavidyalaya,Koni,Bilapur,Chattisgargh",
//     "title": "EcoNomics AI: An AI-Augmented Economic  intelligence Framework for SME Decision Support.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 32,
//     "ref": "NHIDE-2026-26032",
//     "lead": "Piyush Kumar Sharma",
//     "org": "Banwarilal Bhalotia College, Usha gram Asansol, West Bengal",
//     "title": "JAL RAKSHAK",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 33,
//     "ref": "NHIDE-2026-26033",
//     "lead": "Abhishek Dixit",
//     "org": "Guru Ghasidas Vishwavidyalaya Bilaspur Chhattisgarh",
//     "title": "SCSS – Smart Forensic Access & Evidence Integrity Infrastructure Platform",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 34,
//     "ref": "NHIDE-2026-26034",
//     "lead": "Vikalp Bordekar",
//     "org": "Government engineering College bilaspur koni",
//     "title": "Health companion for senior care",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 35,
//     "ref": "NHIDE-2026-26035",
//     "lead": "Suyash Gupta",
//     "org": "guru ghasidas vishwavidyalaya , bilaspur",
//     "title": "ShramSathi , (Bridging the Digital Divide for India’s Informal Workers )",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 36,
//     "ref": "NHIDE-2026-26036",
//     "lead": "Gopikrishna S",
//     "org": "PRATHYUSHA ENGINEERING COLLEGE",
//     "title": "AGRIVELAN",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 37,
//     "ref": "NHIDE-2026-26037",
//     "lead": "Gaurav Kumar",
//     "org": "Bhilai Institute of Technology BIT Durg",
//     "title": "AuraSutra - AI Powered Healthcare EcoSystem",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 38,
//     "ref": "NHIDE-2026-26038",
//     "lead": "Krish Kamlesh Panchal",
//     "org": "Vellore Institute of Technology, Vellore, Thiruvalam Road, Katpadi, Vellore, Tamil Nadu - 632014",
//     "title": "A Mechanical Wearable System for Enforcing Safe Smartphone Viewing Distance",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 39,
//     "ref": "NHIDE-2026-26039",
//     "lead": "Komal Kumari",
//     "org": "Guru Ghasidas Vishwavidyalaya, bilaspur chattisgarh",
//     "title": "AI Emotion Aware Program",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 40,
//     "ref": "NHIDE-2026-26041",
//     "lead": "Tanya Kushwaha",
//     "org": "Bhilai Institute of Technology, Durg",
//     "title": "WITH - We Intend To Help",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 41,
//     "ref": "NHIDE-2026-26042",
//     "lead": "Saurabh Sahu",
//     "org": "Bhilai Institute of Technology Durg",
//     "title": "SkillBridge AI-Powered Employability Intelligence & Growth Tracking Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 42,
//     "ref": "NHIDE-2026-26043",
//     "lead": "Sonu Sharma",
//     "org": "Guru ghasidas university bilaspur chattisgarh",
//     "title": "NeemGuard – Eco-Friendly Neem-Based Smoke Cones for Mosquito Control",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 43,
//     "ref": "NHIDE-2026-26044",
//     "lead": "Raj Malviya",
//     "org": "Government engineering College Bilaspur",
//     "title": "AquaGuard - Smart IOT Pipeline Leakage and Water Contamination Detection system",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 44,
//     "ref": "NHIDE-2026-26045",
//     "lead": "Saurabh yadav",
//     "org": "Guru Ghasidas Vishwavidyalaya Bilaspur, Chhattisgarh",
//     "title": "AI-Powered Live Interview & Skill Evalution Platform",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 45,
//     "ref": "NHIDE-2026-26046",
//     "lead": "Ukkira Pandi M",
//     "org": "Prathyusha Engineering College, Thiruvallur - 602025, Tamil Nadu",
//     "title": "VELPARI - Inclusive AgriTech Platform for Farmers & Consumers",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 46,
//     "ref": "NHIDE-2026-26047",
//     "lead": "Anish Goyal",
//     "org": "Bhilai Institute of Technology, Durg, Chhattisgarh, India",
//     "title": "MANJYOT",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 47,
//     "ref": "NHIDE-2026-26048",
//     "lead": "Manik Chand Sahu",
//     "org": "Government Engineering College , Koni Bilaspur 495009",
//     "title": "Landguard AI",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 48,
//     "ref": "NHIDE-2026-26049",
//     "lead": "Yavisht Manghani",
//     "org": "Dr. D. Y. Patil Institute of Pharmaceutical Sciences & Research,  Pimpri-Chinchwad, Maharashtra",
//     "title": "Development of a Low-Cost Portable MRI-Like Imaging System for Rural Healthcare",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 49,
//     "ref": "NHIDE-2026-26050",
//     "lead": "MANISH KUMAR KAUSHIK",
//     "org": "BIT( DURG )",
//     "title": "ANYWHERE DOOR",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 50,
//     "ref": "NHIDE-2026-26051",
//     "lead": "Vidisha Jha",
//     "org": "School of studies of engineering and technology Gurughasidas vishwavidyalay bilaspur",
//     "title": "Digi SHE-ild,An AI-powered unified cyber safety platform",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 51,
//     "ref": "NHIDE-2026-26053",
//     "lead": "Prakhar singh",
//     "org": "LCIT BILASPUR chhattisgarh",
//     "title": "Performance evaluation of glass fiber reinforced polymer (GFRP) rebars for sustainable highway infrastructure",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 52,
//     "ref": "NHIDE-2026-26054",
//     "lead": "SATYA PHANI GANASALA",
//     "org": "Guru Ghasidas Vishwavidyalaya, BILASPUR",
//     "title": "LOAD FIT",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 53,
//     "ref": "NHIDE-2026-26055",
//     "lead": "Urwashi sinha",
//     "org": "Soft corner,koni bilaspur chhattisgarh",
//     "title": "Way to your heart",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 54,
//     "ref": "NHIDE-2026-26056",
//     "lead": "RITURAJ MANDI",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur , Koni, Bilaspur, Chhattisgarh 495009",
//     "title": "OmniGaurd: Privacy-First Edge Computing for Fall  Detection and Vital Sign Monitoring",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 55,
//     "ref": "NHIDE-2026-26057",
//     "lead": "Lanka Tushar",
//     "org": "BHILAI INSTITUTE OF TECHNOLOGY",
//     "title": "AI Based Waste Segregation Monitoring System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 56,
//     "ref": "NHIDE-2026-26058",
//     "lead": "Krrish Dewangan",
//     "org": "Amity University Raipur",
//     "title": "PulseCheck AI: Bridging the Healthcare Gap for Rural Communities Through AI-Powered Diagnostics",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 57,
//     "ref": "NHIDE-2026-26059",
//     "lead": "Ankit Kumar",
//     "org": "Guru Ghashidas central university,koni bilaspur chhattisgarh",
//     "title": "MEDIconnect – A Digital Healthcare Appointment &  Connectivity Platform",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 58,
//     "ref": "NHIDE-2026-26060",
//     "lead": "Sonal Singh",
//     "org": "Government Engineering College, Koni, Bilaspur, Chhattisgarh",
//     "title": "BookMySalon – Intelligent SaaS Platform for Salon Commerce",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 59,
//     "ref": "NHIDE-2026-26061",
//     "lead": "Sunkara Sai NIthin",
//     "org": "National Institute of technology Rourkela , NIT rourkela",
//     "title": "Q-Route 6G: Hybrid Quantum Machine Learning for Real-Time STAR-RIS Network Optimization",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 60,
//     "ref": "NHIDE-2026-26062",
//     "lead": "Hardik Mihani",
//     "org": "AKS University, Satna, Madhya Pradesh (TL) & IPS Academy, Indore, Madhya Pradesh (Team Members)",
//     "title": "Smart Complaint Summarizer for Government Offices",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 61,
//     "ref": "NHIDE-2026-26063",
//     "lead": "Ribha Kumari",
//     "org": "Government engineering College Bilaspur (koni, Bilaspur, Chhattisgarh)",
//     "title": "AVGC Virtual Lab for Skill Development & Career Guidance",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 62,
//     "ref": "NHIDE-2026-26064",
//     "lead": "Mayank Dindoire",
//     "org": "Shri Shankaracharya Technical Campus, Bhilai",
//     "title": "An IoT-based Sugarcane Maturity Detection System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 63,
//     "ref": "NHIDE-2026-26065",
//     "lead": "SATYAM ANAND",
//     "org": "Guru Ghasidas Vishwavidyalaya Bilaspur CG",
//     "title": "Smart Road Safety System Using IoT and GPS",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 64,
//     "ref": "NHIDE-2026-26066",
//     "lead": "Shreyas Hulusemane Karunakara",
//     "org": "National Institute of Technology, Rourkela & JSS Medical College & Hospital, Mysuru",
//     "title": "Development and Fabrication of a Novel Coculture  Microfluidic Platform to Engineer and Study Cellular Dialogues across Cancer Landscapes and Beyond",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 65,
//     "ref": "NHIDE-2026-26067",
//     "lead": "Bhaskar Patel",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh 495009",
//     "title": "Pre-Deployment AI Model Auditing System for Risk, Bias, and Reliability Assessment",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 66,
//     "ref": "NHIDE-2026-26068",
//     "lead": "Bhavesh Prasad Mahilang",
//     "org": "MSME TECHNOLOGY CENTRE, DURG",
//     "title": "Krishi Mitra Bot: Krishi Mitra Bot: Smart Irrigation Automation for Rural India",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 67,
//     "ref": "NHIDE-2026-26069",
//     "lead": "Ayush Mishra",
//     "org": "Mrittika Technologies, Near Old Santoshi Mandir Chantideeh, Bilaspur (C.G.) 495001",
//     "title": "Laser Weeder",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 68,
//     "ref": "NHIDE-2026-26070",
//     "lead": "Aditya Dewangan",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA (A Central University), BILASPUR, (C.G.)",
//     "title": "EcoSaarthi – Offline First Safety Companion for Eco & Cultral Tourism",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 69,
//     "ref": "NHIDE-2026-26071",
//     "lead": "Khirsagar Patel",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur Chhattisgarh",
//     "title": "Development of Semi-automatic Universal Grain Packager for Rural Application",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 70,
//     "ref": "NHIDE-2026-26072",
//     "lead": "Ankit Singh",
//     "org": "SOSET, Guru Ghasidas Vishwavidyalaya, Bilaspur",
//     "title": "QuMail - A Sovereign Quantum-Secure Email Client for Post-Quantum India",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 71,
//     "ref": "NHIDE-2026-26073",
//     "lead": "Mecha-Agri Solutions",
//     "org": "MSME Technology Centre, Durg, Chhattisgarh - 491001.",
//     "title": "Autonomous Precision Agriculture Robot",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 72,
//     "ref": "NHIDE-2026-26074",
//     "lead": "Samrat Dawn",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh, India",
//     "title": "The Lighthouse",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 73,
//     "ref": "NHIDE-2026-26075",
//     "lead": "Krishna Bhardwaj",
//     "org": "Guru Ghasidas University",
//     "title": "Local Worker Service Application",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 74,
//     "ref": "NHIDE-2026-26076",
//     "lead": "Divyanshu Verma",
//     "org": "Guru Ghasidas University Koni Bilaspur 495009",
//     "title": "Marg Darshak",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 75,
//     "ref": "NHIDE-2026-26077",
//     "lead": "Nitin Balraj Manhar",
//     "org": "Government Engineering College Koni, Bilaspur, 495009, C.G.",
//     "title": "AI Smart Farming Assistant",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 76,
//     "ref": "NHIDE-2026-26078",
//     "lead": "Garima Runwal",
//     "org": "Guru Ghasidas Vishwavidyalaya (A Central University), Koni, Bilaspur (C.G) 495009.",
//     "title": "FarmerVaani: A Solar-Powered Voice-AI Community Hub for Digital Inclusion",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 77,
//     "ref": "NHIDE-2026-26079",
//     "lead": "Aayush Verma",
//     "org": "Guru Ghasidas Vishwavidyalaya (A Central University), Koni, Bilaspur (C.G) 495009.",
//     "title": "Bio-Mass Pellets from Paddy Straw",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 78,
//     "ref": "NHIDE-2026-26080",
//     "lead": "Deepak Tiwari",
//     "org": "GHASIDAS VISHWAVIDYALAYA (A Central University), BILASPUR, (C.G.)",
//     "title": "Fashion design",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 79,
//     "ref": "NHIDE-2026-26081",
//     "lead": "ABHAY KUMAR",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA",
//     "title": "AI-Enabled Secure 24×7 Self-Service Printing Kiosk",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 80,
//     "ref": "NHIDE-2026-26082",
//     "lead": "Deepak Soni",
//     "org": "Guru Ghasidas Vishwavidyalaya Bilaspur",
//     "title": "MindConnect- Anonymous Mental Health Support Platform",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 81,
//     "ref": "NHIDE-2026-26083",
//     "lead": "Sourabh Yadav",
//     "org": "Guru Ghasidas Vishwavidyalaya Koni, Bilaspur Chhattisgarh",
//     "title": "Empowering Chhattisgarhiya Artisans: An NFC-Enabled D2C Ecosystem for Authentic Handicrafts.",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 82,
//     "ref": "NHIDE-2026-26084",
//     "lead": "Praveen sahu",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur CG",
//     "title": "Saarthi+ :Real-Time Bus Monitoring with IVR & Safety Crowd . Management for Public Buses",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 83,
//     "ref": "NHIDE-2026-26085",
//     "lead": "Himanshu Agrahari",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur CG",
//     "title": "GenUp –Empowering Schools to Achieve Excellence Through Innovative Learning and  Management Solutions",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 84,
//     "ref": "NHIDE-2026-26086",
//     "lead": "Divyanshu Mishra",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur CG",
//     "title": "SentinelAI: Autonomous Compliance & Financial Risk Intelligence Platform",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 85,
//     "ref": "NHIDE-2026-26087",
//     "lead": "SANDHYA HARMUKH",
//     "org": "MSME TECHNOLOGY CENTRE DURG",
//     "title": "TECH-BAG",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 86,
//     "ref": "NHIDE-2026-26088",
//     "lead": "Sneha Khetan",
//     "org": "Kalinga University, Kotni, Near Mantralaya, Naya Raipur– 492101 (Chhattisgarh) India",
//     "title": "WasteSense AI: Deep Learning-Based Smart Waste Classification with Behavioural Incentive Mechanism",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 87,
//     "ref": "NHIDE-2026-26089",
//     "lead": "Saurabh Yadav",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "AI-Powered Mock Live Interview & Skill Evaluation Platform",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 88,
//     "ref": "NHIDE-2026-26090",
//     "lead": "Ajay Kumar",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur, C.G. - 495009",
//     "title": "RaktSetu: Real-Time Blood Donor Network",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 89,
//     "ref": "NHIDE-2026-26091",
//     "lead": "Kanchi Bhopate",
//     "org": "Guru Ghasidas University, Koni Bilaspur Chhattisgarh",
//     "title": "Travox - A Modular Edge Computing Platform and Intelligent Black Box for Next-Gen Travel Safety.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 90,
//     "ref": "NHIDE-2026-26092",
//     "lead": "Himanshu Agrahari",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur CG",
//     "title": "GenUp –Empowering Schools to Achieve Excellence Through Innovative Learning and Management Solutions.",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 91,
//     "ref": "NHIDE-2026-26093",
//     "lead": "Visheshvar Verma",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur",
//     "title": "Green-Synthesized MoO₃ Nanowires for Electrochemical Monitoring of Hazardous Nitrite in Aquatic Environments",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 92,
//     "ref": "NHIDE-2026-26094",
//     "lead": "Sunil Kuntal",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur",
//     "title": "Machine Learning - Based Inventory Risk and Demand Analysis System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 93,
//     "ref": "NHIDE-2026-26095",
//     "lead": "G V AAKASH",
//     "org": "SRKR ENGINEERING COLLEGE",
//     "title": "AYUSETHU",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 94,
//     "ref": "NHIDE-2026-26096",
//     "lead": "Dinesh Barik",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "AI-Based regional crop recommendation and seed priming optimisation for climate resilient agriculture in Chhattisgarh.",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 95,
//     "ref": "NHIDE-2026-26097",
//     "lead": "Raj Singh",
//     "org": "Guru Ghasidas Vishwavidyalaya (GGU) , Koni, Bilaspur , Chhattisgarh – 495009 , India",
//     "title": "Real-Time Media Forgery Detection with Transformer-Based AI",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 96,
//     "ref": "NHIDE-2026-26098",
//     "lead": "Aditya Pandey",
//     "org": "GGU Bilaspur",
//     "title": "Interlocking Brick Making Machinary and integrated roller transportation machine",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 97,
//     "ref": "NHIDE-2026-26099",
//     "lead": "Roshan Khamari",
//     "org": "Jungle Tak GIS & Consultancy, Incubation Centre GGV Bilaspur",
//     "title": "Project Wild-Eye AI",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 98,
//     "ref": "NHIDE-2026-26100",
//     "lead": "Soubhik Karmakar",
//     "org": "Guru Ghasidas University Koni Bilaspur",
//     "title": "Smart Sole",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 99,
//     "ref": "NHIDE-2026-26101",
//     "lead": "Harshita Yadav",
//     "org": "Guru Ghasidas Vishwavidyalaya, koni, bilaspur, chhattisgarh",
//     "title": "AI-Based Real-Time Legal Document Fraud Detection  System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 100,
//     "ref": "NHIDE-2026-26102",
//     "lead": "Paritosh Khatkar",
//     "org": "Guru Ghasidas Vishwavidyalaya koni Bsp Chhattisgarh",
//     "title": "AI- Based Smart Textile Waste Sorting and Recycling System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 101,
//     "ref": "NHIDE-2026-26103",
//     "lead": "Ashish Gautam",
//     "org": "Guru Ghasidas University, Bilaspur, Chhatisgarh",
//     "title": "Mulyankan AI – AI-Powered Subjective Answer Grading System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 102,
//     "ref": "NHIDE-2026-26104",
//     "lead": "Aditya Verma",
//     "org": "Bhilai Institute of Technology Durg, Durg, Chhattisgarh, 491001",
//     "title": "Real Time Attack Detection and Mitigation System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 103,
//     "ref": "NHIDE-2026-26105",
//     "lead": "Akshat Agrawal",
//     "org": "Bhilai Institute of Technology , Durg (C.G)",
//     "title": "Intelligent Public Service Navigator & Real Time ChatBot",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 104,
//     "ref": "NHIDE-2026-26106",
//     "lead": "Monali Nanda",
//     "org": "GGV, Bilaspur",
//     "title": "Mycocrome: Industrial Eco-Colorants",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 105,
//     "ref": "NHIDE-2026-26107",
//     "lead": "Monali Nanda",
//     "org": "GGV, Bilaspur",
//     "title": "MicroKill: Green Nano-Preservation Technology Using Herbal Bioactives for Fruits and Vegetables",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 106,
//     "ref": "NHIDE-2026-26108",
//     "lead": "Paavni Batra",
//     "org": "PlugTrail Power Private Limited - Vyapar Vihar, Bilaspur (C.G.)",
//     "title": "Public Hybrid EV Charging Stations",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 107,
//     "ref": "NHIDE-2026-26109",
//     "lead": "VIMAL KUMAR MISHRA",
//     "org": "BHILAI INSTITUTE OF TECHNOLOGY, DURG, C.G.",
//     "title": "AI-Powered Multimodal Misinformation Detection Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 108,
//     "ref": "NHIDE-2026-26110",
//     "lead": "Hardik Kumar Sinha",
//     "org": "Samrat Ashok Technological Institute, Vidisha, Madhya Pradesh, Pin: 464001",
//     "title": "Autonomous Quadcopter Platform for Precision Agricultural Spraying and Rural Payload Delivery",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 109,
//     "ref": "NHIDE-2026-26111",
//     "lead": "Megha Dewangan",
//     "org": "MSME TECHNOLOGY CENTRE DURG",
//     "title": "Food Testing Device",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 110,
//     "ref": "NHIDE-2026-26112",
//     "lead": "Ekansh Kumar Sarna",
//     "org": "Bhilai Institute of technology, Durg",
//     "title": "Predictive Infrastructure Risk & Early Warning system",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 111,
//     "ref": "NHIDE-2026-26113",
//     "lead": "Prakhar Dewangan",
//     "org": "Bhilai Institute of Technology, Durg",
//     "title": "SilentSOS: Smart Proximity Women Safety Network",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 112,
//     "ref": "NHIDE-2026-26114",
//     "lead": "Aashutosh Singh Baghel",
//     "org": "Samrat Ashok Technological Institute - Civil Lines, Vidisha (M.P.) 464001, INDIA",
//     "title": "Novel edge detection / image feature detection development",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 113,
//     "ref": "NHIDE-2026-26115",
//     "lead": "Satya Anurag Das",
//     "org": "Sambalpur University Institute Of Information Technology (SUIIT), Jyoti Vihar, Burla, Sambalpur, 768019",
//     "title": "AURA (Autism Understanding & Rehabilitation Assistant)",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 114,
//     "ref": "NHIDE-2026-26116",
//     "lead": "AARUSHI JAISWAL",
//     "org": "Bhilai institute of technology, Durg",
//     "title": "Real-Time Women Safety & AI Companion",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 115,
//     "ref": "NHIDE-2026-26117",
//     "lead": "Biswojit sahoo",
//     "org": "Sambalpur University Institute of Information Technology",
//     "title": "MUDRA",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 116,
//     "ref": "NHIDE-2026-26118",
//     "lead": "Nitin Pandey",
//     "org": "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (MP)",
//     "title": "FinanceDost: A School Finance Enablement Platform for Scholarship Access and Institutional Sustainability",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 117,
//     "ref": "NHIDE-2026-26119",
//     "lead": "Priyanshu Raj",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur, Chhattisgarh",
//     "title": "MindShield: An Anonymous AI-Powered Mental Health Support Platform for Students",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 118,
//     "ref": "NHIDE-2026-26120",
//     "lead": "MEGHA MAHTO",
//     "org": "GURU GHASIDAS VISHWAVIDALAYA",
//     "title": "FEMAFLOW-SMART MESTRUAL CUP",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 119,
//     "ref": "NHIDE-2026-26121",
//     "lead": "Kavita kumawat",
//     "org": "GGV,koni,bilaspur",
//     "title": "MilestoneMatrix",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 120,
//     "ref": "NHIDE-2026-26122",
//     "lead": "Sangita Ghosh",
//     "org": "C V Raman Global University, Bhubaneswar, Odisha, 752054",
//     "title": "HEALTHoL – AI-Powered Digital Healthcare Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 121,
//     "ref": "NHIDE-2026-26123",
//     "lead": "PONMUDI MR",
//     "org": "Bannari Amman Institute Of Technology",
//     "title": "Solar-Powered Zoned Two-Way RF Public Safety Alert System for Rural Emergency Communication",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 122,
//     "ref": "NHIDE-2026-26124",
//     "lead": "AKILESH M",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "PIEZOELECTRIC -BASED FETAL MOVEMENT DETECTION AND COUNTING SYSTEM",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 123,
//     "ref": "NHIDE-2026-26125",
//     "lead": "Arivazhagan B",
//     "org": "Bannari Amman Institute Of Technology",
//     "title": "Cropio",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 124,
//     "ref": "NHIDE-2026-26126",
//     "lead": "Sourabh Rajbhar",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "Smart Student Hub",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 125,
//     "ref": "NHIDE-2026-26127",
//     "lead": "Shrigayathri S",
//     "org": "Bannari Amman Institute of Technology (BIT) Tamil Nadu, India.",
//     "title": "Sentiment Analysis Of Comments Recieved Through E-Consultation Module",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 126,
//     "ref": "NHIDE-2026-26128",
//     "lead": "AREYA K S",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "CyberTriage Tool",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 127,
//     "ref": "NHIDE-2026-26129",
//     "lead": "Agalya S",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "Personalized Diabetes Management Companion",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 128,
//     "ref": "NHIDE-2026-26130",
//     "lead": "ISHWARYA R",
//     "org": "Bannari Amman Institute of Technology,",
//     "title": "Smart AI-Powered Crop Disease Detection and Advisory System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 129,
//     "ref": "NHIDE-2026-26131",
//     "lead": "DHEEKSHA V",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu, India.",
//     "title": "GraminSeva AI: An Offline-First Multilingual Virtual Triage System for Rural Healthcare.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 130,
//     "ref": "NHIDE-2026-26132",
//     "lead": "POOJA SHREE M",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "AI-Powered Real-Time Scam Call and Deepfake Voice Detection System for Secure Communication",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 131,
//     "ref": "NHIDE-2026-26133",
//     "lead": "Soumya ranjan jena",
//     "org": "Sambalpur University Institute of Information Technology",
//     "title": "ECHO BAND(Tremor analysis for parkinson's disease)",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 132,
//     "ref": "NHIDE-2026-26134",
//     "lead": "DHARSEKA LD",
//     "org": "Bannari amman institute of Technology ,Erode ,sathyamngalam.",
//     "title": "Sustainable Utilization of Prosopis Juliflora for Water Purification",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 133,
//     "ref": "NHIDE-2026-26135",
//     "lead": "KARUNISHA R",
//     "org": "Bannari Amman Institute of Technology",
//     "title": ": SafeReach — AI-Based Community Emergency Response  and Welfare Coordination System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 134,
//     "ref": "NHIDE-2026-26136",
//     "lead": "PREETHIKA S",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "AI POWERD SOCIETAL PROBLEM DISCOVERY AND INSIGHT SYSTEM",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 135,
//     "ref": "NHIDE-2026-26137",
//     "lead": "JISNU S",
//     "org": "Bannari Amman Institute Of Technology - Sathyamangalam",
//     "title": "AllloyMind",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 136,
//     "ref": "NHIDE-2026-26138",
//     "lead": "DIVYA PRIYA B",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY , TAMIL NADU.",
//     "title": "AI CROP HEALTH ANALYSIS AND DISEASE DETECTION SYSTEM",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 137,
//     "ref": "NHIDE-2026-26139",
//     "lead": "SANJAY GANDHI G",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "AI Language Learning Platform with Learning DNA Profiling",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 138,
//     "ref": "NHIDE-2026-26140",
//     "lead": "MUKESH KANNA Y",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "EcoTrack Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 139,
//     "ref": "NHIDE-2026-26141",
//     "lead": "MAHALAKSHMI J",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu",
//     "title": "SakhiSetu",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 140,
//     "ref": "NHIDE-2026-26142",
//     "lead": "Chanchal Chandra",
//     "org": "INTERNATIONAL INSTITUTE OF TECHNOLOGY NAYA RAIPUR",
//     "title": "AI-Driven Crime Data and Document Analysis System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 141,
//     "ref": "NHIDE-2026-26143",
//     "lead": "Harsh kumar sahu",
//     "org": "Guru Ghasidas Vishwavidyalaya (GGU), Bilaspur",
//     "title": "A Smart Service Platform for Hostel",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 142,
//     "ref": "NHIDE-2026-26144",
//     "lead": "GOKUL PRASATH S",
//     "org": "Bannari Amman Intstitute Of Technology,Sathyamangalam Erode",
//     "title": "DISEASE DETECTION &  CLASSIFICATION USING  DEEP LEARNING MODEL",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 143,
//     "ref": "NHIDE-2026-26145",
//     "lead": "Purnendra Dhirhi",
//     "org": "Govt Engineering College Raipur",
//     "title": "Sah Saathi - India's First On Demand Digital Sahayak Booking Platform",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 144,
//     "ref": "NHIDE-2026-26146",
//     "lead": "KOWSALYA M",
//     "org": "Bannari Amman Institute of Technology, Sathyamangalam, Tamil Nadu",
//     "title": "CivicBridge - A Community Welfare & Public Services Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 145,
//     "ref": "NHIDE-2026-26147",
//     "lead": "SATHISH P",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "Real-Time Centralized Animal Disease Surveillance System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 146,
//     "ref": "NHIDE-2026-26148",
//     "lead": "PRASANNA B",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, TAMILNADU.",
//     "title": "MECQUE: GenAI-Driven Automated Sizing and Selection of Multi-Component Systems for Sustainable Engineering Design",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 147,
//     "ref": "NHIDE-2026-26149",
//     "lead": "GOWTHAM P",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, Tamil Nadu.",
//     "title": "Explainable AI-Based Hospital Readmission System for Diabetic Patients.",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 148,
//     "ref": "NHIDE-2026-26150",
//     "lead": "MONIKA N",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "EduFund AI-SMART SCHOLARSHIP MANAGEMENT SYSTEM",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 149,
//     "ref": "NHIDE-2026-26151",
//     "lead": "Nitin Patel",
//     "org": "Shri Shankaracharya Technical Campus Junwani , Bhilai , CG",
//     "title": "LedgerSakhi:A Vernacular Digital Ledger and Financial Empowerment Suite for Swa Sahayta Samuh",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 150,
//     "ref": "NHIDE-2026-26152",
//     "lead": "SIDDHIKA S",
//     "org": "Bannari Amman Institute Of Technology, Sathyamangalam",
//     "title": "AI-Powered Early Detection System for Academic Stress and Dropout Prevention",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 151,
//     "ref": "NHIDE-2026-26153",
//     "lead": "Riddhi Mishra",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA",
//     "title": "Nanoseeds : Next generation technology for resilient crop production and improved farm productivity.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 152,
//     "ref": "NHIDE-2026-26154",
//     "lead": "Twinkle Patra",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "Nanotizer - Herbal nanoemulsion based hand gel sanitizer",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 153,
//     "ref": "NHIDE-2026-26155",
//     "lead": "Vidha Verma",
//     "org": "Guru Ghasidas Vishwavidyalaya , Bilaspur",
//     "title": "ECO PACK: Paddy straw–based eco-packaging materials",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 154,
//     "ref": "NHIDE-2026-26156",
//     "lead": "KAVISURYA B",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, TAMILNADU",
//     "title": "VisionCart: AI-Powered Product Identification and  Automated Billing System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 155,
//     "ref": "NHIDE-2026-26157",
//     "lead": "PRAVEEN SAHU",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA, BILASPUR, CHHATTISGARH",
//     "title": "Real-TimeBus Monitoring with IVR & Safety Crowd",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 156,
//     "ref": "NHIDE-2026-26158",
//     "lead": "Kshama Sahu",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur",
//     "title": "Nanoswachh, a multinational nanosorbent for heavy metals, hardness and microbial contamination.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 157,
//     "ref": "NHIDE-2026-26159",
//     "lead": "Akanksha jaiswal",
//     "org": "Guru ghasidas vishwavidyalaya, botany department koni bilaspur",
//     "title": "Ganoderma based herbal tea which boost the vitality and energy.reduce inflammation with anticarcenogenic properties",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 158,
//     "ref": "NHIDE-2026-26160",
//     "lead": "JAISRE R",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "CampusEdge",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 159,
//     "ref": "NHIDE-2026-26161",
//     "lead": "Princi Pandey",
//     "org": "Guru Ghasidas University",
//     "title": "Repello: Aherbal insect repllent formulation for safe and long stored grain pest control",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 160,
//     "ref": "NHIDE-2026-26162",
//     "lead": "ATHIYAMAN G",
//     "org": "Bannari Amman Institute of Technology, Tamilnadu",
//     "title": "Diffusion Based Hybrid Denoising Module For Portable X-ray Machine",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 161,
//     "ref": "NHIDE-2026-26163",
//     "lead": "MONIKA SRI K",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "IoT + ML Based Flood Prediction System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 162,
//     "ref": "NHIDE-2026-26164",
//     "lead": "GOVARTHINI G",
//     "org": "Bannari Amman Institute Of Technology",
//     "title": "Smart Community Welfare and Public Service Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 163,
//     "ref": "NHIDE-2026-26165",
//     "lead": "SABREIN S",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "Integrated VOC and Biosensor Based System for Plant Stress Detection and Agricultural Recommendations",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 164,
//     "ref": "NHIDE-2026-26166",
//     "lead": "Dev vrat sao",
//     "org": "Government engineering College raipur , sejbahar , raipur , 492015",
//     "title": "Karyam",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 165,
//     "ref": "NHIDE-2026-26167",
//     "lead": "SHARMILA S",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu, India.",
//     "title": "Facial Expression Based Adaptive Music Recommendation System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 166,
//     "ref": "NHIDE-2026-26168",
//     "lead": "Nikhat parveen",
//     "org": "Guru Ghasidas Vishwavidyalaya,Koni, Bilaspur,Chhattisgarh",
//     "title": "NFKV – AI Study Group & Instant Doubt Solver",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 167,
//     "ref": "NHIDE-2026-26169",
//     "lead": "SASIKUMAR S",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu, India.",
//     "title": "Tissue-Aware RNA-Seq Normalization Using Machine Learning — Tissue  Prediction & QSmooth",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 168,
//     "ref": "NHIDE-2026-26170",
//     "lead": "Yokeshwari M",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu, India.",
//     "title": "EduConnect: Smart Bridge Between Freelance Mentors and Educational Institutions",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 169,
//     "ref": "NHIDE-2026-26171",
//     "lead": "HARIHARAN  P S",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "Next Generation Smart Farming Using IoT and Artificial Intelligence",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 170,
//     "ref": "NHIDE-2026-26172",
//     "lead": "Abishek R",
//     "org": "Bannari Amman Institute of Technology (BIT), Tamil Nadu, India",
//     "title": "Health and medical technology",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 171,
//     "ref": "NHIDE-2026-26173",
//     "lead": "Surya R",
//     "org": "Bannari Amman Institute of Technology , Sathyamangalam, Erode",
//     "title": "Placement driven project management portal",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 172,
//     "ref": "NHIDE-2026-26174",
//     "lead": "Subham Behera",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA (A Central University),",
//     "title": "feminism support system",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 173,
//     "ref": "NHIDE-2026-26175",
//     "lead": "DHURAI MURUGAN B",
//     "org": "Bannari Amman Institute of Technology, Sathyamangalam, Erode, Tamil Nadu",
//     "title": "VoxFix: Voice Grammar Checker ChatBot",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 174,
//     "ref": "NHIDE-2026-26176",
//     "lead": "Badri Vaishnavi",
//     "org": "Lakhmi chand institute of technology",
//     "title": "AI-Driven Cross-Platform Recommendation System through User Behaviour and Trend Analysis",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 175,
//     "ref": "NHIDE-2026-26177",
//     "lead": "BHARANI T",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, Tamil Nadu – 638401, India.",
//     "title": "FARM CONNECT",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 176,
//     "ref": "NHIDE-2026-26178",
//     "lead": "Priyadharshini M",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "AI-Powered Waste Classification and Recycling assistant",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 177,
//     "ref": "NHIDE-2026-26179",
//     "lead": "MOHAMADU RIYAS S",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu 638401",
//     "title": "AI-Powered Video Moderation",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 178,
//     "ref": "NHIDE-2026-26180",
//     "lead": "MALARVIZHI A",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "OxySense – Smart IoT System for Monitoring and Predicting Oxygen Cylinder Usage in Hospitals",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 179,
//     "ref": "NHIDE-2026-26181",
//     "lead": "Someshwar Jurri",
//     "org": "KisanVahak, lakhe nagar, Raipur",
//     "title": "KisanVahan",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 180,
//     "ref": "NHIDE-2026-26182",
//     "lead": "VENKATESHKUMAR S",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu, India.",
//     "title": "EARLY SEPSIS DETECTION ICUs",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 181,
//     "ref": "NHIDE-2026-26183",
//     "lead": "Gubbala Yaswanth Setty",
//     "org": "Sagi Rama Krishnam Raju (SRKR) Engineering College (Autonomous) A.P, India - 534204",
//     "title": "Agentic AI Reliability and Red-Teaming Lab",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 182,
//     "ref": "NHIDE-2026-26184",
//     "lead": "Narvekar Nishant Yatin",
//     "org": "Indian Institute of Management, Permanent Campus, Dhaula Kuan, Himachal Pradesh - 173031",
//     "title": "From Craft to Click: Empowering Indian Fashion Brands and Artisan Ecosystems through AI-Driven Personalization and Verified Provenance",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 183,
//     "ref": "NHIDE-2026-26185",
//     "lead": "RAMESH KUMAR",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA",
//     "title": "KAAMBATAO",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 184,
//     "ref": "NHIDE-2026-26186",
//     "lead": "Saloni Yadav",
//     "org": "Guru Ghasidas Vishwavidyala, Bilaspur, Chhattisgarh",
//     "title": "NeuroStudy AI: Smart Study Behavior Analyzer for Students",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 185,
//     "ref": "NHIDE-2026-26187",
//     "lead": "Aastha Sahu",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni,  Bilaspur, Chhattisgarh",
//     "title": "Herb Bazar—Empowering India through Herbal Trade & Waste-to-Wealth Innovation.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 186,
//     "ref": "NHIDE-2026-26188",
//     "lead": "DEBUG ENTITY",
//     "org": "Bannari amman institute of technology",
//     "title": "Bharat-Audit AI:Cloud-Native Autonomous Auditing Framework",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 187,
//     "ref": "NHIDE-2026-26189",
//     "lead": "JOHN PAUL V",
//     "org": "Bannari Amman Institute Of Technology",
//     "title": "On Device Digital Twin Sync Module",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 188,
//     "ref": "NHIDE-2026-26190",
//     "lead": "KAUSHIKA S",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY,  TAMIL NADU.",
//     "title": "SMART MEDICINE REMINDER FOR ELDERY",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 189,
//     "ref": "NHIDE-2026-26191",
//     "lead": "Roshni De",
//     "org": "NIT Agartala",
//     "title": "QueueTrust: An AI-Powered Predictive Queue & Workflow Optimization System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 190,
//     "ref": "NHIDE-2026-26192",
//     "lead": "Sree Haran M",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "Structural Simulation and Performance Evaluation of a Control-Surface-Less Aircraft Using Advanced Thrust Vector Control",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 191,
//     "ref": "NHIDE-2026-26193",
//     "lead": "Jayamuguntha P",
//     "org": "Bannari Amman Institute of Technology,  Tamil Nadu, India",
//     "title": "AgriHeritage – A Demand-Driven Digital Platform for Traditional Seeds and Organic Farm Produce",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 192,
//     "ref": "NHIDE-2026-26194",
//     "lead": "VARSHA C",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "Oil Spill Detection Using SAR Satellite Images & AIS Datas",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 193,
//     "ref": "NHIDE-2026-26195",
//     "lead": "SASTHIKA D",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, TAMIL NADU,INDIA",
//     "title": "AI-Powered Smart Waste Monitoring and Environmental Impact Reduction Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 194,
//     "ref": "NHIDE-2026-26196",
//     "lead": "UDHAYALAKSHMI J",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY,",
//     "title": "Evaluation of green synthesized calcium oxide nanoparticles derived from Amaranthus spp. in biodiesel production",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 195,
//     "ref": "NHIDE-2026-26197",
//     "lead": "PRADEEP S",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "CropioAI – AI Sustainable Agricultural Platform",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 196,
//     "ref": "NHIDE-2026-26198",
//     "lead": "THARUN ADHITHYA S K",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu 638401",
//     "title": "AI-Powered Smart Urban Flood Prediction and Alert System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 197,
//     "ref": "NHIDE-2026-26199",
//     "lead": "Hari Ganessh P S",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "AI-Enhanced Online Exam Proctoring System for Academic Integrity",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 198,
//     "ref": "NHIDE-2026-26200",
//     "lead": "Raja Pradeepa R",
//     "org": "Bannari Amman Institute of Technology , Sathymangalam 638401,Erode,Tamilnadu",
//     "title": "Thermoelectric Generator (TEG) Based Waste Heat Recovery",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 199,
//     "ref": "NHIDE-2026-26201",
//     "lead": "Pratheep S",
//     "org": "Bannari Amman Institute of Technology, Tamil Nadu, India",
//     "title": "SheetaAI — AI-Powered Predictive Cold Chain Orchestration for India's Perishable Supply Chain",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 200,
//     "ref": "NHIDE-2026-26202",
//     "lead": "RANJITH B",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "LifeLink – Smart Blood Donor Matching System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 201,
//     "ref": "NHIDE-2026-26203",
//     "lead": "Annish Litisha Jebastin",
//     "org": "Bannari Amman Institute of Technology, Sathyamangalam, Erode",
//     "title": "RescueLink – AI & IoT Powered Disaster Response and Community Coordination Platform",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 202,
//     "ref": "NHIDE-2026-26204",
//     "lead": "KAMALESH K",
//     "org": "Bannari Amman Institute of Technology (BIT), Tamil Nadu, India.",
//     "title": "Telemedicine Access for Rural Healthcare",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 203,
//     "ref": "NHIDE-2026-26205",
//     "lead": "DHARSAN A K",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, TAMIL NADU, INDIA.",
//     "title": "CARECONNECT – AI-POWERED COMMUNITY WELFARE & SERVICE PLATFORM",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 204,
//     "ref": "NHIDE-2026-26206",
//     "lead": "HARINI S",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "Zero Hunger",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 205,
//     "ref": "NHIDE-2026-26207",
//     "lead": "Pradeep Kumar Verma",
//     "org": "NIT-Rourkela",
//     "title": "TrackEye",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 206,
//     "ref": "NHIDE-2026-26208",
//     "lead": "Monika Sahu",
//     "org": "Guru Ghasidas University Koni, Bilaspur, Chhattisgarh",
//     "title": "MICROBALL: Living Microbial Technology for Crop Nutrition  and Protection",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 207,
//     "ref": "NHIDE-2026-26209",
//     "lead": "SHOWBIYA S M",
//     "org": "Bannari Amman Institute of Technology, Sathyamangalam, Erode",
//     "title": "AI-Powered Smart Meeting Transcript Analyzer",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 208,
//     "ref": "NHIDE-2026-26210",
//     "lead": "Dr. Sakshi Agrawal",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur",
//     "title": "Nanolizer: eco engineered nanofertilizer for enhance nutrient use efficiency and crop productivity",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 209,
//     "ref": "NHIDE-2026-26211",
//     "lead": "Bio Innovators",
//     "org": "Bannari Amman Institute Of Technology",
//     "title": "AI-Based Rheumatoid Arthritis Risk Predictor",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 210,
//     "ref": "NHIDE-2026-26212",
//     "lead": "RAMANI P K",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY,  TAMILNADU",
//     "title": "Smart Crop Health Monitoring System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 211,
//     "ref": "NHIDE-2026-26213",
//     "lead": "THILAK K",
//     "org": "Bannari amman institute of technology, sathyamangalam,erode-638401",
//     "title": "AI System for Predicting Global Technology Trends Before They Emerge",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 212,
//     "ref": "NHIDE-2026-26214",
//     "lead": "Swagatika Barik",
//     "org": "Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh",
//     "title": "Smart Baby Toy",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 213,
//     "ref": "NHIDE-2026-26215",
//     "lead": "RAMANI PK",
//     "org": "Bannari Amman Institute of Technology,SATHYAMANGALAM-638401,TAMIL NADU",
//     "title": "Smart Crop Health Monitoring System",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 214,
//     "ref": "NHIDE-2026-26216",
//     "lead": "Rajeev Sahu",
//     "org": "Sandipani group of institutions (masturi) bilaspur",
//     "title": "Self powered car",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 215,
//     "ref": "NHIDE-2026-26217",
//     "lead": "Aman Sahu",
//     "org": "Guru Ghasidas Vishvidyalya",
//     "title": "Design and Development of a Wall-Climbing Glass Cleaning Robot",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 216,
//     "ref": "NHIDE-2026-26218",
//     "lead": "SURESHKUMAR J",
//     "org": "BANNARI AMMAN INST OF TECHNOLYGY, TAMILNADU - 638401",
//     "title": "EMG-Based Physiotherapy Rehabilitation Feedback System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 217,
//     "ref": "NHIDE-2026-26219",
//     "lead": "JANUS JENIN A",
//     "org": "Bannari amman Institute of technology, sathyamangalam-638401",
//     "title": "AI-Driven Intelligent Document Processing and Insight Routing System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 218,
//     "ref": "NHIDE-2026-26220",
//     "lead": "PRANAV KARTHICK S K",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
//     "title": "AI-Powered Learning Platform for Deaf & Mute Students",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 219,
//     "ref": "NHIDE-2026-26221",
//     "lead": "Stanzin Pasang",
//     "org": "Bannari Amman Institute Of Technology",
//     "title": "SentiPulse: AI-Driven Wearable for Remote Cardiac Arrhythmia Prediction",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 220,
//     "ref": "NHIDE-2026-26222",
//     "lead": "Eram Ferheen",
//     "org": "Guru Ghasidas Vishvidyalya",
//     "title": "Mini Portable Fridge",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 221,
//     "ref": "NHIDE-2026-26223",
//     "lead": "Aditi Mishra",
//     "org": "Guru Ghasidas Vishvidyalya",
//     "title": "Swadhyay peeth - The harmony chair",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 222,
//     "ref": "NHIDE-2026-26224",
//     "lead": "Roshan Sharma",
//     "org": "Guru ghasidas Vishwavidyalaya bilaspur",
//     "title": "EcoFume:- Herbal insect repellent inscence stick",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 223,
//     "ref": "NHIDE-2026-26225",
//     "lead": "Shivani Kumari",
//     "org": "Guru Ghasidas Vishwavidalaya,Koni,Bilaspur",
//     "title": "Feel and Heal ( Mental Health awareness and issues)",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 224,
//     "ref": "NHIDE-2026-26226",
//     "lead": "DIVYAVARSHINI R",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY,SATHYAMANGALAM,ERODE.",
//     "title": "Intelligent Platform for Resource Sharing and Social Welfare",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 225,
//     "ref": "NHIDE-2026-26227",
//     "lead": "M nagrajan achary",
//     "org": "Guru ghasisadas vishwavidyalaya",
//     "title": "EIA 360",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 226,
//     "ref": "NHIDE-2026-26228",
//     "lead": "THAMARAI KABILAN T",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, SATHYAMANGALAM, ERODE, TAMIL NADU- 638401",
//     "title": "AI-Driven Adaptive Network Intrusion Detection and Threat Analysis System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 227,
//     "ref": "NHIDE-2026-26229",
//     "lead": "NAVEENAPRIYA J",
//     "org": "Bannari Amman Institute of Technology, Erode",
//     "title": "AI-Based Human Attention Prediction System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 228,
//     "ref": "NHIDE-2026-26230",
//     "lead": "Karyampudi Madhav",
//     "org": "Sagi Rama Krishnam Raju Engineering College ,Chinnamiram , Bhimavaram, West Godavari, Andhra Pradesh.",
//     "title": "AIInterviewSimulator",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 229,
//     "ref": "NHIDE-2026-26231",
//     "lead": "Sourabh Kumar",
//     "org": "Department of Btech GGU",
//     "title": "Gaj-Rakshak",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 230,
//     "ref": "NHIDE-2026-26232",
//     "lead": "CELSIA JUVANITTA J",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY,SATHYAMANGALAM,ERODE DISTRICT,TAMIL NADU PINCODE:638401",
//     "title": "Smart AI-Powered Scarecrow for Crop Protection",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 231,
//     "ref": "NHIDE-2026-26233",
//     "lead": "Piyush Ranjan",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur, Chhattisgarh",
//     "title": "Civiguard: A Centralized Public Safety & Crime Awareness Ecosystem",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 232,
//     "ref": "NHIDE-2026-26234",
//     "lead": "Hanu Pandey",
//     "org": "Mats University, Pandri Raipur 492001",
//     "title": "AI-Powered Role-Based Environmental Clearance Management  System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 233,
//     "ref": "NHIDE-2026-26235",
//     "lead": "Deepak kumar gupta",
//     "org": "Samrat ashok technological institute vidisha",
//     "title": "SIM V: A Distributed, Cost-Effective Autonomous Vehicle",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 234,
//     "ref": "NHIDE-2026-26236",
//     "lead": "VIMAL KUMAR P",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "IoT-Based Smart Agriculture System with AI-Powered Animal Detection, Smart Irrigation and Crop Recommendation",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 235,
//     "ref": "NHIDE-2026-26237",
//     "lead": "Arul Mukhilan S",
//     "org": "Bannari Amman Institute of Technology, Alathukombai, Sathyamangalam, Erode, Tamil Nadu, 638401",
//     "title": "Integrated ozonation biodegradation approach for efficient 4-chlorophenol removal",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 236,
//     "ref": "NHIDE-2026-26238",
//     "lead": "Ayush Chandel",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur",
//     "title": "KrishiSetu",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 237,
//     "ref": "NHIDE-2026-26239",
//     "lead": "Atul Kumar Gupta",
//     "org": "Bhilai Institute of Technology, Durg",
//     "title": "The Safe Data Universe",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 238,
//     "ref": "NHIDE-2026-26240",
//     "lead": "Prasidhee Mishra",
//     "org": "Government Engineering College Raipur, Sejbahar, Raipur, Chhattisgarh (492015)",
//     "title": "SafeHer: A Voice-Activated Safety Application for Women",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 239,
//     "ref": "NHIDE-2026-26241",
//     "lead": "Sumit Haldar",
//     "org": "Guru Ghasidas Vishwavidyalaya (GGV)  Koni, Bilaspur, Chhattisgarh, 495009, India.",
//     "title": "CareConnect: A Digital Platform for Social Support and Community Development",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 240,
//     "ref": "NHIDE-2026-26242",
//     "lead": "Manash Shukla",
//     "org": "Guru ghasidas Vishwavidyalaya bilaspur chhattisgarh",
//     "title": "Vayukavach - pollution mask for India's outdoor workforce",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 241,
//     "ref": "NHIDE-2026-26243",
//     "lead": "Shourya Sinha",
//     "org": "NIT raipur, GE road, Raipur, Chhattisgarh",
//     "title": "CaptionFloww: AI supported RealTime live translation and transcription for deaf and physically disabled people to provide equal opportunity to them",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 242,
//     "ref": "NHIDE-2026-26244",
//     "lead": "Moneeshkumar V",
//     "org": "Bannari Amman Institute of Technology,  Sathyamangalam - 638 401, Erode District, Tamil Nadu, India.",
//     "title": "AI-Powered Smart Crop Farming and Farmer Support System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 243,
//     "ref": "NHIDE-2026-26245",
//     "lead": "Monika Sahu",
//     "org": "GURU GHASIDAS CENTRAL UNIVERSITY BILASHPUR CG 495009",
//     "title": "Terrarium, miniature garden ( zen garden) and sustainable lifestyle innovation",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 244,
//     "ref": "NHIDE-2026-26246",
//     "lead": "E-NovaX",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "AI-Powered Smart Traffic Control System for Emergency Vehicles",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 245,
//     "ref": "NHIDE-2026-26247",
//     "lead": "AYUSH KUMAR",
//     "org": "GURU GHASIDAS VISHWAVIDYALAYA,KONI BILASPUR 495009",
//     "title": "AI-POWERED OFFLINE NAVIGATION AND EMERGENCY COMMUNICATION.",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 246,
//     "ref": "NHIDE-2026-26248",
//     "lead": "Gutha yekeswaruday",
//     "org": "SRKR ENGINEERING COLLEGE",
//     "title": "BATTERY MANAGEMENT SYSTEM (BMS)",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 247,
//     "ref": "NHIDE-2026-26249",
//     "lead": "MEGANTHAN V L",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY - Sathy - Bhavani State Highway, Alathukombai, Post, Sathyamangalam, Tamil Nadu 638401.",
//     "title": "SMART CLEAN ROOM MONITORING SYSTEM WITH AI – DRIVEN PREDICTIVE ANALYTICS.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 248,
//     "ref": "NHIDE-2026-26250",
//     "lead": "BALAMURUGAN S",
//     "org": "Bannari Amman Institute of Technology ,Alathukombai - Post, Sathyamangalam - 638 401, Erode District, Tamil Nadu, India.",
//     "title": "SHEGUARD – Smart Women Safety and Emergency Response System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 249,
//     "ref": "NHIDE-2026-26251",
//     "lead": "Lekhank Chandrakar",
//     "org": "National Institute of Technology Raipur",
//     "title": "Smart Renewable Energy Generation",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 250,
//     "ref": "NHIDE-2026-26252",
//     "lead": "Lekhank Chandrakar",
//     "org": "National Institute of Technology Raipur",
//     "title": "Smart Agriculture Technologies",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 251,
//     "ref": "NHIDE-2026-26253",
//     "lead": "Pranav T S S",
//     "org": "Bannari Amman Institute of Technology Engineering college, Alathucombai, Tamil Nadu-638401, India",
//     "title": "Academic Performance Tracking System for Teaching Assistants",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 252,
//     "ref": "NHIDE-2026-26254",
//     "lead": "Khyati Mahale",
//     "org": "Samrat Ashok Technological Institute (SATI), Civil Lines, Vidisha, Madhya Pradesh - 464001, India",
//     "title": "HealthSphere AI – An AI-Powered Predictive and Preventive Healthcare Platform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 253,
//     "ref": "NHIDE-2026-26255",
//     "lead": "Biswajit Mallik",
//     "org": "Veer Surender Sai University of Technology, Sidhi Vihar, Burla, Sambalpur",
//     "title": "ONI-SHIELD",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 254,
//     "ref": "NHIDE-2026-26256",
//     "lead": "Rudra chandrakar",
//     "org": "Guru ghasidas university bilaspur chhattisgarh",
//     "title": "ECOSNAP",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 255,
//     "ref": "NHIDE-2026-26257",
//     "lead": "Priyanka Priyadarsini Dishri",
//     "org": "GGV, Bilaspur",
//     "title": "Scrunchies",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 256,
//     "ref": "NHIDE-2026-26258",
//     "lead": "KOPPADI PURNASAI",
//     "org": "SAGI RAMAKRISHNAM RAJU ENGINEERING COLLEGE, Chinnamiram , Bhimavaram, 534204, Andhra Pradesh.",
//     "title": "An IoT-Based Intelligent Energy Optimization System for Smart Buildings",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 257,
//     "ref": "NHIDE-2026-26259",
//     "lead": "Himanshu Vaishnav",
//     "org": "GHASIDAS VISHWAVIDYALAYA (A Central University), BILASPUR, (C.G.)",
//     "title": "PURE VENT",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 258,
//     "ref": "NHIDE-2026-26260",
//     "lead": "Yogesh Palke",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "Suraksha Sathi",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 259,
//     "ref": "NHIDE-2026-26261",
//     "lead": "Harsh Agarwal",
//     "org": "Guru Ghasidas Vishwavidyalaya",
//     "title": "QuMail",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 260,
//     "ref": "NHIDE-2026-26262",
//     "lead": "Rajlakshmi Singh",
//     "org": "GGV, Koni, Bilaspur - 495009, Chhattisgarh, India",
//     "title": "“AI Optimized Regenerative Stem Cell Therapy for Lifestyle Disorders: Clinical Intervention, Risk control and Pharmacovigilance",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 261,
//     "ref": "NHIDE-2026-26263",
//     "lead": "Laxmi Priya Badaik",
//     "org": "Guru Ghasidas Vishwavidyalaya Koni Bilaspur C.G 495001",
//     "title": "MUSHGLOW: A Bioactive Herbal Formulation for Gentle  Cleansing and Skin Glow",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 262,
//     "ref": "NHIDE-2026-26264",
//     "lead": "Raja kumar",
//     "org": "Guru ghasidas vishwavidyalay",
//     "title": "Gaming plateform",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 263,
//     "ref": "NHIDE-2026-26265",
//     "lead": "Om Kumar Das",
//     "org": "Guru Ghasidas Vishwavidyalaya Bilaspur (A Central University) Chhattisgarh India 495009",
//     "title": "BioE3-aligned sustainable plant biotechnology platform for conservation, commercial micropropagation, and quality enhancement of medicinal and commercial crops",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 264,
//     "ref": "NHIDE-2026-26266",
//     "lead": "AKASH S",
//     "org": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY,ALUTHUKOMBAI, SATHYAMANGALAM,ERODE",
//     "title": "Community Issue Reporting & Tracking System",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 265,
//     "ref": "NHIDE-2026-26267",
//     "lead": "Ruchira Chakraborty",
//     "org": "National Institute of Technology, Sector 1, Rourkela, Odisha 769008, India.",
//     "title": "BioMEMS-based Ophthalmic Simulator for Topical Drug Permeability Studies: An Alternative to Animal Models",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 266,
//     "ref": "NHIDE-2026-26268",
//     "lead": "Dhaathri H S",
//     "org": "Navkis College of Engineering, KIADB, Thimmanahally Industrial Area, Kandali, NH 75, Hassan, Karnataka 573217",
//     "title": "DharthiSethu - An AI-Powered Offline Multilingual Farming Assistant App",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 267,
//     "ref": "NHIDE-2026-26269",
//     "lead": "Sucheta Maurya",
//     "org": "Government Engineering College, Koni, Bilaspur",
//     "title": "RakshakAI ( AI-Powered Road Safety and Emergency Response System)",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 268,
//     "ref": "NHIDE-2026-26270",
//     "lead": "Laxmi Prasad",
//     "org": "Guru Ghasidas Vishwavidyalaya Koni, Bilaspur C.G.",
//     "title": "Krishi-Easy: AI-Powered Crop Disease Detection & Smart Farming Assistant",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 269,
//     "ref": "NHIDE-2026-26271",
//     "lead": "MEGHA MAHTO",
//     "org": "GURU GHASIDAS VISHWAVIDALYA",
//     "title": "MENSTRUAL NAPKINS CRAFTED BY BANANA STEM FIBER",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 270,
//     "ref": "NHIDE-2026-26272",
//     "lead": "Kailash Das",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni Bilaspur C.G",
//     "title": "Development of a Low cost Multi Stage Mini Air Purifier",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 271,
//     "ref": "NHIDE-2026-26273",
//     "lead": "Lalit Mohan Naik",
//     "org": "National Institute of Technology Rourkela, Odisha, India, 769008",
//     "title": "Semi-Automatic Robotic arm for Farm Application",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 272,
//     "ref": "NHIDE-2026-26274",
//     "lead": "Lokesh Dewangan",
//     "org": "Triton Sportsline LLP, /Shop no. 5 Prem Apartment, Mungeli naka, Bilaspur Chhattisgarh",
//     "title": "Building a School Sports Excellence-Led Learning Hub Ecosystem",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 273,
//     "ref": "NHIDE-2026-26275",
//     "lead": "Avinash Mishra",
//     "org": "Guru Ghasidas Vishwavidyalaya,  koni Bilaspur (C.G)",
//     "title": "Design and Development of a Single-Pass Flat Plate Solar Air Heater Integrated with a  Solar Dryer and Thermal Energy Storage Unit.",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 274,
//     "ref": "NHIDE-2026-26276",
//     "lead": "Avinash Mishra",
//     "org": "Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur (C.G)",
//     "title": "Design and Performance Analysis of a Compact Spiral Shaped Solar Water Heater",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 275,
//     "ref": "NHIDE-2026-26277",
//     "lead": "Astha",
//     "org": "Guru ghasidas vishwavidyalaya,  bilaspur Chattisgarh",
//     "title": "Press Stick Slay",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 276,
//     "ref": "NHIDE-2026-26278",
//     "lead": "Himanshu Rathore",
//     "org": "Shri Shankaracharya Technical Campus Bhilai.",
//     "title": "AI-Powered Satellite Surveillance & Automated Compliance System For Industrial Plots.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 277,
//     "ref": "NHIDE-2026-26279",
//     "lead": "ATUL KUMAR GUPTA",
//     "org": "Bhilai Institute of Technology, Durg , CG.",
//     "title": "SynVerse – The Safe Data Universe.",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 278,
//     "ref": "NHIDE-2026-26280",
//     "lead": "Nikhil Kaser",
//     "org": "ShikshaShila Institution, Ward No. 67, Choti Koni, Bilaspur (C.G.)",
//     "title": "ShikshaShila NextGen Learning Solutions",
//     "stage": "MVP / Startup Stage"
//   },
//   {
//     "sno": 279,
//     "ref": "NHIDE-2026-26281",
//     "lead": "Bharat Kumar",
//     "org": "Guru Ghasidas Vishvidyalaya",
//     "title": "Prakasat",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 280,
//     "ref": "NHIDE-2026-26282",
//     "lead": "Lekhank Chandrakar",
//     "org": "NIT Raipur",
//     "title": "EcoCredits",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 281,
//     "ref": "NHIDE-2026-26283",
//     "lead": "Samir Tiwari",
//     "org": "National Institute of Technology Raipur, Raipur",
//     "title": "Village Bins to Circular Wins AI‑Enabled Route Optimization and Rural Plastic Collection",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 282,
//     "ref": "NHIDE-2026-26284",
//     "lead": "Arunitha Vanitha Arunkumar",
//     "org": "Bannari Amman Institute of Technology",
//     "title": "Amla based vegan probiotic drink for gut health and sustainable nutrition",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 283,
//     "ref": "NHIDE-2026-26285",
//     "lead": "Piyush Ranjan",
//     "org": "Guru Ghasidas vishwavidyalaya, Koni, Bilaspur",
//     "title": "BabyPod: Safe Short-Duration Childcare Pods for Family-Friendly Public Spaces",
//     "stage": "Concept Stage"
//   },
//   {
//     "sno": 284,
//     "ref": "NHIDE-2026-26286",
//     "lead": "Swikriti Pradhan",
//     "org": "Trivenu , Guru Ghasidas Vishwavidyalaya Koni , koni , Bilaspur (CG)",
//     "title": "Trivenu",
//     "stage": "Prototype Stage"
//   },
//   {
//     "sno": 285,
//     "ref": "NHIDE-2026-26287",
//     "lead": "Dr. Jyoti Pillay (Samseriya)",
//     "org": "Herbal Adda- JYVIKA Ventures Pvt Ltd",
//     "title": "Herbal Adda –Herbal Concoctions for Lifestyle Disease Prevention and Wellness",
//     "stage": "MVP / Startup Stage"
//   }
// ];

// const Shortlisted: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredTeams = MOCK_SHORTLIST.filter(team => 
//     team.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     team.lead.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     team.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="animate-fade-in pt-12 pb-24">
      
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">
//           <Trophy size={16} /> Results Announced
//         </div>
//         <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
//           Shortlisted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Teams</span>
//         </h1>
//         <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//           Congratulations to the teams selected for the final pitching round of NHIDE-2026! Please follow the mandatory next steps below to secure your slot.
//         </p>
//       </section>

//       {/* Mandatory Next Steps (From your email) */}
//       <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-20">
//         <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-lg">
//           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
//             <AlertCircle className="text-amber-500" /> Mandatory Next Steps
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="space-y-6 text-slate-600 dark:text-slate-300">
//               <p>
//                 <strong>1. Final Registration:</strong> You must complete the final registration process to formally confirm your participation on or before <strong className="text-red-500">10 March 2026</strong>.
//               </p>
//               <a 
//                 href="https://forms.gle/bNYvgMACNnc44eVW8" 
//                 target="_blank" 
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-1"
//               >
//                 Complete Final Registration <ExternalLink size={18} />
//               </a>
//               <p className="text-sm">
//                 <em>*Please ensure your Reference Number is mentioned exactly as shown in the list.</em>
//               </p>
//             </div>

//             <div className="space-y-6 text-slate-600 dark:text-slate-300">
//               <p>
//                 <strong>2. Join the Community:</strong> For further communication, live updates, and official announcements, joining the WhatsApp group is mandatory for all Team Leads.
//               </p>
//               <a 
//                 href="https://chat.whatsapp.com/Je8M7XAoGflJPj3FnPAiZH" 
//                 target="_blank" 
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-1"
//               >
//                 Join WhatsApp Group <MessageCircle size={18} />
//               </a>
//               <p className="text-sm">
//                 <strong>Pitching Format:</strong> Max 10 minutes (7 min pitch + 3 min Q&A). Exceeding limits may affect scoring.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* The Results Table */}
//       <section className="container mx-auto px-4 md:px-6 max-w-6xl">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Official Shortlist</h2>
          
//           <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
//             {/* Search Bar */}
//             <div className="relative w-full sm:w-64">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//               <input 
//                 type="text" 
//                 placeholder="Search by Name, Ref No..." 
//                 className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
            
//             {/* PDF Download Button */}
//             <a 
//               href="/NHIDE_2026_Shortlisted_Teams.pdf" 
//               download
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
//             >
//               <Download size={18} /> Download PDF
//             </a>
//           </div>
//         </div>

//         {/* Data Table */}
// <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
//   {/* Give this div a constrained height + vertical scroll */}
//   <div className="max-h-[60vh] overflow-y-auto scrollbar-thin">   {/* ← key changes here */}
//     <div className="overflow-x-auto">               {/* keeps horizontal scroll */}
//       <table className="w-full text-left border-collapse">
//         <thead className="sticky top-0 z-10 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
//           <tr>
//             <th className="p-4 font-semibold">S.No</th>
//             <th className="p-4 font-semibold">Ref. No</th>
//             <th className="p-4 font-semibold">Team Lead</th>
//             <th className="p-4 font-semibold">Institution</th>
//             <th className="p-4 font-semibold">Idea Title</th>
//             <th className="p-4 font-semibold">Stage</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-slate-700 dark:text-slate-300 divide-y divide-slate-100 dark:divide-slate-800/50">
//           {filteredTeams.length > 0 ? (
//             filteredTeams.map((team, index) => (
//               <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
//                 <td className="p-4">{team.sno}</td>
//                 <td className="p-4 font-bold text-blue-600 dark:text-blue-400">{team.ref}</td>
//                 <td className="p-4 font-medium text-slate-900 dark:text-white">{team.lead}</td>
//                 <td className="p-4">{team.org}</td>
//                 <td className="p-4">{team.title}</td>
//                 <td className="p-4">
//                   <span className="py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">
//                     {team.stage}
//                   </span>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6} className="p-8 text-center text-slate-500">
//                 No teams found matching "{searchTerm}"
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>
//       </section>

//     </div>
//   );
// };

// export default Shortlisted;



import React from 'react';
import { Trophy, Download, AlertCircle, MapPin, Phone, Building, Home as HomeIcon, FileText, CheckCircle, Info } from 'lucide-react';

// Extracted from your provided image
const BUDGET_HOTELS = [
  { name: "Hotel Pearl Inn", distance: "1 KM", contact: "8878232885", price: "Rs. 700-1500", location: "Koni, Bilaspur" },
  { name: "HK Hotel", distance: "1 KM", contact: "9713966937", price: "Rs. 700-1200", location: "Koni, Bilaspur" },
  { name: "Hotel Abhinn", distance: "800m", contact: "8982389147", price: "Rs. 700-1500", location: "Koni, Bilaspur" },
  { name: "Hotel Green Star", distance: "1 KM", contact: "9131359226", price: "Rs. 700-1500", location: "Koni, Bilaspur" },
  { name: "Jeet Continental", distance: "7 KM", contact: "9109136673", price: "Rs. 2000-4000", location: "Rabindranath Tagore Chowk, Bilaspur" },
];

const Shortlisted: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-24">
      
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">
          <CheckCircle size={16} /> Final Phase
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          Participant <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Logistics</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Final registrations are complete! Please check the final participating teams and review your accommodation details for your arrival at GGV.
        </p>
      </section>

      {/* --- FINAL TEAMS LIST DOWNLOAD --- */}
      <section className="container mx-auto px-4 md:px-6 max-w-4xl mb-20">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Trophy size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Final Registered Teams</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Official list of teams cleared for the Grand Finale.</p>
            </div>
          </div>
          <a 
            href="/NHIDE_2026_Final_Teams.pdf" 
            download
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-1 shrink-0"
          >
            <Download size={18} /> Download List
          </a>
        </div>
      </section>

      {/* --- CAMPUS ACCOMMODATION --- */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Campus Accommodation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Guest House Info */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-800/50 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <HomeIcon size={120} className="text-emerald-500" />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Official Stay
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">University Guest Houses</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We have successfully allotted campus accommodation for 60 participants across our two premium guest houses:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-800/60 p-3 rounded-xl">
                  <Building className="text-emerald-500" size={20} />
                  Samrat Samudragupta International Guest House
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-800/60 p-3 rounded-xl">
                  <Building className="text-emerald-500" size={20} />
                  Jawahar Sadan Guest House
                </li>
              </ul>
              
              <a 
                href="/NHIDE_Accommodation_Allotment.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all hover:scale-105"
              >
                <Download size={18} /> View Allotment List
              </a>
            </div>
          </div>

          {/* Mandatory Documents */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="text-amber-500" /> Mandatory for Check-in
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Allotted participants <strong>MUST</strong> bring physical copies of the following documents to secure their room keys:
            </p>
            
            <div className="space-y-4">
              {[
                { name: "Aadhaar Card", desc: "Original government-issued ID" },
                { name: "Bonafide Certificate", desc: "Signed by your institution's authority" },
                { name: "College ID Card", desc: "Valid physical student identification" }
              ].map((doc, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{doc.name}</h4>
                    <p className="text-sm text-slate-500">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- NEARBY HOTELS --- */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4">
               <Info size={14} /> Alternate Stays
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Nearby Budget Hotels</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              For teams that we were unable to accommodate on campus, we have verified a list of affordable and safe hotels near the university gate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUDGET_HOTELS.map((hotel, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">{hotel.name}</h3>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">
                    {hotel.price}
                  </span>
                </div>
                
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-slate-500 shrink-0 mt-0.5" />
                    <span>{hotel.location} <br/><span className="text-blue-400 font-medium">{hotel.distance} from GGV</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-slate-500 shrink-0" />
                    <a href={`tel:${hotel.contact}`} className="hover:text-white transition-colors">{hotel.contact}</a>
                  </div>
                </div>
                
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + ' ' + hotel.location)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  <MapPin size={14} /> View on Map
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOGISTICS SUPPORT --- */}
      <section className="container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
           <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center shrink-0">
             <Phone size={32} className="text-blue-600 dark:text-blue-400" />
           </div>
           <div className="text-center md:text-left">
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Accommodation Queries?</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
               If you are facing issues reaching your hotel or finding the campus guest house, call our logistics coordinators:
             </p>
             <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <a href="tel:918608350" className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-all">
                 Nikhil: 9118608350
               </a>
               <a href="tel:8617762316" className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-all">
                 Md Noman: 8617762316
               </a>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Shortlisted;