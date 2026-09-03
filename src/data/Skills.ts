export type SkillGroup = {
  id: number;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    description:
      "Building responsive, scalable and maintainable user interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
    ],
  },

  {
    id: 2,
    title: "State & Data",
    description:
      "Managing application state and connecting interfaces with real data.",
    skills: ["Redux Toolkit", "RTK Query", "REST APIs", "Axios", "Fetch API"],
  },

  {
    id: 3,
    title: "UI & Motion",
    description:
      "Creating modern interfaces with responsive layouts and subtle interaction.",
    skills: [
      "Tailwind CSS",
      "Chakra UI",
      "Material UI",
      "Bootstrap",
      "Framer Motion",
    ],
  },

  {
    id: 4,
    title: "Backend & Database",
    description:
      "Building frontend applications around authentication, databases and business workflows.",
    skills: ["Supabase", "PostgreSQL", "Firebase", "Strapi"],
  },

  {
    id: 5,
    title: "Development Tools",
    description:
      "Tools I use to develop, test, version and deploy production applications.",
    skills: ["Git", "GitHub", "Vite", "Postman", "npm", "Vercel"],
  },
];
