/**
 * LAS CRASHPAD — Home Page
 * Design: Desert Electric / Neo-Vegas Brutalism
 * Reference: Original design screenshot — classic Welcome to Las Vegas sign shield shape
 *            adapted with City of Las Vegas modern neon palette
 * Colors: #FF6B1A (neon orange), #3BB5FF (electric blue), #FF2D78 (hot magenta),
 *         #F5EDD6 (cream/warm white), #0A0A0A (near-black bg)
 * Fonts: Bebas Neue (display/headlines), DM Sans (body)
 * Rev4: Updated body copy, 8-item bullet list (blue markers, orange text), 1.3rem body font
 */

import { useEffect, useRef, useState } from "react";

// ── Asset URLs (webdev lifecycle-persistent) ──────────────────────────────────
const NEON_SIGN_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-sign-rev2-6HX5JAsxZVgPPznVnx4qJw.webp";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663735722758/9mdJhhBhuJpzatBnjm7SYm/las-crashpad-logo-v3-bGdVrsRMxWRPNqra85PcJv.webp";

// ── Rev4: 8 benefit bullets ───────────────────────────────────────────────────
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

// ── Inline starburst SVG — detailed neon tube style matching the sign's starburst ────────────────
// Each tip is ONE consistent color with a bright core fading to glow at the tip.
// 8 points: alternating electric blue (#3BB5FF), deep orange (#FF6B1A), light orange (#FFB347)
// Neon tube effect: bright filled core polygon + slightly wider translucent outer glow polygon
function StarburstIcon({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter:
          "drop-shadow(0 0 6px #3BB5FF) drop-shadow(0 0 12px rgba(255,107,26,1)) drop-shadow(0 0 28px rgba(255,107,26,0.55)) drop-shadow(0 0 5px rgba(59,181,255,0.8))",
        flexShrink: 0,
      }}
    >
      {/* ── POINT 1: TOP — electric blue ── */}
      {/* outer glow */}
      <polygon points="50,50 46,5 54,5" fill="#3BB5FF" opacity="0.35" />
      {/* core tube */}
      <polygon points="50,50 48,8 52,8" fill="#3BB5FF" />
      {/* bright highlight center line */}
      <polygon points="50,50 49.3,6 50.7,6" fill="#B8E8FF" opacity="0.9" />

      {/* ── POINT 2: TOP-RIGHT — deep orange ── */}
      <polygon points="50,50 83,17 87,21" fill="#FF6B1A" opacity="0.35" />
      <polygon points="50,50 81,20 84,23" fill="#FF6B1A" />
      <polygon points="50,50 82,21 83,22" fill="#FFD0A0" opacity="0.85" />

      {/* ── POINT 3: RIGHT — light orange ── */}
      <polygon points="50,50 95,46 95,54" fill="#FFB347" opacity="0.35" />
      <polygon points="50,50 92,48 92,52" fill="#FFB347" />
      <polygon points="50,50 93,49.3 93,50.7" fill="#FFE5B0" opacity="0.85" />

      {/* ── POINT 4: BOTTOM-RIGHT — electric blue ── */}
      <polygon points="50,50 83,83 79,87" fill="#3BB5FF" opacity="0.35" />
      <polygon points="50,50 81,80 78,83" fill="#3BB5FF" />
      <polygon points="50,50 80,81 79,82" fill="#B8E8FF" opacity="0.85" />

      {/* ── POINT 5: BOTTOM — deep orange ── */}
      <polygon points="50,50 46,95 54,95" fill="#FF6B1A" opacity="0.35" />
      <polygon points="50,50 48,92 52,92" fill="#E85500" />
      <polygon points="50,50 49.3,94 50.7,94" fill="#FFD0A0" opacity="0.85" />

      {/* ── POINT 6: BOTTOM-LEFT — light orange ── */}
      <polygon points="50,50 17,83 13,79" fill="#FFB347" opacity="0.35" />
      <polygon points="50,50 19,80 22,77" fill="#FFB347" />
      <polygon points="50,50 20,79 21,78" fill="#FFE5B0" opacity="0.85" />

      {/* ── POINT 7: LEFT — electric blue ── */}
      <polygon points="50,50 5,46 5,54" fill="#3BB5FF" opacity="0.35" />
      <polygon points="50,50 8,48 8,52" fill="#3BB5FF" />
      <polygon points="50,50 7,49.3 7,50.7" fill="#B8E8FF" opacity="0.85" />

      {/* ── POINT 8: TOP-LEFT — deep orange ── */}
      <polygon points="50,50 17,17 21,13" fill="#FF6B1A" opacity="0.35" />
      <polygon points="50,50 20,20 23,17" fill="#FF6B1A" />
      <polygon points="50,50 21,21 22,20" fill="#FFD0A0" opacity="0.85" />

      {/* ── CENTER GLOW — white-hot core ── */}
      <circle cx="50" cy="50" r="9" fill="#FF6B1A" opacity="0.9" />
      <circle cx="50" cy="50" r="6" fill="#FFD580" />
      <circle cx="50" cy="50" r="3.5" fill="#FFFBE8" />
      <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
      {/* ═══════════════════════════════════════════════════════════
          NAV
      ═══════════════════════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.75rem",
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.97)"
            : "rgba(10,10,10,0.88)",
          borderBottom: "1px solid rgba(255,107,26,0.18)",
          backdropFilter: "blur(14px)",
          transition: "background-color 250ms ease, border-color 250ms ease",
        }}
      >
        {/* Logo mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <img
            src={LOGO_URL}
            alt="The LAS Crashpad logo"
            style={{
              width: "32px",
              height: "32px",
              objectFit: "contain",
              filter:
                "drop-shadow(0 0 5px rgba(255,107,26,0.7)) drop-shadow(0 0 10px rgba(255,107,26,0.3))",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              color: "#F5EDD6",
              textTransform: "uppercase",
            }}
          >
            THE LAS CRASHPAD
          </span>
        </div>

        {/* BOOK NOW button — orange-to-pink gradient */}
        <button
          onClick={scrollToRooms}
          style={{
            background: "linear-gradient(90deg, #FF6B1A 0%, #FF2D78 100%)",
            color: "#fff",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.12em",
            fontSize: "1rem",
            padding: "0.38rem 1.6rem",
            border: "none",
            cursor: "pointer",
            boxShadow:
              "0 0 14px rgba(255,107,26,0.5), 0 0 6px rgba(255,45,120,0.4)",
            transition: "box-shadow 150ms ease, transform 120ms ease, filter 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(1.12)";
            e.currentTarget.style.boxShadow =
              "0 0 26px rgba(255,107,26,0.7), 0 0 12px rgba(255,45,120,0.55)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "brightness(1)";
            e.currentTarget.style.boxShadow =
              "0 0 14px rgba(255,107,26,0.5), 0 0 6px rgba(255,45,120,0.4)";
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          BOOK NOW
        </button>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          HERO — asymmetric split matching original proportions
          Left ~45% | Right ~55%
      ═══════════════════════════════════════════════════════════ */}
      <section
        style={{
          display: "flex",
          minHeight: "100vh",
          paddingTop: "56px",
        }}
      >
        {/* ── LEFT PANEL: neon sign ─────────────────────────────── */}
        <div
          style={{
            width: "45%",
            flexShrink: 0,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.5rem 1.5rem 2.5rem 2.5rem",
            /* Warm radial glow emanating from the sign */
            background:
              "radial-gradient(ellipse 75% 65% at 50% 52%, rgba(160,60,5,0.22) 0%, rgba(10,10,10,0) 68%), #0A0A0A",
          }}
        >
          {/* Right-edge amber divider line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "1px",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,107,26,0.55) 15%, rgba(255,140,40,0.85) 50%, rgba(255,107,26,0.55) 85%, transparent 100%)",
            }}
          />

          {/* Sign wrapper — multi-layer amber glow matching original */}
          <div style={{ position: "relative", width: "100%", maxWidth: "380px" }}>
            {/* Wide atmospheric haze */}
            <div
              style={{
                position: "absolute",
                inset: "-50px",
                background:
                  "radial-gradient(ellipse at center, rgba(255,120,20,0.18) 0%, rgba(255,80,0,0.07) 45%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            {/* Mid-range glow box */}
            <div
              style={{
                position: "absolute",
                inset: "-10px",
                boxShadow:
                  "0 0 35px rgba(255,107,26,0.5), 0 0 70px rgba(255,107,26,0.22), 0 0 130px rgba(255,107,26,0.08)",
                pointerEvents: "none",
              }}
            />
            {/* The sign — floating on pure black, no poles */}
            <img
              src={NEON_SIGN_URL}
              alt="Welcome to Fabulous — The LAS Crashpad, Las Vegas Nevada neon sign"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
                filter:
                  "drop-shadow(0 0 12px rgba(255,107,26,0.7)) drop-shadow(0 0 30px rgba(255,107,26,0.3)) brightness(1.05) contrast(1.03) saturate(1.08)",
              }}
            />
          </div>
        </div>

        {/* ── RIGHT PANEL: headline + content ──────────────────── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem 3rem 3rem 2.75rem",
            minWidth: 0,
            background:
              "linear-gradient(120deg, rgba(255,107,26,0.025) 0%, transparent 55%), #0D0D0D",
          }}
        >
          {/* MAIN HEADLINE — Rev2: larger to fill full right column width */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4.2rem, 7.8vw, 7.2rem)",
              lineHeight: 0.93,
              letterSpacing: "0.025em",
              color: "#F5EDD6",
              margin: "0 0 0.75rem 0",
              whiteSpace: "nowrap",
              textShadow:
                "0 0 1px rgba(245,237,214,1), 0 0 10px rgba(245,237,214,0.35), 0 0 30px rgba(245,237,214,0.12), 0 2px 0 rgba(0,0,0,0.9)",
            }}
          >
            BEST VALUE IN VEGAS
          </h1>

          {/* SUBHEADLINE — starburst LEFT, stacked text RIGHT-JUSTIFIED under VEGAS */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.6rem",
              justifyContent: "flex-start",
            }}
          >
            {/* Colorful starburst — fills the full height of the two-line subhead block */}
            <StarburstIcon size={96} />
            {/* Stacked subhead — Rev2: doubled font size, right-justified under VEGAS */}
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 5.2vw, 4.6rem)",
                lineHeight: 1.0,
                letterSpacing: "0.06em",
                color: "#FF6B1A",
                textAlign: "right",
                marginLeft: "auto",
                textShadow:
                  "0 0 8px rgba(255,107,26,0.95), 0 0 20px rgba(255,107,26,0.5), 0 0 40px rgba(255,107,26,0.2)",
              }}
            >
              ONLY MINUTES
              <br />
              TO TERMINAL
            </div>
          </div>

          {/* Rev4: BODY COPY — 1.3rem, cream white */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.3rem",
              lineHeight: 1.6,
              color: "#F5EDD6",
              margin: "0 0 1.5rem 0",
              maxWidth: "100%",
              opacity: 0.93,
            }}
          >
            We know you are busy professionals. Your time to shop for a Crashpad
            room is limited. Start with the best. Move into the best.
          </p>

          {/* Rev4: BULLET BENEFITS LIST — blue markers, orange text */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.75rem 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem 2.5rem",
              alignItems: "start",
            }}
          >
            {BENEFITS.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
              fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.45,
                }}
              >
                <span
                  style={{
                    color: "#3BB5FF",
                    fontSize: "1.2rem",
                    lineHeight: 1.4,
                    flexShrink: 0,
                    textShadow:
                      "0 0 6px rgba(59,181,255,0.95), 0 0 14px rgba(59,181,255,0.45)",
                  }}
                >
                  •
                </span>
                <span
                  style={{
                    color: "#FF6B1A",
                    fontWeight: 500,
                    textShadow: "0 0 8px rgba(255,107,26,0.25)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTONS — side by side, no wrap */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "nowrap",
              marginBottom: "2.25rem",
              alignItems: "center",
            }}
          >
            <button
              onClick={scrollToRooms}
              style={{
                background: "linear-gradient(90deg, #FF6B1A 0%, #FF2D78 100%)",
                color: "#fff",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.1em",
                fontSize: "1.05rem",
                padding: "0.82rem 2.1rem",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow:
                  "0 0 18px rgba(255,107,26,0.55), 0 0 8px rgba(255,45,120,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
                transition:
                  "box-shadow 150ms ease, transform 120ms ease, filter 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.12)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255,107,26,0.72), 0 0 14px rgba(255,45,120,0.5), inset 0 1px 0 rgba(255,255,255,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(255,107,26,0.55), 0 0 8px rgba(255,45,120,0.35), inset 0 1px 0 rgba(255,255,255,0.18)";
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.97)")
              }
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              CHECK AVAILABILITY
            </button>

            <button
              onClick={scrollToTestimonials}
              style={{
                backgroundColor: "transparent",
                color: "#F5EDD6",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.1em",
                fontSize: "1.05rem",
                padding: "0.82rem 2.1rem",
                border: "2px solid #FF6B1A",
                cursor: "pointer",
                boxShadow: "0 0 8px rgba(255,107,26,0.12)",
                transition: "all 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,107,26,0.1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255,107,26,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.boxShadow =
                  "0 0 8px rgba(255,107,26,0.12)";
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.97)")
              }
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              WHAT CREW MEMBERS ARE SAYING
            </button>
          </div>

          {/* TRUST BAR STATS */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              paddingTop: "1.75rem",
              borderTop: "1px solid rgba(255,107,26,0.22)",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.65rem",
                    letterSpacing: "0.04em",
                    color: "#FF6B1A",
                    lineHeight: 1,
                    textShadow:
                      "0 0 10px rgba(255,107,26,0.65), 0 0 22px rgba(255,107,26,0.22)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.67rem",
                    letterSpacing: "0.15em",
                    color: "#F5EDD6",
                    opacity: 0.5,
                    marginTop: "0.22rem",
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

      {/* SCROLL INDICATOR */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.6rem 0 2rem",
          gap: "0.3rem",
          backgroundColor: "#0D0D0D",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            color: "#F5EDD6",
            opacity: 0.35,
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          style={{ opacity: 0.3 }}
        >
          <path
            d="M2 5L8 11L14 5"
            stroke="#F5EDD6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ROOMS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="rooms"
        style={{
          backgroundColor: "#111111",
          padding: "5rem 3.5rem",
          borderTop: "1px solid rgba(255,107,26,0.2)",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.75rem" }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
                color: "#F5EDD6",
                letterSpacing: "0.03em",
                margin: "0 0 0.5rem",
                textShadow: "0 0 1px rgba(245,237,214,0.7)",
              }}
            >
              CHOOSE YOUR ROOM
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#F5EDD6",
                opacity: 0.58,
                maxWidth: "480px",
                lineHeight: 1.7,
              }}
            >
              Every room is kept to a high standard of cleanliness and comfort.
              Pick the option that fits your schedule and budget.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {ROOMS.map((room) => (
              <div
                key={room.name}
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,107,26,0.2)",
                  padding: "1.9rem",
                  position: "relative",
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,26,0.55)";
                  e.currentTarget.style.boxShadow =
                    "0 0 28px rgba(255,107,26,0.1), inset 0 0 28px rgba(255,107,26,0.03)";
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
                      right: "1.4rem",
                      backgroundColor: "#FF6B1A",
                      color: "#0A0A0A",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.73rem",
                      letterSpacing: "0.13em",
                      padding: "0.18rem 0.75rem",
                      boxShadow: "0 0 10px rgba(255,107,26,0.5)",
                    }}
                  >
                    {room.tag}
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.9rem",
                    color: "#F5EDD6",
                    letterSpacing: "0.04em",
                    margin: "0 0 0.7rem",
                    textShadow: "0 0 1px rgba(245,237,214,0.5)",
                  }}
                >
                  {room.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#F5EDD6",
                    opacity: 0.62,
                    lineHeight: 1.72,
                    marginBottom: "1.4rem",
                  }}
                >
                  {room.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.45rem",
                    color: "#FF6B1A",
                    letterSpacing: "0.04em",
                    marginBottom: "1.4rem",
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
                    padding: "0.78rem",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    boxShadow: "0 0 10px rgba(255,107,26,0.35)",
                    transition:
                      "background-color 150ms ease, box-shadow 150ms ease, transform 120ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff7c30";
                    e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(255,107,26,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF6B1A";
                    e.currentTarget.style.boxShadow =
                      "0 0 10px rgba(255,107,26,0.35)";
                  }}
                  onMouseDown={(e) =>
                    (e.currentTarget.style.transform = "scale(0.97)")
                  }
                  onMouseUp={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
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

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{
          backgroundColor: "#0D0D0D",
          padding: "5rem 3.5rem",
          borderTop: "1px solid rgba(59,181,255,0.15)",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.75rem" }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
                color: "#F5EDD6",
                letterSpacing: "0.03em",
                margin: "0 0 0.5rem",
                textShadow: "0 0 1px rgba(245,237,214,0.7)",
              }}
            >
              WHAT CREW MEMBERS ARE SAYING
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#F5EDD6",
                opacity: 0.58,
                maxWidth: "480px",
                lineHeight: 1.7,
              }}
            >
              Real feedback from aviation professionals who call the LAS
              Crashpad home.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(59,181,255,0.18)",
                  padding: "1.9rem",
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,181,255,0.45)";
                  e.currentTarget.style.boxShadow =
                    "0 0 22px rgba(59,181,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,181,255,0.18)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    color: "#3BB5FF",
                    fontSize: "1.05rem",
                    marginBottom: "0.9rem",
                    letterSpacing: "0.1em",
                    textShadow: "0 0 8px rgba(59,181,255,0.7)",
                  }}
                >
                  ★★★★★
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.93rem",
                    color: "#F5EDD6",
                    opacity: 0.82,
                    lineHeight: 1.78,
                    marginBottom: "1.4rem",
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
                    letterSpacing: "0.08em",
                    textShadow: "0 0 8px rgba(255,107,26,0.35)",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "#F5EDD6",
                    opacity: 0.42,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    marginTop: "0.18rem",
                  }}
                >
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════ */}
      <footer
        style={{
          backgroundColor: "#080808",
          borderTop: "1px solid rgba(255,107,26,0.22)",
          padding: "1.75rem 3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
          <img
            src={LOGO_URL}
            alt=""
            style={{
              width: "26px",
              height: "26px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 4px rgba(255,107,26,0.5))",
            }}
          />
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.95rem",
              letterSpacing: "0.13em",
              color: "#F5EDD6",
              opacity: 0.55,
            }}
          >
            THE LAS CRASHPAD
          </span>
        </div>

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.76rem",
            color: "#F5EDD6",
            opacity: 0.32,
            letterSpacing: "0.05em",
          }}
        >
          Las Vegas, Nevada · Aviation Crew Housing · ©{" "}
          {new Date().getFullYear()}
        </div>

        <button
          onClick={scrollToRooms}
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(255,107,26,0.42)",
            color: "#FF6B1A",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.88rem",
            padding: "0.38rem 1.25rem",
            cursor: "pointer",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FF6B1A";
            e.currentTarget.style.backgroundColor = "rgba(255,107,26,0.08)";
            e.currentTarget.style.boxShadow = "0 0 10px rgba(255,107,26,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,107,26,0.42)";
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
