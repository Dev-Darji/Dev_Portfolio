import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0f19 0%, #1e1b4b 50%, #1e3a8a 100%)",
          borderRadius: "40px",
          border: "4px solid #38bdf8",
          color: "#ffffff",
          fontSize: "72px",
          fontWeight: 900,
          fontFamily: "monospace",
          letterSpacing: "-3px",
        }}
      >
        <span style={{ color: "#38bdf8" }}>D</span>
        <span style={{ color: "#818cf8", fontSize: "56px", margin: "0 4px" }}>&</span>
        <span style={{ color: "#38bdf8" }}>D</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
