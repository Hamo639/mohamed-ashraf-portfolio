import { projects } from "@/data/Project";
import ProjectRow from "./ProjectsRow";

export default function Projects() {
  const projectsCount = String(projects.length).padStart(2, "0");

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
       bg-[#15151D]
        px-5
        py-28
        md:px-8
        md:py-36
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/3
          h-96
          w-96
          rounded-full
          bg-[#8B5CF6]/5
          blur-3xl
        "
      />

      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.015]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* Top Label */}
        <div
          className="
            mb-8
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-6
          "
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#8B5CF6]
            "
          >
            Selected Work
          </p>

          <p
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.18em]
              text-zinc-700
            "
          >
            {projectsCount} Projects
          </p>
        </div>

        {/* Header */}
        <div
          className="
            mb-20
            grid
            gap-10
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
          <h2
            className="
              text-5xl
              font-semibold
              leading-none
              tracking-[-0.055em]
              text-zinc-100
              md:text-7xl
            "
          >
            Work that
            <br />

            <span className="text-zinc-600">
              actually ships.
            </span>
          </h2>

          <div
            className="
              max-w-lg
              lg:ml-auto
            "
          >
            <p
              className="
                text-base
                leading-7
                text-zinc-500
                md:text-lg
                md:leading-8
              "
            >
              A selection of SaaS platforms,
              management systems and digital products
              built around real business workflows.
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
              "
            >
              <div className="h-px w-8 bg-[#8B5CF6]" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                React • Next.js • TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="border-b border-white/10">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}