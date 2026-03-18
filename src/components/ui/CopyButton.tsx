"use client";

import { useState } from "react";

function CopyButton({
  text,
  variant = "light",
}: {
  text: string;
  variant?: "light" | "dark";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = variant === "dark";

  const baseStyle = {
    border: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "var(--color-cream-dark)"}`,
    borderRadius: "4px",
    cursor: "pointer",
    letterSpacing: "0.05em",
  };

  const colorStyle = copied
    ? {
        color: isDark ? "#000" : "var(--color-text-primary)",
        backgroundColor: isDark ? "rgba(255,255,255,0.9)" : "var(--color-cream-dark)",
      }
    : {
        color: isDark ? "rgba(255,255,255,0.8)" : "var(--color-text-secondary)",
        backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "transparent",
      };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 transition-all duration-200"
      style={{ ...baseStyle, ...colorStyle }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

export default CopyButton;