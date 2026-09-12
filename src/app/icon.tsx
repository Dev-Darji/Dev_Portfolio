import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          border: "1.5px solid #38bdf8",
          color: "#38bdf8",
          fontSize: "14px",
          fontWeight: 900,
          fontFamily: "monospace",
          letterSpacing: "-1px",
        }}
      >
        D&D
      </div>
    ),
    {
      ...size,
    }
  );
}
