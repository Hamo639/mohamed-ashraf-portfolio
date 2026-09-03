"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin, FiBookOpen, FiCode } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
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
      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-16
          h-96
          w-96
          rounded-full
          bg-[#8B5CF6]/10
          blur-3xl
        "
      />

      {/* Soft Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
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
            mb-16
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
              text-[#A78BFA]
            "
          >
            About Me
          </p>

          <p
            className="
              hidden
              font-mono
              text-xs
              uppercase
              tracking-[0.18em]
              text-zinc-500
              sm:block
            "
          >
            Developer • Product Builder
          </p>
        </div>

        {/* Main Content */}
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-24
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <p
              className="
                mb-5
                text-sm
                font-medium
                text-[#A78BFA]
              "
            >
              More than just UI.
            </p>

            <h2
              className="
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.055em]
                text-zinc-100
                md:text-7xl
              "
            >
              I turn ideas
              <br />
              <span className="text-zinc-500">into usable</span>
              <br />
              products.
            </h2>

            {/* Small Line */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <div className="h-px w-12 bg-[#8B5CF6]" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                "
              >
                Frontend Development
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
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
              duration: 0.65,
              delay: 0.1,
            }}
          >
            {/* Description */}

            <p
              className="
                max-w-2xl
                text-xl
                leading-9
                text-zinc-300
                md:text-2xl
                md:leading-10
              "
            >
              I&apos;m Mohamed Ashraf, a Frontend Developer focused on building
              scalable web applications, SaaS platforms and digital products
              with clean architecture and thoughtful user experiences.
            </p>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-zinc-500
              "
            >
              I enjoy taking real business requirements and turning them into
              responsive interfaces, dashboards, authentication flows and
              complete frontend experiences using modern JavaScript
              technologies.
            </p>

            {/* Details */}

            <div
              className="
                mt-12
                border-t
                border-white/10
              "
            >
              {/* Location */}

              <div
                className="
                  grid
                  gap-4
                  border-b
                  border-white/10
                  py-6
                  sm:grid-cols-[40px_160px_1fr]
                  sm:items-center
                "
              >
                <FiMapPin className="text-lg text-[#A78BFA]" />

                <span
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  Based in
                </span>

                <span
                  className="
                    font-medium
                    text-zinc-200
                  "
                >
                  Alexandria, Egypt
                </span>
              </div>

              {/* Education */}

              <div
                className="
                  grid
                  gap-4
                  border-b
                  border-white/10
                  py-6
                  sm:grid-cols-[40px_160px_1fr]
                  sm:items-center
                "
              >
                <FiBookOpen className="text-lg text-[#A78BFA]" />

                <span
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  Education
                </span>

                <div>
                  <p className="font-medium text-zinc-200">
                    B.Sc. in Information Systems
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-500
                    "
                  >
                    Kafr El-Sheikh University • 2020–2024
                  </p>
                </div>
              </div>

              {/* Training */}

              <div
                className="
                  grid
                  gap-4
                  py-6
                  sm:grid-cols-[40px_160px_1fr]
                  sm:items-center
                "
              >
                <FiCode className="text-lg text-[#A78BFA]" />

                <span
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  Training
                </span>

                <div>
                  <p className="font-medium text-zinc-200">
                    ITI Front-End Development
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-500
                    "
                  >
                    4 Months Practical Training
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:text-[#A78BFA]
              "
            >
              Let&apos;s work together
              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom Stats */}

        <div
          className="
            mt-24
            grid
            border-y
            border-white/10
            sm:grid-cols-3
          "
        >
          <div
            className="
              py-7
              sm:border-r
              sm:border-white/10
              sm:px-6
            "
          >
            <p
              className="
                text-3xl
                font-semibold
                text-zinc-100
              "
            >
              React
            </p>

            <p className="mt-2 text-sm text-zinc-500">Primary frontend stack</p>
          </div>

          <div
            className="
              border-t
              border-white/10
              py-7
              sm:border-r
              sm:border-t-0
              sm:border-white/10
              sm:px-6
            "
          >
            <p
              className="
                text-3xl
                font-semibold
                text-zinc-100
              "
            >
              SaaS
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Product-focused development
            </p>
          </div>

          <div
            className="
              border-t
              border-white/10
              py-7
              sm:border-t-0
              sm:px-6
            "
          >
            <p
              className="
                text-3xl
                font-semibold
                text-zinc-100
              "
            >
              Responsive
            </p>

            <p className="mt-2 text-sm text-zinc-500">Desktop to mobile</p>
          </div>
        </div>
      </div>
    </section>
  );
}
