import React, { useEffect, useState } from "react";

const splashDuration = 2200; // ms
const slideDuration = 900; // ms

// Logo measurements
const D_WIDTH = 64; // px
const WORD_WIDTH = 518; // px
const IMAGE_WIDTH = 701; // px

export default function LogoSplash({ onFinish }: { onFinish: () => void }) {
  const [showRest, setShowRest] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const slideTimeout = setTimeout(() => setShowRest(true), 700);
    const fadeTimeout = setTimeout(() => setFadeOut(true), splashDuration);
    const finishTimeout = setTimeout(onFinish, splashDuration + 500);
    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        inset: 0,
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", height: 80 }}>
        {/* D with lightbulb (show always) */}
        <div
          style={{
            width: D_WIDTH,
            height: 80,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/lovable-uploads/deestrox-logo.svg"
            alt="Deestrox Logo D"
            style={{
              height: 80,
              width: IMAGE_WIDTH,
              objectFit: "cover",
              objectPosition: "left",
              filter: "drop-shadow(0 0 8px #fff8)"
            }}
          />
        </div>
        {/* Rest of the logo (slide out) */}
        <div
          style={{
            width: showRest ? WORD_WIDTH - D_WIDTH : 0,
            height: 80,
            overflow: "hidden",
            transition: `width ${slideDuration}ms cubic-bezier(.7,0,.3,1)`
          }}
        >
          <img
            src="/lovable-uploads/deestrox-logo.svg"
            alt="Deestrox Logo Rest"
            style={{
              height: 80,
              width: IMAGE_WIDTH,
              objectFit: "cover",
              objectPosition: `-${D_WIDTH}px 0` // shift left by D_WIDTH
            }}
          />
        </div>
      </div>
    </div>
  );
} 