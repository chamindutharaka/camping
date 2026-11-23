import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Camping Gear Hub — Galle | Gear up and Camp on";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #111613 0%, #0A5C36 75%, #0D7043 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
            color: "#D1E7DA",
            fontWeight: 600,
          }}
        >
          <span>S.C.W Electrical, Pinnaduwa, Galle · 070 215 6828</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.08 }}>
            Camping Gear Hub — Galle
          </div>
          <div style={{ fontSize: "32px", color: "#D1E7DA" }}>
            Sleep under the stars. We bring the gear.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          <span
            style={{
              background: "#ffffff",
              color: "#111613",
              padding: "12px 24px",
              borderRadius: "999px",
            }}
          >
            Tents from LKR 900
          </span>
          <span
            style={{
              background: "rgba(255, 255, 255, 0.14)",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.35)",
            }}
          >
            Extra Days 50% Off · Free Rain Cover & Ground Sheet
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
