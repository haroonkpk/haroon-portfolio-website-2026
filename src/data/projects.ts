export interface Project {
  slug: string;
  label: string;
  title: string;
  images: [string, string, string];
  detail: {
    client: string;
    deliverables: string[];
    heading: string;
    body: string[];
    screenshots: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "ecommerce-platform",
    label: "E-Commerce",
    title: "Full stack ecommerce platform with real-time inventory",
    images: [
      "/images/projects/11.png",
      "/images/projects/12.png",
      "/images/projects/13.png",
    ],
    detail: {
      client: "RetailCo",
      deliverables: ["Development", "UI", "UX", "Backend"],
      heading: "A modern shopping experience",
      body: [
        "Built a full stack ecommerce platform with real-time inventory management, payment integration, and admin dashboard.",
        "The platform supports thousands of concurrent users with optimized database queries and caching strategies.",
      ],
      screenshots: [
        "/images/projects/14.png",
        "/images/projects/15.png",
      ],
    },
  },
  {
    slug: "saas-dashboard",
    label: "SaaS",
    title: "Analytics dashboard for enterprise data visualization",
    images: [
      "/images/projects/14.png",
      "/images/projects/15.png",
      "/images/projects/16.png",
    ],
    detail: {
      client: "DataViz Inc",
      deliverables: ["Frontend", "API Integration", "Charts"],
      heading: "Data made beautiful",
      body: [
        "Designed and developed an enterprise analytics dashboard with real-time data updates and interactive charts.",
        "Custom chart components built from scratch for maximum performance and flexibility.",
      ],
      screenshots: [
        "/images/projects/11.png",
        "/images/projects/12.png",
      ],
    },
  },
  {
    slug: "mobile-app",
    label: "Mobile",
    title: "Cross-platform mobile app for food delivery service",
    images: [
      "/images/projects/13.png",
      "/images/projects/dumy.jpeg",
      "/images/projects/16.png",
    ],
    detail: {
      client: "FoodRush",
      deliverables: ["React Native", "Node.js", "Maps API"],
      heading: "Food at your fingertips",
      body: [
        "Built a cross-platform food delivery app with real-time order tracking, payment processing, and push notifications.",
        "Integrated Google Maps for live delivery tracking with sub-second location updates.",
      ],
      screenshots: [
        "/images/projects/13.png",
        "/images/projects/15.png",
      ],
    },
  },
  {
    slug: "cms-platform",
    label: "CMS",
    title: "Headless CMS with multi-language support",
    images: [
      "/images/projects/12.png",
      "/images/projects/dumy.jpeg",
      "/images/projects/11.png",
    ],
    detail: {
      client: "MediaGroup",
      deliverables: ["Next.js", "Sanity", "i18n"],
      heading: "Content without limits",
      body: [
        "Built a headless CMS solution supporting 5 languages with a custom translation workflow for content editors.",
        "The platform serves 50k+ monthly visitors with 99.9% uptime using edge caching.",
      ],
      screenshots: [
        "/images/projects/16.png",
        "/images/projects/dumy.jpeg",
      ],
    },
  },
];