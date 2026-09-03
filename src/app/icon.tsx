import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
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
          background: "#111118",
          borderRadius: "14px",
          border: "2px solid #8B5CF6",
          color: "#FFFFFF",
          fontSize: "24px",
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        <span>M</span>

        <span
          style={{
            color: "#A78BFA",
          }}
        >
          A
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}