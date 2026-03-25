export interface Project {
  slug: string;
  label: string;
  title: string;
  origin: "Freelance" | "Personal" | "Agency";

  images: [string, string, string];
  detail: {
    client: string;
    liveUrl?: string;
    githubUrl?: string;
    deliverables: string[];
    heading: string;
    body: string[];
    screenshots: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "smartprep",
    label: "AI / EdTech",
    title: "AI-powered exam preparation platform for VU students",
    origin: "Freelance",

    images: [
      "/images/projects/smartPrep/Analyzer.png",
      "/images/projects/smartPrep/Predictor.png",
      "/images/projects/smartPrep/Assistant.png",
    ],
    detail: {
      client: "Virtual University Students",
      deliverables: ["Development", "UI", "UX", "AI Integration", "Backend"],
      heading: "Smarter studying for VU",
      body: [
        "Built an AI-powered exam preparation platform for Virtual University students covering 30+ subjects, featuring an Exam Topic Predictor, Past Paper Analyzer, and PDF Study Assistant.",
        "Leveraged LangChain, Google Gemini, and Groq to deliver fast, intelligent responses, with Supabase (PostgreSQL) for scalable data storage and Next.js 16 for a blazing-fast frontend.",
      ],
      screenshots: ["/images/projects/smartPrep/Resources.png", "/images/projects/smartPrep/Connect.png"],
    },
  },
  {
    slug: "hashim-dawakhana",
    label: "Blogging / CMS",
    title: "Dynamic blogging system for a local herbal store",
    origin: "Freelance",

    images: [
      "/images/projects/14.png",
      "/images/projects/15.png",
      "/images/projects/16.png",
    ],
    detail: {
      client: "Hakeem Amir Hashmi",
      deliverables: ["Frontend", "Backend", "CMS", "Content Management"],
      heading: "A blog as natural as the remedies",
      body: [
        "Designed and developed a clean, dynamic blogging platform for Hashim Dawakhana — a local herbal store — complete with a smart admin panel for managing articles, categories, and reorderable content blocks.",
        "Used SWR for real-time data fetching, Cloudinary for media management, and MongoDB for flexible content storage, all wrapped in a polished Next.js and TypeScript setup.",
      ],
      screenshots: ["/images/projects/11.png", "/images/projects/12.png"],
    },
  },
  {
    slug: "business-nexus",
    label: "Networking",
    title: "Real-time networking app for entrepreneurs and investors",
    origin: "Personal",

    images: [
      "/images/projects/13.png",
      "/images/projects/dumy.jpeg",
      "/images/projects/16.png",
    ],
    detail: {
      client: "Practice Project",
      deliverables: ["Full Stack", "Real-time Chat", "UI", "Backend"],
      heading: "Where deals begin",
      body: [
        "Built a modern networking application that helps entrepreneurs and investors connect, chat, and collaborate in real time using Socket.io for live messaging.",
        "Implemented Zustand for lightweight state management and a robust Node.js/Express/MongoDB backend to handle user profiles, connection requests, and chat rooms.",
      ],
      screenshots: ["/images/projects/13.png", "/images/projects/15.png"],
    },
  },
  {
    slug: "ecommerce-marketplace",
    label: "E-Commerce",
    title: "Full-featured e-commerce marketplace with admin dashboard",
    origin: "Personal",

    images: [
      "/images/projects/12.png",
      "/images/projects/dumy.jpeg",
      "/images/projects/11.png",
    ],
    detail: {
      client: "Practice Project",
      deliverables: ["Development", "UI", "UX", "Backend", "Auth"],
      heading: "Shop. Sell. Scale.",
      body: [
        "Developed a full-featured e-commerce marketplace with product listings, user authentication, a complete cart system, and an admin dashboard for managing inventory and orders.",
        "Built with React, Zustand, and Node.js/Express on the backend, using Cloudinary for product image hosting and MongoDB for all data storage.",
      ],
      screenshots: ["/images/projects/16.png", "/images/projects/dumy.jpeg"],
    },
  },
];