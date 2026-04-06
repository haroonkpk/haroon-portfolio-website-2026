export interface Project {
  slug: string;
  label: string;
  title: string;
  origin: "Freelance" | "Personal" | "Agency";

  images: string[];

  detail: {
    client: string;
    liveUrl?: string;
    githubUrl?: string;
    deliverables: string[];
    heading: string;
    body: string[];
  };
}

export const PROJECTS: Project[] = [
  // smartprep 
  {
    slug: "smartprep",
    label: "AI / EdTech",
    title: "AI-powered exam preparation platform for VU students",
    origin: "Personal",

    images: [
      "/images/projects/smartPrep/Analyzer.png",
      "/images/projects/smartPrep/Predictor.png",
      "/images/projects/smartPrep/Assistant.png",
      "/images/projects/smartPrep/Resources.png",
      "/images/projects/smartPrep/Connect.png",
    ],
    detail: {
      client: "Virtual University Students",
      deliverables: ["Development", "UI", "UX", "AI Integration", "Backend"],
      heading: "Smarter studying for VU",
      liveUrl:"https://smart-prep-vu.vercel.app",
      githubUrl:"https://github.com/haroonkpk/SmartPrep",
      body: [
        "Built an AI-powered exam preparation platform for Virtual University students covering 30+ subjects, featuring an Exam Topic Predictor, Past Paper Analyzer, and PDF Study Assistant.",
        "Leveraged LangChain, Google Gemini, and Groq to deliver fast, intelligent responses, with Supabase (PostgreSQL) for scalable data storage and Next.js 16 for a blazing-fast frontend.",
      ],
    },
  },

  // hashimDawakhana
  {
    slug: "hashim-dawakhana",
    label: "Blogging / CMS",
    title: "Dynamic blogging system for a local herbal store",
    origin: "Freelance",

    images: [
      "/images/projects/hashimDawakhana/hashimDawakhanaBlogsList.png",
      "/images/projects/hashimDawakhana/hashimDawakhanaHero.png",
      "/images/projects/hashimDawakhana/hashimDawakhanaAdminBlogs.png",
      "/images/projects/hashimDawakhana/hashimDawakhanaBlogDetails.png",
      "/images/projects/hashimDawakhana/hashimDawakhanaAdmin.png",
    ],
    detail: {
      client: "Hakeem Amir Hashmi",
      deliverables: ["Frontend", "Backend", "CMS", "Content Management"],
      heading: "A blog as natural as the remedies",
      liveUrl:"https://hashim-dawakhana.vercel.app/",
      githubUrl:"https://github.com/haroonkpk/hashim-dawakhana",
      body: [
        "Designed and developed a clean, dynamic blogging platform for Hashim Dawakhana — a local herbal store — complete with a smart admin panel for managing articles, categories, and reorderable content blocks.",
        "Used SWR for real-time data fetching, Cloudinary for media management, and MongoDB for flexible content storage, all wrapped in a polished Next.js and TypeScript setup.",
      ],
    },
  },
  // agoshCare
  {
    slug: "agosh-care",
    label: "NGO / Management System",
    title: "Multi-tier donation and branch management system for an NGO",
    origin: "Agency",

    images: [
      "/images/projects/agosh/agosh1.png",
      "/images/projects/agosh/agosh2.png",
      "/images/projects/agosh/agosh3.png",
      "/images/projects/agosh/agosh4.png",
      "/images/projects/agosh/agosh5.png",
      "/images/projects/agosh/agosh6.png",
      "/images/projects/agosh/agosh7.png",
    ],
    detail: {
      client: "Agosh Care Center",
      deliverables: [
        "Full Stack Development",
        "Role-Based Access Control",
        "Donation Tracking",
        "Admin Dashboard",
      ],
      githubUrl:"https://github.com/haroonkpk/AGOSH_MANAGEMENT_SYSTEM",
      heading: "Streamlining global care and transparent donations",
      body: [
        "Developed a comprehensive management system for Agosh Care Center to bridge the gap between donors and beneficiaries. The platform is built on a robust role-based architecture supporting three distinct user types: Head Admins, Branch Admins, and Donors.",
        "Head Admins can oversee the global network, creating new branches and assigning branch managers. Branch Admins have localized control to manage student profiles and track branch-specific funds. For Donors, the platform provides a seamless and transparent contribution process, allowing them to choose whether to sponsor a specific needy student directly or contribute to a branch's general fund.",
      ],
    },
  },

  // alsabrPetro
  {
    slug: "alsabr-petro",
    label: "Corporate / Consulting",
    title:
      "Corporate website for a Saudi Arabian oil & gas drilling consultancy",
    origin: "Agency",

    images: [
      "/images/projects/alsaberPetro/alsaberPetro1.png",
      "/images/projects/alsaberPetro/alsaberPetro8.png",
      "/images/projects/alsaberPetro/alsaberPetro3.png",
      "/images/projects/alsaberPetro/alsaberPetro7.png",
      "/images/projects/alsaberPetro/alsaberPetro4.png",
      "/images/projects/alsaberPetro/alsaberPetro2.png",
      "/images/projects/alsaberPetro/alsaberPetro5.png",
      "/images/projects/alsaberPetro/alsaberPetro9.png",
      "/images/projects/alsaberPetro/alsaberPetro6.png",
      "/images/projects/alsaberPetro/alsaberPetro10.png",
    ],
    detail: {
      client: "ALSABR-PETRO (Saudi Arabia)",
      deliverables: [
        "Frontend Development",
        "UI/UX Implementation",
        "Responsive Design",
      ],
      liveUrl:"https://www.alsabr-consulting.com/en",
      githubUrl:"https://github.com/haroonkpk/alsabr-petro",
      heading: "Empowering the global energy future",
      body: [
        "Developed a professional corporate website for ALSABR-PETRO, a specialized oil and gas drilling engineering consulting firm based in Jeddah, Saudi Arabia. The platform showcases their expertise in well planning, performance optimization, and manpower supply.",
        "Built during my tenure as an Associate Full Stack Web Developer at Apptek1. Focused on delivering a clean, modern, and highly responsive user interface that effectively highlights the company's 40+ years of industry experience and international standards.",
      ],
    },
  },


  // scholarshipManagement
  {
    slug: "scholarship-management",
    label: "Education / Portal",
    title: "Multi-role scholarship management and evaluation system",
    origin: "Agency",

    images: [
      "/images/projects/scholarship/scholarship1.png",
      "/images/projects/scholarship/scholarship2.png",
      "/images/projects/scholarship/scholarship3.png",
      "/images/projects/scholarship/scholarship4.png",
      "/images/projects/scholarship/scholarship5.png",
      "/images/projects/scholarship/scholarship6.png",
      "/images/projects/scholarship/scholarship7.png",
      "/images/projects/scholarship/scholarship11.png",
      "/images/projects/scholarship/scholarship12.png",
      "/images/projects/scholarship/scholarship8.png",
      "/images/projects/scholarship/scholarship9.png",
      "/images/projects/scholarship/scholarship10.png",
    ],
    detail: {
      client: "University Student (FYP)",
      deliverables: [
        "Full Stack Development",
        "Role-Based Access Control",
        "Application Workflow",
        "Evaluation System",
      ],
      githubUrl:"https://github.com/haroonkpk/Scholarship-website",
      heading: "Simplifying scholarship distribution and evaluation",
      body: [
        "Developed a comprehensive Scholarship Management System as a freelance project for a university student's Final Year Project (FYP). The platform digitizes and streamlines the entire scholarship lifecycle through a robust three-tier architecture.",
        "The system features distinct panels for Students, Admins, and Committee members. Students can easily browse available scholarships and submit applications. Admins oversee the platform, assign applications to committee members, and make final approval or rejection decisions based on the evaluation scores provided by the committee's thorough review process.",
      ],
    },
  },
];
