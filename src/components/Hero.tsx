"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMapPin } from "react-icons/fi";

const technologies = ["React", "Next.js", "TypeScript", "Supabase"];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#111118]
        px-5
        pt-28
        sm:pt-32
        md:px-8
        lg:pt-28
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />

      {/* Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[18%]
          h-125
          w-125
          rounded-full
          bg-[#8B5CF6]/15
          blur-[160px]
        "
      />

      {/* Background Text */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-7.5
          left-1/2
          hidden
          -translate-x-1/2
          whitespace-nowrap
          text-[150px]
          font-black
          tracking-[-0.07em]
          text-white/[0.018]
          xl:block
        "
      >
        FRONTEND
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-7rem)]
          w-full
          max-w-7xl
          items-center
          gap-10
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-6
        "
      >
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-20"
        >
          {/* Top Meta */}

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-zinc-400
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#8B5CF6]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#8B5CF6]
                  "
                />
              </span>
              Available for frontend opportunities
            </div>

            <span
              className="
                hidden
                h-1
                w-1
                rounded-full
                bg-zinc-700
                sm:block
              "
            />

            <div
              className="
                hidden
                items-center
                gap-1.5
                text-sm
                text-zinc-500
                sm:flex
              "
            >
              <FiMapPin />
              Alexandria, Egypt
            </div>
          </div>

          {/* Name */}

          <p
            className="
              mb-4
              text-sm
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#8B5CF6]
            "
          >
            Mohamed Ashraf
          </p>

          {/* Main Heading */}

          <h1
            className="
              max-w-195
              text-[52px]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#F5F5F5]
              sm:text-6xl
              md:text-7xl
              lg:text-[78px]
            "
          >
            Mohamed Ashraf
            <br />
            <span className="text-zinc-500">Frontend Developer building</span>
            <br />
            <span className="relative">
              modern web products.
              <span
                className="
                  absolute
                  bottom-1
                  left-0
                  -z-10
                  h-3
                  w-full
                  bg-[#8B5CF6]/25
                  sm:h-4
                "
              />
            </span>
          </h1>

          {/* Role */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-4
            "
          >
            <div className="h-px w-10 bg-[#8B5CF6]" />

            <p
              className="
                text-base
                font-medium
                text-zinc-300
                md:text-lg
              "
            >
              Frontend Engineer
            </p>
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-zinc-400
              md:text-lg
              md:leading-8
            "
          >
            Mohamed Ashraf is a Frontend Developer who builds scalable web
            applications, SaaS platforms, and modern digital products using
            React, Next.js, TypeScript, and JavaScript.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#F5F5F5]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-black
                transition
                duration-300
                hover:bg-[#8B5CF6]
                hover:text-white
              "
            >
              Explore my work
              <FiArrowUpRight
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            <a
              href="https://github.com/Hamo639"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/10
                px-6
                py-3.5
                text-sm
                font-medium
                text-zinc-300
                transition
                duration-300
                hover:border-[#8B5CF6]/50
                hover:bg-[#8B5CF6]/5
                hover:text-white
              "
            >
              <FiGithub className="text-lg" />
              GitHub
            </a>
          </div>

          {/* Tech */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
            "
          >
            <span
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-zinc-500
              "
            >
              Core stack
            </span>

            <div
              className="
                hidden
                h-4
                w-px
                bg-white/10
                sm:block
              "
            />

            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  text-sm
                  font-medium
                  text-zinc-400
                  transition
                  hover:text-[#8B5CF6]
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            relative
            mx-auto
            flex
            h-125
            w-full
            max-w-xl
            items-end
            justify-center
            sm:h-145
            md:h-160
            lg:h-180
          "
        >
          {/* Vertical Line */}

          <div
            className="
              absolute
              right-5
              top-[15%]
              hidden
              h-[55%]
              w-px
              bg-linear-to-b
              from-transparent
              via-[#8B5CF6]/40
              to-transparent
              lg:block
            "
          />

          {/* Giant Number */}

          <span
            className="
              pointer-events-none
              absolute
              right-0
              top-[8%]
              hidden
              text-[120px]
              font-black
              leading-none
              text-white/2.5
              lg:block
            "
          >
            01
          </span>

          {/* ================= RESPONSIVE PHOTO ================= */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-120
              w-full
              max-w-xs
              -translate-x-1/2
              overflow-hidden
              rounded-4xl
              sm:h-140
              sm:max-w-sm
              md:h-155
              md:max-w-md
              lg:h-175
              lg:max-w-lg
            "
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
            }}
          >
            <Image
              src="https://res.cloudinary.com/doeowykct/image/upload/v1788393484/WhatsApp_Image_2026-09-03_at_2.57.30_AM_d1q11t.jpg"
              alt="Mohamed Ashraf - Frontend Engineer"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              className="
    object-cover
    object-top
    contrast-[1.04]
  "
            />
          </div>

          {/* Purple Accent */}

          <div
            className="
              absolute
              bottom-[21%]
              left-[7%]
              hidden
              h-24
              w-0.75
              rounded-full
              bg-[#8B5CF6]
              shadow-[0_0_30px_rgba(139,92,246,0.8)]
              sm:block
            "
          />

          {/* ================= CODE WINDOW ================= */}

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[13%]
              -left-16
              z-30
              hidden
              w-65
              overflow-hidden
              rounded-2xl
              border
              border-white/8
              bg-[#111114]/85
              shadow-2xl
              backdrop-blur-xl
              lg:block
            "
          >
            {/* Window Header */}

            <div
              className="
                flex
                items-center
                gap-1.5
                border-b
                border-white/6
                px-4
                py-3
              "
            >
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <span
                className="
                  ml-2
                  text-[10px]
                  text-zinc-500
                "
              >
                developer.ts
              </span>
            </div>

            {/* Code */}

            <div
              className="
                space-y-1
                px-4
                py-4
                font-mono
                text-[11px]
                leading-5
              "
            >
              <p>
                <span className="text-[#8B5CF6]">const</span>

                <span className="text-zinc-300"> developer = {"{"}</span>
              </p>

              <p className="pl-4 text-zinc-500">
                name:
                <span className="text-zinc-200"> &quot;Mohamed&quot;,</span>
              </p>

              <p className="pl-4 text-zinc-500">
                role:
                <span className="text-zinc-200"> &quot;Frontend&quot;,</span>
              </p>

              <p className="pl-4 text-zinc-500">
                focus:
                <span className="text-[#8B5CF6]"> &quot;SaaS&quot;</span>
              </p>

              <p className="text-zinc-300">{"}"};</p>
            </div>
          </motion.div>

          {/* Side Label */}

          <div
            className="
              absolute
              -right-7.5
              top-[37%]
              hidden
              rotate-90
              items-center
              gap-3
              lg:flex
            "
          >
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Product Builder
            </span>

            <span className="h-px w-10 bg-zinc-700" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[90%]
          max-w-7xl
          -translate-x-1/2
          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </section>
  );
}
