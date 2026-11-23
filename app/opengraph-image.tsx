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
          background:
            "linear-gradient(135deg, #020D0D 0%, #051F20 35%, #0B2B26 70%, #163832 100%)",
          color: "#F4FBF5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
            color: "#8EB69B",
            fontWeight: 600,
          }}
        >
          <span>S.C.W Electrical, Pinnaduwa, Galle · 070 215 6828</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.08, color: "#F4FBF5" }}>
            Camping Gear Hub — Galle
          </div>
          <div style={{ fontSize: "32px", color: "#8EB69B" }}>
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
              background: "#DAF1DE",
              color: "#020D0D",
              padding: "12px 24px",
              borderRadius: "999px",
            }}
          >
            Tents from LKR 900
          </span>
          <span
            style={{
              background: "rgba(35, 83, 71, 0.55)",
              color: "#DAF1DE",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(142, 182, 155, 0.45)",
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
