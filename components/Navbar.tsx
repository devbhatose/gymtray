"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

function BrandMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Fork + dumbbell hybrid: two tines become a barbell */}
      <path
        d="M6 3v6M10 3v6M8 3v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 9v3.5a4 4 0 0 0 4 4h.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="14.5"
        y="14.5"
        width="6"
        height="5"
        rx="1.6"
        transform="rotate(-45 14.5 14.5)"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="#" aria-label="GymTray home">
          <span className="brand-mark">
            <BrandMark />
          </span>
          GymTray
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a className="nav-link" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary nav-cta" href="#waitlist">
            Join the Waitlist <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bars" />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" data-open={open}>
        <nav className="container mobile-menu-links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              className="mobile-menu-link"
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
