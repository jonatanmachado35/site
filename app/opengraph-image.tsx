import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Think World — Agência IA First";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "hsl(250, 60%, 10%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow top-left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 0% 0%, hsl(250, 60%, 30%, 0.4) 0%, transparent 70%)",
          }}
        />
        {/* Glow bottom-right (teal) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 100% 100%, hsl(172, 85%, 45%, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              color: "hsl(172, 85%, 45%)",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            THINK WORLD — AGÊNCIA IA FIRST
          </span>

          {/* Headline */}
          <h1
            style={{
              color: "white",
              fontSize: "88px",
              fontWeight: 900,
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            Sua empresa opera com{" "}
            <span style={{ color: "hsl(172, 85%, 45%)" }}>inteligência.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "28px",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Software personalizado e automações com IA — Florianópolis, SC
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>
            thinkworld.com.br
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
