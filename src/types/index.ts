export interface Project {
  slug: string;
  title: string;
  label: string;
  description: string;
  tech: string[];
  images: string[];
  detail: {
    client: string;
    deliverables: string[];
    heading: string;
    body: string[];
    screenshots: string[];
  };
}