"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiGithub, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed
          left-1/2
          top-4
          z-50
          w-[calc(100%-24px)]
          max-w-7xl
          -translate-x-1/2
          rounded-2xl
          border
          border-white/10
          bg-[#111118]/85
          backdrop-blur-xl
          md:top-5
        "
      >
        <nav
          className="
            flex
            h-18
            items-center
            justify-between
            px-4
            sm:px-5
            md:px-6
          "
        >
          {/* Brand */}

          <a href="#home" onClick={handleLinkClick} className="shrink-0">
            <p
              className="
                text-base
                font-semibold
                tracking-[-0.03em]
                text-zinc-100
              "
            >
              Mohamed
              <span className="text-[#A78BFA]">Ashraf</span>
            </p>

            <p
              className="
                mt-0.5
                text-[11px]
                text-zinc-500
              "
            >
              Frontend Developer
            </p>
          </a>

          {/* Desktop Navigation */}

          <div
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    transition
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-200"
                    }
                  `}
                >
                  {link.name}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[#A78BFA]
                        shadow-[0_0_12px_rgba(167,139,250,0.9)]
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <a
              href="https://github.com/Hamo639"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-zinc-400
                transition
                hover:border-[#A78BFA]/50
                hover:bg-[#A78BFA]/5
                hover:text-white
              "
            >
              <FiGithub />
            </a>

            <a
              href="/Mohamed-Ashraf-CV.pdf"
              download
              className="
                hidden
                items-center
                gap-2
                rounded-full
                bg-zinc-100
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#8B5CF6]
                hover:text-white
                md:flex
              "
            >
              <FiDownload />
              Download CV
            </a>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-zinc-300
                transition
                hover:border-[#A78BFA]/50
                lg:hidden
              "
            >
              <FiMenu className="text-xl" />
            </button>
          </div>

          {/* Small Mobile Menu */}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-zinc-300
              sm:hidden
            "
          >
            <FiMenu className="text-xl" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}

      <div
        className={`
          fixed
          inset-0
          z-60
          bg-[#111118]/70
          backdrop-blur-xl
          transition
          duration-300
          lg:hidden
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div
          className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-full
            max-w-sm
            flex-col
            border-l
            border-white/10
            bg-[#15151D]
            p-6
            transition-transform
            duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Menu Top */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p className="font-semibold text-zinc-100">
                Mohamed
                <span className="text-[#A78BFA]">Ashraf</span>
              </p>

              <p className="mt-1 text-xs text-zinc-500">Frontend Developer</p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-zinc-300
              "
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Links */}

          <div
            className="
              mt-16
              flex
              flex-col
            "
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-5
                  "
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="
                        font-mono
                        text-xs
                        text-zinc-600
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        text-2xl
                        font-medium
                        tracking-tight
                        transition
                        ${
                          isActive
                            ? "text-[#A78BFA]"
                            : "text-zinc-300 group-hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </span>
                  </div>

                  {isActive && (
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#A78BFA]
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Actions */}

          <div className="mt-auto">
            <a
              href="/Mohamed-Ashraf-CV.pdf"
              download
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-zinc-100
                px-6
                py-3.5
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#8B5CF6]
                hover:text-white
              "
            >
              <FiDownload />
              Download CV
            </a>

            <a
              href="https://github.com/Hamo639"
              target="_blank"
              rel="noreferrer"
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/10
                px-6
                py-3.5
                text-sm
                text-zinc-400
              "
            >
              <FiGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
