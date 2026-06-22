/**
 * LAS CRASHPAD — Home Page
 * Design: Desert Electric / Neo-Vegas Brutalism
 * Colors: #FF6B1A (neon orange), #3BB5FF (electric blue), #FF2D78 (hot magenta), #F5EDD6 (cream), #0D0D0D (near-black)
 * Fonts: Bebas Neue (display), DM Sans (body)
 * Layout: Asymmetric split hero, neon sign left, content right
 * Rev4 Changes Applied:
 *   - Updated body copy sentence
 *   - Bullet benefits list with #3BB5FF markers and #FF6B1A text
 *   - Font size bumped to 1.3rem
 */

import { useEffect, useRef, useState } from "react";

const NEON_SIGN_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-neon-sign-F9YrjHscd2s56aB7XiuNzD.webp";

const LOGO_MARK_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-logo-mark-3N5yocRtzHyjwCbLo3ha6L.webp";

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

function StarBurst({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M30 2L33.5 26.5L58 30L33.5 33.5L30 58L26.5 33.5L2 30L26.5 26.5L30 2Z"
        fill="#FF6B1A"
        opacity="0.9"
      />
      <path
        d="M30 10L32.5 27.5L50 30L32.5 32.5L30 50L27.5 32.5L10 30L27.5 27.5L30 10Z"
        fill="#FF6B1A"
      />
      <circle cx="30" cy="30" r="4" fill="#F5EDD6" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToRooms = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh", color: "#F5EDD6" }}>
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(13,13,13,0.97)" : "#0D0D0D",
          borderBottom: scrolled ? "1px solid rgba(255,107,26,0.2)" : "1px solid transparent",
          transition: "background-color 200ms ease, border-color 200ms ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: "56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <img
            src={LOGO_MARK_URL}
            alt="LAS Crashpad logo"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              color: "#F5EDD6",
              textTransform: "uppercase",
            }}
          >
            THE LAS CRASHPAD
          </span>
        </div>

        <button
          onClick={scrollToRooms}
          style={{
            backgroundColor: "#FF2D78",
            color: "#F5EDD6",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.12em",
            fontSize: "0.95rem",
            padding: "0.45rem 1.4rem",
            border: "none",
            cursor: "pointer",
            transition: "background-color 150ms ease, transform 120ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff4d8f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF2D78")}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          BOOK NOW
        </button>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          display: "flex",
          minHeight: "100vh",
          paddingTop: "56px",
        }}
      >
        {/* Left panel — neon sign */}
        <div
          style={{
            width: "45%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.5rem 2rem 2.5rem 2.5rem",
            backgroundColor: "#0D0D0D",
          }}
        >
          <div
            style={{
              boxShadow:
                "0 0 30px rgba(255,107,26,0.35), 0 0 80px rgba(255,107,26,0.15), 0 0 160px rgba(255,107,26,0.08)",
              borderRadius: "2px",
              overflow: "hidden",
              maxWidth: "380px",
              width: "100%",
            }}
          >
            <img
              src={NEON_SIGN_URL}
              alt="Welcome to Fabulous The LAS Crashpad Las Vegas Nevada neon sign"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Right panel — content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem 3rem 3rem 2.5rem",
            minWidth: 0,
          }}
        >
          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "#F5EDD6",
              margin: 0,
              textShadow:
                "0 0 10px rgba(245,237,214,0.4), 0 0 30px rgba(245,237,214,0.1)",
            }}
          >
            BEST VALUE IN VEGAS
          </h1>

          {/* Subheadline with starburst */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "0.75rem",
            }}
          >
            <StarBurst style={{ width: "52px", height: "52px", flexShrink: 0 }} />
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "0.04em",
                color: "#FF6B1A",
                textShadow:
                  "0 0 10px rgba(255,107,26,0.7), 0 0 25px rgba(255,107,26,0.3)",
              }}
            >
              ONLY MINUTES
              <br />
              TO TERMINAL
            </div>
          </div>

          {/* ── Rev4: Updated body copy — larger font, stretches right ── */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.3rem",
              lineHeight: 1.6,
              color: "#F5EDD6",
              marginTop: "1.5rem",
              marginBottom: "0",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            We know you are busy professionals. Your time to shop for a Crashpad room is limited. Start with the best. Move into the best.
          </p>

          {/* ── Rev4: Bullet benefits list ── */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "1.5rem 0 0 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.35rem 2rem",
            }}
          >
            {BENEFITS.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "#3BB5FF",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                    textShadow: "0 0 8px rgba(59,181,255,0.7)",
                  }}
                >
                  •
                </span>
                <span style={{ color: "#FF6B1A", fontWeight: 500 }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* ── CTA buttons ── */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1.75rem",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-cta-primary"
              onClick={scrollToRooms}
            >
              CHECK AVAILABILITY
            </button>
            <button
              className="btn-cta-outline"
              onClick={scrollToTestimonials}
            >
              WHAT CREW MEMBERS ARE SAYING
            </button>
          </div>

          {/* ── Trust bar stats ── */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.6rem",
                    letterSpacing: "0.04em",
                    color: "#FF6B1A",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    color: "#F5EDD6",
                    opacity: 0.7,
                    marginTop: "0.2rem",
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
          padding: "0.5rem 0 2rem",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "#F5EDD6",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ opacity: 0.5 }}
        >
          <path
            d="M3 6L9 12L15 6"
            stroke="#F5EDD6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── ROOMS SECTION ── */}
      <section
        id="rooms"
        style={{
          backgroundColor: "#111111",
          padding: "5rem 3rem",
          borderTop: "1px solid rgba(255,107,26,0.15)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#F5EDD6",
              letterSpacing: "0.04em",
              marginBottom: "0.5rem",
            }}
          >
            CHOOSE YOUR ROOM
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#F5EDD6",
              opacity: 0.65,
              marginBottom: "3rem",
              maxWidth: "520px",
            }}
          >
            Every room is kept to a high standard of cleanliness and comfort. Pick the option that fits your schedule and budget.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {ROOMS.map((room) => (
              <div
                key={room.name}
                style={{
                  backgroundColor: "#0D0D0D",
                  border: "1px solid rgba(255,107,26,0.25)",
                  padding: "2rem",
                  position: "relative",
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,26,0.6)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255,107,26,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,26,0.25)";
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
                      color: "#0D0D0D",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      padding: "0.2rem 0.7rem",
                    }}
                  >
                    {room.tag}
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.8rem",
                    color: "#F5EDD6",
                    letterSpacing: "0.04em",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {room.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#F5EDD6",
                    opacity: 0.7,
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {room.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    color: "#FF6B1A",
                    letterSpacing: "0.04em",
                    marginBottom: "1.25rem",
                  }}
                >
                  {room.price}
                </div>
                <button
                  className="btn-cta-primary"
                  style={{ width: "100%", textAlign: "center" }}
                  onClick={() =>
                    window.open("mailto:info@lascraspad.com", "_blank")
                  }
                >
                  INQUIRE NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section
        id="testimonials"
        style={{
          backgroundColor: "#0D0D0D",
          padding: "5rem 3rem",
          borderTop: "1px solid rgba(255,107,26,0.15)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#F5EDD6",
              letterSpacing: "0.04em",
              marginBottom: "0.5rem",
            }}
          >
            WHAT CREW MEMBERS ARE SAYING
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#F5EDD6",
              opacity: 0.65,
              marginBottom: "3rem",
              maxWidth: "520px",
            }}
          >
            Real feedback from aviation professionals who call the LAS Crashpad home.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(59,181,255,0.2)",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    color: "#3BB5FF",
                    fontSize: "1.5rem",
                    marginBottom: "0.75rem",
                    textShadow: "0 0 8px rgba(59,181,255,0.6)",
                  }}
                >
                  ★★★★★
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#F5EDD6",
                    opacity: 0.85,
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    color: "#FF6B1A",
                    letterSpacing: "0.06em",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#F5EDD6",
                    opacity: 0.5,
                    letterSpacing: "0.1em",
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

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: "#080808",
          borderTop: "1px solid rgba(255,107,26,0.2)",
          padding: "2.5rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <img
            src={LOGO_MARK_URL}
            alt="LAS Crashpad"
            style={{ width: "28px", height: "28px", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              color: "#F5EDD6",
              opacity: 0.7,
            }}
          >
            THE LAS CRASHPAD
          </span>
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "#F5EDD6",
            opacity: 0.4,
          }}
        >
          Las Vegas, Nevada · Aviation Crew Housing · © {new Date().getFullYear()}
        </div>
        <button
          onClick={scrollToRooms}
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(255,107,26,0.4)",
            color: "#FF6B1A",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.9rem",
            padding: "0.4rem 1.2rem",
            cursor: "pointer",
            transition: "border-color 150ms ease, background-color 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FF6B1A";
            e.currentTarget.style.backgroundColor = "rgba(255,107,26,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,107,26,0.4)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          CHECK AVAILABILITY
        </button>
      </footer>
    </div>
  );
}
