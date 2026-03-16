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
      "/images/projects/dumy.jpeg",
      "/images/projects/dumy.jpeg",
      "/images/projects/dumy.jpeg",
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
        "/images/projects/ecommerce/screen1.jpg",
        "/images/projects/ecommerce/screen2.jpg",
      ],
    },
  },
  {
    slug: "saas-dashboard",
    label: "SaaS",
    title: "Analytics dashboard for enterprise data visualization",
    images: [
      "/images/projects/dumy2.jpg",
      "/images/projects/dumy2.jpg",
      "/images/projects/dumy2.jpg",
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
        "/images/projects/saas/screen1.jpg",
        "/images/projects/saas/screen2.jpg",
      ],
    },
  },
  {
    slug: "mobile-app",
    label: "Mobile",
    title: "Cross-platform mobile app for food delivery service",
    images: [
      "/images/projects/mobile/1.jpg",
      "/images/projects/mobile/2.jpg",
      "/images/projects/mobile/3.jpg",
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
        "/images/projects/mobile/screen1.jpg",
        "/images/projects/mobile/screen2.jpg",
      ],
    },
  },
  {
    slug: "cms-platform",
    label: "CMS",
    title: "Headless CMS with multi-language support",
    images: [
      "/images/projects/cms/1.jpg",
      "/images/projects/cms/2.jpg",
      "/images/projects/cms/3.jpg",
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
        "/images/projects/cms/screen1.jpg",
        "/images/projects/cms/screen2.jpg",
      ],
    },
  },
];