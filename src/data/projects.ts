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
  {
    slug: "restaurant-management-system",
    label: "Restaurant / Operations",
    title: "Restaurant Management System",
    origin: "Freelance",

    images: [
      "/images/projects/restaurant_management_system/1.png",
      "/images/projects/restaurant_management_system/22.png",
        "/images/projects/restaurant_management_system/14.png",
      "/images/projects/restaurant_management_system/3.png",
      "/images/projects/restaurant_management_system/4.png",
      "/images/projects/restaurant_management_system/5.png",
      "/images/projects/restaurant_management_system/6.png",
      "/images/projects/restaurant_management_system/7.png",
      "/images/projects/restaurant_management_system/8.png",
      "/images/projects/restaurant_management_system/9.png",
      "/images/projects/restaurant_management_system/10.png",
      "/images/projects/restaurant_management_system/11.png",
      "/images/projects/restaurant_management_system/12.png",
      "/images/projects/restaurant_management_system/13.png",
      "/images/projects/restaurant_management_system/14.png",
      "/images/projects/restaurant_management_system/15.png",
      "/images/projects/restaurant_management_system/16.png",
      "/images/projects/restaurant_management_system/17.png",
      "/images/projects/restaurant_management_system/18.png",
      "/images/projects/restaurant_management_system/19.png",
      "/images/projects/restaurant_management_system/20.png",
      "/images/projects/restaurant_management_system/21.png",
    ],
    detail: {
      client: "Freelance Project",
      deliverables: [
        "Point of Sale",
        "Kitchen Order Tracking",
        "Inventory Management",
        "Customer Accounts",
        "Employee & Payroll Management",
        "Business Reporting",
      ],
      githubUrl:
        "https://github.com/haroonkpk/restaurant_management_system",
      heading: "One system for the restaurant's daily operations",
      body: [
        "Built as a freelance project, this full-stack platform brings front-of-house and back-of-house workflows together in one place. Restaurant teams can manage sales, kitchen progress, stock, customer accounts, staff, and finances from a shared operations system.",
        "The point-of-sale workflow supports order creation, billing, payments, and printable receipts, while a live kitchen view helps staff follow orders through preparation. Menu and inventory tools track pricing, stock movements, and low-stock items; customer ledgers keep payments and outstanding balances easy to follow.",
        "Owner, Admin, Cashier, and Chef roles receive access suited to their responsibilities. The system also brings together attendance, payroll and salary advances, expense tracking, and business reports. It is built with Next.js, Prisma, and PostgreSQL, with Supabase powering realtime updates.",
      ],
    },
  },

  // luckyFactoDistribution
  {
    slug: "lucky-facto-distribution",
    label: "Distribution / Inventory",
    title: "Cement distribution & inventory management system for a local distributor",
    origin: "Agency",

    images: [
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution1.png",
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution.png",
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution2.png",
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution3.png",
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution4.png",
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution5.png",
      "/images/projects/lucky-facto-distribution/lucky-facto-distribution7.png",
      "/images/projects/lucky-facto-distribution/Screenshot From 2026-05-08 07-03-05.png",
    ],
    detail: {
      client: "Local Cement Distributor",
      deliverables: [
        "Full Stack Development",
        "Role-Based Access Control",
        "Inventory Management",
        "Payment Tracking",
        "Distribution Workflow",
      ],
      githubUrl: "https://github.com/haroonkpk/lucky_facto",
      liveUrl: "https://lucky-facto-distribution.vercel.app",
      heading: "Streamlining cement distribution from factory to shop",
      body: [
        "Developed a comprehensive distribution management system for a local cement distributor handling Lucky and Facto cement brands. The platform tracks the full lifecycle — from factory intake to shop-level distribution — with real-time inventory, payment tracking, and performance analytics across multiple regions.",
        "The system features two distinct roles: an Owner dashboard with full visibility over salesmen, shops, ledgers, receipts, and performance metrics including sales vs. payments trends and regional breakdowns; and a Salesman dashboard for managing daily operations like stock intake, shop distribution entries, payment collection, and monitoring pending tasks.",
        "To test the live application with the testing database, you can use the following credentials:",
        "Owner Role: Email: owner@gmail.com | Password: 123456",
        "Salesman Role: Email: saleman@gmail.com | Password: 123456",
      ],
    }, 
  },

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
