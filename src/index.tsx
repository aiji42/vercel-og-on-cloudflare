import React from "react";
import { ImageResponse } from "@vercel/og";
import { loadGoogleFont } from "./fonts";

export default {
  async fetch(request: Request): Promise<ImageResponse> {
    const params = new URLSearchParams(new URL(request.url).search);
    const title = params.get("t") || "hello world";

    const font = await loadGoogleFont({
      family: "M PLUS 1p",
      weight: 400,
    });

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
            fontFamily: "MPLUS1p",
            fontSize: 80,
            letterSpacing: -2,
            fontWeight: 400,
            textAlign: "center",
            whiteSpace: "pre",
          }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title.replace(/__/g, "\n")}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "MPLUS1p",
            data: font,
            weight: 400,
            style: "normal",
          },
        ],
        emoji: "twemoji",
      }
    );
  },
};
