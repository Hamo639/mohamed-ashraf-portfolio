export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Teacher Pro",
    category: "Teacher Management SaaS",
    description:
      "Manage students, groups, attendance, payments, class fees, installments and assistants from one platform.",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Chakra UI",
    ],
    github: "https://github.com/Hamo639/teacher-management-system",
    live: "https://teacher-management-system-gamma.vercel.app/",
  },

  {
    id: 2,
    title: "Clinic Management System",
    category: "Healthcare Management Platform",
    description:
      "Manage patients, doctors, appointments, services and medical records through a role-based dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Chakra UI",
    ],
    github: "https://github.com/Hamo639/Clinic-Management-System",
    live: "https://clinic-management-system-7msq.vercel.app/",
  },

  {
    id: 3,
    title: "Avira Sport",
    category: "Sportswear E-Commerce",
    description:
      "An RTL e-commerce experience with products, variants, cart, wishlist, checkout and admin workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Strapi",
    ],
    github: "https://github.com/Hamo639/avira-sport",
  },
];
