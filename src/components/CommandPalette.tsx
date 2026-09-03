"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  FiCommand,
  FiDownload,
  FiFolder,
  FiGithub,
  FiMail,
  FiSearch,
  FiTool,
  FiUser,
  FiX,
} from "react-icons/fi";

type CommandItem = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  icon: React.ElementType;
  action: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Mohamed-Ashraf-CV.pdf";
    link.download = "Mohamed-Ashraf-CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setIsOpen(false);
  };

  const commands: CommandItem[] = [
    {
      id: "projects",
      title: "View Projects",
      description: "Explore Mohamed's selected work",
      keywords: ["projects", "work", "portfolio", "teacher pro"],
      icon: FiFolder,
      action: () => scrollToSection("projects"),
    },

    {
      id: "skills",
      title: "View Skills",
      description: "React, Next.js, TypeScript and more",
      keywords: ["skills", "technologies", "stack", "react", "next"],
      icon: FiTool,
      action: () => scrollToSection("skills"),
    },

    {
      id: "about",
      title: "About Mohamed",
      description: "Learn more about the developer",
      keywords: ["about", "mohamed", "developer", "experience"],
      icon: FiUser,
      action: () => scrollToSection("about"),
    },

    {
      id: "resume",
      title: "Download Resume",
      description: "Download Mohamed Ashraf's CV",
      keywords: ["resume", "cv", "download"],
      icon: FiDownload,
      action: downloadResume,
    },

    {
      id: "contact",
      title: "Contact Mohamed",
      description: "Let's build something together",
      keywords: ["contact", "email", "hire", "job", "work"],
      icon: FiMail,
      action: () => scrollToSection("contact"),
    },

    {
      id: "github",
      title: "Open GitHub",
      description: "github.com/Hamo639",
      keywords: ["github", "code", "repositories", "repo"],
      icon: FiGithub,
      action: () => {
        window.open(
          "https://github.com/Hamo639",
          "_blank",
          "noopener,noreferrer",
        );

        setIsOpen(false);
      },
    },

    {
      id: "email",
      title: "Send Email",
      description: "hamoashraf6699@gmail.com",
      keywords: ["email", "gmail", "message", "contact"],
      icon: FiMail,
      action: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=hamoashraf6699@gmail.com",
          "_blank",
          "noopener,noreferrer",
        );

        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return commands;
    }

    return commands.filter((command) => {
      const searchableText = [
        command.title,
        command.description,
        ...command.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        setIsOpen((current) => !current);
      }

      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setActiveIndex(0);

      return;
    }

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setActiveIndex((current) =>
        Math.min(current + 1, filteredCommands.length - 1),
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setActiveIndex((current) => Math.max(current - 1, 0));
    }

    if (event.key === "Enter" && filteredCommands[activeIndex]) {
      filteredCommands[activeIndex].action();
    }
  };

  return (
    <>
      {/* Shortcut Button */}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette"
        className="
          fixed
          bottom-6
          left-6
          z-40
          hidden
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-[#1A1A24]/90
          px-4
          py-2.5
          text-xs
          text-zinc-400
          shadow-xl
          backdrop-blur-xl
          transition
          duration-300
          hover:border-[#8B5CF6]/50
          hover:text-white
          md:flex
        "
      >
        <FiCommand className="text-[#A78BFA]" />
        Command
        <span
          className="
            ml-1
            rounded-md
            border
            border-white/10
            bg-white/5
            px-2
            py-1
            font-mono
            text-[10px]
            text-zinc-500
          "
        >
          Ctrl K
        </span>
      </button>

      {/* Mobile Button */}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette"
        className="
          fixed
          bottom-6
          left-6
          z-40
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#1A1A24]
          text-[#A78BFA]
          shadow-xl
          md:hidden
        "
      >
        <FiCommand className="text-xl" />
      </button>

      {/* Palette */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-start
            justify-center
            bg-black/60
            px-4
            pt-28
            backdrop-blur-sm
            md:pt-36
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="
              w-full
              max-w-xl
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#15151D]
              shadow-2xl
            "
          >
            {/* Search */}

            <div
              className="
                flex
                items-center
                gap-3
                border-b
                border-white/10
                px-5
                py-4
              "
            >
              <FiSearch
                className="
                  shrink-0
                  text-xl
                  text-[#A78BFA]
                "
              />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                type="text"
                placeholder="Type a command or search..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-600
                  md:text-base
                "
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close command palette"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  text-zinc-500
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <FiX />
              </button>
            </div>

            {/* Label */}

            <div
              className="
                px-5
                pb-2
                pt-4
              "
            >
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Quick Navigation
              </p>
            </div>

            {/* Results */}

            <div
              className="
                max-h-96
                overflow-y-auto
                p-2
              "
            >
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command, index) => {
                  const Icon = command.icon;

                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={command.id}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={command.action}
                      className={`
                          flex
                          w-full
                          items-center
                          gap-4
                          rounded-2xl
                          px-3
                          py-3
                          text-left
                          transition
                          duration-200
                          ${
                            isActive
                              ? "bg-[#8B5CF6]/10"
                              : "hover:bg-white/3"
                          }
                        `}
                    >
                      {/* Icon */}

                      <div
                        className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            transition
                            ${
                              isActive
                                ? "border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#A78BFA]"
                                : "border-white/10 bg-white/3 text-zinc-500"
                            }
                          `}
                      >
                        <Icon className="text-lg" />
                      </div>

                      {/* Text */}

                      <div className="min-w-0 flex-1">
                        <p
                          className={`
                              text-sm
                              font-medium
                              transition
                              ${isActive ? "text-white" : "text-zinc-300"}
                            `}
                        >
                          {command.title}
                        </p>

                        <p
                          className="
                              mt-1
                              truncate
                              text-xs
                              text-zinc-600
                            "
                        >
                          {command.description}
                        </p>
                      </div>

                      {/* Enter */}

                      {isActive && (
                        <span
                          className="
                              hidden
                              rounded-lg
                              border
                              border-white/10
                              px-2
                              py-1
                              font-mono
                              text-[10px]
                              text-zinc-600
                              sm:block
                            "
                        >
                          Enter
                        </span>
                      )}
                    </button>
                  );
                })
              ) : (
                <div
                  className="
                    flex
                    min-h-32
                    items-center
                    justify-center
                    text-sm
                    text-zinc-600
                  "
                >
                  No commands found.
                </div>
              )}
            </div>

            {/* Footer */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                border-t
                border-white/10
                px-5
                py-3
                text-[10px]
                text-zinc-600
              "
            >
              <span>↑ ↓ Navigate</span>

              <span>Enter Select</span>

              <span>Esc Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
