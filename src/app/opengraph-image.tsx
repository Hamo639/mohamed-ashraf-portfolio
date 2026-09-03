import { ImageResponse } from "next/og";

export const alt =
  "Mohamed Ashraf - Frontend Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#111118",
          color: "#F5F5F7",
          padding: "70px 80px",
        }}
      >
        {/* Purple Glow */}

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background:
              "rgba(139, 92, 246, 0.18)",
            filter: "blur(100px)",
            right: "-100px",
            top: "-100px",
          }}
        />

        {/* Grid */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Top */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <span>Mohamed</span>

              <span
                style={{
                  color: "#A78BFA",
                }}
              >
                Ashraf
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
                color: "#A7A7B3",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  background: "#8B5CF6",
                }}
              />

              Available for opportunities
            </div>
          </div>

          {/* Main */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                fontSize: "20px",
                textTransform: "uppercase",
                letterSpacing: "6px",
                color: "#8B5CF6",
              }}
            >
              FRONTEND DEVELOPER
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "76px",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-4px",
              }}
            >
              <span>I build digital products</span>

              <span
                style={{
                  color: "#A7A7B3",
                }}
              >
                that work.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "32px",
                maxWidth: "800px",
                fontSize: "24px",
                lineHeight: 1.5,
                color: "#A7A7B3",
              }}
            >
              React • Next.js • TypeScript • Supabase
            </div>
          </div>

          {/* Bottom */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop:
                "1px solid rgba(255,255,255,0.1)",
              paddingTop: "24px",
              fontSize: "18px",
              color: "#71717A",
            }}
          >
            <span>Alexandria, Egypt</span>

            <span>Frontend • SaaS • Web Products</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}