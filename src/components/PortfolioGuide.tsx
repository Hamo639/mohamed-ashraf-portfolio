"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiFolder, FiMail, FiTool, FiX } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

const introMessage =
  "Hi 👋 I'm Mohamed's portfolio assistant. Mohamed is a Frontend Developer who builds modern SaaS applications using React, Next.js, TypeScript and Supabase.";

export default function PortfolioGuide() {
  const [isOpen, setIsOpen] = useState(false);

  const [displayedText, setDisplayedText] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [currentMessage, setCurrentMessage] = useState(introMessage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText("");
    setIsTyping(true);

    let index = 0;

    const typingInterval = setInterval(() => {
      index++;

      setDisplayedText(currentMessage.slice(0, index));

      if (index >= currentMessage.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 24);

    return () => clearInterval(typingInterval);
  }, [currentMessage, isOpen]);

  const sendMessage = (message: string) => {
    setCurrentMessage(message);
  };

  return (
    <>
      {/* Robot Button */}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Portfolio Assistant"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#A78BFA]/40
          bg-[#1A1A24]
          text-[#A78BFA]
          shadow-[0_0_30px_rgba(139,92,246,0.25)]
          transition
          duration-300
          hover:scale-105
          hover:bg-[#8B5CF6]
          hover:text-white
        "
      >
        <RiRobot2Line className="text-2xl" />

        <span
          className="
            absolute
            right-0
            top-0
            h-3
            w-3
            rounded-full
            border-2
            border-[#1A1A24]
            bg-emerald-400
          "
        />
      </button>

      {/* Chat Window */}

      <div
        className={`
          fixed
          bottom-24
          right-4
          z-50
          w-[calc(100%-32px)]
          max-w-sm
          origin-bottom-right
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#1A1A24]/95
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          sm:right-6
          ${
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-5
            py-4
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#8B5CF6]/15
                text-[#A78BFA]
              "
            >
              <RiRobot2Line className="text-xl" />
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-100">Mohamed AI</p>

              <div className="mt-0.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-xs text-zinc-500">Online</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close assistant"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-zinc-500
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <FiX />
          </button>
        </div>

        {/* Conversation */}

        <div className="p-5">
          {/* Robot Message */}

          <div className="flex items-start gap-3">
            <div
              className="
                mt-1
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#8B5CF6]
                text-white
              "
            >
              <RiRobot2Line />
            </div>

            <div
              className="
                min-h-20
                rounded-2xl
                rounded-tl-sm
                bg-[#111118]
                px-4
                py-3
              "
            >
              <p
                className="
                  text-sm
                  leading-6
                  text-zinc-300
                "
              >
                {displayedText}

                {isTyping && (
                  <span
                    className="
                      ml-1
                      inline-block
                      h-4
                      w-0.5
                      animate-pulse
                      bg-[#A78BFA]
                    "
                  />
                )}
              </p>
            </div>
          </div>

          {/* Thinking */}

          {isTyping && (
            <p
              className="
                ml-11
                mt-2
                text-[11px]
                text-zinc-600
              "
            >
              Mohamed AI is typing...
            </p>
          )}

          {/* Suggestions */}

          {!isTyping && (
            <div className="mt-6">
              <p
                className="
                  mb-3
                  text-xs
                  text-zinc-500
                "
              >
                What would you like to know?
              </p>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    sendMessage(
                      "Mohamed's strongest project is Teacher Pro — a SaaS platform for managing students, groups, attendance, payments, class fees and assistants.",
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    px-3
                    py-3
                    text-left
                    text-xs
                    text-zinc-300
                    transition
                    hover:border-[#A78BFA]/50
                    hover:bg-[#8B5CF6]/10
                  "
                >
                  <FiFolder className="text-[#A78BFA]" />
                  Projects
                </button>

                <button
                  type="button"
                  onClick={() =>
                    sendMessage(
                      "Mohamed works mainly with React, Next.js, TypeScript, Redux Toolkit, Supabase, PostgreSQL and modern UI technologies.",
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    px-3
                    py-3
                    text-left
                    text-xs
                    text-zinc-300
                    transition
                    hover:border-[#A78BFA]/50
                    hover:bg-[#8B5CF6]/10
                  "
                >
                  <FiTool className="text-[#A78BFA]" />
                  Skills
                </button>

                <a
                  href="/Mohamed-Ashraf-CV.pdf"
                  download
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    px-3
                    py-3
                    text-xs
                    text-zinc-300
                    transition
                    hover:border-[#A78BFA]/50
                    hover:bg-[#8B5CF6]/10
                  "
                >
                  <FiDownload className="text-[#A78BFA]" />
                  Resume
                </a>

                <button
                  type="button"
                  onClick={() =>
                    sendMessage(
                      "You can contact Mohamed directly at hamoashraf6699@gmail.com. He's open to Frontend opportunities, freelance projects and collaborations.",
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    px-3
                    py-3
                    text-left
                    text-xs
                    text-zinc-300
                    transition
                    hover:border-[#A78BFA]/50
                    hover:bg-[#8B5CF6]/10
                  "
                >
                  <FiMail className="text-[#A78BFA]" />
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
