import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import SectionLink from "../atoms/SectionLink";
import { useFavorites } from "../../hooks/useFavorites";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", section: "about" },
  { label: "Restaurants", section: "restaurants" },
  { label: "Book a table", to: "/book" },
];

const SCROLLED_AFTER = 24;

function NavLinks({ transparent, onNavigate, mobile = false }) {
  const desktop = `relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${
    transparent
      ? "text-white/90 drop-shadow-[0_1px_6px_rgba(15,14,12,.6)] hover:text-white"
      : "text-ink-600 hover:text-ink-900"
  }`;
  const sheet =
    "rounded-2xl px-4 py-3.5 font-display text-2xl text-ink-900 transition-colors hover:bg-ink-100";
  const className = mobile ? sheet : desktop;

  return LINKS.map((link) =>
    link.to ? (
      <Link key={link.label} to={link.to} onClick={onNavigate} className={className}>
        {link.label}
      </Link>
    ) : (
      <SectionLink
        key={link.label}
        to={link.section}
        onNavigate={onNavigate}
        className={className}
      >
        {link.label}
      </SectionLink>
    ),
  );
}

function Navbar({ overlay = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useFavorites();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLLED_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = overlay && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-spring ${
        transparent
          ? "bg-transparent"
          : "border-b border-ink-200/70 bg-cream/90 shadow-[0_1px_20px_-12px_rgba(26,24,21,.35)] backdrop-blur-xl"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <Logo inverted={transparent} />

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLinks transparent={transparent} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/favorite"
            aria-label={`Saved restaurants (${count})`}
            className={`relative grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 ease-spring active:scale-95 ${
              transparent
                ? "border-white/30 text-white hover:border-white/70 hover:bg-white/10"
                : "border-ink-200 text-ink-700 hover:border-ink-900 hover:text-ink-900"
            }`}
          >
            <FiHeart className="text-[19px]" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-ember-600 px-1 text-[11px] font-bold text-white ring-2 ring-cream">
                {count}
              </span>
            )}
          </Link>

          <Button to="/book" size="sm" className="hidden sm:inline-flex">
            Reserve
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
              transparent
                ? "border-white/30 text-white"
                : "border-ink-200 text-ink-800 hover:border-ink-900"
            }`}
          >
            {menuOpen ? <HiX className="text-xl" /> : <HiOutlineMenuAlt4 className="text-xl" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-ink-200/70 bg-cream transition-[max-height,opacity] duration-500 ease-spring lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="shell flex flex-col gap-1 py-5">
          <NavLinks mobile onNavigate={() => setMenuOpen(false)} />
          <Button to="/book" full className="mt-3" onClick={() => setMenuOpen(false)}>
            Reserve a table
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
