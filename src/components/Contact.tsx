"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
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
      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-[#8B5CF6]/10
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
            Contact
          </p>

          <span
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
            Let&apos;s build something
          </span>
        </div>

        {/* Main */}
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
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
              Have a project or opportunity?
            </p>

            <h2
              className="
                max-w-4xl
                text-5xl
                font-semibold
                leading-none
                tracking-[-0.055em]
                text-zinc-100
                md:text-7xl
                lg:text-8xl
              "
            >
              Let&apos;s build
              <br />

              <span className="text-zinc-500">
                something great.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-base
                leading-8
                text-zinc-400
                md:text-lg
              "
            >
              I&apos;m open to frontend opportunities,
              freelance projects and collaborations on
              meaningful digital products.
            </p>

            {/* Main CTA */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hamoashraf6699@gmail.com"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-zinc-100
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
              <FiMail className="text-lg" />

              Send me an email

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

          {/* Contact Links */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              delay: 0.1,
            }}
            className="
              border-t
              border-white/10
            "
          >
            {/* Email */}
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=hamoashraf6699@gmail.com"
              className="
                group
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-white/10
                py-6
              "
            >
              <div>
                <p className="text-xs text-zinc-500">
                  Email
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-zinc-200
                    transition
                    group-hover:text-[#A78BFA]
                    sm:text-base
                  "
                >
                  hamoashraf6699@gmail.com
                </p>
              </div>

              <FiArrowUpRight
                className="
                  text-zinc-500
                  transition
                  group-hover:text-[#A78BFA]
                "
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Hamo639"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-white/10
                py-6
              "
            >
              <div className="flex items-center gap-4">
                <FiGithub className="text-xl text-zinc-500" />

                <div>
                  <p className="text-xs text-zinc-500">
                    GitHub
                  </p>

                  <p
                    className="
                      mt-1
                      font-medium
                      text-zinc-200
                      transition
                      group-hover:text-[#A78BFA]
                    "
                  >
                    Hamo639
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-zinc-500" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-ashraf-5a4698426"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-white/10
                py-6
              "
            >
              <div className="flex items-center gap-4">
                <FiLinkedin className="text-xl text-zinc-500" />

                <div>
                  <p className="text-xs text-zinc-500">
                    LinkedIn
                  </p>

                  <p
                    className="
                      mt-1
                      font-medium
                      text-zinc-200
                      transition
                      group-hover:text-[#A78BFA]
                    "
                  >
                    Mohamed Ashraf
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-zinc-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}