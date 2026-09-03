import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#111118]
        px-5
        md:px-8
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-6
          py-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Brand */}
        <div>
          <p
            className="
              font-semibold
              tracking-tight
              text-zinc-100
            "
          >
            Mohamed
            <span className="text-[#A78BFA]">Ashraf</span>
          </p>

          <p
            className="
              mt-1
              text-xs
              text-zinc-500
            "
          >
            Frontend Developer
          </p>
        </div>

        {/* Navigation */}
        <div
          className="
            flex
            flex-wrap
            gap-5
            text-sm
            text-zinc-500
          "
        >
          <Link href="#projects" className="transition hover:text-white">
            Projects
          </Link>

          <Link href="#skills" className="transition hover:text-white">
            Skills
          </Link>

          <Link href="#about" className="transition hover:text-white">
            About
          </Link>

          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p
          className="
            text-xs
            text-zinc-600
          "
        >
          © {currentYear} Mohamed Ashraf
        </p>
      </div>
    </footer>
  );
}
