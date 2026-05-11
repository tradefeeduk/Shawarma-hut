import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shawarma Hut — London's most-talked-about shawarma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFF8EC",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background: "#FFD23F",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 460,
            height: 460,
            borderRadius: "9999px",
            background: "#E63946",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 800,
            color: "#0B0B0B",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "9999px",
              background: "#E63946",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            🔥
          </div>
          Shawarma Hut
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1,
            color: "#0B0B0B",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>London's most</div>
          <div>
            <span style={{ background: "#FFD23F", padding: "0 16px" }}>
              talked-about
            </span>
          </div>
          <div style={{ color: "#E63946" }}>shawarma.</div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#0B0B0B",
            opacity: 0.7,
            zIndex: 1,
          }}
        >
          🌯 Halal · Charcoal grilled · As seen on TikTok
        </div>
      </div>
    ),
    size,
  );
}
