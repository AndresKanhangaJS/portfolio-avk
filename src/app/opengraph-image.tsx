import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

export const alt = "André Vasconcelos Kanhanga — Engenheiro de Software Full-Stack";
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
          background: "#080b14",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Barra de acento no topo */}
        <div style={{ display: "flex", width: "100%", height: 8 }}>
          <div style={{ flex: 1, background: "#06b6d4" }} />
          <div style={{ flex: 1, background: "#3b82f6" }} />
          <div style={{ flex: 1, background: "#cc0000" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#06b6d4",
              fontSize: 30,
              fontFamily: "monospace",
              letterSpacing: 2,
            }}
          >
            &lt;AVK/&gt;
          </div>

          <div
            style={{
              display: "flex",
              color: "#f1f5f9",
              fontSize: 68,
              fontWeight: 700,
              marginTop: 24,
              lineHeight: 1.1,
            }}
          >
            {personal.name}
          </div>

          <div
            style={{
              display: "flex",
              color: "#94a3b8",
              fontSize: 36,
              marginTop: 20,
            }}
          >
            {personal.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#94a3b8",
            fontSize: 24,
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>Luanda, Angola</div>
          <div style={{ display: "flex", color: "#f59e0b" }}>
            5+ anos · Laravel · React · Next.js
          </div>
        </div>
      </div>
    ),
    size,
  );
}
