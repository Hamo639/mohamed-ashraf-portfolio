"use client";

import { SkillGroup } from "@/data/Skills";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaCss3Alt } from "react-icons/fa";
import { FiGlobe, FiServer } from "react-icons/fi";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiAxios,
  SiTailwindcss,
  SiChakraui,
  SiMui,
  SiBootstrap,
  SiFramer,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiStrapi,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiNpm,
  SiVercel,
  SiReactrouter,
} from "react-icons/si";


type SkillRowProps = {
  group: SkillGroup;
  index: number;
};

type SkillIcon = {
  icon: IconType;
  color: string;
};

const skillIcons: Record<string, SkillIcon> = {
  "React.js": {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  HTML5: {
    icon: SiHtml5,
    color: "#E34F26",
  },

  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  "Redux Toolkit": {
    icon: SiRedux,
    color: "#764ABC",
  },

  Axios: {
    icon: SiAxios,
    color: "#5A29E4",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  "Chakra UI": {
    icon: SiChakraui,
    color: "#319795",
  },
  "React Router": {
  icon: SiReactrouter,
  color: "#CA4245",
},

"RTK Query": {
  icon: SiRedux,
  color: "#764ABC",
},

"Fetch API": {
  icon: FiGlobe,
  color: "#61DAFB",
},

"REST APIs": {
  icon: FiServer,
  color: "#8B5CF6",
},

  "Material UI": {
    icon: SiMui,
    color: "#007FFF",
  },

  Bootstrap: {
    icon: SiBootstrap,
    color: "#7952B3",
  },

  "Framer Motion": {
    icon: SiFramer,
    color: "#FFFFFF",
  },

  Supabase: {
    icon: SiSupabase,
    color: "#3ECF8E",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "#4169E1",
  },

  Firebase: {
    icon: SiFirebase,
    color: "#FFCA28",
  },

  Strapi: {
    icon: SiStrapi,
    color: "#4945FF",
  },

  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  GitHub: {
    icon: SiGithub,
    color: "#FFFFFF",
  },

  Vite: {
    icon: SiVite,
    color: "#646CFF",
  },

  Postman: {
    icon: SiPostman,
    color: "#FF6C37",
  },

  npm: {
    icon: SiNpm,
    color: "#CB3837",
  },

  Vercel: {
    icon: SiVercel,
    color: "#FFFFFF",
  },
};

export default function SkillRow({ group, index }: SkillRowProps) {
  const number = String(group.id).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      className="
        group
        relative
        overflow-hidden
        border-t
        border-white/10
        py-10
        md:py-12
      "
    >
      {/* Hover Background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#8B5CF6]/0
          transition-colors
          duration-500
          group-hover:bg-[#8B5CF6]/5
        "
      />

      {/* Left Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-0
          w-px
          bg-[#8B5CF6]
          transition-all
          duration-500
          group-hover:h-full
        "
      />

      <div
        className="
          relative
          z-10
          grid
          gap-7
          lg:grid-cols-[72px_260px_minmax(0,1fr)]
          lg:gap-10
        "
      >
        {/* Number */}

        <span
          className="
            font-mono
            text-sm
            text-zinc-700
            transition-colors
            group-hover:text-[#8B5CF6]
          "
        >
          {number}
        </span>

        {/* Title */}

        <div>
          <h3
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-200
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-white
            "
          >
            {group.title}
          </h3>

          <p
            className="
              mt-3
              max-w-xs
              text-sm
              leading-6
              text-zinc-500
            "
          >
            {group.description}
          </p>
        </div>

        {/* Skills */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            xl:grid-cols-4
          "
        >
          {group.skills.map((skill) => {
            const skillData = skillIcons[skill];

            if (!skillData) {
              return (
                <div
                  key={skill}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/3
                    px-4
                    py-3
                    text-sm
                    text-zinc-300
                  "
                >
                  {skill}
                </div>
              );
            }

            const Icon = skillData.icon;

            return (
              <div
                key={skill}
                className="
                  group/skill
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/3
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#8B5CF6]/40
                  hover:bg-white/5
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-black/20
                  "
                >
                  <Icon
                    className="text-xl"
                    style={{
                      color: skillData.color,
                    }}
                  />
                </div>

                <span
                  className="
                    text-sm
                    font-medium
                    text-zinc-400
                    transition
                    group-hover/skill:text-white
                  "
                >
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Line */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-linear-to-r
          from-[#8B5CF6]
          to-transparent
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </motion.article>
  );
}


