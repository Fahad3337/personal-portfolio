import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 10% -10%, rgba(34,197,94,0.35), transparent 55%), radial-gradient(circle at 100% 10%, rgba(16,185,129,0.22), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(34,197,94,0.35)",
            background: "rgba(34,197,94,0.12)",
            color: "#86efac",
            fontSize: 22,
            marginBottom: 36,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#22c55e" }} />
          {profile.location}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            color: "#f4f4f5",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#a1a1aa",
            marginTop: 20,
          }}
        >
          {profile.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
