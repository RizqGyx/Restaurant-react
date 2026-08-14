import { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiFacebook, FiArrowRight, FiCheck } from "react-icons/fi";
import Logo from "../atoms/Logo";
import SectionLink from "../atoms/SectionLink";

const SOCIALS = [
  { label: "Instagram", icon: FiInstagram },
  { label: "X", icon: FiTwitter },
  { label: "Facebook", icon: FiFacebook },
];

const EXPLORE = [
  { label: "Home", to: "/" },
  { label: "About us", section: "about" },
  { label: "Restaurants", section: "restaurants" },
  { label: "Saved places", to: "/favorite" },
  { label: "Book a table", to: "/book" },
];

const SUPPORT = ["Help centre", "Contact us", "Feedback", "Home delivery", "Gift cards"];

const linkClass = "text-[15px] transition-colors hover:text-ember-400";

function FooterColumn({ title, children }) {
  return (
    <nav className="flex flex-col gap-3.5">
      <h3 className="mb-1 text-xs font-semibold uppercase tracking-[.18em] text-white">{title}</h3>
      {children}
    </nav>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] p-1.5 transition-colors focus-within:border-ember-500">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSent(false);
          }}
          placeholder="you@email.com"
          className="min-w-0 flex-1 bg-transparent px-4 py-2 text-[15px] text-white placeholder:text-ink-500 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ember-600 text-white transition-all duration-300 ease-spring hover:bg-ember-500 active:scale-95"
        >
          {sent ? <FiCheck /> : <FiArrowRight />}
        </button>
      </div>
      <p
        role="status"
        className={`mt-3 text-sm text-ember-400 transition-opacity duration-300 ${
          sent ? "opacity-100" : "opacity-0"
        }`}
      >
        You&apos;re on the list — see you next month.
      </p>
    </form>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-ink-950 text-ink-300">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="max-w-sm">
            <Logo inverted to={null} />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-400">
              PT. Western Corner — serving the tables worth travelling for since 1992. Curated
              grill houses, honest reviews, and a reservation that takes thirty seconds.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink-300 transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:border-ember-500 hover:bg-ember-600 hover:text-white"
                >
                  <Icon className="text-[17px]" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Explore">
            {EXPLORE.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <SectionLink key={item.label} to={item.section} className={linkClass}>
                  {item.label}
                </SectionLink>
              ),
            )}
          </FooterColumn>

          <FooterColumn title="Support">
            {SUPPORT.map((item) => (
              <a key={item} href="#" className={linkClass}>
                {item}
              </a>
            ))}
          </FooterColumn>

          <div>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[.18em] text-white">
              Stay up to date
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-400">
              New openings, chef residencies and quiet-table tips. One email a month, no filler.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-sm text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} westCorner — built by Muhammad Rizki.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink-200">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-ink-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
