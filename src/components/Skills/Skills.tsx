import { skillGroups } from "@/data/Skills";
import SkillRow from "./SkillRow";

export default function Skills() {
  const count = String(skillGroups.length).padStart(2, "0");

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#111118]
        px-5
        py-28
        md:px-8
        md:py-36
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/3
          h-96
          w-96
          rounded-full
          bg-[#8B5CF6]/5
          blur-3xl
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
        {/* Top */}
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
            Expertise
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
            {count} Areas
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
            Tools I use
            <br />

            <span className="text-zinc-600">
              to build.
            </span>
          </h2>

          <p
            className="
              max-w-lg
              text-base
              leading-7
              text-zinc-500
              md:text-lg
              md:leading-8
              lg:ml-auto
            "
          >
            My stack is focused on modern frontend
            development, scalable application architecture,
            real-world data and production-ready experiences.
          </p>
        </div>

        {/* Skill Rows */}
        <div className="border-b border-white/10">
          {skillGroups.map((group, index) => (
            <SkillRow
              key={group.id}
              group={group}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}