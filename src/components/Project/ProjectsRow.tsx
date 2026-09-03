"use client";

import { Project } from "@/data/Project";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

type ProjectRowProps = {
  project: Project;
  index: number;
};

export default function ProjectRow({ project, index }: ProjectRowProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
        group
        relative
        overflow-hidden
        border-t
        border-white/10
      "
    >
      {/* Hover Background */}
      <div
        className="
          pointer-events-none
          absolute
          
          inset-0
          bg-[#8B5CF6]/0
          duration-500
          group-hover:bg-[#8B5CF6]/5
        "
      />

      {/* Purple Left Line */}
      <div
        className="
          absolute
          left-0
          top-0
          z-20
          h-0
          w-px
          bg-[#8B5CF6]
          shadow-[0_0_25px_rgba(139,92,246,0.7)]
          transition-all
          duration-500
          group-hover:h-full
        "
      />

      {/* Huge Background Project Name */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          translate-x-16
          whitespace-nowrap
          text-7xl
          font-black
          uppercase
          tracking-[-0.06em]
          text-white/0
          transition-all
          duration-700
          group-hover:translate-x-0
          group-hover:text-white/2.5
          md:text-9xl
        "
      >
        {project.title}
      </div>

      <div
        className="
          relative
          z-10
          grid
          gap-8
          py-12
          md:py-16
          ml-7
          lg:grid-cols-[72px_minmax(0,1fr)_auto]
          lg:gap-10
        "
      >
        {/* Number */}
        <div>
          <span
            className="
              font-mono
              text-sm
              text-zinc-700
              transition-colors
              duration-300
              group-hover:text-[#8B5CF6]
            "
          >
            {projectNumber}
          </span>
        </div>

        {/* Project Content */}
        <div>
          <div
            className="
              mb-4
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#8B5CF6]
              "
            >
              {project.category}
            </span>

            {index === 0 && (
              <>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  Featured
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h3
            className="
              max-w-4xl
              text-4xl
              font-semibold
              tracking-[-0.045em]
              text-zinc-200
              transition-all
              duration-500
              group-hover:translate-x-2
              group-hover:text-white
              md:text-6xl
            "
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-zinc-500
              md:text-lg
              md:leading-8
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-3
            "
          >
            {project.technologies.map((technology, techIndex) => (
              <div
                key={technology}
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    text-sm
                    text-zinc-600
                    transition-colors
                    duration-300
                    group-hover:text-zinc-400
                  "
                >
                  {technology}
                </span>

                {techIndex < project.technologies.length - 1 && (
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-zinc-800
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div
          className="
            flex
            items-start
            gap-3
            lg:flex-col
            lg:items-end
          "
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                group/live
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-zinc-100
                px-5
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-[#8B5CF6]
                hover:text-white
              "
            >
              Live Demo
              <FiArrowUpRight
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover/live:translate-x-0.5
                  group-hover/live:-translate-y-0.5
                "
              />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              px-5
              py-3
              text-sm
              font-medium
              text-zinc-500
              transition-all
              duration-300
              hover:border-[#8B5CF6]/50
              hover:text-white
            "
          >
            <FiGithub className="text-base" />
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom Animated Line */}
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
