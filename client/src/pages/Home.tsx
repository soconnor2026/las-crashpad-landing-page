/**
 * LAS CRASHPAD — Home Page
 * Design: Desert Electric / Neo-Vegas Brutalism
 * Colors: #FF6B1A (neon orange), #3BB5FF (electric blue), #FF2D78 (hot magenta), #F5EDD6 (cream), #0D0D0D (near-black)
 * Fonts: Bebas Neue (display), DM Sans (body)
 * Rev4 Changes: Updated body copy, 8-item bullet list (blue markers, orange text), 1.3rem body font
 */

import { useEffect, useRef, useState } from "react";

const NEON_SIGN_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-neon-v2-az5vxX2ovP56JXpRkSEHzg.webp";

const STARBURST_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-starburst-v2-LpziXo2LMeDauRpZ7aUEov.webp";

const LOGO_MARK_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-starburst-v2-LpziXo2LMeDauRpZ7aUEov.webp";

// Rev4: 8 benefit bullets
const BENEFITS = [
  "Best price",
  "Nicest rooms",
  "Feel at home while away from home",
  "Professional, courteous environment",
  "Good neighborhood",
  "Clean, safe and secure",
  "Convenient location",
  "Strong Host support",
];

const STATS = [
  { value: "200+", label: "HAPPY GUESTS" },
  { value: "5 YEARS", label: "IN SERVICE" },
  { value: "11.3 MONTHS", label: "AVG STAY" },
  { value: "4.9★", label: "AVG RATING" },
];

const ROOMS = [
  {
    name: "Private Suite",
    desc: "Your own private room with a queen bed, blackout curtains, and dedicated storage. Perfect for the crew member who values privacy and a full night's rest.",
    price: "From $850/mo",
    tag: "MOST POPULAR",
  },
  {
    name: "Standard Room",
    desc: "Comfortable single occupancy room in a shared-living environment. All the essentials covered — clean, secure, and close to everything you need.",
    price: "From $650/mo",
    tag: null,
  },
  {
    name: "Flex Bunk",
    desc: "Ideal for irregular schedules. A dedicated bunk in a shared room with personal locker storage. Reserve only the nights you need.",
    price: "From $45/night",
    tag: "FLEXIBLE",
  },
];

const TESTIMONIALS = [
  {
    name: "Captain M. Torres",
    role: "A320 First Officer",
    text: "After years of hotel hopping, the LAS Crashpad is the first place that actually feels like home. The host is responsive, the rooms are immaculate, and the location is unbeatable.",
  },
  {
    name: "F/A Jennifer K.",
    role: "Senior Flight Attendant",
    text: "I've stayed at crashpads across the country. This is the cleanest, best-run operation I've encountered. The neighborhood is quiet and I always feel safe.",
  },
  {
    name: "Capt. D. Reyes",
    role: "B737 Captain",
    text: "The value here is exceptional. I looked at five other options in Vegas and nothing came close to the quality-to-price ratio. Highly recommend to any crew member.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToRooms = () =>
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  const scrollToTestimonials = () =>
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        backgroundColor: "#0A0A0A",
        minHeight: "100vh",
        color: "#F5EDD6",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ═══════════════════════════════════════════
          NAV
      ═══════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "58px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.98)"
            : "rgba(10,10,10,0.85)",
          borderBottom: scrolled
            ? "1px solid rgba(255,107,26,0.3)"
            : "1px solid rgba(255,107,26,0.08)",
          backdropFilter: "blur(12px)",
          transition: "all 250ms ease",
        }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
          <img
            src={LOGO_MARK_URL}
            alt=""
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px rgba(255,107,26,0.7))",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "#F5EDD6",
              textTransform: "uppercase",
            }}
          >
            THE LAS CRASHPAD
          </span>
        </div>

        {/* BOOK NOW */}
        <button
          onClick={scrollToRooms}
          style={{
            backgroundColor: "#FF2D78",
            color: "#fff",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.1em",
            fontSize: "1rem",
            padding: "0.4rem 1.5rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 16px rgba(255,45,120,0.5), 0 0 4px rgba(255,45,120,0.8)",
            transition: "box-shadow 150ms ease, transform 120ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 28px rgba(255,45,120,0.7), 0 0 8px rgba(255,45,120,1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 16px rgba(255,45,120,0.5), 0 0 4px rgba(255,45,120,0.8)";
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          BOOK NOW
        </button>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — asymmetric split
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          display: "flex",
          minHeight: "100vh",
          paddingTop: "58px",
        }}
      >
        {/* ── LEFT PANEL: neon sign ── */}
        <div
          style={{
            width: "42%",
            flexShrink: 0,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 2rem 3rem 3rem",
            /* Deep warm-black panel with subtle radial glow from the sign */
            background:
              "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(180,70,10,0.18) 0%, rgba(10,10,10,0) 70%), #0A0A0A",
          }}
        >
          {/* Vertical amber border line on the right edge of the left panel */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "1px",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,107,26,0.6) 20%, rgba(255,107,26,0.9) 50%, rgba(255,107,26,0.6) 80%, transparent 100%)",
            }}
          />

          {/* Sign container with multi-layer amber glow */}
          <div
            style={{
              position: "relative",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            {/* Outer atmospheric glow — wide, soft */}
            <div
              style={{
                position: "absolute",
                inset: "-40px",
                borderRadius: "4px",
                background:
                  "radial-gradient(ellipse at center, rgba(255,120,20,0.22) 0%, rgba(255,80,0,0.08) 50%, transparent 75%)",
                pointerEvents: "none",
              }}
            />
            {/* Mid glow ring */}
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "2px",
                boxShadow:
                  "0 0 40px rgba(255,107,26,0.45), 0 0 80px rgba(255,107,26,0.2), 0 0 160px rgba(255,107,26,0.08)",
                pointerEvents: "none",
              }}
            />
            {/* The sign image */}
            <img
              src={NEON_SIGN_URL}
              alt="Welcome to Fabulous The LAS Crashpad Las Vegas Nevada neon sign"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
                /* Tight inner glow on the image itself */
                filter:
                  "drop-shadow(0 0 12px rgba(255,107,26,0.6)) drop-shadow(0 0 30px rgba(255,107,26,0.25)) brightness(1.05) contrast(1.05)",
              }}
            />
          </div>
        </div>

        {/* ── RIGHT PANEL: headline + content ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3.5rem 3.5rem 3.5rem 3rem",
            minWidth: 0,
            /* Subtle dark texture — slightly lighter than left panel */
            background:
              "linear-gradient(135deg, rgba(255,107,26,0.03) 0%, transparent 60%), #0D0D0D",
          }}
        >
          {/* ── MAIN HEADLINE ── */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "#F5EDD6",
              margin: 0,
              /* Multi-layer text shadow for electric depth */
              textShadow:
                "0 0 1px rgba(245,237,214,1), 0 0 8px rgba(245,237,214,0.5), 0 0 20px rgba(245,237,214,0.2), 0 2px 0 rgba(0,0,0,0.8)",
            }}
          >
            BEST VALUE IN VEGAS
          </h1>

          {/* ── SUBHEADLINE with starburst ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              marginTop: "1rem",
            }}
          >
            <img
              src={STARBURST_URL}
              alt=""
              style={{
                width: "56px",
                height: "56px",
                objectFit: "contain",
                flexShrink: 0,
                filter:
                  "drop-shadow(0 0 8px rgba(255,107,26,0.9)) drop-shadow(0 0 20px rgba(255,107,26,0.4))",
              }}
            />
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: 1.05,
                letterSpacing: "0.05em",
                color: "#FF6B1A",
                textShadow:
                  "0 0 8px rgba(255,107,26,0.9), 0 0 20px rgba(255,107,26,0.5), 0 0 40px rgba(255,107,26,0.2)",
              }}
            >
              ONLY MINUTES
              <br />
              TO TERMINAL
            </div>
          </div>

          {/* ── Rev4: BODY COPY — 1.3rem, cream, stretches full width ── */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.3rem",
              lineHeight: 1.6,
              color: "#F5EDD6",
              marginTop: "1.75rem",
              marginBottom: 0,
              maxWidth: "100%",
              opacity: 0.92,
            }}
          >
            We know you are busy professionals. Your time to shop for a Crashpad room is limited. Start with the best. Move into the best.
          </p>

          {/* ── Rev4: BENEFITS BULLET LIST ── */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "1.5rem 0 0 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.4rem 2.5rem",
            }}
          >
            {BENEFITS.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.55rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.5,
                }}
              >
                {/* Blue bullet marker */}
                <span
                  style={{
                    color: "#3BB5FF",
                    fontSize: "1.15rem",
                    flexShrink: 0,
                    lineHeight: 1,
                    textShadow:
                      "0 0 6px rgba(59,181,255,0.9), 0 0 14px rgba(59,181,255,0.4)",
                  }}
                >
                  •
                </span>
                {/* Orange item text */}
                <span
                  style={{
                    color: "#FF6B1A",
                    fontWeight: 500,
                    textShadow: "0 0 8px rgba(255,107,26,0.3)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* ── CTA BUTTONS ── */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1.75rem",
              flexWrap: "wrap",
            }}
          >
            {/* Primary — solid orange */}
            <button
              onClick={scrollToRooms}
              style={{
                backgroundColor: "#FF6B1A",
                color: "#0A0A0A",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.1em",
                fontSize: "1.05rem",
                padding: "0.85rem 2rem",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow:
                  "0 0 16px rgba(255,107,26,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                transition: "box-shadow 150ms ease, transform 120ms ease, background-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff7d35";
                e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(255,107,26,0.7), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF6B1A";
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(255,107,26,0.5), inset 0 1px 0 rgba(255,255,255,0.15)";
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              CHECK AVAILABILITY
            </button>

            {/* Secondary — outlined */}
            <button
              onClick={scrollToTestimonials}
              style={{
                backgroundColor: "transparent",
                color: "#F5EDD6",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.1em",
                fontSize: "1.05rem",
                padding: "0.85rem 2rem",
                border: "2px solid #FF6B1A",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(255,107,26,0.15)",
                transition: "all 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,107,26,0.1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255,107,26,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.boxShadow = "0 0 10px rgba(255,107,26,0.15)";
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              WHAT CREW MEMBERS ARE SAYING
            </button>
          </div>

          {/* ── TRUST BAR STATS ── */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,107,26,0.2)",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.7rem",
                    letterSpacing: "0.04em",
                    color: "#FF6B1A",
                    lineHeight: 1,
                    textShadow:
                      "0 0 10px rgba(255,107,26,0.6), 0 0 20px rgba(255,107,26,0.2)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    color: "#F5EDD6",
                    opacity: 0.55,
                    marginTop: "0.25rem",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCROLL INDICATOR ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.75rem 0 2.5rem",
          gap: "0.35rem",
          backgroundColor: "#0D0D0D",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: "#F5EDD6",
            opacity: 0.4,
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.35 }}>
          <path
            d="M2 5L8 11L14 5"
            stroke="#F5EDD6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════
          ROOMS SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="rooms"
        style={{
          backgroundColor: "#111111",
          padding: "5.5rem 3.5rem",
          borderTop: "1px solid rgba(255,107,26,0.2)",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                color: "#F5EDD6",
                letterSpacing: "0.03em",
                margin: "0 0 0.5rem",
                textShadow:
                  "0 0 1px rgba(245,237,214,0.8), 0 0 20px rgba(245,237,214,0.1)",
              }}
            >
              CHOOSE YOUR ROOM
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#F5EDD6",
                opacity: 0.6,
                maxWidth: "500px",
                lineHeight: 1.65,
              }}
            >
              Every room is kept to a high standard of cleanliness and comfort. Pick the option that fits your schedule and budget.
            </p>
          </div>

          {/* Room cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {ROOMS.map((room) => (
              <div
                key={room.name}
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,107,26,0.2)",
                  padding: "2rem",
                  position: "relative",
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,26,0.55)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(255,107,26,0.1), inset 0 0 30px rgba(255,107,26,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,26,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {room.tag && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      right: "1.5rem",
                      backgroundColor: "#FF6B1A",
                      color: "#0A0A0A",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      padding: "0.2rem 0.8rem",
                      boxShadow: "0 0 12px rgba(255,107,26,0.5)",
                    }}
                  >
                    {room.tag}
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    color: "#F5EDD6",
                    letterSpacing: "0.04em",
                    margin: "0 0 0.75rem",
                    textShadow: "0 0 1px rgba(245,237,214,0.6)",
                  }}
                >
                  {room.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.92rem",
                    color: "#F5EDD6",
                    opacity: 0.65,
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {room.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    color: "#FF6B1A",
                    letterSpacing: "0.04em",
                    marginBottom: "1.5rem",
                    textShadow: "0 0 8px rgba(255,107,26,0.4)",
                  }}
                >
                  {room.price}
                </div>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#FF6B1A",
                    color: "#0A0A0A",
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "0.1em",
                    fontSize: "1rem",
                    padding: "0.8rem",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    boxShadow: "0 0 12px rgba(255,107,26,0.35)",
                    transition: "background-color 150ms ease, box-shadow 150ms ease, transform 120ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff7d35";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(255,107,26,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF6B1A";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(255,107,26,0.35)";
                  }}
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onClick={() => window.open("mailto:info@lascraspad.com", "_blank")}
                >
                  INQUIRE NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{
          backgroundColor: "#0D0D0D",
          padding: "5.5rem 3.5rem",
          borderTop: "1px solid rgba(59,181,255,0.15)",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                color: "#F5EDD6",
                letterSpacing: "0.03em",
                margin: "0 0 0.5rem",
                textShadow: "0 0 1px rgba(245,237,214,0.8)",
              }}
            >
              WHAT CREW MEMBERS ARE SAYING
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#F5EDD6",
                opacity: 0.6,
                maxWidth: "500px",
                lineHeight: 1.65,
              }}
            >
              Real feedback from aviation professionals who call the LAS Crashpad home.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(59,181,255,0.18)",
                  padding: "2rem",
                  position: "relative",
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,181,255,0.45)";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(59,181,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,181,255,0.18)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Stars */}
                <div
                  style={{
                    color: "#3BB5FF",
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                    letterSpacing: "0.1em",
                    textShadow: "0 0 8px rgba(59,181,255,0.7)",
                  }}
                >
                  ★★★★★
                </div>
                {/* Quote */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#F5EDD6",
                    opacity: 0.82,
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                {/* Name */}
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.15rem",
                    color: "#FF6B1A",
                    letterSpacing: "0.08em",
                    textShadow: "0 0 8px rgba(255,107,26,0.35)",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    color: "#F5EDD6",
                    opacity: 0.45,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: "0.2rem",
                  }}
                >
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer
        style={{
          backgroundColor: "#080808",
          borderTop: "1px solid rgba(255,107,26,0.25)",
          padding: "2rem 3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
          <img
            src={LOGO_MARK_URL}
            alt=""
            style={{
              width: "26px",
              height: "26px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 5px rgba(255,107,26,0.5))",
            }}
          />
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.12em",
              color: "#F5EDD6",
              opacity: 0.6,
            }}
          >
            THE LAS CRASHPAD
          </span>
        </div>

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: "#F5EDD6",
            opacity: 0.35,
            letterSpacing: "0.05em",
          }}
        >
          Las Vegas, Nevada · Aviation Crew Housing · © {new Date().getFullYear()}
        </div>

        <button
          onClick={scrollToRooms}
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(255,107,26,0.45)",
            color: "#FF6B1A",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.9rem",
            padding: "0.4rem 1.3rem",
            cursor: "pointer",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FF6B1A";
            e.currentTarget.style.backgroundColor = "rgba(255,107,26,0.08)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(255,107,26,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,107,26,0.45)";
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          CHECK AVAILABILITY
        </button>
      </footer>
    </div>
  );
}
